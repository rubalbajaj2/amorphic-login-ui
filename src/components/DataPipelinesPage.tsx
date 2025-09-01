import { AppHeader } from "./dashboard/AppHeader";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Copy, Share2, Trash2, GitBranch, Plus, HelpCircle, Settings } from "lucide-react";

interface DataPipelinesPageProps {
  onLogout: () => void;
  onNavigate: (page: string) => void;
}

export const DataPipelinesPage = ({ onLogout, onNavigate }: DataPipelinesPageProps) => {
  const pipelines = [
    {
      name: "workflow_dup_covid19",
      description: "Final Consumers reported as COVID-19 positive and Deaths by residence type.",
      lastModifiedBy: "harsha",
      lastModified: "2024-10-17 12:59:44",
      modifiedBy: "harsha"
    },
    {
      name: "workflow_covid19",
      description: "Final Consumers reported as COVID-19 positive and Deaths by residence type.",
      lastModifiedBy: "harsha",
      lastModified: "2024-10-17 12:39:24",
      modifiedBy: "harsha"
    },
    {
      name: "WF_Demo",
      lastModifiedBy: "harsha",
      lastModified: "2023-08-14 08:06:15",
      modifiedBy: "harsha"
    },
    {
      name: "Texas_DMV_Data_Pipeline",
      description: "Data pipeline for Texas department of transportation",
      lastModifiedBy: "harsha",
      lastModified: "2025-07-29 09:37:22",
      modifiedBy: "harsha"
    },
    {
      name: "sunbucks_data_pipeline",
      lastModifiedBy: "harsha",
      lastModified: "2025-08-04 09:12:44",
      modifiedBy: "harsha"
    },
    {
      name: "mississippi_data_pipeline",
      description: "Data pipeline for Mississippi state department",
      lastModifiedBy: "harsha",
      lastModified: "2025-07-22 11:03:46",
      modifiedBy: "harsha"
    },
    {
      name: "Immunization_System_WF",
      description: "Workflow for cleansing and standardizing raw immunization data from the Arkansas Immunization Information System.",
      lastModifiedBy: "harsha", 
      lastModified: "2024-10-18 08:25:05",
      modifiedBy: "harsha"
    },
    {
      name: "Immunization_System_dup_WF",
      lastModifiedBy: "harsha",
      lastModified: "",
      modifiedBy: ""
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <AppHeader onLogout={onLogout} onNavigate={onNavigate} />
      
      <div className="flex-1 p-4">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb Navigation */}
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink 
                  onClick={() => onNavigate('dashboard')}
                  className="cursor-pointer text-muted-foreground hover:text-foreground"
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink className="text-muted-foreground">Manage</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-primary font-medium">Data Pipelines</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Page Header */}
          <div className="flex items-center gap-3 mb-2">
            <GitBranch className="h-6 w-6 text-primary" />
            <h1 className="text-heading-md font-semibold text-foreground">Data Pipeline</h1>
          </div>
          
          <p className="text-muted-foreground mb-6">
            Data Pipelines are automated workflows that move, transform, and integrate data across sources within Amorphic. Use this section to build, monitor, and manage your pipelines efficiently.
          </p>

          {/* Controls */}
          <div className="flex items-center justify-between mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search by Data Pipeline Name" 
                className="pl-10 w-80"
              />
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <HelpCircle className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Plus className="h-4 w-4 mr-2" />
                Create Data Pipeline
              </Button>
            </div>
          </div>

          {/* Results Summary */}
          <p className="text-sm text-muted-foreground mb-4">
            Showing 1 - 11 of 11 results. <span className="text-primary cursor-pointer hover:underline">See more</span>
          </p>

          {/* Table */}
          <div className="bg-card rounded-lg border border-border">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-medium">Data Pipeline Name</TableHead>
                  <TableHead className="font-medium">Last Modified By</TableHead>
                  <TableHead className="font-medium">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pipelines.map((pipeline, index) => (
                  <TableRow key={index} className="hover:bg-muted/50">
                    <TableCell>
                      <div>
                        <div className="font-medium text-foreground">{pipeline.name}</div>
                        {pipeline.description && (
                          <div className="text-sm text-muted-foreground mt-1">{pipeline.description}</div>
                        )}
                        {pipeline.lastModified && (
                          <div className="text-xs text-muted-foreground mt-1 flex items-center gap-4">
                            <span>📅 {pipeline.lastModified}</span>
                            <span>👤 {pipeline.modifiedBy}</span>
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{pipeline.lastModifiedBy}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share2 className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};