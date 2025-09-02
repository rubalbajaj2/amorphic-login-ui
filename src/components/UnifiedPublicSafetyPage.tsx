import { AppHeader } from "./dashboard/AppHeader";

interface UnifiedPublicSafetyPageProps {
  onLogout: () => void;
  onNavigate?: (page: string) => void;
}

export const UnifiedPublicSafetyPage = ({ onLogout, onNavigate }: UnifiedPublicSafetyPageProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <AppHeader onLogout={onLogout} onNavigate={onNavigate} />
      <div className="flex-1 p-4">
        <div className="h-full w-full rounded-lg overflow-hidden border border-border">
          <iframe
            src="https://public-safety-amplify.lovable.app/"
            className="w-full h-full"
            title="Unified Public Safety Portal"
            style={{ minHeight: 'calc(100vh - 120px)' }}
          />
        </div>
      </div>
    </div>
  );
};