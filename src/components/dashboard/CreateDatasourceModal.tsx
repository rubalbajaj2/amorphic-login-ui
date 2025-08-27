import { X, Database, Cloud, FolderOpen, Link, Mail, CloudSnow, Waves, Circle, CircleDot, Server, Building, BarChart3, Sunrise, Coffee, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CreateDatasourceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onS3Select: () => void;
  onExternalAPISelect: () => void;
  onAmorphicSelect: () => void;
  onEmailSelect: () => void;
  onSaaSSelect: () => void;
  onStreamSelect: () => void;
  onOracleSelect: () => void;
  onMySQLSelect: () => void;
}

export const CreateDatasourceModal = ({ isOpen, onClose, onS3Select, onExternalAPISelect, onAmorphicSelect, onEmailSelect, onSaaSSelect, onStreamSelect, onOracleSelect, onMySQLSelect }: CreateDatasourceModalProps) => {
  if (!isOpen) return null;

  const datasourceTypes = [
    { name: "Amorphic", icon: Database, onClick: onAmorphicSelect },
    { name: "Bedrock", icon: Mountain, onClick: undefined },
    { name: "S3", icon: FolderOpen, onClick: onS3Select },
    { name: "External API", icon: Link, onClick: onExternalAPISelect },
    { name: "Email", icon: Mail, onClick: onEmailSelect },
    { name: "SaaS", icon: Cloud, onClick: onSaaSSelect },
    { name: "Stream", icon: Waves, onClick: onStreamSelect },
    { name: "Oracle", icon: Circle, onClick: onOracleSelect },
    { name: "MySQL", icon: CircleDot, onClick: onMySQLSelect },
    { name: "PostgreSQL", icon: Server, onClick: undefined },
    { name: "Microsoft SQL Server", icon: Building, onClick: undefined },
    { name: "IBM DB2(LUW)", icon: Database, onClick: undefined },
    { name: "Amazon Redshift", icon: BarChart3, onClick: undefined },
    { name: "Amazon Aurora", icon: Sunrise, onClick: undefined },
    { name: "JDBC", icon: Coffee, onClick: undefined },
    { name: "Aurora MySQL", icon: Mountain, onClick: undefined }
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
          {datasourceTypes.map((type, index) => {
            const IconComponent = type.icon;
            return (
              <button
                key={index}
                onClick={type.onClick || (() => {})}
                className="border border-border rounded-lg p-6 flex flex-col items-center justify-center gap-4 text-center hover:shadow-md hover:border-primary transition-all"
              >
                <IconComponent size={32} className="text-primary" />
                <span className="font-medium text-foreground text-sm">{type.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};