import { AppHeader } from "./dashboard/AppHeader";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Edit, Copy, Trash2, Share2, Plus, HelpCircle, Settings, Database, Users, FileText, Code, BookOpen, Boxes, BarChart3 } from "lucide-react";

interface SharedResourcesPageProps {
  onLogout: () => void;
  onNavigate: (page: string) => void;
}

export const SharedResourcesPage = ({ onLogout, onNavigate }: SharedResourcesPageProps) => {
  const domains = [
    {
      name: "WDFW_raw",
      tenant: "fisheries",
      origin: "API"
    },
    {
      name: "WDFW_raw", 
      tenant: "publicsector",
      origin: "API"
    },
    {
      name: "transporter_idp_output",
      description: "Domain created from IDP",
      tenant: "cdap",
      origin: "API"
    },
    {
      name: "TexasDMV_Silver",
      description: "The domain contains staging/processed Datasets",
      tenant: "texasdmv",
      origin: "API"
    },
    {
      name: "TexasDMV_Gold",
      description: "Domain contains final/ aggregated & reporting ready Datasets",
      tenant: "texasdmv",
      origin: "API"
    },
    {
      name: "TexasDMV_Bronze",
      description: "The domain contains raw Datasets",
      tenant: "texasdmv",
      origin: "API"
    },
    {
      name: "texas_wda_silver",
      description: "Domain contains staging/processed Datasets",
      tenant: "texaswda",
      origin: "API"
    },
    {
      name: "texas_wda_gold",
      tenant: "texaswda",
      origin: "API"
    }
  ];

  const sidebarItems = [
    { icon: Database, label: "Domains", active: true },
    { icon: Users, label: "Tenants" },
    { icon: BookOpen, label: "Libraries" },
    { icon: Settings, label: "Parameter Store" },
    { icon: FileText, label: "Templates" },
    { icon: Code, label: "ML Models" },
    { icon: Code, label: "Code Repos" },
    { icon: Boxes, label: "Datalake Lifecycle configurations" },
    { icon: BarChart3, label: "Data Classification" },
    { icon: BarChart3, label: "Train SQL AI" }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <AppHeader onLogout={onLogout} onNavigate={onNavigate} />
      
      <div className="flex-1 flex">
        {/* Sidebar */}
        <div className="w-64 bg-card border-r border-border p-4">
          <div className="space-y-2">
            {sidebarItems.map((item, index) => (
              <button
                key={index}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-left transition-colors ${
                  item.active 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4">
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="mb-6">
              <h1 className="text-heading-md font-semibold text-foreground mb-2">Shared Resources</h1>
              <p className="text-muted-foreground">
                Manage Shared resources, like libraries, parameters, etc. These resources are shared across multiple other services.
              </p>
            </div>

            {/* Domains Section */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-lg font-semibold text-foreground">Domains</h2>
                  <p className="text-sm text-muted-foreground">
                    A Domain is a logical grouping of resources that share a common set of policies and configurations. A Domain is a container for resources and policies that are managed as a single unit.
                  </p>
                </div>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Domain
                </Button>
              </div>

              {/* Search */}
              <div className="flex items-center justify-between mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search by Domain Name" 
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
                </div>
              </div>

              {/* Results Summary */}
              <p className="text-sm text-muted-foreground mb-4">
                Showing 1 - 102 of 102 results. <span className="text-primary cursor-pointer hover:underline">See more</span>
              </p>

              {/* Table */}
              <div className="bg-card rounded-lg border border-border">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="font-medium">Domain Name</TableHead>
                      <TableHead className="font-medium">Tenant Name</TableHead>
                      <TableHead className="font-medium">Resource Origin</TableHead>
                      <TableHead className="font-medium">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {domains.map((domain, index) => (
                      <TableRow key={index} className="hover:bg-muted/50">
                        <TableCell>
                          <div>
                            <div className="font-medium text-foreground">{domain.name}</div>
                            {domain.description && (
                              <div className="text-sm text-muted-foreground mt-1">{domain.description}</div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="text-muted-foreground">{domain.tenant}</TableCell>
                        <TableCell className="text-muted-foreground">{domain.origin}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Copy className="h-4 w-4" />
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
      </div>
    </div>
  );
};