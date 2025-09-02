import { AppHeader } from "./dashboard/AppHeader";

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
                <div className="flex-1 relative">
                  <input 
                    type="text" 
                    placeholder="Search" 
                    className="w-full pl-4 pr-4 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                <select className="px-4 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Filter by Target Location</option>
                  <option>S3</option>
                  <option>S3athena</option>
                  <option>Redshift</option>
                  <option>DynamoDB</option>
                </select>
                <select className="px-4 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Filter by File Type</option>
                  <option>csv</option>
                  <option>others</option>
                  <option>parquet</option>
                  <option>xlsx</option>
                  <option>json</option>
                  <option>pdf</option>
                  <option>txt</option>
                  <option>jpg</option>
                  <option>wav</option>
                  <option>png</option>
                  <option>jpeg</option>
                  <option>mp3</option>
                </select>
                <select className="px-4 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Filter by Domain</option>
                  <option>demo</option>
                  <option>Test1</option>
                  <option>Test2</option>
                </select>
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90">
                  Advanced Filters
                </button>
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