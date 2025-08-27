import { X, Plus, Link, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ExternalAPIConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
}

interface QueryParameter {
  key: string;
  value: string;
}

interface FormData {
  datasourceName: string;
  version: string;
  apiEndpoint: string;
  authentication: string;
  method: string;
  queryParameters: QueryParameter[];
}

interface FormErrors {
  [key: string]: string;
}

export const ExternalAPIConfigModal = ({ isOpen, onClose, onBack }: ExternalAPIConfigModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    datasourceName: "",
    version: "1.6",
    apiEndpoint: "",
    authentication: "",
    method: "",
    queryParameters: [{ key: "", value: "" }]
  });

  const [errors, setErrors] = useState<FormErrors>({});

  if (!isOpen) return null;

  const handleInputChange = (field: string, value: string) => {
    if (field === 'datasourceName' || field === 'version' || field === 'apiEndpoint' || field === 'authentication' || field === 'method') {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleQueryParameterChange = (index: number, field: 'key' | 'value', value: string) => {
    const newQueryParams = [...formData.queryParameters];
    newQueryParams[index] = { ...newQueryParams[index], [field]: value };
    setFormData(prev => ({ ...prev, queryParameters: newQueryParams }));
  };

  const addQueryParameter = () => {
    setFormData(prev => ({
      ...prev,
      queryParameters: [...prev.queryParameters, { key: "", value: "" }]
    }));
  };

  const removeQueryParameter = (index: number) => {
    if (formData.queryParameters.length > 1) {
      const newQueryParams = formData.queryParameters.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, queryParameters: newQueryParams }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.datasourceName.trim()) {
      newErrors.datasourceName = "Please enter Datasource Name";
    }

    if (!formData.apiEndpoint.trim()) {
      newErrors.apiEndpoint = "Please enter the API Endpoint";
    }

    if (!formData.authentication) {
      newErrors.authentication = "Please select API Authentication";
    }

    if (!formData.method) {
      newErrors.method = "Please select Method";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCreate = () => {
    if (validateForm()) {
      console.log("Creating External API datasource:", formData);
      onClose();
    }
  };

  const getInputClassName = (field: string) => {
    return errors[field] 
      ? "border-destructive focus:border-destructive focus:ring-destructive" 
      : "";
  };

  const getSelectClassName = (field: string) => {
    return errors[field] 
      ? "border-destructive focus:border-destructive focus:ring-destructive" 
      : "";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      
      {/* Modal Container */}
      <div className="relative bg-card rounded-lg shadow-xl p-6 max-w-md w-full mx-4 max-h-[90vh] flex flex-col animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Link size={20} className="text-primary" />
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
              <h3 className="font-medium text-foreground mb-1">External API Configuration details</h3>
              <p className="text-sm text-muted-foreground">Configure the datasource</p>
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
                <Label htmlFor="version" className="text-sm font-medium text-foreground">
                  Select Version
                </Label>
                <Select value={formData.version} onValueChange={(value) => handleInputChange("version", value)}>
                  <SelectTrigger className={getSelectClassName("version")}>
                    <SelectValue placeholder="Select version" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1.6">1.6</SelectItem>
                    <SelectItem value="1.5">1.5</SelectItem>
                    <SelectItem value="1.4">1.4</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* API Endpoint */}
              <div>
                <Label htmlFor="apiEndpoint">API Endpoint</Label>
                <Input
                  id="apiEndpoint"
                  type="text"
                  value={formData.apiEndpoint}
                  onChange={(e) => handleInputChange("apiEndpoint", e.target.value)}
                  className={getInputClassName("apiEndpoint")}
                  placeholder="Enter API endpoint URL"
                />
                {errors.apiEndpoint && (
                  <div className="flex items-center gap-1 mt-1 text-sm text-destructive">
                    <AlertTriangle size={14} />
                    {errors.apiEndpoint}
                  </div>
                )}
              </div>

              {/* API Authentication */}
              <div>
                <Label htmlFor="authentication">API Authentication</Label>
                <Select value={formData.authentication} onValueChange={(value) => handleInputChange("authentication", value)}>
                  <SelectTrigger className={getSelectClassName("authentication")}>
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="api-key">API Key</SelectItem>
                    <SelectItem value="bearer-token">Bearer Token</SelectItem>
                    <SelectItem value="basic-auth">Basic Authentication</SelectItem>
                    <SelectItem value="oauth">OAuth</SelectItem>
                    <SelectItem value="none">None</SelectItem>
                  </SelectContent>
                </Select>
                {errors.authentication && (
                  <div className="flex items-center gap-1 mt-1 text-sm text-destructive">
                    <AlertTriangle size={14} />
                    {errors.authentication}
                  </div>
                )}
              </div>

              {/* Method */}
              <div>
                <Label htmlFor="method">Method</Label>
                <Select value={formData.method} onValueChange={(value) => handleInputChange("method", value)}>
                  <SelectTrigger className={getSelectClassName("method")}>
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="GET">GET</SelectItem>
                    <SelectItem value="POST">POST</SelectItem>
                    <SelectItem value="PUT">PUT</SelectItem>
                    <SelectItem value="DELETE">DELETE</SelectItem>
                    <SelectItem value="PATCH">PATCH</SelectItem>
                  </SelectContent>
                </Select>
                {errors.method && (
                  <div className="flex items-center gap-1 mt-1 text-sm text-destructive">
                    <AlertTriangle size={14} />
                    {errors.method}
                  </div>
                )}
              </div>

              {/* Query Parameters Section */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground">Add Query Parameters</h4>
                  <p className="text-sm text-muted-foreground">
                    Query params are used when running data injection job
                  </p>
                </div>

                {formData.queryParameters.map((param, index) => (
                  <div key={index} className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor={`key-${index}`}>Key</Label>
                      <Input
                        id={`key-${index}`}
                        type="text"
                        value={param.key}
                        onChange={(e) => handleQueryParameterChange(index, 'key', e.target.value)}
                        placeholder="Enter key"
                      />
                    </div>
                    <div>
                      <Label htmlFor={`value-${index}`}>Value</Label>
                      <div className="flex gap-2">
                        <Input
                          id={`value-${index}`}
                          type="text"
                          value={param.value}
                          onChange={(e) => handleQueryParameterChange(index, 'value', e.target.value)}
                          className="flex-1"
                          placeholder="Enter value"
                        />
                        {formData.queryParameters.length > 1 && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => removeQueryParameter(index)}
                            className="h-10 w-10 text-muted-foreground hover:text-foreground"
                          >
                            <X size={16} />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                <Button
                  type="button"
                  variant="outline"
                  onClick={addQueryParameter}
                  className="w-full justify-center gap-2"
                >
                  <Plus size={16} />
                  Add Query Parameters
                </Button>
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