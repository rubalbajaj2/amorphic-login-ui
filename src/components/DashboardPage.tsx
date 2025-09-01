import { AppHeader } from "./dashboard/AppHeader";
import { DatasourcesContent } from "./dashboard/DatasourcesContent";

interface DashboardPageProps {
  onLogout: () => void;
  onNHSClick?: () => void;
  onNavigate?: (page: string) => void;
}

export const DashboardPage = ({ onLogout, onNHSClick, onNavigate }: DashboardPageProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <AppHeader onLogout={onLogout} onNHSClick={onNHSClick} onNavigate={onNavigate} />
      <DatasourcesContent />
    </div>
  );
};