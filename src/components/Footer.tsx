import { Link } from "react-router-dom";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">I</span>
              </div>
              <span className="text-2xl font-bold">Interação</span>
            </Link>
            <p className="text-primary-foreground/80 leading-relaxed">
              Uma escola onde o aprendizado e a diversão se encontram, 
              promovendo o desenvolvimento integral das crianças em um 
              ambiente acolhedor e estimulante.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/sobre" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Sobre Nós
              </Link>
              <Link to="/proposta" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Proposta Pedagógica
              </Link>
              <Link to="/turmas" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Turmas
              </Link>
              <Link to="/espaco" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Nosso Espaço
              </Link>
              <Link to="/matriculas" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Matrículas
              </Link>
            </nav>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-accent" />
                <span className="text-primary-foreground/80">
                  Rua das Crianças, 123<br />
                  Bairro Alegria - São Paulo, SP
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-accent" />
                <span className="text-primary-foreground/80">(11) 1234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-accent" />
                <span className="text-primary-foreground/80">contato@escolainteracao.com.br</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Escola Interação. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;