import { AppHeader } from "./dashboard/AppHeader";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Edit, Copy, Trash2, BookOpen, Plus, HelpCircle, Settings } from "lucide-react";

interface GlossariesPageProps {
  onLogout: () => void;
  onNavigate: (page: string) => void;
}

export const GlossariesPage = ({ onLogout, onNavigate }: GlossariesPageProps) => {
  const glossaries = [
    {
      name: "TX-CPA-Sales-Tax",
      description: "Texas CPA Sales Tax Glossary",
      status: "Completed"
    },
    {
      name: "TeamAGlossary",
      description: "This Glossary is for Team A",
      status: "Completed"
    },
    {
      name: "Scottish_road_transport",
      description: "Glossary for Scotland road transport department",
      status: "Completed"
    },
    {
      name: "IDs",
      description: "This will track all IDs referred in Datasets",
      status: "Completed"
    },
    {
      name: "HealthIds",
      description: "This is for Health Care IDs together",
      status: "Completed"
    },
    {
      name: "Hannon_IDs",
      description: "This is for IDs at Hannon",
      status: "Completed"
    },
    {
      name: "FIA_Glossaries",
      description: "Glossary for FIA datasets",
      status: "Completed"
    },
    {
      name: "BusinessGlossary",
      description: "This is business glossary",
      status: "Completed"
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
                <BreadcrumbPage className="text-primary font-medium">Glossaries</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Page Header */}
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <h1 className="text-heading-md font-semibold text-foreground">Glossaries</h1>
          </div>
          
          <p className="text-muted-foreground mb-6">
            A glossary is a list of terms in a particular domain of knowledge with the definitions for those terms. Traditionally, a glossary appears at the end of a book and includes terms within that book that are either newly introduced, uncommon, or specialized.
          </p>

          {/* Controls */}
          <div className="flex items-center justify-between mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search by Glossary Name" 
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
                Create Glossary
              </Button>
            </div>
          </div>

          {/* Results Summary */}
          <p className="text-sm text-muted-foreground mb-4">
            Showing 1 - 8 of 8 results. <span className="text-primary cursor-pointer hover:underline">See more</span>
          </p>

          {/* Table */}
          <div className="bg-card rounded-lg border border-border">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-medium">Glossary Name</TableHead>
                  <TableHead className="font-medium">Glossary Status</TableHead>
                  <TableHead className="font-medium">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {glossaries.map((glossary, index) => (
                  <TableRow key={index} className="hover:bg-muted/50">
                    <TableCell>
                      <div>
                        <div className="font-medium text-foreground">{glossary.name}</div>
                        <div className="text-sm text-muted-foreground mt-1">{glossary.description}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-success-100 text-success-700">
                        {glossary.status}
                      </span>
                    </TableCell>
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
  );
};