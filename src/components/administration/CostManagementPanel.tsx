export const CostManagementPanel = () => {
  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-foreground">Usage & Billing</h2>
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
        <button className="border-b-2 border-primary text-primary pb-2 text-sm font-medium">Usage & Billing</button>
        <button className="text-muted-foreground pb-2 text-sm hover:text-foreground">High Costing Resources</button>
        <button className="text-muted-foreground pb-2 text-sm hover:text-foreground">Cost Tags</button>
        <button className="text-muted-foreground pb-2 text-sm hover:text-foreground">Cost Metrics</button>
        <button className="text-muted-foreground pb-2 text-sm hover:text-foreground">Budgets</button>
      </div>

      {/* Billing Details */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-foreground">Billing Details</h3>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">September 2025</span>
            <button className="p-1 hover:bg-accent rounded">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="1"/>
                <circle cx="19" cy="12" r="1"/>
                <circle cx="5" cy="12" r="1"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Chart Area */}
        <div className="bg-background border border-border rounded-lg p-6 mb-6">
          <div className="h-64 flex items-end justify-center gap-4">
            {/* Simulated chart bars */}
            <div className="flex items-end gap-2">
              <div className="w-8 h-2 bg-primary rounded-t"></div>
              <div className="w-8 h-2 bg-primary rounded-t"></div>
              <div className="w-8 h-2 bg-primary rounded-t"></div>
              <div className="w-8 h-2 bg-primary rounded-t"></div>
              <div className="w-8 h-2 bg-primary rounded-t"></div>
              <div className="w-8 h-2 bg-primary rounded-t"></div>
              <div className="w-8 h-2 bg-primary rounded-t"></div>
              <div className="w-8 h-2 bg-primary rounded-t"></div>
              <div className="w-8 h-2 bg-primary rounded-t"></div>
              <div className="w-8 h-2 bg-primary rounded-t"></div>
              <div className="w-8 h-2 bg-primary rounded-t"></div>
              <div className="w-8 h-2 bg-primary rounded-t"></div>
              <div className="w-8 h-2 bg-primary rounded-t"></div>
              <div className="w-8 h-2 bg-primary rounded-t"></div>
              <div className="w-8 h-2 bg-primary rounded-t"></div>
              <div className="w-8 h-2 bg-primary rounded-t"></div>
              <div className="w-96 h-40 bg-primary/20 rounded-t ml-4"></div>
            </div>
            <div className="text-xs text-muted-foreground absolute bottom-0">2025-09-01</div>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded"></div>
              <span className="text-sm text-foreground">Current Usage</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary/20 rounded"></div>
              <span className="text-sm text-foreground">Estimated Usage</span>
            </div>
          </div>
        </div>
      </div>

      {/* Usage by Service */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-foreground">Usage by Service</h3>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">September 2025</span>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="showAll" className="rounded" />
              <label htmlFor="showAll" className="text-sm text-muted-foreground">Show All</label>
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Pie Chart */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle
                  cx="50"
                  cy="50"
                  r="25"
                  fill="none"
                  stroke="rgb(var(--primary-400))"
                  strokeWidth="20"
                  strokeDasharray="39.27 100"
                  transform="rotate(-90 50 50)"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="25"
                  fill="none"
                  stroke="rgb(var(--warning-400))"
                  strokeWidth="20"
                  strokeDasharray="31.4 100"
                  strokeDashoffset="-39.27"
                  transform="rotate(-90 50 50)"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="25"
                  fill="none"
                  stroke="rgb(var(--success-400))"
                  strokeWidth="20"
                  strokeDasharray="15.7 100"
                  strokeDashoffset="-70.67"
                  transform="rotate(-90 50 50)"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="25"
                  fill="none"
                  stroke="rgb(--secondary-600)"
                  strokeWidth="20"
                  strokeDasharray="13.63 100"
                  strokeDashoffset="-86.37"
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-background rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Service List */}
          <div className="flex-1">
            <div className="bg-background border border-border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-3 text-sm font-medium text-foreground">Service Name</th>
                    <th className="text-right p-3 text-sm font-medium text-foreground">Cost(USD)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-border">
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-primary rounded"></div>
                        <span className="text-sm text-foreground">Amazon QuickSight</span>
                      </div>
                    </td>
                    <td className="p-3 text-right text-sm text-foreground">28.08</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-success-400 rounded"></div>
                        <span className="text-sm text-foreground">Amazon Redshift</span>
                      </div>
                    </td>
                    <td className="p-3 text-right text-sm text-foreground">13.5</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-secondary-600 rounded"></div>
                        <span className="text-sm text-foreground">Amazon Relational Database Service</span>
                      </div>
                    </td>
                    <td className="p-3 text-right text-sm text-foreground">11.88</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-gray-600 rounded"></div>
                        <span className="text-sm text-foreground">AWS Security Hub</span>
                      </div>
                    </td>
                    <td className="p-3 text-right text-sm text-foreground">10.8</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-warning-400 rounded"></div>
                        <span className="text-sm text-foreground">Other Services</span>
                      </div>
                    </td>
                    <td className="p-3 text-right text-sm text-foreground">62.23</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};