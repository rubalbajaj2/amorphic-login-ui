import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { X, ChevronUp, ChevronDown, HelpCircle, Folder, Plus } from "lucide-react";
import { useState } from "react";

interface CreateWorkspaceModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CreateWorkspaceModal = ({ open, onOpenChange }: CreateWorkspaceModalProps) => {
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
              <Folder size={20} className="text-primary" />
              <Plus size={12} className="text-primary" />
            </div>
            <div>
              <h2 className="font-semibold text-foreground">Create New Workspace</h2>
              <p className="text-sm text-muted-foreground">Setup a new workspace</p>
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
              <h3 className="font-medium text-foreground mb-1">Workspace Configuration details</h3>
              <p className="text-sm text-muted-foreground">Enter workspace details</p>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              {/* Workspace Name */}
              <div>
                <Label htmlFor="workspaceName">
                  Workspace Name <HelpCircle className="inline h-4 w-4 ml-1" /> <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="workspaceName"
                  placeholder="Enter workspace name"
                />
              </div>

              {/* Description and Keywords */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="description">
                    Description <HelpCircle className="inline h-4 w-4 ml-1" />
                  </Label>
                  <Input
                    id="description"
                    placeholder="Enter description"
                  />
                </div>
                <div>
                  <Label htmlFor="keywords">Keywords</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select keywords" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="keyword1">Keyword 1</SelectItem>
                      <SelectItem value="keyword2">Keyword 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Trigger Type */}
              <div>
                <Label htmlFor="triggerType">
                  Trigger Type <HelpCircle className="inline h-4 w-4 ml-1" /> <span className="text-destructive">*</span>
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select trigger type" />
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
                <CollapsibleContent className="space-y-4 pt-4">
                  {/* Auto Create Source Dataset */}
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-medium text-foreground">Auto Create Source Dataset</Label>
                    <Switch defaultChecked />
                  </div>

                  {/* Embeddings Model */}
                  <div>
                    <Label htmlFor="embeddingsModel">
                      Embeddings Model <HelpCircle className="inline h-4 w-4 ml-1" /> <span className="text-destructive">*</span>
                    </Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select embeddings model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="amazon.titan-embed-text-V0">amazon.titan-embed-text-V0</SelectItem>
                        <SelectItem value="amazon.titan-embed-image-V1:0">amazon.titan-embed-image-V1:0</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Max Tokens and Overlap Percentage */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="maxTokens">
                        Max Tokens <HelpCircle className="inline h-4 w-4 ml-1" />
                      </Label>
                      <Input
                        id="maxTokens"
                        defaultValue="1000"
                        placeholder="Enter max tokens"
                      />
                    </div>
                    <div>
                      <Label htmlFor="overlapPercentage">
                        Overlap Percentage <HelpCircle className="inline h-4 w-4 ml-1" />
                      </Label>
                      <Input
                        id="overlapPercentage"
                        defaultValue="10"
                        placeholder="Enter overlap percentage"
                      />
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
            Create Workspace
          </Button>
        </div>
      </div>
    </div>
  );
};