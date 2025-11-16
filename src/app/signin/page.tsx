import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { signIn } from "@/auth";

function getErrorMessage(error: string): string {
  switch (error) {
    case "OAuthAccountNotLinked":
      return "This account is already linked to another provider. Please use the correct sign-in method.";
    case "OAuthCallbackError":
      return "There was an error during the sign-in process. Please try again.";
    case "Configuration":
      return "There is a configuration issue. Please contact the developer.";
    default:
      return "An unknown error occurred. Please try again.";
  }
}

export default async function SignInPage(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const REDIRECT_FALLBACK_URL = "/dashboard";

  const params = await props.searchParams;
  const callbackUrl = Array.isArray(params["callbackUrl"]) ? params["callbackUrl"][0] : params["callbackUrl"];
  const error = Array.isArray(params["error"]) ? params["error"][0] : params["error"];

  const signInWithProvider = async (provider: string) => {
    "use server";
    await signIn(provider, { redirectTo: callbackUrl ?? REDIRECT_FALLBACK_URL });
  }

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>Sign in to your account.</CardDescription>
          {error && (
            <Alert variant="destructive" className="mt-4">
              <AlertCircleIcon />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{getErrorMessage(error)}</AlertDescription>
            </Alert>
          )}
        </CardHeader>
        <CardContent>
          <Button
            className="w-full bg-white text-[#1F1F1F] hover:bg-[#f5f5f5] border border-[#747775] font-(family-name:--font-roboto)"
            onClick={async () => {
              "use server";
              await signInWithProvider("google");
            }}
          >
            <Image
              src="/logos/third-party/google-logo.svg"
              alt="Google Logo"
              width={18}
              height={18}
            />
            Sign in with Google
          </Button>

          <Button
            className="w-full bg-[#24292f] hover:bg-[#24292f]/90 border border-gray text-white mt-4"
            onClick={async () => {
              "use server";
              await signInWithProvider("github");
            }}
          >
            <Image
              src="/logos/third-party/github-mark-white.svg"
              alt="GitHub Logo"
              width={18}
              height={18}
            />
            Sign in with GitHub
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
