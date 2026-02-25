import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container-narrow px-4 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-sm">Q</span>
            </div>
            <span className="font-display font-bold text-lg">Quest 2026</span>
          </div>
          <p className="text-sm opacity-70 leading-relaxed">
            National Level Technical Symposium organized by the Department of Computer Science & Engineering.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["Events", "Workshops", "Gallery", "About"].map((l) => (
              <Link
                key={l}
                to={`/${l.toLowerCase()}`}
                className="text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                {l}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Contact</h4>
          <p className="text-sm opacity-70 leading-relaxed">
            Department of CSE<br />
            JNTUH UCESTH<br />
            quest.cse@jntuh.ac.in
          </p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-sm opacity-50">
        2026 Quest 
      </div>
    </div>
  </footer>
);

export default Footer;
