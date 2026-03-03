"use client";

import {
  IconArrowLeft,
  IconArrowRight,
  IconHome,
  IconMoodSad,
  IconRosette,
  IconSparkles,
} from "@tabler/icons-react";
import { type Easing, motion } from "framer-motion";
import Link from "next/link";

const easeOut: Easing = [0.16, 1, 0.3, 1];
const containerVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: easeOut, staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut },
  },
};
const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};

const iconProps = {
  stroke: 1.5,
  className: "h-5 w-5",
};

export default function NotFound() {
  return (
    <motion.main
      className="relative mx-auto flex min-h-svh w-full max-w-3xl flex-col items-center justify-center gap-6 p-6 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="pointer-events-none absolute -top-6 left-1/2 flex -translate-x-1/2 items-center gap-3 text-muted-foreground/70">
        <IconSparkles {...iconProps} />
        <IconRosette {...iconProps} />
        <IconSparkles {...iconProps} />
      </div>

      <motion.p
        className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-muted-foreground"
        variants={itemVariants}
      >
        <IconMoodSad className="h-8 w-8 text-muted-foreground" stroke={1.5} />
        Página não encontrada
      </motion.p>
      <motion.h1
        className="flex items-center gap-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
        variants={itemVariants}
      >
        Ops, não encontramos esta página
      </motion.h1>
      <motion.p
        className="text-base leading-relaxed text-muted-foreground sm:text-lg"
        variants={itemVariants}
      >
        Pode ter sido um erro no endereço. Se preferir, volte para a página
        inicial e continue navegando com calma.
      </motion.p>

      <motion.section
        className="grid w-full gap-3 text-left sm:grid-cols-3"
        variants={listVariants}
      >
        <motion.div
          className="rounded-xl border border-border bg-card p-4 shadow-sm transition-transform ease-out hover:-translate-y-1"
          variants={itemVariants}
        >
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
            <IconRosette {...iconProps} />
            Dica carinhosa
          </div>
          <p className="text-sm text-muted-foreground">
            Use o menu principal para encontrar as peças e conhecer o ateliê.
          </p>
        </motion.div>
        <motion.div
          className="rounded-xl border border-border bg-card p-4 shadow-sm transition-transform ease-out hover:-translate-y-1"
          variants={itemVariants}
        >
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
            <IconSparkles {...iconProps} />
            Voltar com calma
          </div>
          <p className="text-sm text-muted-foreground">
            Você pode reiniciar sua visita pela página inicial, sem pressa.
          </p>
        </motion.div>
        <motion.div
          className="rounded-xl border border-border bg-card p-4 shadow-sm transition-transform ease-out hover:-translate-y-1"
          variants={itemVariants}
        >
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
            <IconHome {...iconProps} />
            Caminho seguro
          </div>
          <p className="text-sm text-muted-foreground">
            A vitrine está pronta para te mostrar cada detalhe das peças.
          </p>
        </motion.div>
      </motion.section>

      <motion.div
        className="flex flex-wrap items-center justify-center gap-3"
        variants={listVariants}
      >
        <motion.div variants={itemVariants}>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all ease-linear hover:opacity-90"
          >
            <IconArrowLeft {...iconProps} />
            Ir para a página inicial
          </Link>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Link
            href="/vitrine"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition-all ease-linear hover:bg-accent"
          >
            Ver a vitrine
            <IconArrowRight {...iconProps} />
          </Link>
        </motion.div>
      </motion.div>
    </motion.main>
  );
}
