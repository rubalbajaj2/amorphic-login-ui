export const InfraManagementPanel = () => {
  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-foreground">Dataload Limits</h2>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">September 2025</span>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M3 12h18"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 mb-6 border-b border-border">
        <button className="border-b-2 border-primary text-primary pb-2 text-sm font-medium">Dataload Limits</button>
        <button className="text-muted-foreground pb-2 text-sm hover:text-foreground">Service Limits</button>
        <button className="text-muted-foreground pb-2 text-sm hover:text-foreground">System Datasets</button>
        <button className="text-muted-foreground pb-2 text-sm hover:text-foreground">Backend Jobs</button>
      </div>

      <p className="text-sm text-muted-foreground mb-6">
        Manage dataload limits and configurations; these limits are applied to all dataloads in the system.
      </p>

      {/* Dataload Throttling */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-foreground">Dataload Throttling</span>
          <span className="bg-error-100 text-error-700 px-2 py-1 rounded text-xs font-medium">Disabled</span>
        </div>
      </div>

      {/* Services Dataloads */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-foreground">Services Dataloads</h3>
          <div className="flex gap-2">
            <button className="p-1 hover:bg-accent rounded">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="1"/>
                <circle cx="19" cy="12" r="1"/>
                <circle cx="5" cy="12" r="1"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-5 gap-4 mb-6">
          <div className="bg-background border border-border rounded-lg p-4 text-center">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
              </svg>
            </div>
            <div className="text-2xl font-bold text-foreground">105</div>
            <div className="text-sm text-muted-foreground">DynamoDB</div>
          </div>

          <div className="bg-background border border-border rounded-lg p-4 text-center">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M3 6h18"/>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
              </svg>
            </div>
            <div className="text-2xl font-bold text-foreground">105</div>
            <div className="text-sm text-muted-foreground">S3</div>
          </div>

          <div className="bg-background border border-border rounded-lg p-4 text-center">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
            </div>
            <div className="text-2xl font-bold text-foreground">35</div>
            <div className="text-sm text-muted-foreground">S3Athena</div>
          </div>

          <div className="bg-background border border-border rounded-lg p-4 text-center">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
            <div className="text-2xl font-bold text-foreground">35</div>
            <div className="text-sm text-muted-foreground">Lakeformation</div>
          </div>

          <div className="bg-background border border-border rounded-lg p-4 text-center">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div className="text-2xl font-bold text-foreground">62</div>
            <div className="text-sm text-muted-foreground">Redshift</div>
          </div>
        </div>
      </div>

      {/* Tables */}
      <div className="space-y-6">
        {/* Recent Executions */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-foreground">Recent Executions</h3>
            <button className="p-1 hover:bg-accent rounded">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="1"/>
                <circle cx="19" cy="12" r="1"/>
                <circle cx="5" cy="12" r="1"/>
              </svg>
            </button>
          </div>

          <div className="bg-background border border-border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-3 text-sm font-medium text-foreground">Service</th>
                  <th className="text-left p-3 text-sm font-medium text-foreground">Recent Executions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="p-3 text-sm text-foreground">DynamoDB</td>
                  <td className="p-3 text-sm text-foreground">1</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3 text-sm text-foreground">S3</td>
                  <td className="p-3 text-sm text-foreground">2</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3 text-sm text-foreground">S3Athena</td>
                  <td className="p-3 text-sm text-foreground">1</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3 text-sm text-foreground">Lakeformation</td>
                  <td className="p-3 text-sm text-foreground">0</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3 text-sm text-foreground">Redshift</td>
                  <td className="p-3 text-sm text-foreground">0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Current Message in Queue */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-foreground">Current Message in Queue</h3>
            <button className="p-1 hover:bg-accent rounded">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="1"/>
                <circle cx="19" cy="12" r="1"/>
                <circle cx="5" cy="12" r="1"/>
              </svg>
            </button>
          </div>

          <div className="bg-background border border-border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-3 text-sm font-medium text-foreground">Service</th>
                  <th className="text-left p-3 text-sm font-medium text-foreground">Current Message in Queue</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="p-3 text-sm text-foreground">DynamoDB</td>
                  <td className="p-3 text-sm text-foreground">0</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3 text-sm text-foreground">S3</td>
                  <td className="p-3 text-sm text-foreground">0</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3 text-sm text-foreground">S3Athena</td>
                  <td className="p-3 text-sm text-foreground">0</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3 text-sm text-foreground">Lakeformation</td>
                  <td className="p-3 text-sm text-foreground">0</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3 text-sm text-foreground">Redshift</td>
                  <td className="p-3 text-sm text-foreground">0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};