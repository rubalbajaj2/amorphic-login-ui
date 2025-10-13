import { AppHeader } from "./dashboard/AppHeader";

interface AskMertiPageProps {
  onLogout: () => void;
  onNavigate: (page: string) => void;
}

export const AskMertiPage = ({ onLogout, onNavigate }: AskMertiPageProps) => {
  return (
    <div className="h-screen bg-background flex flex-col">
      <AppHeader onLogout={onLogout} onNavigate={onNavigate} />
      
      <div className="flex-1 w-full">
        <iframe
          src="https://ask-merti.lovable.app/"
          className="w-full h-full border-0"
          title="Ask Merti"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        />
      </div>
    </div>
  );
};
