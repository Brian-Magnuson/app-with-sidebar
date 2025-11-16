import { Button } from "@/components/ui/button";
import { signIn } from "@/auth";

import { ThemeSwitcher } from "@/components/theme-switcher";

export default function RootPage() {

  const handleSignIn = async () => {
    "use server";
    await signIn(undefined, { redirectTo: "/dashboard" });
  };

  return (
    <div>
      <main className="h-[calc(100vh-3rem)] font-sans">
        <div className="h-16 px-4 flex items-center justify-end">
          <ThemeSwitcher />
        </div>
        <header className="h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
          <h1 className="text-5xl font-medium">My App</h1>
          <p className="text-lg">A Next.js app with a sidebar layout.</p>
          <Button onClick={handleSignIn}>Sign In</Button>
        </header>
      </main>
    </div>
  );
}
