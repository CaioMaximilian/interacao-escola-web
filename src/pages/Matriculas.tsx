import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import matriculasBg from "@/assets/matriculas-bg.jpg";

const Matriculas = () => {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-light to-accent-light overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${matriculasBg})` }}
        >
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Matrículas 2024
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Entre em contato conosco e faça parte da família Escola Interação! 
            Estamos prontos para receber seu filho com todo carinho e dedicação.
          </p>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Formulário */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Mail size={24} className="text-accent" />
                    <h2 className="text-2xl font-bold text-primary">
                      Formulário de Contato
                    </h2>
                  </div>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="nome">Nome do Responsável *</Label>
                        <Input id="nome" type="text" placeholder="Seu nome completo" required />
                      </div>
                      <div>
                        <Label htmlFor="telefone">Telefone *</Label>
                        <Input id="telefone" type="tel" placeholder="(11) 99999-9999" required />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input id="email" type="email" placeholder="seuemail@exemplo.com" required />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="crianca">Nome da Criança</Label>
                        <Input id="crianca" type="text" placeholder="Nome da criança" />
                      </div>
                      <div>
                        <Label htmlFor="idade">Idade da Criança</Label>
                        <Input id="idade" type="text" placeholder="Ex: 3 anos" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="mensagem">Mensagem</Label>
                      <Textarea 
                        id="mensagem" 
                        placeholder="Conte-nos sobre seu interesse na escola, dúvidas sobre matrículas ou qualquer outra informação que gostaria de compartilhar..."
                        rows={5}
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* WhatsApp e Informações */}
              <div className="space-y-8">
                
                {/* WhatsApp */}
                <Card className="border-0 shadow-lg bg-green-50">
                  <CardContent className="p-8 text-center">
                    <MessageCircle size={48} className="text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-4 text-primary">
                      Fale Conosco pelo WhatsApp
                    </h3>
                    <p className="text-foreground/80 mb-6">
                      Para um atendimento mais rápido, entre em contato diretamente 
                      pelo nosso WhatsApp. Estamos prontos para tirar suas dúvidas!
                    </p>
                    <Button 
                      asChild 
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      <a 
                        href="https://wa.me/5511123456789?text=Olá! Gostaria de informações sobre matrículas na Escola Interação."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="mr-2" size={20} />
                        (11) 1234-5678
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Informações de Contato */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-6 text-primary">
                      Outras Formas de Contato
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Phone size={20} className="text-accent" />
                        <span className="text-foreground/80">(11) 1234-5678</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail size={20} className="text-accent" />
                        <span className="text-foreground/80">contato@escolainteracao.com.br</span>
                      </div>
                    </div>
                    
                    <div className="mt-8 p-6 bg-primary-light rounded-lg">
                      <h4 className="text-lg font-semibold mb-3 text-primary">
                        Horário de Atendimento
                      </h4>
                      <p className="text-foreground/80">
                        Segunda a sexta: 7h às 18h<br />
                        Sábados: 8h às 12h<br />
                        <em>Domingos e feriados: Fechado</em>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Matriculas;