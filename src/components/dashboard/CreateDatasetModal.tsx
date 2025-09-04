import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CreateDatasetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  datasetName: string;
  description: string;
  domain: string;
  keywords: string;
  datasetType: string;
  datasourceType: string;
  fileType: string;
  targetLocation: string;
}

interface FormErrors {
  datasetName?: string;
  description?: string;
  domain?: string;
  datasetType?: string;
  datasourceType?: string;
  fileType?: string;
  targetLocation?: string;
}

export const CreateDatasetModal = ({ isOpen, onClose }: CreateDatasetModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    datasetName: "",
    description: "",
    domain: "",
    keywords: "",
    datasetType: "",
    datasourceType: "",
    fileType: "",
    targetLocation: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});

  if (!isOpen) return null;

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.datasetName.trim()) {
      newErrors.datasetName = "Dataset name is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }

    if (!formData.domain) {
      newErrors.domain = "Domain is required";
    }

    if (!formData.datasetType) {
      newErrors.datasetType = "Dataset type is required";
    }

    if (!formData.datasourceType) {
      newErrors.datasourceType = "Datasource type is required";
    }

    if (!formData.fileType) {
      newErrors.fileType = "File type is required";
    }

    if (!formData.targetLocation) {
      newErrors.targetLocation = "Target location is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCreate = () => {
    if (validateForm()) {
      console.log("Dataset configuration:", formData);
      onClose();
    }
  };

  const getInputClassName = (field: keyof FormErrors) => {
    const baseClass = "w-full p-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors";
    return errors[field] 
      ? `${baseClass} border-destructive focus:border-destructive` 
      : `${baseClass} border-input focus:border-primary`;
  };

  const getSelectClassName = (field: keyof FormErrors) => {
    return errors[field] ? "border-destructive" : "";
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
              Create Dataset
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Upload and configure your dataset
            </p>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X size={20} />
          </Button>
        </div>

        {/* Form Content */}
        <div className="p-6 space-y-6">
          {/* Basic Details Section */}
          <div>
            <h3 className="text-lg font-medium text-foreground mb-1">Basic Details</h3>
            <p className="text-sm text-muted-foreground mb-4">Enter the basic details for your dataset</p>
            
            <div className="space-y-4">
              {/* Dataset Name */}
              <div>
                <Label htmlFor="datasetName" className="text-sm font-medium text-foreground">
                  Dataset Name
                </Label>
                <Input
                  id="datasetName"
                  type="text"
                  placeholder="Enter an Unique name for the dataset"
                  value={formData.datasetName}
                  onChange={(e) => handleInputChange("datasetName", e.target.value)}
                  className={getInputClassName("datasetName")}
                />
                {errors.datasetName && (
                  <p className="text-sm text-destructive mt-1">{errors.datasetName}</p>
                )}
              </div>

              {/* Description */}
              <div>
                <Label htmlFor="description" className="text-sm font-medium text-foreground">
                  Description
                </Label>
                <Textarea
                  id="description"
                  placeholder="Define the dataset purpose"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  className={getInputClassName("description")}
                  rows={3}
                />
                {errors.description && (
                  <p className="text-sm text-destructive mt-1">{errors.description}</p>
                )}
              </div>

              {/* Domain */}
              <div>
                <Label className="text-sm font-medium text-foreground">
                  Domain
                </Label>
                <Select value={formData.domain} onValueChange={(value) => handleInputChange("domain", value)}>
                  <SelectTrigger className={`w-full ${getSelectClassName("domain")}`}>
                    <SelectValue placeholder="Select the relevant domain for your dataset." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="demo">Demo</SelectItem>
                    <SelectItem value="test1">Test1</SelectItem>
                    <SelectItem value="test2">Test2</SelectItem>
                  </SelectContent>
                </Select>
                {errors.domain && (
                  <p className="text-sm text-destructive mt-1">{errors.domain}</p>
                )}
              </div>

              {/* Keywords */}
              <div>
                <Label className="text-sm font-medium text-foreground">
                  Keywords
                </Label>
                <Select value={formData.keywords} onValueChange={(value) => handleInputChange("keywords", value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="analytics">Analytics</SelectItem>
                    <SelectItem value="machine-learning">Machine Learning</SelectItem>
                    <SelectItem value="business-intelligence">Business Intelligence</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Dataset Type */}
              <div>
                <Label className="text-sm font-medium text-foreground">
                  Dataset Type
                </Label>
                <Select value={formData.datasetType} onValueChange={(value) => handleInputChange("datasetType", value)}>
                  <SelectTrigger className={`w-full ${getSelectClassName("datasetType")}`}>
                    <SelectValue placeholder="Select the relevant domain for your dataset." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="internal">Internal</SelectItem>
                    <SelectItem value="external">External</SelectItem>
                    <SelectItem value="view">View</SelectItem>
                  </SelectContent>
                </Select>
                {errors.datasetType && (
                  <p className="text-sm text-destructive mt-1">{errors.datasetType}</p>
                )}
              </div>
            </div>
          </div>

          {/* Configure Connection Section */}
          <div>
            <h3 className="text-lg font-medium text-foreground mb-1">Configure Connection</h3>
            <p className="text-sm text-muted-foreground mb-4">Select how to connect your dataset</p>
            
            <div className="space-y-4">
              {/* Datasource Type */}
              <div>
                <Label className="text-sm font-medium text-foreground">
                  Datasource Type
                </Label>
                <Select value={formData.datasourceType} onValueChange={(value) => handleInputChange("datasourceType", value)}>
                  <SelectTrigger className={`w-full ${getSelectClassName("datasourceType")}`}>
                    <SelectValue placeholder="Select how data will be imported." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="amorphic">Amorphic</SelectItem>
                    <SelectItem value="bedrock">Bedrock</SelectItem>
                    <SelectItem value="s3">S3</SelectItem>
                    <SelectItem value="external-api">External API</SelectItem>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="saas">SaaS</SelectItem>
                    <SelectItem value="stream">Stream</SelectItem>
                    <SelectItem value="oracle">Oracle</SelectItem>
                    <SelectItem value="mysql">MySQL</SelectItem>
                    <SelectItem value="postgresql">PostgreSQL</SelectItem>
                    <SelectItem value="microsoft-sql-server">Microsoft SQL Server</SelectItem>
                    <SelectItem value="ibm-db2-luw">IBM DB2(LUW)</SelectItem>
                    <SelectItem value="amazon-redshift">Amazon Redshift</SelectItem>
                    <SelectItem value="amazon-aurora">Amazon Aurora</SelectItem>
                    <SelectItem value="jdbc">JDBC</SelectItem>
                    <SelectItem value="aurora-mysql">Aurora MySQL</SelectItem>
                  </SelectContent>
                </Select>
                {errors.datasourceType && (
                  <p className="text-sm text-destructive mt-1">{errors.datasourceType}</p>
                )}
              </div>

              {/* File Type */}
              <div>
                <Label className="text-sm font-medium text-foreground">
                  File Type
                </Label>
                <Select value={formData.fileType} onValueChange={(value) => handleInputChange("fileType", value)}>
                  <SelectTrigger className={`w-full ${getSelectClassName("fileType")}`}>
                    <SelectValue placeholder="Select the file type of the dataset." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="csv">CSV</SelectItem>
                    <SelectItem value="others">Others</SelectItem>
                    <SelectItem value="parquet">Parquet</SelectItem>
                    <SelectItem value="xlsx">XLSX</SelectItem>
                    <SelectItem value="json">JSON</SelectItem>
                    <SelectItem value="pdf">PDF</SelectItem>
                    <SelectItem value="txt">TXT</SelectItem>
                    <SelectItem value="jpg">JPG</SelectItem>
                    <SelectItem value="wav">WAV</SelectItem>
                    <SelectItem value="png">PNG</SelectItem>
                    <SelectItem value="jpeg">JPEG</SelectItem>
                    <SelectItem value="mp3">MP3</SelectItem>
                  </SelectContent>
                </Select>
                {errors.fileType && (
                  <p className="text-sm text-destructive mt-1">{errors.fileType}</p>
                )}
              </div>

              {/* Target Location */}
              <div>
                <Label className="text-sm font-medium text-foreground">
                  Target Location
                </Label>
                <Select value={formData.targetLocation} onValueChange={(value) => handleInputChange("targetLocation", value)}>
                  <SelectTrigger className={`w-full ${getSelectClassName("targetLocation")}`}>
                    <SelectValue placeholder="Choose where your dataset is stored." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="s3">S3</SelectItem>
                    <SelectItem value="s3-athena">S3-Athena</SelectItem>
                    <SelectItem value="redshift">Redshift</SelectItem>
                    <SelectItem value="dynamo-db">Dynamo DB</SelectItem>
                    <SelectItem value="lake-formation">Lake Formation</SelectItem>
                  </SelectContent>
                </Select>
                {errors.targetLocation && (
                  <p className="text-sm text-destructive mt-1">{errors.targetLocation}</p>
                )}
              </div>
            </div>
          </div>

          {/* Advanced Configuration */}
          <div>
            <h3 className="text-lg font-medium text-primary mb-4">Advanced Configuration</h3>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-border">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleCreate} className="bg-primary text-primary-foreground hover:bg-primary/90">
            Create Dataset
          </Button>
        </div>
      </div>
    </div>
  );
};