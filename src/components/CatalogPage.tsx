import { AppHeader } from "./dashboard/AppHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";

interface CatalogPageProps {
  onLogout: () => void;
  onNavigate: (page: string) => void;
}

export const CatalogPage = ({ onLogout, onNavigate }: CatalogPageProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <AppHeader onLogout={onLogout} onNavigate={onNavigate} />
      <div className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <button onClick={() => onNavigate('dashboard')} className="hover:text-foreground">Home</button>
            <span>›</span>
            <span className="hover:text-foreground cursor-pointer">Discover</span>
            <span>›</span>
            <span className="text-foreground">Catalog</span>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-heading-md font-semibold text-foreground mb-2">Catalog</h1>
            <p className="text-base text-muted-foreground">Catalog is used to run tests on synthetic data for data (metadata.all)</p>
          </div>

          {/* Content */}
          <div className="bg-card rounded-lg border border-border p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">Search Results</h2>
              
              {/* Search and Filter Controls */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search by Catalog Name" 
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
                    <SelectItem value="s3athena">S3athena</SelectItem>
                    <SelectItem value="redshift">Redshift</SelectItem>
                    <SelectItem value="dynamodb">DynamoDB</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Filter by File Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="csv">csv</SelectItem>
                    <SelectItem value="others">others</SelectItem>
                    <SelectItem value="parquet">parquet</SelectItem>
                    <SelectItem value="xlsx">xlsx</SelectItem>
                    <SelectItem value="json">json</SelectItem>
                    <SelectItem value="pdf">pdf</SelectItem>
                    <SelectItem value="txt">txt</SelectItem>
                    <SelectItem value="jpg">jpg</SelectItem>
                    <SelectItem value="wav">wav</SelectItem>
                    <SelectItem value="png">png</SelectItem>
                    <SelectItem value="jpeg">jpeg</SelectItem>
                    <SelectItem value="mp3">mp3</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Filter by Domain" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Domains</SelectItem>
                    <SelectItem value="demo">demo</SelectItem>
                    <SelectItem value="test1">Test1</SelectItem>
                    <SelectItem value="test2">Test2</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Advanced Filters
                </Button>
              </div>

              {/* Tab Navigation */}
              <div className="flex border-b border-border mb-6">
                <button className="px-4 py-2 text-sm font-medium text-primary border-b-2 border-primary">All</button>
                <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground">Dataset</button>
                <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground">Glossary</button>
                <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground">Shared-resource</button>
                <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground">Job</button>
                <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground">Datasource</button>
                <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground">Dashboard</button>
                <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground">Datalab</button>
                <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground">Datapipeline</button>
              </div>

              <p className="text-sm text-muted-foreground mb-6">About 2,446 results</p>

              {/* Search Results */}
              <div className="space-y-4">
                <div className="border border-border rounded-lg p-4">
                  <h3 className="font-medium text-foreground mb-2">arrest</h3>
                  <p className="text-sm text-muted-foreground mb-2">Jul 01, 2025 02:43 pm GMT+1</p>
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-primary/10 text-primary">jdbcpostgresql</span>
                  <div className="flex justify-end">
                    <button className="text-primary text-sm hover:underline">View</button>
                  </div>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h3 className="font-medium text-foreground mb-2">evidence</h3>
                  <p className="text-sm text-muted-foreground mb-2">Jul 01, 2025 02:43 pm GMT+1</p>
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-primary/10 text-primary">jdbcpostgresql</span>
                  <div className="flex justify-end">
                    <button className="text-primary text-sm hover:underline">View</button>
                  </div>
                </div>

                <div className="border border-border rounded-lg p-4 border-l-4 border-l-primary">
                  <h3 className="font-medium text-foreground mb-2">officer</h3>
                  <p className="text-sm text-muted-foreground mb-2">Jul 01, 2025 02:43 pm GMT+1</p>
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-primary/10 text-primary">jdbcpostgresql</span>
                  <div className="flex justify-end">
                    <button className="text-primary text-sm hover:underline">View</button>
                  </div>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h3 className="font-medium text-foreground mb-2">incident_report</h3>
                  <p className="text-sm text-muted-foreground mb-2">Jul 01, 2025 02:43 pm GMT+1</p>
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-primary/10 text-primary">jdbcpostgresql</span>
                  <div className="flex justify-end">
                    <button className="text-primary text-sm hover:underline">View</button>
                  </div>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h3 className="font-medium text-foreground mb-2">dispatch_log</h3>
                  <p className="text-sm text-muted-foreground mb-2">Jul 01, 2025 02:43 pm GMT+1</p>
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs bg-primary/10 text-primary">jdbcpostgresql</span>
                  <div className="flex justify-end">
                    <button className="text-primary text-sm hover:underline">View</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};