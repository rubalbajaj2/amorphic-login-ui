import { Database, Workflow, Settings, Share, Users, ExternalLink } from "lucide-react";
import { MenuCard } from "./MenuCard";

interface ManageMenuProps {
  onClose: () => void;
}

export const ManageMenu = ({ onClose }: ManageMenuProps) => {
  const items = [
    {
      icon: Database,
      title: "Datasources",
      description: "Manage datasources and their connections"
    },
    {
      icon: Workflow,
      title: "Data Pipelines",
      description: "Manage data pipelines, orchestration, and scheduling"
    },
    {
      icon: Settings,
      title: "ETL Jobs",
      description: "Manage ETL jobs"
    },
    {
      icon: Share,
      title: "Shared Resources",
      description: "Manage Shared resources like libraries, parameters, etc."
    },
    {
      icon: Users,
      title: "Administration",
      description: "Manage users, roles, costs and permissions"
    }
  ];

  return (
    <div className="absolute top-full left-0 right-0 bg-popover rounded-lg shadow-xl border border-border p-6 animate-accordion-down z-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-3 gap-4 mb-6">
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