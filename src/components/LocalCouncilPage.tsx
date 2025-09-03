import { AppHeader } from "./dashboard/AppHeader";

interface LocalCouncilPageProps {
  onLogout: () => void;
  onNavigate?: (page: string) => void;
}

export const LocalCouncilPage = ({ onLogout, onNavigate }: LocalCouncilPageProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <AppHeader onLogout={onLogout} onNavigate={onNavigate} />
      <div className="flex-1 p-4">
        <div className="h-full w-full rounded-lg overflow-hidden border border-border">
          <iframe
            src="https://civica-front-stage.lovable.app/"
            className="w-full h-full"
            title="Local Council Intelligent Automation Platform"
            style={{ minHeight: 'calc(100vh - 120px)' }}
          />
        </div>
      </div>
    </div>
  );
};