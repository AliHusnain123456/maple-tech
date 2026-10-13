export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <main className="grid min-h-[70vh] place-items-center px-4 text-center">
      <div>
        <p className="text-6xl font-extrabold text-brand">404</p>
        <h1 className="mt-3 text-3xl font-bold text-navy dark:text-white">This page has wandered off</h1>
        <p className="mt-2">The page you are looking for does not exist or has moved.</p>
        <a href="/" className="btn btn-cta mt-6">Back to home</a>
      </div>
    </main>
  );
}
