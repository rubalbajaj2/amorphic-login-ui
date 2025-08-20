import { AppHeader } from "./dashboard/AppHeader";
import { MainContent } from "./dashboard/MainContent";

interface DashboardPageProps {
  onLogout: () => void;
}

export const DashboardPage = ({ onLogout }: DashboardPageProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <AppHeader onLogout={onLogout} />
      <MainContent />
    </div>
  );
};