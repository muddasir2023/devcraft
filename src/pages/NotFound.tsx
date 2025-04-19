
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-agency-gray">
        <div className="container-custom py-20 text-center">
          <h1 className="text-8xl font-bold text-agency-blue mb-4">404</h1>
          <p className="text-3xl text-gray-600 mb-8">Oops! Page not found</p>
          <p className="text-lg text-gray-500 mb-8 max-w-lg mx-auto">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          <Button className="btn-primary flex items-center mx-auto">
            <ArrowLeft size={18} className="mr-2" />
            Return to Home
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
