import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import Workshops from "./pages/Workshops";
import WorkshopDetail from "./pages/WorkshopDetail";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import CodeClutch from "./pages/CodeClutch";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* <Navbar /> */}
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/workshops/:id" element={<WorkshopDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/codeclutch" element={<CodeClutch />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </BrowserRouter>
    </TooltipProvider>

    {/* <h1 className="font-display font-bold text-center text-xl mb-1">
    Fest aipoyindhi
    </h1>
    <h1 className="font-display font-bold text-center text-xl mb-1">
      Thank you everyone........
    </h1>
    <img
      className="justify-center"
      style={{ height: "70%", width: "100%" }}
      src="https://res.cloudinary.com/dvvijlfio/image/upload/v1775980156/WhatsApp_Image_2026-04-11_at_11.13.12_mrljkm.jpg"
    /> */}
  </QueryClientProvider>
);

export default App;
