import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { X, ChevronUp, ChevronDown, Bot, Plus } from "lucide-react";
import { useState } from "react";

interface CreateChatbotModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CreateChatbotModal = ({ open, onOpenChange }: CreateChatbotModalProps) => {
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
              <Bot size={20} className="text-primary" />
              <Plus size={12} className="text-primary" />
            </div>
            <div>
              <h2 className="font-semibold text-foreground">Create New Chatbot</h2>
              <p className="text-sm text-muted-foreground">Setup a new chatbot</p>
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
              <h3 className="font-medium text-foreground mb-1">Chatbot Configuration details</h3>
              <p className="text-sm text-muted-foreground">Enter chatbot details</p>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              {/* Chatbot Name */}
              <div>
                <Label htmlFor="chatbotName">
                  Chatbot Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="chatbotName"
                  placeholder="Enter chatbot name"
                />
              </div>

              {/* Description and Keywords */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="description">Description</Label>
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
                  {/* Workspace */}
                  <div>
                    <Label htmlFor="workspace">
                      Workspaces <span className="text-destructive">*</span>
                    </Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select workspace" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="demo">Demo</SelectItem>
                        <SelectItem value="test1">Test1</SelectItem>
                        <SelectItem value="test2">Test2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Model */}
                  <div>
                    <Label htmlFor="model">
                      Model <span className="text-destructive">*</span>
                    </Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gpt-4">GPT-4</SelectItem>
                        <SelectItem value="claude-3">Claude 3</SelectItem>
                        <SelectItem value="gemini-pro">Gemini Pro</SelectItem>
                        <SelectItem value="llama-2">Llama 2</SelectItem>
                        <SelectItem value="palm-2">PaLM 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Instructions */}
                  <div>
                    <Label htmlFor="instructions">Instructions</Label>
                    <Textarea 
                      id="instructions"
                      placeholder="Enter instructions for the chatbot..."
                      className="min-h-[100px] resize-none"
                    />
                  </div>

                  {/* Switches */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-medium text-foreground">Keep Active</Label>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-medium text-foreground">Enable Redaction</Label>
                      <Switch />
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
            Create Chatbot
          </Button>
        </div>
      </div>
    </div>
  );
};