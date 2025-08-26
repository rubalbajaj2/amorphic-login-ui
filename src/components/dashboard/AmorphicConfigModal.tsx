import { useState } from "react";
import { X, Database, Plus, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface AmorphicConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
}

interface FormData {
  amorphicUrl: string;
  accessToken: string;
  domain: string;
  tenant: string;
  enableSchedule: boolean;
}

interface FormErrors {
  [key: string]: string;
}

export const AmorphicConfigModal = ({ isOpen, onClose, onBack }: AmorphicConfigModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    amorphicUrl: "",
    accessToken: "",
    domain: "",
    tenant: "",
    enableSchedule: false
  });

  const [errors, setErrors] = useState<FormErrors>({});

  if (!isOpen) return null;

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formData.amorphicUrl.trim()) {
      newErrors.amorphicUrl = "Please provide Amorphic URL";
    }
    if (!formData.accessToken.trim()) {
      newErrors.accessToken = "Please provide Access Token";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCreate = () => {
    if (validateForm()) {
      console.log("Creating Amorphic datasource:", formData);
      onClose();
    }
  };

  const getInputClassName = (field: string) => {
    return errors[field] 
      ? "border-destructive focus:border-destructive focus:ring-destructive" 
      : "";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      
      {/* Pop-up Modal */}
      <div className="relative bg-card rounded-lg shadow-xl p-6 max-w-md w-full mx-4 max-h-[90vh] flex flex-col animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Database size={20} className="text-primary" />
              <Plus size={12} className="text-primary" />
            </div>
            <div>
              <h2 className="font-semibold text-foreground">Add New Datasource</h2>
              <p className="text-sm text-muted-foreground">Setup a new datasource for efficient data flow</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X size={20} />
          </Button>
        </div>

        {/* Form */}
        <div className="flex-1 overflow-y-auto">
          <div className="space-y-6">
            {/* Section Title */}
            <div>
              <h3 className="font-medium text-foreground mb-1">Amorphic Configuration details</h3>
              <p className="text-sm text-muted-foreground">Configure the datasource</p>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              {/* Amorphic URL */}
              <div>
                <Label htmlFor="amorphicUrl">Amorphic URL</Label>
                <Input
                  id="amorphicUrl"
                  value={formData.amorphicUrl}
                  onChange={(e) => handleInputChange("amorphicUrl", e.target.value)}
                  className={getInputClassName("amorphicUrl")}
                  placeholder="Provide Amorphic URL to connect."
                />
                {errors.amorphicUrl && (
                  <div className="flex items-center gap-1 mt-1 text-sm text-destructive">
                    <AlertTriangle size={14} />
                    {errors.amorphicUrl}
                  </div>
                )}
              </div>

              {/* Access Token */}
              <div>
                <Label htmlFor="accessToken">Access Token</Label>
                <Input
                  id="accessToken"
                  type="password"
                  value={formData.accessToken}
                  onChange={(e) => handleInputChange("accessToken", e.target.value)}
                  className={getInputClassName("accessToken")}
                  placeholder="Please provide Access Token"
                />
                {errors.accessToken && (
                  <div className="flex items-center gap-1 mt-1 text-sm text-destructive">
                    <AlertTriangle size={14} />
                    {errors.accessToken}
                  </div>
                )}
              </div>
            </div>

            {/* Asset Filters Section */}
            <div>
              <h3 className="font-medium text-foreground mb-1">Choose Asset Filters (Optional)</h3>
              <p className="text-sm text-muted-foreground">Choose from where to inject data to current amorphic.</p>
              
              <div className="space-y-4 mt-4">
                {/* Domain */}
                <div>
                  <Label htmlFor="domain">Domain</Label>
                  <Input
                    id="domain"
                    value={formData.domain}
                    onChange={(e) => handleInputChange("domain", e.target.value)}
                    placeholder="Regex to match Domain names"
                  />
                </div>

                {/* Tenant */}
                <div>
                  <Label htmlFor="tenant">Tenant</Label>
                  <Input
                    id="tenant"
                    value={formData.tenant}
                    onChange={(e) => handleInputChange("tenant", e.target.value)}
                    placeholder="Regex to match Tenant names"
                  />
                </div>
              </div>
            </div>

            {/* Schedule Configuration Section */}
            <div>
              <h3 className="font-medium text-foreground mb-1">Schedule Configuration (Optional)</h3>
              <p className="text-sm text-muted-foreground">Schedule using cron expressions</p>
              
              <div className="flex items-center justify-between mt-4 p-4 border rounded-lg">
                <div>
                  <div className="font-medium text-foreground">Enable Schedule</div>
                  <div className="text-sm text-muted-foreground">Enable this to automate data flow from amorphic.</div>
                </div>
                <Switch
                  checked={formData.enableSchedule}
                  onCheckedChange={(checked) => handleInputChange("enableSchedule", checked)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2 pt-6 border-t">
          <Button variant="outline" onClick={onBack}>
            Cancel
          </Button>
          <Button onClick={handleCreate}>
            Create
          </Button>
        </div>
      </div>
    </div>
  );
};