import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Heart, Lightbulb, Puzzle, Music } from "lucide-react";

const Proposta = () => {
  const metodologias = [
    {
      icon: Users,
      title: "Aprendizagem Colaborativa",
      description: "Promovemos atividades em grupo que estimulam a cooperação, o respeito mútuo e a construção coletiva do conhecimento."
    },
    {
      icon: Puzzle,
      title: "Jogos e Brincadeiras",
      description: "Utilizamos o lúdico como ferramenta principal de aprendizagem, tornando cada descoberta uma aventura prazerosa."
    },
    {
      icon: Lightbulb,
      title: "Projetos Temáticos",
      description: "Desenvolvemos projetos interdisciplinares que partem do interesse das crianças e conectam diferentes áreas do conhecimento."
    },
    {
      icon: Music,
      title: "Expressão Artística",
      description: "Valorizamos a arte, música e movimento como formas de expressão e desenvolvimento da criatividade e sensibilidade."
    }
  ];

  const desenvolvimentos = [
    {
      area: "Desenvolvimento Cognitivo",
      descricao: "Estimulamos o pensamento crítico, a curiosidade e a capacidade de resolver problemas através de atividades desafiadoras e investigativas.",
      atividades: ["Jogos de lógica", "Experiências científicas", "Contação de histórias", "Atividades matemáticas lúdicas"]
    },
    {
      area: "Desenvolvimento Social",
      descricao: "Promovemos a socialização saudável, o respeito às diferenças e a construção de vínculos afetivos positivos.",
      atividades: ["Atividades em grupo", "Rodas de conversa", "Projetos colaborativos", "Resolução de conflitos"]
    },
    {
      area: "Desenvolvimento Emocional",
      descricao: "Auxiliamos as crianças a reconhecer, expressar e regular suas emoções de forma adequada e saudável.",
      atividades: ["Círculo de sentimentos", "Yoga infantil", "Meditação para crianças", "Arte terapia"]
    },
    {
      area: "Desenvolvimento Motor",
      descricao: "Oferecemos experiências variadas que estimulam tanto a motricidade fina quanto a grossa de forma integrada.",
      atividades: ["Educação física", "Dança", "Atividades manuais", "Jogos motores"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-light to-accent-light">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Proposta Pedagógica
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Nossa metodologia única valoriza a interação como base do aprendizado, 
            promovendo o desenvolvimento integral de cada criança.
          </p>
        </div>
      </section>

      {/* Nossa Filosofia */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
              Nossa Filosofia Educacional
            </h2>
            <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed text-left">
              <p className="mb-6">
                Na Escola Interação, acreditamos que a educação infantil deve ser um processo alegre, 
                significativo e respeitoso. Nossa proposta pedagógica baseia-se na concepção de que 
                a criança é um ser ativo, curioso e competente, capaz de construir seu próprio conhecimento 
                através da interação com o mundo que a cerca.
              </p>
              <p className="mb-6">
                Inspirados pelos estudos de Vygotsky sobre a importância da interação social no desenvolvimento, 
                bem como pela abordagem de Reggio Emilia que valoriza a criança como protagonista de sua 
                aprendizagem, criamos um ambiente onde cada pequeno é incentivado a explorar, questionar, 
                criar e colaborar.
              </p>
              <p className="mb-6">
                Nossa metodologia reconhece que cada criança tem seu próprio ritmo e estilo de aprender. 
                Por isso, oferecemos experiências diversificadas que contemplam diferentes formas de 
                expressão e compreensão, sempre respeitando a individualidade de cada uma.
              </p>
              <div className="bg-school-light p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-primary text-center">
                  A Importância da Interação no Aprendizado
                </h3>
                <p className="text-center">
                  O nome da nossa escola reflete nossa crença fundamental: é através da <strong>interação</strong> 
                  - entre criança e criança, criança e educador, criança e ambiente - que acontecem as 
                  aprendizagens mais significativas. Cada momento de troca é uma oportunidade de crescimento 
                  e descoberta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologias */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary text-center">
            Nossas Metodologias
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {metodologias.map((metodologia, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <metodologia.icon size={28} className="text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-primary">{metodologia.title}</h3>
                      <p className="text-foreground/80 leading-relaxed">{metodologia.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Desenvolvimento Integral */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary text-center">
            Desenvolvimento Integral da Criança
          </h2>
          <p className="text-lg text-center text-foreground/80 mb-12 max-w-3xl mx-auto">
            Trabalhamos de forma integrada todas as dimensões do desenvolvimento infantil, 
            garantindo que cada criança cresça de forma equilibrada e harmoniosa.
          </p>
          
          <div className="space-y-8">
            {desenvolvimentos.map((area, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-bold mb-4 text-primary">{area.area}</h3>
                      <p className="text-foreground/80 leading-relaxed mb-6">{area.descricao}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-accent">Atividades Principais:</h4>
                      <ul className="space-y-2">
                        {area.atividades.map((atividade, actIndex) => (
                          <li key={actIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                            <span className="text-foreground/80">{atividade}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rotina Pedagógica */}
      <section className="py-16 bg-school-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary text-center">
            Nossa Rotina Pedagógica
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-md">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-primary">Manhã (7h às 12h)</h3>
                  <ul className="space-y-3 text-foreground/80">
                    <li>• <strong>7h-8h:</strong> Acolhida e atividades livres</li>
                    <li>• <strong>8h-9h:</strong> Roda de conversa e planejamento</li>
                    <li>• <strong>9h-10h:</strong> Atividades dirigidas</li>
                    <li>• <strong>10h-10h30:</strong> Lanche coletivo</li>
                    <li>• <strong>10h30-11h30:</strong> Atividades ao ar livre</li>
                    <li>• <strong>11h30-12h:</strong> Organização e saída</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-primary">Tarde (13h às 18h)</h3>
                  <ul className="space-y-3 text-foreground/80">
                    <li>• <strong>13h-14h:</strong> Acolhida e almoço</li>
                    <li>• <strong>14h-15h:</strong> Momento de descanso</li>
                    <li>• <strong>15h-16h:</strong> Atividades criativas</li>
                    <li>• <strong>16h-16h30:</strong> Lanche da tarde</li>
                    <li>• <strong>16h30-17h30:</strong> Brincadeiras e projetos</li>
                    <li>• <strong>17h30-18h:</strong> Atividades livres e saída</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Proposta;