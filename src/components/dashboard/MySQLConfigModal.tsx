import { useState } from "react";
import { X, Database, Plus, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface MySQLConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
}

interface FormData {
  datasourceName: string;
  hostName: string;
  port: string;
  databaseName: string;
  username: string;
  password: string;
}

interface FormErrors {
  [key: string]: string;
}

export const MySQLConfigModal = ({ isOpen, onClose, onBack }: MySQLConfigModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    datasourceName: "",
    hostName: "",
    port: "3306",
    databaseName: "",
    username: "",
    password: ""
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
      newErrors.datasourceName = "Please enter Datasource Name";
    }
    if (!formData.hostName.trim()) {
      newErrors.hostName = "Please enter Host Name";
    }
    if (!formData.port.trim()) {
      newErrors.port = "Please enter Port";
    }
    if (!formData.databaseName.trim()) {
      newErrors.databaseName = "Please enter Database Name";
    }
    if (!formData.username.trim()) {
      newErrors.username = "Please enter Username";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Please enter Password";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCreate = () => {
    if (validateForm()) {
      console.log("Creating MySQL datasource:", formData);
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
              <h3 className="font-medium text-foreground mb-1">MySQL Configuration details</h3>
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

              {/* Host Name */}
              <div>
                <Label htmlFor="hostName">Host Name</Label>
                <Input
                  id="hostName"
                  value={formData.hostName}
                  onChange={(e) => handleInputChange("hostName", e.target.value)}
                  className={getInputClassName("hostName")}
                  placeholder="Enter host name"
                />
                {errors.hostName && (
                  <div className="flex items-center gap-1 mt-1 text-sm text-destructive">
                    <AlertTriangle size={14} />
                    {errors.hostName}
                  </div>
                )}
              </div>

              {/* Port */}
              <div>
                <Label htmlFor="port">Port</Label>
                <Input
                  id="port"
                  value={formData.port}
                  onChange={(e) => handleInputChange("port", e.target.value)}
                  className={getInputClassName("port")}
                  placeholder="3306"
                />
                {errors.port && (
                  <div className="flex items-center gap-1 mt-1 text-sm text-destructive">
                    <AlertTriangle size={14} />
                    {errors.port}
                  </div>
                )}
              </div>

              {/* Database Name */}
              <div>
                <Label htmlFor="databaseName">Database Name</Label>
                <Input
                  id="databaseName"
                  value={formData.databaseName}
                  onChange={(e) => handleInputChange("databaseName", e.target.value)}
                  className={getInputClassName("databaseName")}
                  placeholder="Enter database name"
                />
                {errors.databaseName && (
                  <div className="flex items-center gap-1 mt-1 text-sm text-destructive">
                    <AlertTriangle size={14} />
                    {errors.databaseName}
                  </div>
                )}
              </div>

              {/* Username */}
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  value={formData.username}
                  onChange={(e) => handleInputChange("username", e.target.value)}
                  className={getInputClassName("username")}
                  placeholder="Enter username"
                />
                {errors.username && (
                  <div className="flex items-center gap-1 mt-1 text-sm text-destructive">
                    <AlertTriangle size={14} />
                    {errors.username}
                  </div>
                )}
              </div>

              {/* Password */}
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className={getInputClassName("password")}
                  placeholder="Enter password"
                />
                {errors.password && (
                  <div className="flex items-center gap-1 mt-1 text-sm text-destructive">
                    <AlertTriangle size={14} />
                    {errors.password}
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