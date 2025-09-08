import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { X, ChevronUp, ChevronDown, HelpCircle, Upload, Brain, Plus } from "lucide-react";
import { useState } from "react";

interface CreateCustomModelModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CreateCustomModelModal = ({ open, onOpenChange }: CreateCustomModelModalProps) => {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={() => onOpenChange(false)} />
      
      {/* Pop-up Modal */}
      <div className="relative bg-card rounded-lg shadow-xl p-6 max-w-2xl w-full mx-4 max-h-[90vh] flex flex-col animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Brain size={20} className="text-primary" />
              <Plus size={12} className="text-primary" />
            </div>
            <div>
              <h2 className="font-semibold text-foreground">Create Custom Model</h2>
              <p className="text-sm text-muted-foreground">Setup a new custom model</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)}>
            <X size={20} />
          </Button>
        </div>

        <div className="text-right mb-4">
          <span className="text-sm text-destructive">* Required</span>
        </div>

        {/* Form */}
        <div className="flex-1 overflow-y-auto">
          <div className="space-y-6">
            {/* Section Title */}
            <div>
              <h3 className="font-medium text-foreground mb-1">Model Configuration details</h3>
              <p className="text-sm text-muted-foreground">Enter model details</p>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              {/* Model Name */}
              <div>
                <Label htmlFor="modelName">
                  Model Name <HelpCircle className="inline h-4 w-4 ml-1" /> <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="modelName"
                  placeholder="Enter model name"
                />
              </div>

              {/* Description */}
              <div>
                <Label htmlFor="description">
                  Description <HelpCircle className="inline h-4 w-4 ml-1" />
                </Label>
                <Input
                  id="description"
                  placeholder="Enter description"
                />
              </div>

              {/* Advanced Section */}
              <Collapsible open={isAdvancedOpen} onOpenChange={setIsAdvancedOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors">
                  <span className="font-medium text-foreground">Advanced</span>
                  {isAdvancedOpen ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-4 pt-4">
                  {/* Customization Type */}
                  <div>
                    <Label htmlFor="customizationType">
                      Customization Type <HelpCircle className="inline h-4 w-4 ml-1" /> <span className="text-destructive">*</span>
                    </Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select customization type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fine-tuning">Fine tuning</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Upload Training Data */}
                  <div>
                    <Label htmlFor="trainingData">
                      Upload Training Data <span className="text-destructive">*</span>
                    </Label>
                    <div className="border-2 border-dashed border-muted-foreground rounded-lg p-8 text-center bg-muted/20">
                      <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-4" />
                      <p className="text-muted-foreground mb-2">
                        <Button variant="outline" className="mr-2">Upload</Button>
                        or drag and drop
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Accepted file type - .jsonl
                      </p>
                    </div>
                  </div>

                  {/* Upload Validation Data */}
                  <div>
                    <Label htmlFor="validationData">Upload Validation Data</Label>
                    <div className="border-2 border-dashed border-muted-foreground rounded-lg p-8 text-center bg-muted/20">
                      <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-4" />
                      <p className="text-muted-foreground mb-2">
                        <Button variant="outline" className="mr-2">Upload</Button>
                        or drag and drop
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Accepted file type - .jsonl
                      </p>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2 pt-6 border-t">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={() => onOpenChange(false)}>
            Create Model
          </Button>
        </div>
      </div>
    </div>
  );
};