import { AppHeader } from "./dashboard/AppHeader";
import { DatasourcesContent } from "./dashboard/DatasourcesContent";

interface DashboardPageProps {
  onLogout: () => void;
  onNavigate?: (page: string) => void;
}

export const DashboardPage = ({ onLogout, onNavigate }: DashboardPageProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <AppHeader onLogout={onLogout} onNavigate={onNavigate} />
      <DatasourcesContent />
    </div>
  );
};