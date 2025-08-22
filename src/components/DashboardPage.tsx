import { AppHeader } from "./dashboard/AppHeader";
import { DatasourcesContent } from "./dashboard/DatasourcesContent";

interface DashboardPageProps {
  onLogout: () => void;
}

export const DashboardPage = ({ onLogout }: DashboardPageProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <AppHeader onLogout={onLogout} />
      <DatasourcesContent />
    </div>
  );
};