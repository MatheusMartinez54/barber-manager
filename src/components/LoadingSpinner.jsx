export function LoadingSpinner() {
  return (
    <div className="flex min-h-[240px] items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/15 border-t-danger" />
    </div>
  );
}
