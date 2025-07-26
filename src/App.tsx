import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Proposta from "./pages/Proposta";
import Turmas from "./pages/Turmas";
import Espaco from "./pages/Espaco";
import Matriculas from "./pages/Matriculas";
import Contact from "./pages/Contact";
import MaterialEscolar from "./pages/MaterialEscolar";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/proposta" element={<Proposta />} />
            <Route path="/turmas" element={<Turmas />} />
            <Route path="/espaco" element={<Espaco />} />
            <Route path="/matriculas" element={<Matriculas />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/material-escolar" element={<MaterialEscolar />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
