import { Card, CardContent } from "@/components/ui/card";
import { Baby, Users, BookOpen, Palette } from "lucide-react";
import turmasBg from "@/assets/turmas-bg.jpg";

const Turmas = () => {
  const turmas = [
    {
      nome: "Berçário",
      idade: "4 meses a 1 ano",
      icon: Baby,
      color: "bg-accent",
      objetivos: [
        "Estabelecer vínculos afetivos seguros",
        "Estimular o desenvolvimento sensorial",
        "Promover a exploração do ambiente",
        "Desenvolver a comunicação não-verbal"
      ],
      rotina: "Rotina individualizada respeitando o ritmo de cada bebê, com momentos de alimentação, sono, higiene e estímulos sensoriais adequados à idade.",
      atividades: [
        "Massagem relaxante",
        "Música e cantigas",
        "Estímulos visuais e táteis",
        "Brincadeiras com objetos seguros",
        "Banho de sol supervisionado"
      ]
    },
    {
      nome: "Maternal I",
      idade: "1 a 2 anos",
      icon: Users,
      color: "bg-primary",
      objetivos: [
        "Desenvolver a autonomia gradual",
        "Estimular a linguagem oral",
        "Promover a socialização inicial",
        "Desenvolver coordenação motora"
      ],
      rotina: "Rotina estruturada com atividades lúdicas, momentos de alimentação, descanso e brincadeiras que estimulam o desenvolvimento global.",
      atividades: [
        "Brincadeiras de encaixe",
        "Contação de histórias",
        "Atividades com tintas e massinha",
        "Jogos de movimento",
        "Exploração de texturas"
      ]
    },
    {
      nome: "Maternal II",
      idade: "2 a 3 anos",
      icon: BookOpen,
      color: "bg-accent",
      objetivos: [
        "Ampliar o vocabulário e comunicação",
        "Desenvolver habilidades sociais",
        "Estimular a criatividade",
        "Promover independência nas atividades"
      ],
      rotina: "Atividades diversificadas incluindo rodas de conversa, brincadeiras dirigidas, atividades artísticas e momentos de interação livre.",
      atividades: [
        "Desenho e pintura livre",
        "Jogos cooperativos",
        "Teatro de fantoches",
        "Atividades culinárias simples",
        "Brincadeiras no parque"
      ]
    },
    {
      nome: "Pré-Escola",
      idade: "3 a 5 anos",
      icon: Palette,
      color: "bg-primary",
      objetivos: [
        "Preparar para o ensino fundamental",
        "Desenvolver pensamento crítico",
        "Fortalecer vínculos de amizade",
        "Estimular autonomia e responsabilidade"
      ],
      rotina: "Rotina bem estruturada com projetos pedagógicos, atividades de alfabetização, jogos educativos e momentos de livre escolha.",
      atividades: [
        "Projetos de pesquisa",
        "Atividades pré-matemáticas",
        "Iniciação à escrita",
        "Experimentos científicos",
        "Apresentações artísticas"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-light to-accent-light overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${turmasBg})` }}
        >
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Nossas Turmas
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Conheça as turmas organizadas por faixa etária, cada uma com proposta 
            pedagógica específica para o desenvolvimento de suas crianças.
          </p>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-primary">
              Educação Personalizada por Idade
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Organizamos nossas turmas respeitando as características específicas de cada faixa etária, 
              garantindo que as atividades e estímulos sejam adequados ao momento de desenvolvimento 
              de cada criança. Nossa equipe pedagógica é especializada em cada fase do crescimento infantil.
            </p>
          </div>
        </div>
      </section>

      {/* Cards das Turmas */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {turmas.map((turma, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Cabeçalho da Turma */}
                    <div className={`${turma.color} text-white p-8 flex flex-col justify-center`}>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                          <turma.icon size={32} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold">{turma.nome}</h3>
                          <p className="text-xl opacity-90">{turma.idade}</p>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-xl font-semibold mb-4">Objetivos Principais:</h4>
                        <ul className="space-y-2">
                          {turma.objetivos.map((objetivo, objIndex) => (
                            <li key={objIndex} className="flex items-start space-x-2">
                              <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                              <span className="opacity-90">{objetivo}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Placeholder para foto da turma */}
                      <div className="bg-white/10 rounded-lg p-6 text-center">
                        <p className="text-sm opacity-75">📸 Foto da turma</p>
                      </div>
                    </div>

                    {/* Conteúdo da Turma */}
                    <div className="p-8 bg-white">
                      <div className="mb-8">
                        <h4 className="text-xl font-semibold mb-4 text-primary">Nossa Rotina</h4>
                        <p className="text-foreground/80 leading-relaxed">{turma.rotina}</p>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold mb-4 text-primary">Atividades Desenvolvidas</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {turma.atividades.map((atividade, atIndex) => (
                            <div key={atIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-accent rounded-full"></div>
                              <span className="text-foreground/80 text-sm">{atividade}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-8 p-4 bg-school-light rounded-lg">
                        <p className="text-sm text-foreground/70 text-center">
                          <strong>Capacidade:</strong> Máximo de 15 crianças por turma com 2 educadoras
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Informações Adicionais */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-primary text-center">
              Informações Importantes
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-md">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Horários de Funcionamento</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• <strong>Período Integral:</strong> 7h às 18h</li>
                    <li>• <strong>Período Matutino:</strong> 7h às 12h</li>
                    <li>• <strong>Período Vespertino:</strong> 13h às 18h</li>
                    <li>• <strong>Período Intermediário:</strong> 9h às 15h</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Alimentação</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li>• Cardápio elaborado por nutricionista</li>
                    <li>• Refeições preparadas na escola</li>
                    <li>• Atendimento a restrições alimentares</li>
                    <li>• Educação nutricional integrada</li>
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

export default Turmas;