import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X } from "lucide-react";

interface ChatbotConfigModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ChatbotConfigModal = ({ open, onOpenChange }: ChatbotConfigModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <DialogTitle className="text-xl font-semibold">Chat Configuration</DialogTitle>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => onOpenChange(false)}
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="space-y-6">
          {/* Select Model */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Select Model
            </label>
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
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Select Workspace
            </label>
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
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Select Session File
            </label>
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

          {/* Action Button */}
          <div className="flex justify-end pt-4">
            <Button onClick={() => onOpenChange(false)}>
              Save & Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};