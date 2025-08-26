import { useState } from "react";
import { X, Database, Plus, AlertTriangle, Upload, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface SaaSConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
}

interface FormData {
  appType: string;
  uploadedFile: File | null;
}

interface FormErrors {
  [key: string]: string;
}

export const SaaSConfigModal = ({ isOpen, onClose, onBack }: SaaSConfigModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    appType: "",
    uploadedFile: null
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [dragActive, setDragActive] = useState(false);

  const appTypes = [
    "slack",
    "salesforce", 
    "zendesk",
    "googleanalytics",
    "servicenow",
    "customconnector"
  ];

  if (!isOpen) return null;

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user makes selection
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleFileUpload = (file: File) => {
    if (file.type === "application/json") {
      setFormData(prev => ({ ...prev, uploadedFile: file }));
      if (errors.uploadedFile) {
        setErrors(prev => ({ ...prev, uploadedFile: "" }));
      }
    } else {
      setErrors(prev => ({ ...prev, uploadedFile: "Only JSON files are supported" }));
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFileUpload(files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFileUpload(files[0]);
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formData.appType) {
      newErrors.appType = "Please select an App Type";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCreate = () => {
    if (validateForm()) {
      console.log("Creating SaaS datasource:", formData);
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
            {/* Ingestion Type Section */}
            <div>
              <h3 className="font-medium text-foreground mb-1">Ingestion Type</h3>
              <p className="text-sm text-muted-foreground">Enter Ingestion details</p>
            </div>

            {/* App Type */}
            <div>
              <Label htmlFor="appType">App Type</Label>
              <Select value={formData.appType} onValueChange={(value) => handleSelectChange("appType", value)}>
                <SelectTrigger className={errors.appType ? "border-destructive focus:border-destructive focus:ring-destructive" : ""}>
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  {appTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                  <div className="px-2 py-1 border-t">
                    <Button variant="ghost" size="sm" className="w-full justify-start text-primary">
                      <Plus size={16} className="mr-2" />
                      Create Custom Connector
                    </Button>
                  </div>
                </SelectContent>
              </Select>
              {errors.appType && (
                <div className="flex items-center gap-1 mt-1 text-sm text-destructive">
                  <AlertTriangle size={14} />
                  {errors.appType}
                </div>
              )}
            </div>

            {/* Dataflow Section */}
            <div>
              <h3 className="font-medium text-foreground mb-1">Dataflow</h3>
              <p className="text-sm text-muted-foreground">Enter datasource details</p>
              
              {/* File Upload Area */}
              <div className="mt-4">
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                    dragActive ? "border-primary bg-primary/5" : "border-border"
                  }`}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onClick={() => document.getElementById("file-upload")?.click()}
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Upload size={24} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Drag & Drop file here</div>
                      <div className="text-sm text-muted-foreground">or click to browse</div>
                      <div className="text-xs text-muted-foreground mt-1">Supported file types: json</div>
                    </div>
                  </div>
                  <input
                    id="file-upload"
                    type="file"
                    accept=".json"
                    className="hidden"
                    onChange={handleFileInput}
                  />
                </div>
                
                {formData.uploadedFile && (
                  <div className="mt-2 flex items-center gap-2 text-sm text-foreground">
                    <FileText size={16} />
                    {formData.uploadedFile.name}
                  </div>
                )}
                
                {errors.uploadedFile && (
                  <div className="flex items-center gap-1 mt-1 text-sm text-destructive">
                    <AlertTriangle size={14} />
                    {errors.uploadedFile}
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