import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Events", path: "/events" },
  {label : "Contest", path: "/codeclutch"},
  { label: "Workshops", path: "/workshops" },
  { label: "Gallery", path: "/gallery" },
  { label: "About", path: "/about" },
  
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container-narrow flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-40 h-40 rounded-lg  flex items-center justify-center">
            {/* <span className="text-primary-foreground font-display font-bold text-sm"></span> */}
            <img src = "https://res.cloudinary.com/dvvijlfio/image/upload/v1771760690/craiyon_173618_image_xzibl9.png"/>
          </div>
          <div className="w-40 h-40 rounded-lg  flex items-center justify-center">
            {/* <span className="text-primary-foreground font-display font-bold text-sm"></span> */}
            <img src = "https://res.cloudinary.com/dvvijlfio/image/upload/v1774431751/Your_paragraph_text__1_-removebg-preview_mimehj.png"/>
          </div>
          
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === l.path
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border pb-4 px-4">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                location.pathname === l.path
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
