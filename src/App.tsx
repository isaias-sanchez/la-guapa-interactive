import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cafe from "./pages/Cafe";
import Unete from "./pages/Unete";
import NotFound from "./pages/NotFound";
import Navigation from "./components/layout/Navigation";
import CustomCursor from "./components/layout/CustomCursor";
import FilmGrain from "./components/layout/FilmGrain";
import ParallaxDecorations from "./components/layout/ParallaxDecorations";
import FloatingActions from "./components/FloatingActions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CustomCursor />
        <FilmGrain />
        <ParallaxDecorations />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cafe" element={<Cafe />} />
          <Route path="/unete" element={<Unete />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingActions />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
