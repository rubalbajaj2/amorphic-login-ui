import { useState } from "react";
import { X, Database, Plus, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface S3ConfigSideSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  datasourceName: string;
  selectVersion: string;
  s3Bucket: string;
  connectionAccessType: string;
  accessKey: string;
  secretKey: string;
}

interface FormErrors {
  [key: string]: string;
}

export const S3ConfigSideSheet = ({ isOpen, onClose }: S3ConfigSideSheetProps) => {
  const [formData, setFormData] = useState<FormData>({
    datasourceName: "",
    selectVersion: "2.5",
    s3Bucket: "",
    connectionAccessType: "access-keys",
    accessKey: "",
    secretKey: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});

  if (!isOpen) return null;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formData.datasourceName.trim()) {
      newErrors.datasourceName = "Please enter the Datasource Name";
    }
    if (!formData.s3Bucket.trim()) {
      newErrors.s3Bucket = "Please enter the S3 Bucket";
    }
    if (!formData.accessKey.trim()) {
      newErrors.accessKey = "Please enter the Access Key";
    }
    if (!formData.secretKey.trim()) {
      newErrors.secretKey = "Please enter the Secret Key";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCreate = () => {
    if (validateForm()) {
      // Form is valid, proceed with creation
      console.log("Creating datasource:", formData);
      onClose();
    }
  };

  const getInputClassName = (field: string) => {
    return errors[field] 
      ? "border-destructive focus:border-destructive focus:ring-destructive" 
      : "";
  };

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      
      {/* Side Sheet */}
      <div className="absolute right-0 top-0 h-full w-96 bg-card shadow-xl p-6 flex flex-col animate-slide-in-right">
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
              <h3 className="font-medium text-foreground mb-1">S3 Bucket Configuration details</h3>
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

              {/* Select Version */}
              <div>
                <Label htmlFor="selectVersion">Select Version</Label>
                <Input
                  id="selectVersion"
                  value={formData.selectVersion}
                  onChange={(e) => handleInputChange("selectVersion", e.target.value)}
                  placeholder="Version"
                />
              </div>

              {/* S3 Bucket */}
              <div>
                <Label htmlFor="s3Bucket">S3 Bucket</Label>
                <Input
                  id="s3Bucket"
                  value={formData.s3Bucket}
                  onChange={(e) => handleInputChange("s3Bucket", e.target.value)}
                  className={getInputClassName("s3Bucket")}
                  placeholder="Enter S3 bucket name"
                />
                {errors.s3Bucket && (
                  <div className="flex items-center gap-1 mt-1 text-sm text-destructive">
                    <AlertTriangle size={14} />
                    {errors.s3Bucket}
                  </div>
                )}
              </div>

              {/* Connection Access Type */}
              <div>
                <Label>Connection Access Type</Label>
                <RadioGroup
                  value={formData.connectionAccessType}
                  onValueChange={(value) => handleInputChange("connectionAccessType", value)}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="access-keys" id="access-keys" />
                    <Label htmlFor="access-keys">Access Keys</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bucket-policy" id="bucket-policy" />
                    <Label htmlFor="bucket-policy">Bucket Policy</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Access Key */}
              <div>
                <Label htmlFor="accessKey">Access Key</Label>
                <Input
                  id="accessKey"
                  value={formData.accessKey}
                  onChange={(e) => handleInputChange("accessKey", e.target.value)}
                  className={getInputClassName("accessKey")}
                  placeholder="Enter access key"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Your AWS access key for S3 bucket access
                </p>
                {errors.accessKey && (
                  <div className="flex items-center gap-1 mt-1 text-sm text-destructive">
                    <AlertTriangle size={14} />
                    {errors.accessKey}
                  </div>
                )}
              </div>

              {/* Secret Key */}
              <div>
                <Label htmlFor="secretKey">Secret Key</Label>
                <Input
                  id="secretKey"
                  type="password"
                  value={formData.secretKey}
                  onChange={(e) => handleInputChange("secretKey", e.target.value)}
                  className={getInputClassName("secretKey")}
                  placeholder="Enter secret key"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Your AWS secret key for authentication
                </p>
                {errors.secretKey && (
                  <div className="flex items-center gap-1 mt-1 text-sm text-destructive">
                    <AlertTriangle size={14} />
                    {errors.secretKey}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2 pt-6 border-t">
          <Button variant="outline" onClick={onClose}>
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