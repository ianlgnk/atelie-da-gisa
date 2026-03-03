"use client";

import { IconHeart } from "@tabler/icons-react";
import { motion } from "framer-motion";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Testimonial = {
  name: string;
  text: string;
};

export function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  return (
    <Carousel opts={{ align: "start", loop: true }} className="relative">
      <CarouselContent containerClassName="py-3 touch-pan-y px-3">
        {items.map((testimonial) => (
          <CarouselItem
            key={testimonial.name}
            className="basis-full lg:basis-1/3"
          >
            <motion.div
              className="group h-full rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <p className="leading-relaxed">“{testimonial.text}”</p>
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-foreground">
                <motion.span
                  variants={{
                    rest: { scale: 1 },
                    hover: {
                      scale: [1, 1.25, 1],
                      transition: { duration: 0.6, ease: "easeInOut" },
                    },
                  }}
                  className="inline-flex"
                >
                  <IconHeart
                    className="h-4 w-4 fill-transparent stroke-muted-foreground transition-colors group-hover:fill-red-500 group-hover:stroke-red-500"
                    stroke={1.6}
                  />
                </motion.span>
                {testimonial.name}
              </div>
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="mt-2 hidden items-center justify-end gap-2 lg:flex">
        <CarouselPrevious className="static translate-y-0" />
        <CarouselNext className="static translate-y-0" />
      </div>
    </Carousel>
  );
}
