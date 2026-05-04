export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white text-zinc-900 dark:bg-black dark:text-zinc-100 p-8">
      <main className="max-w-md w-full space-y-12">
        <header className="space-y-2">
          <h1 className="text-4xl font-light tracking-widest uppercase">JIO</h1>
          <div className="h-px w-12 bg-zinc-300 dark:bg-zinc-700"></div>
        </header>

        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Favorite</h2>
            <p className="text-lg font-light leading-relaxed">
              무채색, 절제된 미감, 정돈된 분위기
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Appreciate</h2>
            <p className="text-lg font-light leading-relaxed">
              차분하고 안정감 있는 사람
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Want</h2>
            <p className="text-lg font-light leading-relaxed">
              여유로운 실행력
            </p>
          </div>
        </section>

        <footer className="pt-8 text-[10px] uppercase tracking-[0.2em] text-zinc-400">
          Personal Introduction
        </footer>
      </main>
    </div>
  );
}
