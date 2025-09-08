import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { X, ChevronUp, ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

interface CreateWorkspaceModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CreateWorkspaceModal = ({ open, onOpenChange }: CreateWorkspaceModalProps) => {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <DialogTitle className="text-xl font-semibold">Create Workspace</DialogTitle>
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
          {/* Workspace Name */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-foreground">
              Workspace Name <HelpCircle className="inline h-4 w-4 ml-1" /> <span className="text-error-500">*</span>
            </Label>
            <Input className="w-full border-b-2 border-b-primary border-t-0 border-l-0 border-r-0 rounded-none focus:border-b-primary" />
          </div>

          {/* Description and Keywords */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-foreground">
                Description <HelpCircle className="inline h-4 w-4 ml-1" />
              </Label>
              <Input className="w-full border-b-2 border-b-muted-foreground border-t-0 border-l-0 border-r-0 rounded-none" />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-foreground">Keywords</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="keyword1">Keyword 1</SelectItem>
                  <SelectItem value="keyword2">Keyword 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Trigger Type */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-foreground">
              Trigger Type <HelpCircle className="inline h-4 w-4 ml-1" /> <span className="text-error-500">*</span>
            </Label>
            <Select>
              <SelectTrigger className="border-b-2 border-b-primary border-t-0 border-l-0 border-r-0 rounded-none">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="on-demand">On-Demand</SelectItem>
                <SelectItem value="time-based">Time-Based</SelectItem>
                <SelectItem value="file-based">File-Based</SelectItem>
              </SelectContent>
            </Select>
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
              {/* Auto Create Source Dataset */}
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium text-foreground">Auto Create Source Dataset</Label>
                <Switch defaultChecked />
              </div>

              {/* Embeddings Model */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-foreground">
                  Embeddings Model <HelpCircle className="inline h-4 w-4 ml-1" /> <span className="text-error-500">*</span>
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="amazon.titan-embed-text-V0">amazon.titan-embed-text-V0</SelectItem>
                    <SelectItem value="amazon.titan-embed-image-V1:0">amazon.titan-embed-image-V1:0</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Max Tokens and Overlap Percentage */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-foreground">
                    Max Tokens <HelpCircle className="inline h-4 w-4 ml-1" />
                  </Label>
                  <Input defaultValue="1000" className="border-b-2 border-b-muted-foreground border-t-0 border-l-0 border-r-0 rounded-none" />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-foreground">
                    Overlap Percentage <HelpCircle className="inline h-4 w-4 ml-1" />
                  </Label>
                  <Input defaultValue="10" className="border-b-2 border-b-muted-foreground border-t-0 border-l-0 border-r-0 rounded-none" />
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Create Workspace Button */}
          <div className="flex justify-end pt-4">
            <Button className="bg-white text-muted-foreground border border-muted-foreground hover:bg-muted/50">
              Create Workspace
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};