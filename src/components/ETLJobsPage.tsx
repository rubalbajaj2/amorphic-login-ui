import { AppHeader } from "./dashboard/AppHeader";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Edit, Copy, Trash2, Briefcase, Plus, HelpCircle, Settings } from "lucide-react";

interface ETLJobsPageProps {
  onLogout: () => void;
  onNavigate: (page: string) => void;
}

export const ETLJobsPage = ({ onLogout, onNavigate }: ETLJobsPageProps) => {
  const jobs = [
    {
      name: "wf_entity_resolution",
      type: "pythonshell",
      lastModified: "Feb 10, 2025 12:15 pm GMT",
      status: "Completed",
      statusColor: "text-success-700 bg-success-100"
    },
    {
      name: "weather_api_etl_job",
      type: "pythonshell", 
      lastModified: "Jul 21, 2025 09:24 am GMT+1",
      status: "Completed",
      statusColor: "text-success-700 bg-success-100"
    },
    {
      name: "transporter_ETL",
      type: "pythonshell",
      lastModified: "Aug 25, 2025 01:02 pm GMT+1",
      status: "Completed",
      statusColor: "text-success-700 bg-success-100"
    },
    {
      name: "texas_wda_read_write",
      description: "Transferring the data from silver layer to gold layer",
      type: "spark",
      lastModified: "Aug 13, 2025 12:59 pm GMT+1",
      status: "Completed",
      statusColor: "text-success-700 bg-success-100"
    },
    {
      name: "texas_dmv_data_cleansing",
      description: "The job performs cleansing of the data",
      type: "pythonshell",
      lastModified: "Aug 04, 2025 09:41 am GMT+1",
      status: "Completed",
      statusColor: "text-success-700 bg-success-100"
    },
    {
      name: "texas_dmv_data_aggregation",
      description: "This job performs aggregation of the data",
      type: "pythonshell",
      lastModified: "Jul 30, 2025 07:39 am GMT+1",
      status: "Completed",
      statusColor: "text-success-700 bg-success-100"
    },
    {
      name: "test_etl_lib_issue",
      description: "This Job is for testing ETL Library Issue",
      type: "pythonshell",
      lastModified: "Dec 31, 2024 05:13 am GMT",
      status: "Completed",
      statusColor: "text-success-700 bg-success-100"
    },
    {
      name: "Test1",
      type: "morph",
      lastModified: "Apr 01, 2025 10:39 am GMT+1",
      status: "Pending",
      statusColor: "text-warning-700 bg-warning-100"
    },
    {
      name: "Test",
      type: "morph",
      lastModified: "Apr 01, 2025 10:39 am GMT+1",
      status: "Pending",
      statusColor: "text-warning-700 bg-warning-100"
    },
    {
      name: "telemetry_silver_gold",
      description: "This job curates the telemetry data so its ready for consumption",
      type: "pythonshell",
      lastModified: "Jul 08, 2025 08:44 am GMT+1",
      status: "Completed",
      statusColor: "text-success-700 bg-success-100"
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
                <BreadcrumbPage className="text-primary font-medium">ETL Jobs</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Page Header */}
          <div className="flex items-center gap-3 mb-2">
            <Briefcase className="h-6 w-6 text-primary" />
            <h1 className="text-heading-md font-semibold text-foreground">Jobs</h1>
          </div>
          
          <p className="text-muted-foreground mb-6">
            Jobs are automated tasks that process, analyze, or manage data within Amorphic. Use this section to create, monitor, and manage all your jobs efficiently.
          </p>

          {/* Controls */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search by Job Name" 
                  className="pl-10 w-64"
                />
              </div>
              
              <Select>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Job Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="pythonshell">Python Shell</SelectItem>
                  <SelectItem value="spark">Spark</SelectItem>
                  <SelectItem value="morph">Morph</SelectItem>
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
                Create Job
              </Button>
            </div>
          </div>

          {/* Results Summary */}
          <p className="text-sm text-muted-foreground mb-4">
            Showing 1 - 24 of 54 results. <span className="text-primary cursor-pointer hover:underline">See more</span>
          </p>

          {/* Table */}
          <div className="bg-card rounded-lg border border-border">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-medium">Job Name</TableHead>
                  <TableHead className="font-medium">Job Type</TableHead>
                  <TableHead className="font-medium">Last Modified</TableHead>
                  <TableHead className="font-medium">Registration Status</TableHead>
                  <TableHead className="font-medium">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {jobs.map((job, index) => (
                  <TableRow key={index} className="hover:bg-muted/50">
                    <TableCell>
                      <div>
                        <div className="font-medium text-foreground">{job.name}</div>
                        {job.description && (
                          <div className="text-sm text-muted-foreground mt-1">{job.description}</div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-primary text-primary-foreground">
                        {job.type}
                      </span>
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm">{job.lastModified}</TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${job.statusColor}`}>
                        {job.status}
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