"use client";

import gsap from "gsap";
import {
  Children,
  cloneElement,
  forwardRef,
  type HTMLAttributes,
  isValidElement,
  type MouseEvent,
  type ReactElement,
  type ReactNode,
  type Ref,
  useEffect,
  useMemo,
  useRef,
} from "react";

export interface CardSwapProps {
  width?: number | string;
  height?: number | string;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  onCardClick?: (idx: number) => void;
  skewAmount?: number;
  easing?: "linear" | "elastic";
  children: ReactNode;
}

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  customClass?: string;
}

type CardElement = ReactElement<
  CardProps & { ref?: Ref<HTMLDivElement | null> }
>;

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { customClass, className, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      {...rest}
      className={`absolute top-1/2 left-1/2 rounded-xl border border-white bg-black [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] ${customClass ?? ""} ${className ?? ""}`.trim()}
    />
  );
});

interface Slot {
  x: number;
  y: number;
  z: number;
  zIndex: number;
}

const easingConfig = {
  elastic: {
    ease: "elastic.out(0.6,0.9)",
    durDrop: 2,
    durMove: 2,
    durReturn: 2,
    promoteOverlap: 0.9,
    returnDelay: 0.05,
  },
  linear: {
    ease: "power1.inOut",
    durDrop: 0.8,
    durMove: 0.8,
    durReturn: 0.8,
    promoteOverlap: 0.45,
    returnDelay: 0.2,
  },
} as const;

function makeSlot(
  i: number,
  distX: number,
  distY: number,
  total: number,
): Slot {
  return {
    x: i * distX,
    y: -i * distY,
    z: -i * distX * 1.5,
    zIndex: total - i,
  };
}

function placeNow(el: HTMLElement, slot: Slot, skew: number) {
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });
}

export default function CardSwap({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = "elastic",
  children,
}: CardSwapProps) {
  "use no memo";

  const childArr = useMemo(
    () => Children.toArray(children).filter(isValidElement) as CardElement[],
    [children],
  );
  const childCount = childArr.length;

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const order = useRef<number[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<number>(0);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const config = easingConfig[easing];
    const total = childCount;
    const elements = cardRefs.current;

    order.current = Array.from({ length: total }, (_, i) => i);

    for (let i = 0; i < total; i++) {
      const el = elements[i];
      if (el) {
        placeNow(
          el,
          makeSlot(i, cardDistance, verticalDistance, total),
          skewAmount,
        );
      }
    }

    const swap = () => {
      if (order.current.length < 2) {
        return;
      }

      const [front, ...rest] = order.current;
      const elFront = elements[front];
      if (elFront == null) {
        return;
      }

      const tl = gsap.timeline();
      tlRef.current = tl;

      tl.to(elFront, {
        y: "+=500",
        duration: config.durDrop,
        ease: config.ease,
      });

      tl.addLabel("promote", `-=${config.durDrop * config.promoteOverlap}`);
      rest.forEach((idx, i) => {
        const el = elements[idx];
        if (el == null) {
          return;
        }
        const slot = makeSlot(i, cardDistance, verticalDistance, total);
        tl.set(el, { zIndex: slot.zIndex }, "promote");
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease,
          },
          `promote+=${i * 0.15}`,
        );
      });

      const backSlot = makeSlot(
        total - 1,
        cardDistance,
        verticalDistance,
        total,
      );
      tl.addLabel("return", `promote+=${config.durMove * config.returnDelay}`);
      tl.call(
        () => {
          gsap.set(elFront, { zIndex: backSlot.zIndex });
        },
        undefined,
        "return",
      );
      tl.to(
        elFront,
        {
          x: backSlot.x,
          y: backSlot.y,
          z: backSlot.z,
          duration: config.durReturn,
          ease: config.ease,
        },
        "return",
      );

      tl.call(() => {
        order.current = [...rest, front];
      });
    };

    swap();
    intervalRef.current = window.setInterval(swap, delay);

    const node = container.current;
    if (pauseOnHover && node) {
      const pause = () => {
        tlRef.current?.pause();
        clearInterval(intervalRef.current);
      };
      const resume = () => {
        tlRef.current?.play();
        intervalRef.current = window.setInterval(swap, delay);
      };
      node.addEventListener("mouseenter", pause);
      node.addEventListener("mouseleave", resume);
      return () => {
        node.removeEventListener("mouseenter", pause);
        node.removeEventListener("mouseleave", resume);
        clearInterval(intervalRef.current);
        tlRef.current?.kill();
      };
    }

    return () => {
      clearInterval(intervalRef.current);
      tlRef.current?.kill();
    };
  }, [
    cardDistance,
    childCount,
    delay,
    easing,
    pauseOnHover,
    skewAmount,
    verticalDistance,
  ]);

  const rendered = childArr.map((child, i) =>
    cloneElement(child, {
      key: child.key ?? i,
      ref: (node: HTMLDivElement | null) => {
        cardRefs.current[i] = node;
      },
      style: { width, height, ...(child.props.style ?? {}) },
      onClick: (event: MouseEvent<HTMLDivElement>) => {
        child.props.onClick?.(event);
        onCardClick?.(i);
      },
    }),
  );

  return (
    <div
      ref={container}
      className="absolute right-0 bottom-0 origin-bottom-right translate-x-[5%] translate-y-[20%] transform overflow-visible perspective-[900px] max-[768px]:right-1/2 max-[768px]:translate-x-1/2 max-[768px]:translate-y-0 max-[768px]:scale-[0.75] max-[480px]:scale-[0.58]"
      style={{ width, height }}
    >
      {rendered}
    </div>
  );
}
