import "./globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata = {
  title: "Ateliê da Gisa",
  description: "SPA p/ Vendas de Macramê - Dona Gisele",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-white text-zinc-900 antialiased">
        {children}
      </body>
    </html>
  );
}
