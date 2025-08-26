import { useState } from "react";
import { X, Database, Plus, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface StreamConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
}

interface FormData {
  streamType: string;
  streamMode: string;
}

interface FormErrors {
  [key: string]: string;
}

export const StreamConfigModal = ({ isOpen, onClose, onBack }: StreamConfigModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    streamType: "kinesis",
    streamMode: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const streamModes = ["Provisioned", "On Demand"];

  if (!isOpen) return null;

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user makes selection
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formData.streamType) {
      newErrors.streamType = "Please select a Stream Type";
    }
    if (!formData.streamMode) {
      newErrors.streamMode = "Please select a Stream Mode";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCreate = () => {
    if (validateForm()) {
      console.log("Creating Stream datasource:", formData);
      onClose();
    }
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
              <h3 className="font-medium text-foreground mb-1">Stream Type Configuration details</h3>
              <p className="text-sm text-muted-foreground">Configure the datasource</p>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              {/* Stream Type */}
              <div>
                <Label htmlFor="streamType">Stream Type</Label>
                <Select value={formData.streamType} onValueChange={(value) => handleSelectChange("streamType", value)}>
                  <SelectTrigger className={errors.streamType ? "border-destructive focus:border-destructive focus:ring-destructive" : ""}>
                    <SelectValue placeholder="Select stream type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kinesis">kinesis</SelectItem>
                  </SelectContent>
                </Select>
                {errors.streamType && (
                  <div className="flex items-center gap-1 mt-1 text-sm text-destructive">
                    <AlertTriangle size={14} />
                    {errors.streamType}
                  </div>
                )}
              </div>

              {/* Stream Mode */}
              <div>
                <Label htmlFor="streamMode">Stream Mode</Label>
                <Select value={formData.streamMode} onValueChange={(value) => handleSelectChange("streamMode", value)}>
                  <SelectTrigger className={errors.streamMode ? "border-destructive focus:border-destructive focus:ring-destructive" : ""}>
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    {streamModes.map((mode) => (
                      <SelectItem key={mode} value={mode.toLowerCase().replace(" ", "-")}>
                        {mode}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.streamMode && (
                  <div className="flex items-center gap-1 mt-1 text-sm text-destructive">
                    <AlertTriangle size={14} />
                    {errors.streamMode}
                  </div>
                )}
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