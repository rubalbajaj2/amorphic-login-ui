import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { X, ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";

interface CreateChatbotModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CreateChatbotModal = ({ open, onOpenChange }: CreateChatbotModalProps) => {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <DialogTitle className="text-xl font-semibold">Create Chatbot</DialogTitle>
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
          {/* Chatbot Name */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-foreground">
              Chatbot Name <span className="text-error-500">*</span>
            </Label>
            <Input className="w-full border-b-2 border-b-primary border-t-0 border-l-0 border-r-0 rounded-none focus:border-b-primary" />
          </div>

          {/* Description and Keywords */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-foreground">Description</Label>
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
              {/* Workspace */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-foreground">
                  🔄 Workspace <span className="text-error-500">*</span>
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="demo">Demo</SelectItem>
                    <SelectItem value="test1">Test1</SelectItem>
                    <SelectItem value="test2">Test2</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Model */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-foreground">
                  Model <span className="text-error-500">*</span>
                </Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gpt-4">GPT-4</SelectItem>
                    <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
                    <SelectItem value="claude-3-sonnet">Claude 3 Sonnet</SelectItem>
                    <SelectItem value="claude-3-haiku">Claude 3 Haiku</SelectItem>
                    <SelectItem value="gemini-pro">Gemini Pro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Instructions */}
              <div className="space-y-2">
                <Label className="text-sm font-medium text-foreground">Instructions</Label>
                <Textarea 
                  placeholder="Enter instructions for the chatbot..."
                  className="min-h-[100px] resize-none border-b-2 border-b-muted-foreground border-t-0 border-l-0 border-r-0 rounded-none"
                />
              </div>

              {/* Switches */}
              <div className="grid grid-cols-2 gap-6">
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

          {/* Create Chatbot Button */}
          <div className="flex justify-end pt-4">
            <Button className="bg-white text-muted-foreground border border-muted-foreground hover:bg-muted/50">
              Create Chatbot
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};