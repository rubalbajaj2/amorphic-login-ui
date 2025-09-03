import { AppHeader } from "./dashboard/AppHeader";

interface FraudAnalysisPageProps {
  onLogout: () => void;
  onNavigate?: (page: string) => void;
}

export const FraudAnalysisPage = ({ onLogout, onNavigate }: FraudAnalysisPageProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <AppHeader onLogout={onLogout} onNavigate={onNavigate} />
      <div className="flex-1 p-4">
        <div className="h-full w-full rounded-lg overflow-hidden border border-border">
          <iframe
            src="https://v0-idpa-morphic.vercel.app/"
            className="w-full h-full"
            title="Fraud Analysis Dashboard"
            style={{ minHeight: 'calc(100vh - 120px)' }}
          />
        </div>
      </div>
    </div>
  );
};