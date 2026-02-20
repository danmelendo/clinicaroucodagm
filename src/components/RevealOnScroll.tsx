import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  from?: "up" | "left" | "right";
};

const RevealOnScroll = ({
  children,
  className,
  delayMs = 0,
  from = "up",
}: RevealOnScrollProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const hiddenTransformClass =
    from === "left"
      ? "-translate-x-8"
      : from === "right"
        ? "translate-x-8"
        : "translate-y-6";

  const visibleTransformClass = "translate-x-0 translate-y-0";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={cn(
        "opacity-0 transition-all duration-700 ease-out will-change-transform",
        hiddenTransformClass,
        isVisible && cn("opacity-100", visibleTransformClass),
        className,
      )}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
