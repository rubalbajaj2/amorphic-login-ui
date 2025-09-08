import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Filter, RotateCcw, Plus, Eye, Edit, Trash } from "lucide-react";

interface AgentsPageProps {
  onNavigate: (page: string) => void;
}

export const AgentsPage = ({ onNavigate }: AgentsPageProps) => {
  const agents = [
    {
      name: "AmorphicAgent",
      description: "If a user wants to get data from amorphic...",
      baseModel: "anthropic.claude-v2",
      status: "PREPARED",
      lastModifiedBy: "System",
      lastModified: "a year ago"
    },
    {
      name: "TestAgent",
      description: "exploring agents",
      baseModel: "anthropic.claude-v2",
      status: "PREPARED",
      lastModifiedBy: "sandeepj",
      lastModified: "a year ago"
    },
    {
      name: "demo-agent",
      description: "You are an agent designed to generate...",
      baseModel: "anthropic.claude-v2", 
      status: "PREPARED",
      lastModifiedBy: "harsha",
      lastModified: "a year ago"
    },
    {
      name: "SheetsAgent",
      description: "API's for creating smartsheets, you ha...",
      baseModel: "anthropic.claude-v2",
      status: "PREPARED", 
      lastModifiedBy: "harsha",
      lastModified: "a year ago"
    }
  ];

  return (
    <div className="flex-1 p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-foreground">Agents</h1>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          New Agent
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
        Showing 1 - 4 of 4 record(s)
      </p>

      {/* Table */}
      <div className="bg-card rounded-lg border border-border">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="font-medium">Agent Name</TableHead>
              <TableHead className="font-medium">Base Model</TableHead>
              <TableHead className="font-medium">Agent Status</TableHead>
              <TableHead className="font-medium">Last Modified By</TableHead>
              <TableHead className="font-medium">Options</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {agents.map((agent, index) => (
              <TableRow key={index} className="hover:bg-muted/50">
                <TableCell>
                  <div>
                    <div className="font-medium text-foreground">{agent.name}</div>
                    <div className="text-sm text-muted-foreground">{agent.description}</div>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground">{agent.baseModel}</TableCell>
                <TableCell className="text-muted-foreground">{agent.status}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    {agent.lastModifiedBy}
                    <span className="text-xs">🕐 {agent.lastModified}</span>
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

      {/* Bottom Results Count */}
      <p className="text-sm text-primary mt-4">
        Showing 1 - 4 of 4 record(s)
      </p>
    </div>
  );
};