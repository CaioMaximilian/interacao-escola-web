import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Calendar, FileText, Users, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Matriculas = () => {
  const passos = [
    {
      numero: 1,
      titulo: "Agende uma Visita",
      descricao: "Entre em contato conosco para agendar uma visita à escola. Você conhecerá nossos espaços, equipe e proposta pedagógica.",
      icon: Calendar,
      detalhes: "Duração: 1 hora | Horários: Segunda a sexta, das 9h às 16h"
    },
    {
      numero: 2,
      titulo: "Entrevista Familiar",
      descricao: "Realizamos uma conversa com a família para conhecer a criança, suas necessidades e expectativas em relação à escola.",
      icon: Users,
      detalhes: "Participação dos pais/responsáveis e da criança (se possível)"
    },
    {
      numero: 3,
      titulo: "Período de Adaptação",
      descricao: "Planejamos um período gradual de adaptação, respeitando o tempo da criança para se familiarizar com o novo ambiente.",
      icon: Clock,
      detalhes: "Duração: 1 a 2 semanas | Horários reduzidos inicialmente"
    },
    {
      numero: 4,
      titulo: "Entrega de Documentos",
      descricao: "Após a confirmação da vaga, os responsáveis devem entregar a documentação necessária para finalizar a matrícula.",
      icon: FileText,
      detalhes: "Prazo: 7 dias após confirmação da vaga"
    }
  ];

  const documentos = [
    "Certidão de nascimento da criança (cópia)",
    "RG e CPF dos pais/responsáveis (cópia)",
    "Comprovante de residência atual (cópia)",
    "Carteira de vacinação atualizada (cópia)",
    "Atestado médico de saúde (original)",
    "Declaração de escolaridade anterior (se houver)",
    "2 fotos 3x4 da criança",
    "Ficha de autorização para saídas pedagógicas",
    "Declaração de pessoas autorizadas para buscar",
    "Comprovante de renda familiar (cópia)"
  ];

  const investimento = [
    {
      periodo: "Período Integral",
      horario: "7h às 18h",
      valor: "R$ 1.200,00",
      inclui: ["Todas as refeições", "Material escolar", "Atividades extras"]
    },
    {
      periodo: "Período Matutino",
      horario: "7h às 12h",
      valor: "R$ 800,00",
      inclui: ["Lanche da manhã", "Material escolar", "Atividades dirigidas"]
    },
    {
      periodo: "Período Vespertino",
      horario: "13h às 18h",
      valor: "R$ 800,00",
      inclui: ["Lanche da tarde", "Material escolar", "Atividades dirigidas"]
    },
    {
      periodo: "Período Intermediário",
      horario: "9h às 15h",
      valor: "R$ 950,00",
      inclui: ["Almoço e lanches", "Material escolar", "Atividades extras"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-light to-accent-light">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Matrículas 2024
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Faça parte da família Interação! Conheça nosso processo de matrícula 
            e garante uma vaga para seu filho em nossa escola.
          </p>
        </div>
      </section>

      {/* Processo de Matrícula */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary text-center">
            Como Matricular seu Filho
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {passos.map((passo, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0">
                        {passo.numero}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <passo.icon size={24} className="text-accent" />
                          <h3 className="text-xl font-semibold text-primary">{passo.titulo}</h3>
                        </div>
                        <p className="text-foreground/80 mb-4 leading-relaxed">{passo.descricao}</p>
                        <div className="bg-school-light p-3 rounded-lg">
                          <p className="text-sm text-foreground/70">{passo.detalhes}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documentos Necessários */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary text-center">
            Documentos Necessários
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {documentos.map((documento, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle size={20} className="text-accent mt-1 flex-shrink-0" />
                      <span className="text-foreground/80">{documento}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-accent-light rounded-lg">
                  <h4 className="text-lg font-semibold mb-3 text-primary">Importante:</h4>
                  <p className="text-foreground/80">
                    Todos os documentos devem estar atualizados e legíveis. Documentos originais 
                    serão conferidos no momento da entrega e devolvidos imediatamente. Para crianças 
                    com necessidades especiais, favor informar antecipadamente para adequarmos 
                    nosso atendimento.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investimento */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary text-center">
            Investimento Mensal
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {investimento.map((opcao, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 text-primary">{opcao.periodo}</h3>
                  <p className="text-foreground/60 mb-4">{opcao.horario}</p>
                  <div className="text-3xl font-bold text-accent mb-6">{opcao.valor}</div>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold text-primary">Inclui:</h4>
                    {opcao.inclui.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-center space-x-2">
                        <CheckCircle size={16} className="text-accent" />
                        <span className="text-sm text-foreground/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary text-center">
                  Formas de Pagamento e Descontos
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-accent">Formas de Pagamento:</h4>
                    <ul className="space-y-2 text-foreground/80">
                      <li>• Débito automático (5% de desconto)</li>
                      <li>• Boleto bancário</li>
                      <li>• PIX (3% de desconto)</li>
                      <li>• Cartão de crédito (até 3x)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-accent">Descontos Especiais:</h4>
                    <ul className="space-y-2 text-foreground/80">
                      <li>• 2º filho: 10% de desconto</li>
                      <li>• 3º filho: 20% de desconto</li>
                      <li>• Funcionários públicos: 5%</li>
                      <li>• Irmãos gêmeos: 15% cada</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Começar?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Entre em contato conosco para agendar sua visita e conhecer tudo o que a 
            Escola Interação pode oferecer para o desenvolvimento do seu filho.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link to="/contato">Agendar Visita</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="tel:(11)1234-5678">
                <Phone className="mr-2" size={20} />
                (11) 1234-5678
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Matriculas;