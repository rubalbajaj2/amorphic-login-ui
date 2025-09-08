import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, RotateCcw, Plus, RotateCcw as Sync } from "lucide-react";
import { CreateCustomModelModal } from "./CreateCustomModelModal";

interface ModelsPageProps {
  onNavigate: (page: string) => void;
}

export const ModelsPage = ({ onNavigate }: ModelsPageProps) => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const models = [
    {
      name: "gpt-4o-audio-preview-2024-10",
      type: "Base",
      provider: "Openai",
      modalities: ["TEXT"],
      traits: "N/A",
      icon: "🟡"
    },
    {
      name: "gpt-4.5-preview",
      type: "Base", 
      provider: "Openai",
      modalities: ["TEXT"],
      traits: "N/A",
      icon: "🟡"
    },
    {
      name: "gpt-4-turbo",
      type: "Base",
      provider: "Openai", 
      modalities: ["TEXT"],
      traits: "N/A",
      icon: "🟢"
    },
    {
      name: "amazon.titan-embed-text-v1",
      description: "The new Titan Embeddings G1 - Text model",
      type: "Base",
      provider: "Amazon",
      modalities: ["EMBEDDING"],
      traits: "Proficient in text retrieval, semantic similarity assessment, and clustering tasks.",
      icon: "🟢"
    },
    {
      name: "gpt-4o-mini-search-preview", 
      type: "Base",
      provider: "Openai",
      modalities: ["TEXT"],
      traits: "N/A",
      icon: "🟡"
    },
    {
      name: "anthropic.claude-3-5-sonnet-20241022-v2:0",
      type: "Base",
      provider: "Anthropic",
      modalities: ["TEXT"],
      traits: "N/A",
      icon: "🟢"
    },
    {
      name: "twelvelabs.marengo-embed-2.6",
      type: "Base", 
      provider: "Twelvelabs",
      modalities: ["EMBEDDING"],
      traits: "N/A",
      icon: "🟡"
    }
  ];

  return (
    <div className="flex-1 p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-foreground">Models</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Sync className="h-4 w-4 mr-2" />
            Sync Models
          </Button>
          <Button 
            onClick={() => setIsCreateModalOpen(true)}
            className="bg-primary hover:bg-primary/90"
          >
            <Plus className="h-4 w-4 mr-2" />
            New Custom Model
          </Button>
        </div>
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
          Showing 1 - 50 of 112 record(s)
        </p>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">{"<"}</Button>
          <Button variant="default" size="sm" className="bg-primary">1</Button>
          <Button variant="outline" size="sm">2</Button>
          <Button variant="outline" size="sm">3</Button>
          <Button variant="outline" size="sm">{">"}</Button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-card rounded-lg border border-border">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="font-medium">Model Name</TableHead>
              <TableHead className="font-medium">Model Type</TableHead>
              <TableHead className="font-medium">Model Provider</TableHead>
              <TableHead className="font-medium">Modalities</TableHead>
              <TableHead className="font-medium">Model Traits</TableHead>
              <TableHead className="font-medium">Options</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {models.map((model, index) => (
              <TableRow key={index} className="hover:bg-muted/50">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{model.icon}</span>
                    <div>
                      <div className="font-medium text-foreground">{model.name}</div>
                      {model.description && (
                        <div className="text-sm text-muted-foreground">{model.description}</div>
                      )}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground">{model.type}</TableCell>
                <TableCell className="text-muted-foreground">{model.provider}</TableCell>
                <TableCell>
                  <div className="flex flex-wrap gap-1">
                    {model.modalities.map((modality) => (
                      <Badge 
                        key={modality} 
                        variant="secondary" 
                        className="bg-primary-100 text-primary-700"
                      >
                        {modality}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="text-muted-foreground max-w-xs">
                  {model.traits}
                </TableCell>
                <TableCell className="text-muted-foreground">-</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <CreateCustomModelModal
        open={isCreateModalOpen}
        onOpenChange={setIsCreateModalOpen}
      />
    </div>
  );
};