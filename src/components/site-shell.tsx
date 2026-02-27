"use client";

import {
  IconArrowUpRight,
  IconFlower,
  IconHeart,
  IconMoon,
  IconPhoto,
  IconSparkles,
  IconStars,
  IconSun,
} from "@tabler/icons-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const navItems = [
  { label: "Início", href: "#inicio", icon: IconFlower },
  { label: "Ateliê", href: "#sobre", icon: IconSparkles },
  { label: "Processo", href: "#processo", icon: IconPhoto },
  { label: "Vitrine", href: "#vitrine", icon: IconStars },
  { label: "Depoimentos", href: "#depoimentos", icon: IconHeart },
  { label: "Encomendas", href: "#encomendas", icon: IconArrowUpRight },
];

function MobileNavMenu() {
  const { setOpenMobile } = useSidebar();
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = (resolvedTheme ?? theme) === "dark";

  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Navegação</SidebarGroupLabel>
        <SidebarMenu>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton asChild>
                  <Link href={item.href} onClick={() => setOpenMobile(false)}>
                    <Icon />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
          {mounted && (
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => setTheme(isDark ? "light" : "dark")}
              >
                {isDark ? <IconSun /> : <IconMoon />}
                <span>Alternar tema</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )}
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
  );
}

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = (resolvedTheme ?? theme) === "dark";

  return (
    <SidebarProvider defaultOpen={false}>
      <Sidebar collapsible="offcanvas" className="bg-card">
        <MobileNavMenu />
      </Sidebar>
      <div className="flex min-h-svh w-full flex-col">
        <header className="sticky top-0 z-30 border-b border-border/70 bg-background/80 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <IconFlower className="h-4 w-4" stroke={1.6} />
              Ateliê da Gisa
            </div>
            <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(isDark ? "light" : "dark")}
                  aria-label="Alternar tema"
                >
                  {isDark ? (
                    <IconSun className="h-4 w-4" />
                  ) : (
                    <IconMoon className="h-4 w-4" />
                  )}
                </Button>
              )}
              <SidebarTrigger className="md:hidden" />
            </div>
          </div>
        </header>
        {children}
      </div>
    </SidebarProvider>
  );
}
