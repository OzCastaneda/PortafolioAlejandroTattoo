import { lazy, Suspense } from "react";
import { Styles } from "@/features/portfolio/components";
import { WorksSkeleton } from "@/features/portfolio/components/works-skeleton";
import { useLazyLoad } from "@/shared/hooks/use-lazy-load";

const LazyWorks = lazy(() =>
  import("@/features/portfolio/components/Works").then((m) => ({ default: m.Works })),
);

export function PortfolioSection() {
  const { ref, isVisible } = useLazyLoad();

  return (
    <>
      <Styles />
      <div ref={ref}>
        {isVisible ? (
          <Suspense fallback={<WorksSkeleton />}>
            <LazyWorks />
          </Suspense>
        ) : (
          <WorksSkeleton />
        )}
      </div>
    </>
  );
}
