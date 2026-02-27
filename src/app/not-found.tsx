"use client";

import {
  IconArrowLeft,
  IconArrowRight,
  IconHome,
  IconMoodSad,
  IconRosette,
  IconSparkles,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";
const iconProps = {
  stroke: 1.5,
  className: "h-5 w-5",
};

export default function NotFound() {
  return (
    <motion.main
      className="relative mx-auto flex h-full max-w-3xl flex-col items-center justify-center gap-6 p-6 text-center"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="pointer-events-none absolute -top-6 left-1/2 flex -translate-x-1/2 items-center gap-3 text-muted-foreground/70">
        <IconSparkles {...iconProps} />
        <IconRosette {...iconProps} />
        <IconSparkles {...iconProps} />
      </div>

      <motion.p
        className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-muted-foreground"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        <IconMoodSad className="h-8 w-8 text-muted-foreground" stroke={1.5} />
        Página não encontrada
      </motion.p>
      <motion.h1
        className="flex items-center gap-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
      >
        Ops, não encontramos esta página
      </motion.h1>
      <motion.p
        className="text-base leading-relaxed text-muted-foreground sm:text-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.16 }}
      >
        Pode ter sido um erro no endereço. Se preferir, volte para a página
        inicial e continue navegando com calma.
      </motion.p>

      <motion.section
        className="grid w-full gap-3 text-left sm:grid-cols-3"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.2 }}
      >
        <div className="rounded-xl border border-border bg-card p-4 shadow-sm transition-transform duration-200 ease-out hover:-translate-y-1">
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
            <IconRosette {...iconProps} />
            Dica carinhosa
          </div>
          <p className="text-sm text-muted-foreground">
            Use o menu principal para encontrar as peças e conhecer o ateliê.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-4 shadow-sm transition-transform duration-200 ease-out hover:-translate-y-1">
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
            <IconSparkles {...iconProps} />
            Voltar com calma
          </div>
          <p className="text-sm text-muted-foreground">
            Você pode reiniciar sua visita pela página inicial, sem pressa.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-4 shadow-sm transition-transform duration-200 ease-out hover:-translate-y-1">
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
            <IconHome {...iconProps} />
            Caminho seguro
          </div>
          <p className="text-sm text-muted-foreground">
            A vitrine está pronta para te mostrar cada detalhe das peças.
          </p>
        </div>
      </motion.section>

      <motion.div
        className="flex flex-wrap items-center justify-center gap-3"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.26 }}
      >
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all ease-linear hover:opacity-90"
        >
          <IconArrowLeft {...iconProps} />
          Ir para a página inicial
        </Link>
        <Link
          href="/vitrine"
          className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition-all ease-linear hover:bg-accent"
        >
          Ver a vitrine
          <IconArrowRight {...iconProps} />
        </Link>
      </motion.div>
    </motion.main>
  );
}
