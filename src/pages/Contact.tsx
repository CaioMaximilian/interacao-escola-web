import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import contatoBg from "@/assets/contato-bg.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.nome || !formData.email || !formData.telefone || !formData.mensagem) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos do formulário.",
        variant: "destructive"
      });
      return;
    }

    // Simulação de envio
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em breve. Obrigado pelo interesse na Escola Interação!",
    });

    // Limpar formulário
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      mensagem: ""
    });
  };

  const contatos = [
    {
      icon: MapPin,
      titulo: "Endereço",
      info: "Rua das Crianças, 123",
      info2: "Bairro Alegria - São Paulo, SP",
      info3: "CEP: 01234-567"
    },
    {
      icon: Phone,
      titulo: "Telefone",
      info: "(11) 1234-5678",
      info2: "(11) 9 8765-4321",
      link: "tel:(11)1234-5678"
    },
    {
      icon: Mail,
      titulo: "E-mail",
      info: "contato@escolainteracao.com.br",
      info2: "matriculas@escolainteracao.com.br",
      link: "mailto:contato@escolainteracao.com.br"
    },
    {
      icon: Clock,
      titulo: "Horários",
      info: "Segunda a Sexta: 7h às 18h",
      info2: "Sábado: 8h às 12h",
      info3: "Domingo: Fechado"
    }
  ];

  const horarios = [
    {
      atividade: "Funcionamento da Escola",
      horario: "Segunda a Sexta: 7h às 18h"
    },
    {
      atividade: "Atendimento aos Pais",
      horario: "Segunda a Sexta: 7h às 17h"
    },
    {
      atividade: "Visitas Agendadas",
      horario: "Segunda a Sexta: 9h às 16h"
    },
    {
      atividade: "Atendimento Administrativo",
      horario: "Sábado: 8h às 12h"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-light to-accent-light overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${contatoBg})` }}
        >
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Entre em Contato
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Estamos aqui para esclarecer suas dúvidas e ajudar você a conhecer 
            melhor a Escola Interação. Fale conosco!
          </p>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Formulário */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-primary">
                Envie sua Mensagem
              </h2>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nome">Nome Completo *</Label>
                        <Input
                          id="nome"
                          name="nome"
                          type="text"
                          value={formData.nome}
                          onChange={handleInputChange}
                          placeholder="Seu nome completo"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefone">Telefone *</Label>
                        <Input
                          id="telefone"
                          name="telefone"
                          type="tel"
                          value={formData.telefone}
                          onChange={handleInputChange}
                          placeholder="(11) 99999-9999"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="mensagem">Mensagem *</Label>
                      <Textarea
                        id="mensagem"
                        name="mensagem"
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        placeholder="Digite sua mensagem, dúvidas ou o que gostaria de saber sobre a escola..."
                        className="min-h-32"
                        required
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                      <Send className="mr-2" size={20} />
                      Enviar Mensagem
                    </Button>
                    
                    <p className="text-sm text-foreground/60 text-center">
                      * Campos obrigatórios. Entraremos em contato em até 24 horas.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Informações de Contato */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-primary">
                Nossas Informações
              </h2>
              <div className="space-y-6">
                {contatos.map((contato, index) => (
                  <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <contato.icon size={24} className="text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2 text-primary">{contato.titulo}</h3>
                          {contato.link ? (
                            <a href={contato.link} className="text-accent hover:underline">
                              {contato.info}
                            </a>
                          ) : (
                            <p className="text-foreground/80">{contato.info}</p>
                          )}
                          {contato.info2 && (
                            <p className="text-foreground/80">{contato.info2}</p>
                          )}
                          {contato.info3 && (
                            <p className="text-foreground/80">{contato.info3}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horários Detalhados */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary text-center">
            Horários de Atendimento
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {horarios.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-school-light rounded-lg">
                      <span className="font-medium text-primary">{item.atividade}</span>
                      <span className="text-foreground/80">{item.horario}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary text-center">
            Como Chegar
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="h-96 bg-gradient-to-br from-primary-light to-accent-light flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={64} className="text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-primary mb-2">Mapa do Google Maps</h3>
                    <p className="text-foreground/80">Rua das Crianças, 123 - Bairro Alegria</p>
                    <p className="text-foreground/80">São Paulo, SP - CEP: 01234-567</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-8 text-center">
              <p className="text-foreground/80 mb-4">
                Estamos localizados em uma região de fácil acesso, próximo ao metrô e com 
                várias opções de transporte público. Temos estacionamento disponível para os pais.
              </p>
              <Button asChild variant="outline" size="lg">
                <a 
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver no Google Maps
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;