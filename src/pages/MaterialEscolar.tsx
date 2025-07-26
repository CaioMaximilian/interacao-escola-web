import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import materialBg from "@/assets/material-bg.jpg";

const MaterialEscolar = () => {
  const materiaisPorIdade = [
    {
      faixaEtaria: "2 a 3 anos",
      cor: "bg-blue-100",
      materiais: [
        "1 mochila pequena com identificação",
        "1 lancheira térmica",
        "1 garrafa de água (300ml)",
        "2 mudas de roupa completas",
        "1 pacote de fraldas descartáveis",
        "1 pacote de lenços umedecidos",
        "1 pomada para assaduras",
        "1 cobertor pequeno",
        "1 travesseiro pequeno",
        "2 babadores plásticos"
      ]
    },
    {
      faixaEtaria: "3 a 4 anos",
      cor: "bg-green-100",
      materiais: [
        "1 mochila com identificação",
        "1 lancheira térmica",
        "1 garrafa de água (500ml)",
        "1 muda de roupa completa",
        "1 estojo com lápis de cor grossos (12 cores)",
        "1 caixa de giz de cera grosso",
        "1 cola bastão",
        "1 tesoura sem ponta",
        "1 massa de modelar",
        "1 caderno de desenho A4",
        "1 pasta com elástico A4"
      ]
    },
    {
      faixaEtaria: "4 a 5 anos",
      cor: "bg-orange-100",
      materiais: [
        "1 mochila com identificação",
        "1 lancheira térmica",
        "1 garrafa de água (500ml)",
        "1 muda de roupa completa",
        "1 estojo com lápis de cor (24 cores)",
        "1 caixa de giz de cera",
        "2 colas bastão",
        "1 tesoura sem ponta",
        "1 massa de modelar",
        "1 caderno de desenho A4",
        "1 caderno de atividades",
        "1 pasta com elástico A4",
        "1 régua 20cm",
        "2 lápis HB",
        "1 borracha"
      ]
    },
    {
      faixaEtaria: "5 a 6 anos",
      cor: "bg-purple-100",
      materiais: [
        "1 mochila com identificação",
        "1 lancheira térmica",
        "1 garrafa de água (500ml)",
        "1 muda de roupa completa",
        "1 estojo completo com lápis de cor (24 cores)",
        "1 caixa de giz de cera",
        "2 colas bastão",
        "1 tesoura sem ponta",
        "1 massa de modelar",
        "2 cadernos de desenho A4",
        "1 caderno quadriculado",
        "1 caderno de caligrafia",
        "1 pasta com elástico A4",
        "1 régua 30cm",
        "3 lápis HB",
        "2 borrachas",
        "1 apontador com depósito"
      ]
    }
  ];

  const observacoes = [
    "Todos os materiais devem estar identificados com o nome completo da criança",
    "A reposição de materiais será solicitada conforme a necessidade",
    "Materiais de uso coletivo (papel, tinta, cola) são fornecidos pela escola",
    "A lista pode sofrer pequenas alterações durante o ano letivo",
    "Para crianças com necessidades especiais, a lista pode ser adaptada"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-light to-accent-light overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${materialBg})` }}
        >
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Lista de Material Escolar
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Confira a lista de materiais necessários para cada faixa etária e 
            prepare seu filho para um ano letivo repleto de aprendizado e diversão.
          </p>
        </div>
      </section>

      {/* Download da Lista */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <Card className="max-w-md mx-auto border-0 shadow-lg">
            <CardContent className="p-8">
              <FileText size={48} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-primary">
                Download da Lista Completa
              </h3>
              <p className="text-foreground/80 mb-6">
                Baixe a lista completa em PDF para facilitar suas compras
              </p>
              <Button className="w-full">
                <Download className="mr-2" size={20} />
                Baixar Lista (PDF)
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Materiais por Faixa Etária */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary text-center">
            Materiais por Faixa Etária
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {materiaisPorIdade.map((grupo, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className={`inline-block px-4 py-2 rounded-full ${grupo.cor} mb-6`}>
                    <h3 className="text-xl font-bold text-primary">{grupo.faixaEtaria}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {grupo.materiais.map((material, materialIndex) => (
                      <div key={materialIndex} className="flex items-start space-x-3">
                        <CheckCircle size={20} className="text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/80">{material}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Observações Importantes */}
      <section className="py-16 bg-school-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary text-center">
            Observações Importantes
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {observacoes.map((obs, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-accent-foreground text-sm font-bold">{index + 1}</span>
                      </div>
                      <p className="text-foreground/80 leading-relaxed">{obs}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-primary-light rounded-lg">
                  <h4 className="text-lg font-semibold mb-3 text-primary">
                    Dúvidas sobre a Lista?
                  </h4>
                  <p className="text-foreground/80 mb-4">
                    Nossa equipe pedagógica está à disposição para esclarecer qualquer dúvida 
                    sobre os materiais necessários para o desenvolvimento das atividades.
                  </p>
                  <Button variant="outline">
                    Entre em Contato
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MaterialEscolar;