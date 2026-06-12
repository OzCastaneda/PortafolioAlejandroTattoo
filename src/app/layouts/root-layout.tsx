import { Outlet } from "@tanstack/react-router";
import { Header, Footer } from "@/shared/layouts";
import { WhatsAppButton } from "@/shared/components";

export function RootLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Outlet />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
