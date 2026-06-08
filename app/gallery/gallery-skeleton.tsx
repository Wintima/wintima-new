export function GallerySkeleton() {
  return (
    <div className="min-h-screen bg-white" aria-hidden="true">
      <div className="bg-wintima-warm py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto h-10 max-w-md animate-pulse rounded-full bg-white/70" />
          <div className="mx-auto mt-6 h-14 max-w-2xl animate-pulse rounded-2xl bg-white/70" />
        </div>
      </div>
      <div className="container mx-auto grid gap-6 px-4 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="bg-wintima-warm aspect-[4/3] animate-pulse rounded-2xl" />
        ))}
      </div>
    </div>
  );
}
