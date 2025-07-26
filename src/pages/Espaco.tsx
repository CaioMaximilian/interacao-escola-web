import { Card, CardContent } from "@/components/ui/card";
import { Home, TreePine, Utensils, Gamepad2, BookOpen, Shield } from "lucide-react";
import espacoBg from "@/assets/espaco-bg.jpg";

const Espaco = () => {
  const espacos = [
    {
      nome: "Salas de Aula",
      icon: Home,
      descricao: "Ambientes aconchegantes e bem iluminados, com mobiliário adequado para cada faixa etária. Cada sala é decorada com os trabalhos das crianças e possui cantinhos específicos para diferentes atividades.",
      caracteristicas: [
        "Mobiliário ergonômico",
        "Iluminação natural abundante",
        "Cantinhos de leitura",
        "Materiais pedagógicos variados",
        "Espaço para exposição dos trabalhos"
      ]
    },
    {
      nome: "Parque Externo",
      icon: TreePine,
      descricao: "Um amplo parque com brinquedos seguros e certificados, onde as crianças podem correr, brincar e desenvolver suas habilidades motoras em contato com a natureza.",
      caracteristicas: [
        "Brinquedos certificados pelo INMETRO",
        "Piso emborrachado para segurança",
        "Área coberta para dias de chuva",
        "Jardim com plantas nativas",
        "Espaço para atividades esportivas"
      ]
    },
    {
      nome: "Brinquedoteca",
      icon: Gamepad2,
      descricao: "Um espaço mágico repleto de jogos, brinquedos educativos e materiais lúdicos organizados por categorias e idades, estimulando a imaginação e criatividade.",
      caracteristicas: [
        "Jogos educativos variados",
        "Fantasias e acessórios",
        "Brinquedos de madeira",
        "Cantinho da casinha",
        "Materiais de arte e criação"
      ]
    },
    {
      nome: "Refeitório",
      icon: Utensils,
      descricao: "Ambiente acolhedor e higiênico onde as refeições são compartilhadas, promovendo hábitos alimentares saudáveis e momentos de socialização.",
      caracteristicas: [
        "Mesas e cadeiras adequadas",
        "Cozinha com nutricionista",
        "Cardápio balanceado",
        "Ambiente climatizado",
        "Utensílios seguros para crianças"
      ]
    },
    {
      nome: "Biblioteca Infantil",
      icon: BookOpen,
      descricao: "Um cantinho especial dedicado à leitura e contação de histórias, com um acervo rico em livros infantis adequados para cada idade.",
      caracteristicas: [
        "Acervo de livros infantis",
        "Almofadas e tapetes confortáveis",
        "Teatro de fantoches",
        "Espaço para contação de histórias",
        "Livros em braile e audiolivros"
      ]
    },
    {
      nome: "Área Verde",
      icon: TreePine,
      descricao: "Jardins e horta educativa onde as crianças aprendem sobre a natureza, sustentabilidade e desenvolvem o cuidado com o meio ambiente.",
      caracteristicas: [
        "Horta educativa",
        "Árvores frutíferas",
        "Composteira pedagógica",
        "Jardim sensorial",
        "Espaço para aulas ao ar livre"
      ]
    }
  ];

  const seguranca = [
    "Circuito interno de câmeras",
    "Portão eletrônico com interfone",
    "Controle de acesso rigoroso",
    "Extintores e saídas de emergência",
    "Equipe treinada em primeiros socorros",
    "Protocolo de segurança atualizado"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-light to-accent-light overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${espacoBg})` }}
        >
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Nosso Espaço
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Conheça nossa infraestrutura pensada especialmente para o bem-estar, 
            segurança e desenvolvimento das crianças.
          </p>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-primary">
              Um Ambiente Pensado para as Crianças
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Cada espaço da nossa escola foi cuidadosamente planejado para proporcionar 
              segurança, conforto e estímulo ao aprendizado. Nossos ambientes são amplos, 
              bem ventilados e adaptados às necessidades de cada faixa etária.
            </p>
          </div>
        </div>
      </section>

      {/* Galeria de Espaços */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary text-center">
            Conheça Nossos Ambientes
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {espacos.map((espaco, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="h-48 bg-gradient-to-br from-primary-light to-accent-light flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <espaco.icon size={40} className="text-primary" />
                      </div>
                      <p className="text-sm text-foreground/60">📸 Galeria de fotos</p>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-primary">{espaco.nome}</h3>
                    <p className="text-foreground/80 leading-relaxed mb-6">{espaco.descricao}</p>
                    
                    <h4 className="text-lg font-semibold mb-3 text-accent">Características:</h4>
                    <ul className="space-y-2">
                      {espaco.caracteristicas.map((caracteristica, charIndex) => (
                        <li key={charIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span className="text-foreground/80 text-sm">{caracteristica}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Segurança */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary text-center">
            Segurança em Primeiro Lugar
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <Shield size={32} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary">Protocolo de Segurança</h3>
                    <p className="text-foreground/80">Garantimos a proteção e bem-estar de todas as crianças</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {seguranca.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-accent rounded-full"></div>
                      <span className="text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-school-light rounded-lg">
                  <h4 className="text-lg font-semibold mb-3 text-primary">Acessibilidade</h4>
                  <p className="text-foreground/80">
                    Toda nossa escola é adaptada para receber crianças com necessidades especiais, 
                    com rampas de acesso, banheiros adaptados e espaços inclusivos que garantem 
                    a participação de todos nas atividades.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Visita Virtual */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Venha Conhecer Pessoalmente!
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Nada substitui uma visita presencial. Agende um horário e venha conhecer 
            todos os nossos espaços, conversar com nossa equipe e sentir a energia 
            acolhedora da Escola Interação.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <a 
              href="/contato" 
              className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Agendar Visita
            </a>
            <a 
              href="tel:(11)1234-5678" 
              className="inline-block bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/20 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Ligar Agora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Espaco;