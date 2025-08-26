import { X, Plus } from "lucide-react";
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
  version: string;
  apiEndpoint: string;
  authentication: string;
  method: string;
  queryParameters: QueryParameter[];
}

interface FormErrors {
  version?: string;
  apiEndpoint?: string;
  authentication?: string;
  method?: string;
}

export const ExternalAPIConfigModal = ({ isOpen, onClose, onBack }: ExternalAPIConfigModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    version: "1.6",
    apiEndpoint: "",
    authentication: "",
    method: "",
    queryParameters: [{ key: "", value: "" }]
  });

  const [errors, setErrors] = useState<FormErrors>({});

  if (!isOpen) return null;

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
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

    if (!formData.apiEndpoint.trim()) {
      newErrors.apiEndpoint = "API Endpoint is required";
    }

    if (!formData.authentication) {
      newErrors.authentication = "API Authentication is required";
    }

    if (!formData.method) {
      newErrors.method = "Method is required";
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

  const getInputClassName = (hasError: boolean) => {
    return hasError 
      ? "border-error-500 focus-visible:ring-error-500" 
      : "border-input focus-visible:ring-ring";
  };

  const getSelectClassName = (hasError: boolean) => {
    return hasError 
      ? "border-error-500 focus:ring-error-500" 
      : "";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      
      {/* Modal Container */}
      <div className="relative bg-card rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-heading-md font-semibold text-foreground">
              Add New Datasource
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Setup a new datasource for efficient data flow
            </p>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X size={20} />
          </Button>
        </div>

        {/* Form Content */}
        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              External API Configuration details
            </h3>
            <p className="text-sm text-muted-foreground">
              Configure the datasource
            </p>
          </div>

          <div className="space-y-4">
            {/* Select Version */}
            <div className="space-y-2">
              <Label htmlFor="version" className="text-sm font-medium text-foreground">
                Select Version
              </Label>
              <Select value={formData.version} onValueChange={(value) => handleInputChange("version", value)}>
                <SelectTrigger className={getSelectClassName(!!errors.version)}>
                  <SelectValue placeholder="Select version" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1.6">1.6</SelectItem>
                  <SelectItem value="1.5">1.5</SelectItem>
                  <SelectItem value="1.4">1.4</SelectItem>
                </SelectContent>
              </Select>
              {errors.version && (
                <p className="text-xs text-error-500">{errors.version}</p>
              )}
            </div>

            {/* API Endpoint */}
            <div className="space-y-2">
              <Label htmlFor="apiEndpoint" className="text-sm font-medium text-foreground">
                API Endpoint
              </Label>
              <Input
                id="apiEndpoint"
                type="text"
                value={formData.apiEndpoint}
                onChange={(e) => handleInputChange("apiEndpoint", e.target.value)}
                className={getInputClassName(!!errors.apiEndpoint)}
                placeholder="Enter API endpoint URL"
              />
              {errors.apiEndpoint && (
                <p className="text-xs text-error-500">{errors.apiEndpoint}</p>
              )}
            </div>

            {/* API Authentication */}
            <div className="space-y-2">
              <Label htmlFor="authentication" className="text-sm font-medium text-foreground">
                API Authentication
              </Label>
              <Select value={formData.authentication} onValueChange={(value) => handleInputChange("authentication", value)}>
                <SelectTrigger className={getSelectClassName(!!errors.authentication)}>
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
                <p className="text-xs text-error-500">{errors.authentication}</p>
              )}
            </div>

            {/* Method */}
            <div className="space-y-2">
              <Label htmlFor="method" className="text-sm font-medium text-foreground">
                Method
              </Label>
              <Select value={formData.method} onValueChange={(value) => handleInputChange("method", value)}>
                <SelectTrigger className={getSelectClassName(!!errors.method)}>
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
                <p className="text-xs text-error-500">{errors.method}</p>
              )}
            </div>

            {/* Query Parameters Section */}
            <div className="space-y-4">
              <div>
                <h4 className="text-base font-semibold text-foreground">Add Query Parameters</h4>
                <p className="text-sm text-muted-foreground">
                  Query params are used when running data injection job
                </p>
              </div>

              {formData.queryParameters.map((param, index) => (
                <div key={index} className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor={`key-${index}`} className="text-sm font-medium text-foreground">
                      Key
                    </Label>
                    <Input
                      id={`key-${index}`}
                      type="text"
                      value={param.key}
                      onChange={(e) => handleQueryParameterChange(index, 'key', e.target.value)}
                      className="border-input focus-visible:ring-ring"
                      placeholder="Enter key"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`value-${index}`} className="text-sm font-medium text-foreground">
                      Value
                    </Label>
                    <div className="flex gap-2">
                      <Input
                        id={`value-${index}`}
                        type="text"
                        value={param.value}
                        onChange={(e) => handleQueryParameterChange(index, 'value', e.target.value)}
                        className="border-input focus-visible:ring-ring flex-1"
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

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-border">
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