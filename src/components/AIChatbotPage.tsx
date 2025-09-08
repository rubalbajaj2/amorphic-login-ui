import { useState } from "react";
import { AppHeader } from "./dashboard/AppHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Send, Settings } from "lucide-react";
import { ChatbotConfigModal } from "./chatbot/ChatbotConfigModal";
import { WorkspacesPage } from "./chatbot/WorkspacesPage";
import { ModelsPage } from "./chatbot/ModelsPage";
import { ChatbotsPage } from "./chatbot/ChatbotsPage";
import { AgentsPage } from "./chatbot/AgentsPage";

interface AIChatbotPageProps {
  onLogout: () => void;
  onNavigate: (page: string) => void;
}

export const AIChatbotPage = ({ onLogout, onNavigate }: AIChatbotPageProps) => {
  const [activeTab, setActiveTab] = useState("chat");
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle message sending logic here
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <AppHeader onLogout={onLogout} onNavigate={onNavigate} />
      
      <div className="flex-1 flex">
        {/* Sidebar */}
        <div className="w-64 bg-card border-r border-border flex flex-col">
          {/* Navigation Tabs */}
          <div className="p-4">
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab("chat")}
                className={`w-full flex items-center gap-2 px-3 py-2 text-left rounded-md transition-colors ${
                  activeTab === "chat" 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                💬 Playground
              </button>
              <button
                onClick={() => setActiveTab("workspaces")}
                className={`w-full flex items-center gap-2 px-3 py-2 text-left rounded-md transition-colors ${
                  activeTab === "workspaces" 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                🗂️ Workspaces
              </button>
              <button
                onClick={() => setActiveTab("models")}
                className={`w-full flex items-center gap-2 px-3 py-2 text-left rounded-md transition-colors ${
                  activeTab === "models" 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                🧠 Models
              </button>
              <button
                onClick={() => setActiveTab("chatbots")}
                className={`w-full flex items-center gap-2 px-3 py-2 text-left rounded-md transition-colors ${
                  activeTab === "chatbots" 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                🤖 Chatbots
              </button>
              <button
                onClick={() => setActiveTab("agents")}
                className={`w-full flex items-center gap-2 px-3 py-2 text-left rounded-md transition-colors ${
                  activeTab === "agents" 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                👥 Agents
              </button>
            </nav>
          </div>

          {/* Sessions (only visible in chat tab) */}
          {activeTab === "chat" && (
            <div className="flex-1 p-4 border-t border-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-foreground">Sessions</h3>
                <Button size="sm" className="h-7 px-2 text-xs">
                  New Session
                </Button>
              </div>
              
              <div className="space-y-2">
                <div className="p-2 rounded-md hover:bg-accent cursor-pointer">
                  <p className="text-sm font-medium">You are a public health assistant...</p>
                  <p className="text-xs text-muted-foreground">2 months ago</p>
                </div>
                <div className="p-2 rounded-md hover:bg-accent cursor-pointer">
                  <p className="text-sm font-medium">provide a summary of the document</p>
                  <p className="text-xs text-muted-foreground">3 months ago</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {activeTab === "chat" ? (
            <>
              {/* Chat Area */}
              <div className="flex-1 flex flex-col items-center justify-center p-8">
                <div className="text-center max-w-md">
                  <div className="text-6xl mb-6">💬</div>
                  <h2 className="text-xl font-medium text-foreground mb-4">
                    How can we help you today?
                  </h2>
                </div>
              </div>

              {/* Bottom Configuration and Input */}
              <div className="border-t border-border p-6">
                {/* Model Configuration */}
                <div className="flex items-center justify-center mb-4">
                  <button
                    onClick={() => setIsConfigOpen(true)}
                    className="flex items-center gap-2 px-3 py-2 rounded-md border border-border hover:bg-accent transition-colors"
                  >
                    <Settings className="h-4 w-4" />
                    <span className="text-sm">Anthropic Claude V2</span>
                  </button>
                  <span className="mx-2 text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">No Workspace Selected</span>
                  <span className="mx-2 text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">No File Selected</span>
                  <Button variant="outline" size="sm" className="ml-4">
                    Reload chat
                  </Button>
                </div>

                {/* Message Input */}
                <div className="max-w-3xl mx-auto">
                  <div className="relative">
                    <Input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ask Amorphic AI a question"
                      className="pr-12 h-12"
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          handleSendMessage();
                        }
                      }}
                    />
                    <Button
                      size="sm"
                      className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
                      onClick={handleSendMessage}
                      disabled={!message.trim()}
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </>
          ) : activeTab === "workspaces" ? (
            <WorkspacesPage onNavigate={onNavigate} />
          ) : activeTab === "models" ? (
            <ModelsPage onNavigate={onNavigate} />
          ) : activeTab === "chatbots" ? (
            <ChatbotsPage onNavigate={onNavigate} />
          ) : activeTab === "agents" ? (
            <AgentsPage onNavigate={onNavigate} />
          ) : null}
        </div>
      </div>

      <ChatbotConfigModal
        open={isConfigOpen}
        onOpenChange={setIsConfigOpen}
      />
    </div>
  );
};