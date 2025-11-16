import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/app-sidebar";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  let session;
  try {
    session = await auth();
  } catch (error) {
    console.error("Failed to retrieve session:", error);
    redirect(`/signin?callbackUrl=/dashboard`);
  }

  if (!session || !session.user) {
    redirect(`/signin?callbackUrl=/dashboard`);
  }

  const user = {
    name: session.user.name || "User",
    email: session.user.email || "",
    avatar: session.user.image || "",
  };

  return (
    <SidebarProvider>
      <AppSidebar user={user} />
      <div>
        <SidebarTrigger />
        {children}
      </div>
    </SidebarProvider>
  );
}
