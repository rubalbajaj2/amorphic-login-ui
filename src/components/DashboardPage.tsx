import { AppHeader } from "./dashboard/AppHeader";
import { DatasourcesContent } from "./dashboard/DatasourcesContent";

interface DashboardPageProps {
  onLogout: () => void;
  onNHSClick?: () => void;
}

export const DashboardPage = ({ onLogout, onNHSClick }: DashboardPageProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <AppHeader onLogout={onLogout} onNHSClick={onNHSClick} />
      <DatasourcesContent />
    </div>
  );
};