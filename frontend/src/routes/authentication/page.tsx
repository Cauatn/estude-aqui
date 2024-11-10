import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "@/routes/authentication/components/UserAuthForm";
import { Brain } from "lucide-react";

export default function AuthenticationPage() {
  return (
    <>
      <div className="md:hidden">
        <img
          src="/examples/authentication-light.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <img
          src="/examples/authentication-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div>
      <div className="container relative hidden h-screen flex-col items-center justify-center overflow-hidden md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <a
          href="/examples/authentication"
          className={cn(
            buttonVariants({ variant: "secondary" }),
            "absolute right-4 top-4 md:right-8 md:top-8 rounded-none w-40"
          )}
        >
          Login
        </a>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-[#3BABA2]" />
          <div className="relative z-20 flex items-center text-lg font-medium gap-2">
            <Brain /> Estude Aqui
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                “A educação é a chave que desbloqueia o potencial humano,
                permitindo que cada indivíduo construa seu próprio caminho de
                sucesso e faça uma diferença positiva no mundo.”
              </p>
              <footer className="text-sm">João Silva</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8 flex items-center justify-center h-full">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Crie um conta
              </h1>
              <p className="text-sm text-muted-foreground">
                Entre com seu email abaixo para criar sua conta
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              Clicando em continuar, você concorda com nossos{" "}
              <a
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Termos de Serviço
              </a>{" "}
              e{" "}
              <a
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Politica de Privacidade
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
