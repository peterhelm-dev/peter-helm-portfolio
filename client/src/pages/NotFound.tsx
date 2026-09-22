import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-lg pixel-border overflow-hidden p-0">
        <img
          src="/images/pixel-art/notfound-vignette.webp"
          alt="A small pixel-art patch of bare soil with two tiny sprouts poking up"
          className="w-full h-56 object-cover border-b-2 border-[var(--pixel-ink)]"
        />
        <CardContent className="pt-8 pb-8 text-center">
          <h1 className="text-3xl mb-4 text-foreground">404</h1>

          <h2 className="text-lg font-semibold mb-4 text-foreground">
            This patch of garden hasn't grown yet
          </h2>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            Sorry, the page you are looking for doesn't exist.
            <br />
            It may have been moved or deleted.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={handleGoHome}
              className="pixel-border bg-primary text-primary-foreground hover:bg-primary px-6 py-2.5"
            >
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
