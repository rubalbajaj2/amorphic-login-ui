import { AppHeader } from "./dashboard/AppHeader";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, ChevronDown, Database, Search, Play, Download, Wand2, RefreshCw, HelpCircle, Settings, Plus } from "lucide-react";
import { useState } from "react";

interface PlaygroundPageProps {
  onLogout: () => void;
  onNavigate: (page: string) => void;
}

export const PlaygroundPage = ({ onLogout, onNavigate }: PlaygroundPageProps) => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleExpanded = (key: string) => {
    setExpandedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const schemaItems = [
    {
      key: "system",
      label: "System Datasets",
      icon: Database,
      children: []
    },
    {
      key: "app-mgmt", 
      label: "Application Management",
      icon: Database,
      children: []
    },
    {
      key: "arb-bronze",
      label: "arb_bronze", 
      icon: Database,
      children: []
    },
    {
      key: "arb-gold",
      label: "arb_gold",
      icon: Database,
      children: []
    },
    {
      key: "arb-silver",
      label: "arb_silver",
      icon: Database,
      children: []
    },
    {
      key: "fan-engagement",
      label: "Fan Engagement",
      icon: Database,
      children: []
    },
    {
      key: "bbc-raw",
      label: "BBC Raw",
      icon: Database,
      children: []
    },
    {
      key: "invalid",
      label: "Invalid",
      icon: Database,
      children: []
    },
    {
      key: "carb-bronze",
      label: "CARB_bronze",
      icon: Database,
      children: []
    },
    {
      key: "carb-gold",
      label: "CARB_gold",
      icon: Database,
      children: []
    },
    {
      key: "carb-silver",
      label: "CARB_silver",
      icon: Database,
      children: []
    },
    {
      key: "credit",
      label: "Credit",
      icon: Database,
      children: []
    },
    {
      key: "crime-data",
      label: "crime data published",
      icon: Database,
      children: []
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <AppHeader onLogout={onLogout} onNavigate={onNavigate} />
      
      <div className="flex-1 flex">
        {/* Left Sidebar - Schema Explorer */}
        <div className="w-80 bg-card border-r border-border">
          <div className="p-4">
            <div className="mb-4">
              <h3 className="text-sm font-medium text-foreground mb-2">Explorer</h3>
              <p className="text-xs text-muted-foreground">Click on a node to configure its details</p>
            </div>

            <Tabs defaultValue="schema" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="schema" className="text-xs">Schema Explorer</TabsTrigger>
                <TabsTrigger value="history" className="text-xs">History</TabsTrigger>
              </TabsList>
              
              <TabsContent value="schema" className="mt-4">
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-foreground mb-2">Schema Explorer</h4>
                  <p className="text-xs text-muted-foreground mb-3">Explore the schema of your datasets</p>
                  
                  <div className="mb-3">
                    <label className="text-xs text-muted-foreground block mb-1">Target Location</label>
                    <Select defaultValue="athena">
                      <SelectTrigger className="h-8 text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="athena">Athena</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-1">
                  {schemaItems.map((item) => (
                    <div key={item.key}>
                      <button
                        onClick={() => toggleExpanded(item.key)}
                        className="w-full flex items-center gap-2 px-2 py-1 text-xs text-left hover:bg-muted rounded transition-colors"
                      >
                        {expandedItems[item.key] ? (
                          <ChevronDown className="h-3 w-3" />
                        ) : (
                          <ChevronRight className="h-3 w-3" />
                        )}
                        <item.icon className="h-3 w-3" />
                        <span className="text-foreground">{item.label}</span>
                      </button>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="history">
                <p className="text-xs text-muted-foreground">Query history will appear here</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Top Controls */}
          <div className="border-b border-border p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Plus className="h-4 w-4 mr-2" />
                  New Query
                </Button>
                <span className="text-sm text-muted-foreground">+</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Query Window</span>
                <Button variant="outline" size="sm">
                  <Database className="h-4 w-4 mr-2" />
                  SQL AI
                </Button>
                <Button variant="outline" size="sm">
                  <Wand2 className="h-4 w-4 mr-2" />
                  Generate Query
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <HelpCircle className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Query Editor */}
          <div className="flex-1 p-4">
            <div className="h-full bg-card rounded-lg border border-border">
              <div className="h-32 bg-slate-900 text-green-400 p-4 rounded-t-lg font-mono text-sm">
                <div>select * from</div>
                <div>...</div>
                <div>limit 50</div>
              </div>

              <div className="p-4 border-b border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Button size="sm" variant="outline">
                    <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs">athena</span>
                  </Button>
                  <Button size="sm" variant="outline">
                    <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs">primary</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground">Clear</Button>
                  <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Play className="h-4 w-4 mr-2" />
                    Run Query
                  </Button>
                </div>

                <h4 className="text-sm font-medium text-foreground mb-2">Result</h4>
              </div>

              <div className="p-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">i</div>
                  <span className="text-sm text-blue-700">No results</span>
                  <Button variant="ghost" size="sm" className="ml-auto">
                    ×
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};