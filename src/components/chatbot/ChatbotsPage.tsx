import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Filter, RotateCcw, Plus, Eye, Edit, Trash } from "lucide-react";
import { CreateChatbotModal } from "./CreateChatbotModal";

interface ChatbotsPageProps {
  onNavigate: (page: string) => void;
}

export const ChatbotsPage = ({ onNavigate }: ChatbotsPageProps) => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const chatbots = [
    {
      name: "TamuWebsite",
      description: "This is for Tamu Financial Aid chatbot",
      id: "7c557582-9a45-4f7c-9e3e-978e9a41b980",
      workspace: "TAMUWebsite"
    },
    {
      name: "TamuChatbot",
      description: "This is for TAMU Website",
      id: "a504ebc7-163c-4c59-a506-e9dcc26bc53f",
      workspace: "TAMUWebsite"
    },
    {
      name: "Portland_Public_Schools",
      id: "ad78cdd9-a1f1-4174-8e07-28367befb8f2",
      workspace: "portland-public-school"
    },
    {
      name: "tamu_website",
      description: "tamu info",
      id: "e5b0391c-f439-471b-b6b7-f91823eb869e",
      workspace: "TAMUWebsite"
    },
    {
      name: "esg_goals",
      description: "esg",
      id: "a5f13422-7133-46c6-a756-351d032fee08",
      workspace: "ESG_Goals"
    },
    {
      name: "esg_goals_new",
      description: "esg goals",
      id: "b3cc373f-6e48-4105-8004-6dc883ba3f49",
      workspace: "ESG_Goals"
    },
    {
      name: "CookCounty",
      id: "406029db-126a-42eb-8c50-ae595d434306", 
      workspace: "CookCounty"
    }
  ];

  return (
    <div className="flex-1 p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-foreground">Chatbots</h1>
        <Button 
          onClick={() => setIsCreateModalOpen(true)}
          className="bg-primary hover:bg-primary/90"
        >
          <Plus className="h-4 w-4 mr-2" />
          New Chatbot
        </Button>
      </div>

      {/* Search and Filter Controls */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Filter Page" 
            className="pl-10 bg-muted/50"
          />
        </div>
        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="sm">
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>

      {/* Results Count */}
      <p className="text-sm text-primary mb-4">
        Showing 1 - 35 of 35 record(s)
      </p>

      {/* Table */}
      <div className="bg-card rounded-lg border border-border">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="font-medium">Chatbot Name</TableHead>
              <TableHead className="font-medium">Chatbot Id</TableHead>
              <TableHead className="font-medium">Workspace</TableHead>
              <TableHead className="font-medium">Options</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {chatbots.map((chatbot, index) => (
              <TableRow key={index} className="hover:bg-muted/50">
                <TableCell>
                  <div>
                    <div className="font-medium text-foreground">{chatbot.name}</div>
                    {chatbot.description && (
                      <div className="text-sm text-muted-foreground">{chatbot.description}</div>
                    )}
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground font-mono text-sm">{chatbot.id}</TableCell>
                <TableCell className="text-muted-foreground">{chatbot.workspace}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <CreateChatbotModal
        open={isCreateModalOpen}
        onOpenChange={setIsCreateModalOpen}
      />
    </div>
  );
};