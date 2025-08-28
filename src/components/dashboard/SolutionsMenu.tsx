import { Building2 } from "lucide-react";
import hospitalLogo from "@/assets/hospital-logo.png";

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
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wide">
              Healthcare Solutions
            </h3>
            <div className="space-y-3">
              <button
                onClick={handleNHSClick}
                className="w-full flex items-start gap-3 p-3 rounded-lg hover:bg-accent transition-colors text-left group"
              >
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <img src={hospitalLogo} alt="NHS" className="w-5 h-5" />
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
      </div>
    </div>
  );
};