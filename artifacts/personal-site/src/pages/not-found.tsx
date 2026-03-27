import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-6 max-w-md">
        <h1 className="text-9xl font-display font-bold text-primary/10 mb-8">404</h1>
        <h2 className="text-3xl font-display font-semibold mb-4 text-foreground">Page Not Found</h2>
        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button size="lg" className="rounded-full px-8 gap-2" asChild>
          <Link href="/">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
