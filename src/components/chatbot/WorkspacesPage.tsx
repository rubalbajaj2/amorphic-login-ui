import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Filter, RotateCcw, Plus, Eye, Edit, Trash } from "lucide-react";
import { CreateWorkspaceModal } from "./CreateWorkspaceModal";

interface WorkspacesPageProps {
  onNavigate: (page: string) => void;
}

export const WorkspacesPage = ({ onNavigate }: WorkspacesPageProps) => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const workspaces = [
    {
      name: "demo2",
      accessType: "owner",
      triggerType: "file-based",
      lastModified: "5 months ago"
    },
    {
      name: "nevada_detr",
      accessType: "owner", 
      triggerType: "on-demand",
      lastModified: "7 months ago"
    },
    {
      name: "nov4-ph",
      accessType: "owner",
      triggerType: "on-demand", 
      lastModified: "10 months ago"
    },
    {
      name: "texas_ai_demo",
      accessType: "owner",
      triggerType: "on-demand",
      lastModified: "10 months ago"
    },
    {
      name: "FOI_demo",
      description: "workspace for Freedom_Of_Information",
      accessType: "owner",
      triggerType: "on-demand",
      lastModified: "10 months ago"
    },
    {
      name: "demo_homeowners_insurance_manuals",
      accessType: "owner",
      triggerType: "file-based",
      lastModified: "10 months ago"
    },
    {
      name: "amorphic-docs",
      description: "This is to scrape Amorphic Docs",
      accessType: "owner",
      triggerType: "on-demand",
      lastModified: "a year ago"
    }
  ];

  return (
    <div className="flex-1 p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-foreground">Workspaces</h1>
        <Button 
          onClick={() => setIsCreateModalOpen(true)}
          className="bg-primary hover:bg-primary/90"
        >
          <Plus className="h-4 w-4 mr-2" />
          New Workspace
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
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-primary">
          Showing 1 - 50 of 54 record(s)
        </p>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">{"<"}</Button>
          <Button variant="default" size="sm" className="bg-primary">1</Button>
          <Button variant="outline" size="sm">2</Button>
          <Button variant="outline" size="sm">{">"}</Button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-card rounded-lg border border-border">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="font-medium">Workspace Name</TableHead>
              <TableHead className="font-medium">Access Type</TableHead>
              <TableHead className="font-medium">Trigger Type</TableHead>
              <TableHead className="font-medium">Last Modified Time</TableHead>
              <TableHead className="font-medium">Options</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {workspaces.map((workspace, index) => (
              <TableRow key={index} className="hover:bg-muted/50">
                <TableCell>
                  <div>
                    <div className="font-medium text-foreground">{workspace.name}</div>
                    {workspace.description && (
                      <div className="text-sm text-muted-foreground">{workspace.description}</div>
                    )}
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground">{workspace.accessType}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {workspace.triggerType === "file-based" ? "📄" : "🔄"}
                    <span className="text-muted-foreground">{workspace.triggerType}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    🕐 {workspace.lastModified}
                  </div>
                </TableCell>
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

      <CreateWorkspaceModal
        open={isCreateModalOpen}
        onOpenChange={setIsCreateModalOpen}
      />
    </div>
  );
};