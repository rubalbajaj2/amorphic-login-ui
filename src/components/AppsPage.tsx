import { AppHeader } from "./dashboard/AppHeader";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, ExternalLink, Grid3X3, Plus, HelpCircle, Settings, MessageSquare } from "lucide-react";

interface AppsPageProps {
  onLogout: () => void;
  onNavigate: (page: string) => void;
}

export const AppsPage = ({ onLogout, onNavigate }: AppsPageProps) => {
  const apps = [
    {
      name: "TRACE Application",
      type: "TRACE",
      icon: "📊"
    },
    {
      name: "Intelligent Document Processing Application",
      type: "IDP",
      icon: "📄"
    },
    {
      name: "BI Application",
      type: "BI",
      icon: "📈"
    },
    {
      name: "AI Chatbot Application",
      type: "AI",
      icon: <MessageSquare className="h-5 w-5 text-primary" />
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
                <BreadcrumbPage className="text-primary font-medium">Apps</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Page Header */}
          <div className="flex items-center gap-3 mb-2">
            <Grid3X3 className="h-6 w-6 text-primary" />
            <h1 className="text-heading-md font-semibold text-foreground">Apps</h1>
          </div>
          
          <p className="text-muted-foreground mb-6">
            Description
          </p>

          {/* Controls */}
          <div className="flex items-center justify-between mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search by App Name" 
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
            Showing 1 - 4 of 4 results. <span className="text-primary cursor-pointer hover:underline">See more</span>
          </p>

          {/* Table */}
          <div className="bg-card rounded-lg border border-border">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-medium">App Name</TableHead>
                  <TableHead className="font-medium">App Type</TableHead>
                  <TableHead className="font-medium">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {apps.map((app, index) => (
                  <TableRow key={index} className="hover:bg-muted/50">
                     <TableCell>
                       <div className="flex items-center gap-3">
                         {typeof app.icon === 'string' ? (
                           <span className="text-lg">{app.icon}</span>
                         ) : (
                           app.icon
                         )}
                       <div>
                         <div className="font-medium text-foreground">{app.name}</div>
                       </div>
                       </div>
                     </TableCell>
                    <TableCell className="text-muted-foreground">{app.type}</TableCell>
                    <TableCell>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-primary hover:text-primary"
                        onClick={() => {
                          if (app.name === "AI Chatbot Application") {
                            onNavigate('ai-chatbot');
                          }
                        }}
                      >
                        Go To App
                      </Button>
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