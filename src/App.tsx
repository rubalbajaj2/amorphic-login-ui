import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LoginPage } from "./components/LoginPage";
import { DashboardPage } from "./components/DashboardPage";
import { NHSPage } from "./components/NHSPage";
import { UnifiedPublicSafetyPage } from "./components/UnifiedPublicSafetyPage";
import { LocalCouncilPage } from "./components/LocalCouncilPage";
import { FraudAnalysisPage } from "./components/FraudAnalysisPage";
import { AskMertiPage } from "./components/AskMertiPage";
import { AdministrationPage } from "./components/AdministrationPage";
import { CatalogPage } from "./components/CatalogPage";
import { DatasetsPage } from "./components/DatasetsPage";
import { GlossariesPage } from "./components/GlossariesPage";
import { HCLSPage } from "./components/HCLSPage";
import { SharedResourcesPage } from "./components/SharedResourcesPage";
import { ETLJobsPage } from "./components/ETLJobsPage";
import { DataPipelinesPage } from "./components/DataPipelinesPage";
import { AppsPage } from "./components/AppsPage";
import { PlaygroundPage } from "./components/PlaygroundPage";
import { DataLabsPage } from "./components/DataLabsPage";
import { AIChatbotPage } from "./components/AIChatbotPage";
import { useToast } from "@/hooks/use-toast";

const queryClient = new QueryClient();

type PageType = 'dashboard' | 'nhs' | 'administration' | 'catalog' | 'datasets' | 'glossaries' | 'hcls' | 'shared-resources' | 'etl-jobs' | 'data-pipelines' | 'apps' | 'playground' | 'data-labs' | 'unified-public-safety' | 'local-council' | 'fraud-analysis' | 'ai-chatbot' | 'ask-merti';

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

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    const commonProps = { onLogout: handleLogout, onNavigate: handleNavigate };
    
    switch (currentPage) {
      case 'nhs':
        return <NHSPage onLogout={handleLogout} onNavigate={handleNavigate} />;
      case 'unified-public-safety':
        return <UnifiedPublicSafetyPage onLogout={handleLogout} onNavigate={handleNavigate} />;
      case 'local-council':
        return <LocalCouncilPage onLogout={handleLogout} onNavigate={handleNavigate} />;
      case 'fraud-analysis':
        return <FraudAnalysisPage onLogout={handleLogout} onNavigate={handleNavigate} />;
      case 'ask-merti':
        return <AskMertiPage onLogout={handleLogout} onNavigate={handleNavigate} />;
      case 'administration':
        return <AdministrationPage {...commonProps} />;
      case 'catalog':
        return <CatalogPage {...commonProps} />;
      case 'datasets':
        return <DatasetsPage {...commonProps} />;
      case 'glossaries':
        return <GlossariesPage {...commonProps} />;
      case 'hcls':
        return <HCLSPage {...commonProps} />;
      case 'shared-resources':
        return <SharedResourcesPage {...commonProps} />;
      case 'etl-jobs':
        return <ETLJobsPage {...commonProps} />;
      case 'data-pipelines':
        return <DataPipelinesPage {...commonProps} />;
      case 'apps':
        return <AppsPage {...commonProps} />;
      case 'playground':
        return <PlaygroundPage {...commonProps} />;
      case 'data-labs':
        return <DataLabsPage {...commonProps} />;
      case 'ai-chatbot':
        return <AIChatbotPage {...commonProps} />;
      default:
        return <DashboardPage onLogout={handleLogout} onNavigate={handleNavigate} />;
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
