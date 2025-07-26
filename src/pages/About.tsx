import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Eye, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Amor e Cuidado",
      description: "Cada criança é acolhida com carinho e recebe atenção individualizada."
    },
    {
      icon: Users,
      title: "Interação Social",
      description: "Promovemos a socialização e o respeito às diferenças desde cedo."
    },
    {
      icon: Target,
      title: "Desenvolvimento Integral",
      description: "Focamos no crescimento cognitivo, emocional, social e motor."
    },
    {
      icon: Eye,
      title: "Aprendizado Lúdico",
      description: "Aprender brincando é nossa especialidade e paixão."
    }
  ];

  const team = [
    {
      name: "Ana Carolina Mendes",
      role: "Diretora Pedagógica",
      description: "Pedagoga com 20 anos de experiência em educação infantil"
    },
    {
      name: "Mariana Silva",
      role: "Coordenadora Educacional",
      description: "Especialista em desenvolvimento infantil e psicopedagogia"
    },
    {
      name: "Juliana Santos",
      role: "Professora do Berçário",
      description: "Formada em Pedagogia com especialização em primeira infância"
    },
    {
      name: "Roberto Costa",
      role: "Professor de Educação Física",
      description: "Especialista em psicomotricidade e desenvolvimento motor"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-light to-accent-light">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Sobre a Escola Interação
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Conheça nossa história, nossa missão e as pessoas que fazem da Interação 
            um lugar especial para o desenvolvimento das crianças.
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary text-center">
              Nossa História
            </h2>
            <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed">
              <p className="mb-6">
                A Escola Interação nasceu em 2009 do sonho de duas pedagogas apaixonadas pela educação infantil: 
                Ana Carolina e Mariana. Elas acreditavam que a educação das crianças deveria ir além dos conteúdos 
                tradicionais, focando no desenvolvimento integral do ser humano.
              </p>
              <p className="mb-6">
                Começamos com apenas duas salas e 30 crianças, mas sempre com muito amor e dedicação. 
                Ao longo dos anos, crescemos não apenas em tamanho, mas principalmente em experiência e 
                conhecimento sobre como proporcionar a melhor educação para nossos pequenos.
              </p>
              <p className="mb-6">
                Hoje, atendemos mais de 150 famílias e nos orgulhamos de ter contribuído para a formação 
                de centenas de crianças que passaram por nossa escola. Nossa história é feita de momentos 
                especiais, descobertas incríveis e muito crescimento compartilhado.
              </p>
              <p>
                O nome "Interação" representa nossa filosofia: acreditamos que é através das relações 
                humanas, da troca de experiências e do brincar coletivo que as crianças se desenvolvem 
                de forma mais plena e feliz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary text-center">
            Missão, Visão e Valores
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Missão</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Proporcionar uma educação infantil de qualidade, promovendo o desenvolvimento 
                  integral das crianças em um ambiente acolhedor, seguro e estimulante, 
                  respeitando a individualidade de cada uma.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-accent">Visão</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Ser reconhecida como referência em educação infantil, formando cidadãos 
                  críticos, criativos e felizes, preparados para os desafios do futuro 
                  e comprometidos com o bem-estar coletivo.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Valores</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Amor, respeito, ética, responsabilidade, criatividade, cooperação 
                  e compromisso com a excelência educacional são os pilares que 
                  guiam nossas ações diárias.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon size={28} className="text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">{value.title}</h4>
                  <p className="text-sm text-foreground/80">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary text-center">
            Nossa Equipe
          </h2>
          <p className="text-lg text-center text-foreground/80 mb-12 max-w-3xl mx-auto">
            Nosso time é composto por profissionais qualificados, apaixonados pela educação 
            e comprometidos com o desenvolvimento de cada criança.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    {/* Placeholder para foto */}
                    <div className="w-24 h-24 bg-primary-light rounded-full mb-4 flex items-center justify-center">
                      <Users size={40} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-primary">{member.name}</h3>
                    <p className="text-accent font-medium mb-3">{member.role}</p>
                    <p className="text-foreground/80 text-sm leading-relaxed">{member.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;