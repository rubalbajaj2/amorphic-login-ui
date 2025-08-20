import { LucideIcon } from "lucide-react";

interface MenuCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick: () => void;
}

export const MenuCard = ({ icon: Icon, title, description, onClick }: MenuCardProps) => {
  return (
    <button
      onClick={onClick}
      className="flex items-start gap-3 p-4 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors text-left"
    >
      <Icon size={20} className="text-primary mt-1 flex-shrink-0" />
      <div>
        <h3 className="font-medium text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
    </button>
  );
};