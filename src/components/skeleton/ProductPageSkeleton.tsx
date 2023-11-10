import { Skeleton } from "../ui/skeleton";

export default function ProductPageSkeleton() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen max-w-screen-lg m-auto md:pt-20 pt-8 p-4">
      <div className="w-full flex md:flex-row flex-col gap-20  items-center justify-center mb-8">
        <div className="w-full">
          <Skeleton className="h-[300px] w-full " />
        </div>

        <div className="flex flex-col w-full">
          <Skeleton className="h-10 w-full mb-4" />
          <Skeleton className="h-12 w-full mb-8" />

          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-8" />

          <Skeleton className="h-12 w-full" />
        </div>
      </div>
      <Skeleton className="h-6 w-full" />
    </main>
  );
}
