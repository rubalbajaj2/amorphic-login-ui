import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X, MessageSquare, Plus } from "lucide-react";

interface ChatbotConfigModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ChatbotConfigModal = ({ open, onOpenChange }: ChatbotConfigModalProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={() => onOpenChange(false)} />
      
      {/* Pop-up Modal */}
      <div className="relative bg-card rounded-lg shadow-xl p-6 max-w-md w-full mx-4 max-h-[90vh] flex flex-col animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <MessageSquare size={20} className="text-primary" />
              <Plus size={12} className="text-primary" />
            </div>
            <div>
              <h2 className="font-semibold text-foreground">Chat Configuration</h2>
              <p className="text-sm text-muted-foreground">Configure your chat settings</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)}>
            <X size={20} />
          </Button>
        </div>

        {/* Form */}
        <div className="flex-1 overflow-y-auto">
          <div className="space-y-6">
            {/* Section Title */}
            <div>
              <h3 className="font-medium text-foreground mb-1">Configuration details</h3>
              <p className="text-sm text-muted-foreground">Enter chat configuration details</p>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              {/* Select Model */}
              <div>
                <Label htmlFor="model">Select Model</Label>
                <Select defaultValue="anthropic-claude-v2">
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="anthropic-claude-v2">🔄 anthropic.claude v2</SelectItem>
                    <SelectItem value="gpt-4">🔄 GPT-4</SelectItem>
                    <SelectItem value="gpt-3.5">🔄 GPT-3.5</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Select Workspace */}
              <div>
                <Label htmlFor="workspace">Select Workspace</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="🔄 Select Workspace" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="demo">Demo</SelectItem>
                    <SelectItem value="test1">Test1</SelectItem>
                    <SelectItem value="test2">Test2</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Select Session File */}
              <div>
                <Label htmlFor="sessionFile">Select Session File</Label>
                <Select>
                  <SelectTrigger className="w-full border-primary">
                    <SelectValue placeholder="🔄 Select Session File" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="file1">Session File 1</SelectItem>
                    <SelectItem value="file2">Session File 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2 pt-6 border-t">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={() => onOpenChange(false)}>
            Save & Close
          </Button>
        </div>
      </div>
    </div>
  );
};