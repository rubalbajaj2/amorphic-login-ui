import { AppHeader } from "./dashboard/AppHeader";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Edit, Copy, Trash2, Heart, Plus, HelpCircle, Settings, Database, Image, BarChart3, Workflow } from "lucide-react";

interface HCLSPageProps {
  onLogout: () => void;
  onNavigate: (page: string) => void;
}

export const HCLSPage = ({ onLogout, onNavigate }: HCLSPageProps) => {
  const healthlakeStores = [
    {
      name: "public-health",
      description: "This HL is currently used to run tests on synthetic ehr fhir data (metadata.ai)",
      type: "healthlake",
      status: "Store Deletion Failed",
      statusColor: "text-error-600 bg-error-100"
    },
    {
      name: "HL_Revenue_Management",
      description: "Healthlake is created for Revenue Management",
      type: "healthlake",
      status: "Store Deletion Failed",
      statusColor: "text-error-600 bg-error-100"
    }
  ];

  const sidebarItems = [
    { icon: Database, label: "Health Lake", active: true },
    { icon: Image, label: "Health Imaging" },
    { icon: BarChart3, label: "Omics Storage" },
    { icon: BarChart3, label: "Omics Analytics" },
    { icon: Workflow, label: "Omics Workflows" }
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
              <h1 className="text-heading-md font-semibold text-foreground mb-2">HCLS - Healthlake</h1>
              <p className="text-muted-foreground">
                HCLS - Healthlake is a fully managed, HIPAA-eligible, FHIR-enabled data lake for healthcare and life sciences studies.
              </p>
            </div>

            {/* Healthlake Section */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-lg font-semibold text-foreground">Healthlake</h2>
                  <p className="text-sm text-muted-foreground">
                    Health Lake is a fully managed, HIPAA-eligible, FHIR-enabled data lake for healthcare and life sciences studies.
                  </p>
                </div>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Healthlake
                </Button>
              </div>

              {/* Search */}
              <div className="flex items-center justify-between mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search by Store Name" 
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
                Showing 1 - 2 of 2 results. <span className="text-primary cursor-pointer hover:underline">See more</span>
              </p>

              {/* Table */}
              <div className="bg-card rounded-lg border border-border">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="font-medium">Healthlake Store Name</TableHead>
                      <TableHead className="font-medium">Healthlake Store Type</TableHead>
                      <TableHead className="font-medium">Status</TableHead>
                      <TableHead className="font-medium">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {healthlakeStores.map((store, index) => (
                      <TableRow key={index} className="hover:bg-muted/50">
                        <TableCell>
                          <div>
                            <div className="font-medium text-foreground">{store.name}</div>
                            <div className="text-sm text-muted-foreground mt-1">{store.description}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-primary text-primary-foreground">
                            {store.type}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${store.statusColor}`}>
                            {store.status}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};