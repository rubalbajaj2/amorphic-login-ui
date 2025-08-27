import { useState } from "react";
import { X, Database, Plus, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface EmailConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
}

interface FormData {
  datasourceName: string;
  emailAddress: string;
  enableScan: boolean;
  enableTLS: boolean;
}

interface FormErrors {
  [key: string]: string;
}

export const EmailConfigModal = ({ isOpen, onClose, onBack }: EmailConfigModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    datasourceName: "",
    emailAddress: "",
    enableScan: false,
    enableTLS: false
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
    
    if (!formData.datasourceName.trim()) {
      newErrors.datasourceName = "Please enter Datasource Name";
    }
    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = "Please enter Email Address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress)) {
      newErrors.emailAddress = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCreate = () => {
    if (validateForm()) {
      console.log("Creating Email datasource:", formData);
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
              <h3 className="font-medium text-foreground mb-1">Email Configuration details</h3>
              <p className="text-sm text-muted-foreground">Enter datasource details</p>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              {/* Datasource Name */}
              <div>
                <Label htmlFor="datasourceName">Datasource Name</Label>
                <Input
                  id="datasourceName"
                  value={formData.datasourceName}
                  onChange={(e) => handleInputChange("datasourceName", e.target.value)}
                  className={getInputClassName("datasourceName")}
                  placeholder="Enter datasource name"
                />
                {errors.datasourceName && (
                  <div className="flex items-center gap-1 mt-1 text-sm text-destructive">
                    <AlertTriangle size={14} />
                    {errors.datasourceName}
                  </div>
                )}
              </div>

              {/* Email Address */}
              <div>
                <Label htmlFor="emailAddress">Email Address</Label>
                <Input
                  id="emailAddress"
                  type="email"
                  value={formData.emailAddress}
                  onChange={(e) => handleInputChange("emailAddress", e.target.value)}
                  className={getInputClassName("emailAddress")}
                  placeholder="Enter email address"
                />
                {errors.emailAddress && (
                  <div className="flex items-center gap-1 mt-1 text-sm text-destructive">
                    <AlertTriangle size={14} />
                    {errors.emailAddress}
                  </div>
                )}
              </div>

              {/* Enable Scan */}
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <div className="font-medium text-foreground">Enable Scan</div>
                  <div className="text-sm text-muted-foreground">Enable to scan incoming data (emails) for viruses and spam.</div>
                </div>
                <Switch
                  checked={formData.enableScan}
                  onCheckedChange={(checked) => handleInputChange("enableScan", checked)}
                />
              </div>

              {/* Enable TLS */}
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <div className="font-medium text-foreground">Enable TLS</div>
                  <div className="text-sm text-muted-foreground">Allow the rejection of any income messages that are not sent over a secure connection.</div>
                </div>
                <Switch
                  checked={formData.enableTLS}
                  onCheckedChange={(checked) => handleInputChange("enableTLS", checked)}
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