import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Users, Heart, BookOpen, Star } from "lucide-react";
import heroImage from "@/assets/hero-children.jpg";

const Home = () => {
  const quickLinks = [
    {
      title: "Turmas",
      description: "Conheça nossas turmas por faixa etária",
      icon: Users,
      href: "/turmas",
      color: "bg-primary"
    },
    {
      title: "Proposta Pedagógica",
      description: "Nossa metodologia de ensino única",
      icon: BookOpen,
      href: "/proposta",
      color: "bg-accent"
    },
    {
      title: "Contato",
      description: "Fale conosco e agende uma visita",
      icon: Heart,
      href: "/contato",
      color: "bg-primary"
    }
  ];

  const testimonials = [
    {
      text: "A Escola Interação transformou a vida da minha filha. Ela adora ir para a escola todos os dias e sempre volta com novas descobertas!",
      author: "Maria Silva",
      role: "Mãe da Sofia, 4 anos"
    },
    {
      text: "Excelente equipe pedagógica e infraestrutura maravilhosa. Meu filho desenvolveu muito a socialização e o amor pelo aprendizado.",
      author: "João Santos",
      role: "Pai do Pedro, 5 anos"
    },
    {
      text: "Escola humanizada que respeita o tempo de cada criança. Recomendo para todos os pais que buscam qualidade na educação infantil.",
      author: "Ana Costa",
      role: "Mãe do Lucas, 3 anos"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-primary/20"></div>
        </div>
        
        <div className="relative z-10 text-center text-primary-foreground px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Onde o aprendizado e a diversão se encontram
          </h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md opacity-95">
            Educação infantil de qualidade em um ambiente acolhedor e estimulante
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/matriculas">Conheça Nossas Matrículas</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/sobre">Saiba Mais Sobre Nós</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Apresentação */}
      <section className="py-16 bg-school-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Bem-vindos à Escola Interação
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Há mais de 15 anos, nossa escola tem sido um lugar especial onde as crianças descobrem o prazer 
              de aprender através da interação, brincadeiras e experiências significativas. Acreditamos que 
              cada criança é única e merece uma educação que respeite seu ritmo e potencial.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link to="/sobre">Conheça Nossa História</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Links Rápidos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Explore Nossa Escola
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickLinks.map((link, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${link.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <link.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">{link.title}</h3>
                  <p className="text-muted-foreground mb-6">{link.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={link.href}>Saiba Mais</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            O que os Pais Dizem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Venha Conhecer Nossa Escola!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Agende uma visita e veja de perto o ambiente acolhedor onde seu filho irá crescer e aprender.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
            <Link to="/contato">Agendar Visita</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;