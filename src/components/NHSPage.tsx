import { AppHeader } from "./dashboard/AppHeader";

interface NHSPageProps {
  onLogout: () => void;
}

export const NHSPage = ({ onLogout }: NHSPageProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <AppHeader onLogout={onLogout} />
      <div className="flex-1 p-4">
        <div className="h-full w-full rounded-lg overflow-hidden border border-border">
          <iframe
            src="https://nhs-ai-journey.lovable.app/dashboard/admin"
            className="w-full h-full"
            title="NHS Intelligent Automation Scheduling Platform"
            style={{ minHeight: 'calc(100vh - 120px)' }}
          />
        </div>
      </div>
    </div>
  );
};