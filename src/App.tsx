import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LoginPage } from "./components/LoginPage";
import { DashboardPage } from "./components/DashboardPage";
import { NHSPage } from "./components/NHSPage";
import { AdministrationPage } from "./components/AdministrationPage";
import { CatalogPage } from "./components/CatalogPage";
import { useToast } from "@/hooks/use-toast";

const queryClient = new QueryClient();

type PageType = 'dashboard' | 'nhs' | 'administration' | 'catalog' | 'datasets' | 'glossaries' | 'hcls' | 'shared-resources' | 'etl-jobs' | 'data-pipelines' | 'apps' | 'playground';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState<PageType>('dashboard');
  const { toast } = useToast();

  const handleLogin = (email: string, password: string) => {
    // Mock authentication
    if (email === "admin@amorphic.com" && password === "password") {
      setIsAuthenticated(true);
      toast({
        title: "Login Successful",
        description: "Welcome to Amorphic Dashboard",
      });
      return true;
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid email or password. Try admin@amorphic.com / password",
        variant: "destructive",
      });
      return false;
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('dashboard');
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out",
    });
  };

  const handleNHSClick = () => {
    setCurrentPage('nhs');
  };

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    const commonProps = { onLogout: handleLogout, onNavigate: handleNavigate };
    
    switch (currentPage) {
      case 'nhs':
        return <NHSPage onLogout={handleLogout} />;
      case 'administration':
        return <AdministrationPage {...commonProps} />;
      case 'catalog':
        return <CatalogPage {...commonProps} />;
      default:
        return <DashboardPage onLogout={handleLogout} onNHSClick={handleNHSClick} onNavigate={handleNavigate} />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {isAuthenticated ? renderCurrentPage() : <LoginPage onLogin={handleLogin} />}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
