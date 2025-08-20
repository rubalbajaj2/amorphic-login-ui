import { Book, Database, Tag, Grid3X3, ExternalLink } from "lucide-react";
import { MenuCard } from "./MenuCard";

interface DiscoverMenuProps {
  onClose: () => void;
}

export const DiscoverMenu = ({ onClose }: DiscoverMenuProps) => {
  const items = [
    {
      icon: Book,
      title: "Catalog",
      description: "Browse all available assets"
    },
    {
      icon: Database,
      title: "Datasets",
      description: "Access and manage data"
    },
    {
      icon: Tag,
      title: "Glossaries",
      description: "Define and align terms"
    },
    {
      icon: Grid3X3,
      title: "HCLS",
      description: "Manage HCLS Health Lake"
    }
  ];

  return (
    <div className="absolute top-full left-0 right-0 bg-popover rounded-lg shadow-xl border border-border p-6 animate-accordion-down z-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-4 mb-6">
          {items.map((item) => (
            <MenuCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              onClick={onClose}
            />
          ))}
        </div>
        
        <button className="flex items-center gap-2 border border-input rounded-md p-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          See Documentation
          <ExternalLink size={14} />
        </button>
      </div>
    </div>
  );
};