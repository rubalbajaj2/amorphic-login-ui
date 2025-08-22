import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CreateDatasourceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onS3Select: () => void;
}

export const CreateDatasourceModal = ({ isOpen, onClose, onS3Select }: CreateDatasourceModalProps) => {
  if (!isOpen) return null;

  const datasourceTypes = [
    { name: "Amorphic", icon: "🔷" },
    { name: "Bedrock", icon: "🪨" },
    { name: "S3", icon: "🪣", onClick: onS3Select },
    { name: "External API", icon: "🔗" },
    { name: "Email", icon: "📧" },
    { name: "SaaS", icon: "☁️" },
    { name: "Stream", icon: "🌊" },
    { name: "Oracle", icon: "🔴" },
    { name: "MySQL", icon: "🐬" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Microsoft SQL Server", icon: "🏢" },
    { name: "IBM DB2(LUW)", icon: "🔵" },
    { name: "Amazon Redshift", icon: "📊" },
    { name: "Amazon Aurora", icon: "🌅" },
    { name: "JDBC", icon: "☕" },
    { name: "Aurora MySQL", icon: "🌄" }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      
      {/* Modal Container */}
      <div className="relative bg-card rounded-lg shadow-xl p-8 max-w-4xl w-full mx-4 animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-heading-md font-semibold text-foreground">
            Create Datasource
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X size={20} />
          </Button>
        </div>

        {/* Datasource Options Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {datasourceTypes.map((type, index) => (
            <button
              key={index}
              onClick={type.onClick || (() => {})}
              className="border border-border rounded-lg p-6 flex flex-col items-center justify-center gap-4 text-center hover:shadow-md hover:border-primary transition-all"
            >
              <div className="text-3xl">{type.icon}</div>
              <span className="font-medium text-foreground text-sm">{type.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};