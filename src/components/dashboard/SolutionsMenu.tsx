import { Building2 } from "lucide-react";

interface SolutionsMenuProps {
  onClose: () => void;
  onNHSClick: () => void;
}

export const SolutionsMenu = ({ onClose, onNHSClick }: SolutionsMenuProps) => {
  const handleNHSClick = () => {
    onNHSClick();
    onClose();
  };

  return (
    <div className="absolute top-full left-0 right-0 bg-card border-b border-border shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="space-y-3">
          <button
            onClick={handleNHSClick}
            className="w-full flex items-start gap-3 p-3 rounded-lg hover:bg-accent transition-colors text-left group"
          >
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
                <path d="M8 12v6"/>
                <path d="M16 12v6"/>
              </svg>
            </div>
            <div>
              <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                NHS
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                Intelligent Automation Scheduling Platform
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};