import { AppHeader } from "./dashboard/AppHeader";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Filter, Trash2, Edit, Copy, Database, Plus, Settings } from "lucide-react";

interface DatasetsPageProps {
  onLogout: () => void;
  onNavigate: (page: string) => void;
}

export const DatasetsPage = ({ onLogout, onNavigate }: DatasetsPageProps) => {
  const datasets = [
    {
      name: "Work_Activity_Completion",
      description: "This dataset tracks individual work and activities, detailing their unique ID, scheduled and actual times, type of work, location, and completion status, including any delays or exceptions.",
      type: "Internal",
      status: "Completed",
      tags: ["harmon_2", "s.sahema", "csv"]
    },
    {
      name: "work_activity_completion",
      type: "Internal", 
      status: "Completed",
      tags: ["harmon...", "s3", "csv"]
    },
    {
      name: "weather1",
      type: "Internal",
      status: "Completed", 
      tags: ["demo", "s.sahema", "csv"]
    },
    {
      name: "weather",
      description: "List of weather indicators, CSV format",
      type: "Internal",
      status: "Completed",
      tags: ["bbc_raw", "s.sahema", "csv"]
    },
    {
      name: "water_season_type",
      description: "water department data",
      type: "Internal",
      status: "Completed",
      tags: ["scottada...", "s.sahema", "csv"]
    },
    {
      name: "water_recycled_flag",
      description: "water department data", 
      type: "Internal",
      status: "Completed",
      tags: ["scottada...", "s.sahema", "csv"]
    },
    {
      name: "water_raw",
      description: "water department data",
      type: "Internal", 
      status: "Completed",
      tags: ["scottada...", "s.sahema", "csv"]
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
                <BreadcrumbLink className="text-muted-foreground">Discover</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-primary font-medium">Datasets</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Page Header */}
          <div className="flex items-center gap-3 mb-2">
            <Database className="h-6 w-6 text-primary" />
            <h1 className="text-heading-md font-semibold text-foreground">Datasets</h1>
          </div>
          
          <p className="text-muted-foreground mb-6">
            Datasets are structured collections of data designed for analysis, exploration, and decision-making. In Amorphic, they can be easily searched, filtered, and managed to support your data needs.
          </p>

          {/* Controls */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search by Dataset Name" 
                  className="pl-10 w-64"
                />
              </div>
              
              <Select>
                <SelectTrigger className="w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by Target Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="s3">S3</SelectItem>
                  <SelectItem value="athena">Athena</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter by File Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="csv">CSV</SelectItem>
                  <SelectItem value="json">JSON</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter by Domain" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Domains</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Advanced Filters
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Trash2 className="h-4 w-4" />
              </Button>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Plus className="h-4 w-4 mr-2" />
                Create Dataset
              </Button>
            </div>
          </div>

          {/* Results Summary */}
          <p className="text-sm text-muted-foreground mb-4">
            Showing 1 - 24 of 887 results. <span className="text-primary cursor-pointer hover:underline">See more</span>
          </p>

          {/* Table */}
          <div className="bg-card rounded-lg border border-border">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-medium">Dataset Name</TableHead>
                  <TableHead className="font-medium">Dataset Type</TableHead>
                  <TableHead className="font-medium">Status</TableHead>
                  <TableHead className="font-medium">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {datasets.map((dataset, index) => (
                  <TableRow key={index} className="hover:bg-muted/50">
                    <TableCell>
                      <div>
                        <div className="font-medium text-foreground">{dataset.name}</div>
                        {dataset.description && (
                          <div className="text-sm text-muted-foreground mt-1">{dataset.description}</div>
                        )}
                        <div className="flex gap-1 mt-2">
                          {dataset.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="inline-flex items-center px-2 py-1 rounded text-xs bg-secondary text-secondary-foreground">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{dataset.type}</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-success-100 text-success-700">
                        {dataset.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
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

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <Button variant="ghost" disabled>
              ← Previous
            </Button>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">01</Button>
              <Button variant="ghost" size="sm">02</Button>
              <Button variant="ghost" size="sm">03</Button>
              <Button variant="ghost" size="sm">04</Button>
              <Button variant="ghost" size="sm">05</Button>
              <span className="text-muted-foreground">...</span>
              <Button variant="ghost" size="sm">37</Button>
            </div>
            <Button variant="ghost">
              Next →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};