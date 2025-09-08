import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { X, ChevronUp, ChevronDown, HelpCircle, Upload } from "lucide-react";
import { useState } from "react";

interface CreateCustomModelModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CreateCustomModelModal = ({ open, onOpenChange }: CreateCustomModelModalProps) => {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <DialogTitle className="text-xl font-semibold">Create Custom Model</DialogTitle>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => onOpenChange(false)}
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="text-right mb-4">
          <span className="text-sm text-error-500">* Required</span>
        </div>

        <div className="space-y-6">
          {/* Model Name */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-foreground">
              Model Name <HelpCircle className="inline h-4 w-4 ml-1" /> <span className="text-error-500">*</span>
            </Label>
            <Input className="w-full border-b-2 border-b-primary border-t-0 border-l-0 border-r-0 rounded-none focus:border-b-primary" />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-foreground">
              Description <HelpCircle className="inline h-4 w-4 ml-1" />
            </Label>
            <Input className="w-full border-b-2 border-b-muted-foreground border-t-0 border-l-0 border-r-0 rounded-none" />
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
            <CollapsibleContent className="space-y-6 pt-6">
              {/* Customization Type */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-foreground">
                  Customization Type <HelpCircle className="inline h-4 w-4 ml-1" /> <span className="text-error-500">*</span>
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fine-tuning">Fine tuning</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Upload Training Data */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-foreground">
                  Upload Training Data <span className="text-error-500">*</span>
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
              <div className="space-y-2">
                <Label className="text-sm font-medium text-foreground">Upload Validation Data</Label>
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

          {/* Create Model Button */}
          <div className="flex justify-end pt-4">
            <Button className="bg-white text-muted-foreground border border-muted-foreground hover:bg-muted/50">
              Create Model
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};