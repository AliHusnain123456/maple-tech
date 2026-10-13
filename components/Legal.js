export default function Legal({ title, children }) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-navy dark:text-white">{title}</h1>
      <div className="mt-6 space-y-4 leading-relaxed">{children}</div>
      <a href="/" className="btn btn-ghost mt-10">Back to home</a>
    </main>
  );
}
