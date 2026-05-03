import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/brand";
import { toast } from "sonner";
import { useState } from "react";

const PinterestIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
  </svg>
);

export const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      toast.error("Please enter a valid email");
      return;
    }
    toast.success("Welcome to the Lavender Coast circle 💜");
    setEmail("");
  };

  return (
    <footer className="mt-32 border-t border-border/50 bg-secondary/40">
      <div className="container py-16 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h3 className="font-display text-2xl text-primary-deep">{BRAND.name}</h3>
          <p className="text-sm text-muted-foreground mt-2 max-w-sm">
            {BRAND.tagline} — handmade crochet pieces stitched slowly, with intention,
            on the lavender coast.
          </p>
          <form onSubmit={handleSubscribe} className="mt-6 flex gap-2 max-w-sm">
            <Input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-full bg-background/80"
            />
            <Button type="submit" variant="default">
              Subscribe
            </Button>
          </form>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/shop" className="hover:text-primary transition-smooth">Shop all</Link></li>
            <li><Link to="/shop?category=Clothing" className="hover:text-primary transition-smooth">Clothing</Link></li>
            <li><Link to="/shop?category=Accessories" className="hover:text-primary transition-smooth">Accessories</Link></li>
            <li><Link to="/shop?category=Gifts" className="hover:text-primary transition-smooth">Gifts</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-smooth">Our story</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Stay close</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/contact" className="hover:text-primary transition-smooth">Contact</Link></li>
            <li><a href={`mailto:${BRAND.email}`} className="hover:text-primary transition-smooth">{BRAND.email}</a></li>
          </ul>
          <div className="flex gap-3 mt-4">
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="h-10 w-10 rounded-full bg-background flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-smooth shadow-soft"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={BRAND.pinterest}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
              className="h-10 w-10 rounded-full bg-background flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-smooth shadow-soft"
            >
              <PinterestIcon className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${BRAND.email}`}
              aria-label="Email"
              className="h-10 w-10 rounded-full bg-background flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-smooth shadow-soft"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border/50">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {BRAND.name}. Made by hand, with heart.</p>
          <p>Stitched on the coast.</p>
        </div>
      </div>
    </footer>
  );
};
