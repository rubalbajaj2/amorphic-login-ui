import { AppHeader } from "./dashboard/AppHeader";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Trash2, Edit, Copy, FlaskConical, Plus, HelpCircle, Settings } from "lucide-react";

interface DataLabsPageProps {
  onLogout: () => void;
  onNavigate: (page: string) => void;
}

export const DataLabsPage = ({ onLogout, onNavigate }: DataLabsPageProps) => {
  const dataLabs = [
    {
      name: "test123",
      type: "sagemaker-studio",
      status: "Deleting",
      statusColor: "text-warning-700 bg-warning-100"
    },
    {
      name: "test",
      description: "This is for public school demo",
      type: "sagemaker-studio", 
      status: "Deleting",
      statusColor: "text-warning-700 bg-warning-100"
    },
    {
      name: "publicschool",
      description: "This is for Public School Demo",
      type: "sagemaker-notebook",
      status: "Stopped",
      statusColor: "text-muted-foreground bg-muted"
    },
    {
      name: "MSDemo",
      description: "notebook datalab",
      type: "sagemaker-notebook",
      status: "InService",
      statusColor: "text-success-700 bg-success-100"
    },
    {
      name: "Hello",
      type: "sagemaker-studio",
      status: "Deleting", 
      statusColor: "text-warning-700 bg-warning-100"
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
                <BreadcrumbLink className="text-muted-foreground">Explore</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-primary font-medium">Data Labs</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Page Header */}
          <div className="flex items-center gap-3 mb-2">
            <FlaskConical className="h-6 w-6 text-primary" />
            <h1 className="text-heading-md font-semibold text-foreground">Data Labs</h1>
          </div>
          
          <p className="text-muted-foreground mb-6">
            Create and manage your data analysis environments. Choose between a Studio for visual workflows or a Notebook for code-based exploration. Leverage the power of Amorphic's integrated data and machine learning capabilities.
          </p>

          {/* Controls */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search by Datalab Name" 
                  className="pl-10 w-64"
                />
              </div>
              
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Data Lab Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="inservice">InService</SelectItem>
                  <SelectItem value="stopped">Stopped</SelectItem>
                  <SelectItem value="deleting">Deleting</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Data Lab Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="studio">SageMaker Studio</SelectItem>
                  <SelectItem value="notebook">SageMaker Notebook</SelectItem>
                </SelectContent>
              </Select>
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
                Create Data Lab
              </Button>
            </div>
          </div>

          {/* Results Summary */}
          <p className="text-sm text-muted-foreground mb-4">
            Showing 1 - 5 of 5 results. <span className="text-primary cursor-pointer hover:underline">See more</span>
          </p>

          {/* Table */}
          <div className="bg-card rounded-lg border border-border">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-medium">Data Lab Name</TableHead>
                  <TableHead className="font-medium">Data Lab Type</TableHead>
                  <TableHead className="font-medium">Data Lab Status</TableHead>
                  <TableHead className="font-medium">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dataLabs.map((lab, index) => (
                  <TableRow key={index} className="hover:bg-muted/50">
                    <TableCell>
                      <div>
                        <div className="font-medium text-foreground">{lab.name}</div>
                        {lab.description && (
                          <div className="text-sm text-muted-foreground mt-1">{lab.description}</div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-primary text-primary-foreground">
                        {lab.type}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${lab.statusColor}`}>
                        {lab.status}
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
  );
};