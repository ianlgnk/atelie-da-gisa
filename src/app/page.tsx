export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">
        Ateliê da Gisa
      </h1>
      <p className="text-lg text-zinc-600">
        Macrame feito a mao, com carinho. Esta e sua base para comecar a
        aprender Next.js.
      </p>
      <div className="rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm text-zinc-700">
        Edite <span className="font-mono">src/app/page.tsx</span> e salve para
        ver o hot reload.
      </div>
    </main>
  );
}
