import { useState } from "react";
import { RefreshCw } from "lucide-react";

export const CostManagementPanel = () => {
  const [showAllServices, setShowAllServices] = useState(false);

  // Service data with unique colors
  const baseServices = [
    { name: "Amazon QuickSight", cost: 28.08, color: "rgb(var(--primary-400))" },
    { name: "Amazon Redshift", cost: 13.5, color: "rgb(var(--success-400))" },
    { name: "Amazon Relational Database Service", cost: 11.88, color: "rgb(var(--secondary-600))" },
    { name: "AWS Security Hub", cost: 10.8, color: "rgb(var(--gray-600))" },
    { name: "Other Services", cost: 62.23, color: "rgb(var(--warning-400))" }
  ];

  const additionalServices = [
    { name: "Amazon EC2", cost: 45.67, color: "rgb(var(--error-400))" },
    { name: "Amazon S3", cost: 23.45, color: "rgb(var(--primary-200))" },
    { name: "AWS Lambda", cost: 18.92, color: "rgb(var(--success-200))" },
    { name: "Amazon VPC", cost: 15.34, color: "rgb(var(--warning-200))" },
    { name: "Amazon CloudWatch", cost: 12.78, color: "rgb(var(--secondary-400))" },
    { name: "AWS IAM", cost: 8.56, color: "rgb(var(--gray-400))" },
    { name: "Amazon Route 53", cost: 6.89, color: "rgb(var(--primary-300))" }
  ];

  const currentServices = showAllServices ? [...baseServices, ...additionalServices] : baseServices;
  const totalCost = currentServices.reduce((sum, service) => sum + service.cost, 0);

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-foreground">Usage & Billing</h2>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">September 2025</span>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 flex items-center gap-2">
            <RefreshCw size={16} />
            Refresh
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
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-background border border-border rounded-lg p-6 mb-6">
          <div className="h-64 flex items-end justify-center gap-8">
            {/* Current Usage Bar */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-40 bg-primary rounded-t mb-2 relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-foreground font-medium">
                  $126.49
                </div>
              </div>
              <span className="text-xs text-muted-foreground">Current Usage</span>
            </div>
            
            {/* Estimated Usage Bar */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-32 bg-primary/40 rounded-t mb-2 relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-foreground font-medium">
                  $98.23
                </div>
              </div>
              <span className="text-xs text-muted-foreground">Estimated Usage</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded"></div>
              <span className="text-sm text-foreground">Current Usage</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary/40 rounded"></div>
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
              <input 
                type="checkbox" 
                id="showAll" 
                className="rounded" 
                checked={showAllServices}
                onChange={(e) => setShowAllServices(e.target.checked)}
              />
              <label htmlFor="showAll" className="text-sm text-muted-foreground">Show All</label>
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Pie Chart */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {currentServices.map((service, index) => {
                  let cumulativeOffset = 0;
                  for (let i = 0; i < index; i++) {
                    cumulativeOffset += (currentServices[i].cost / totalCost) * 157.08;
                  }
                  
                  const segmentLength = (service.cost / totalCost) * 157.08;
                  
                  return (
                    <circle
                      key={service.name}
                      cx="50"
                      cy="50"
                      r="25"
                      fill="none"
                      stroke={service.color}
                      strokeWidth="20"
                      strokeDasharray={`${segmentLength} 157.08`}
                      strokeDashoffset={-cumulativeOffset}
                      transform="rotate(-90 50 50)"
                    />
                  );
                })}
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-background rounded-full border border-border"></div>
              </div>
            </div>
          </div>

          {/* Service List */}
          <div className="flex-1 max-w-md">
            <div className="bg-background border border-border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-3 text-sm font-medium text-foreground">Service Name</th>
                    <th className="text-right p-3 text-sm font-medium text-foreground">Cost(USD)</th>
                  </tr>
                </thead>
                <tbody>
                  {currentServices.map((service, index) => (
                    <tr key={service.name} className="border-t border-border">
                      <td className="p-3">
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-3 h-3 rounded" 
                            style={{ backgroundColor: service.color }}
                          ></div>
                          <span className="text-sm text-foreground">{service.name}</span>
                        </div>
                      </td>
                      <td className="p-3 text-right text-sm text-foreground">{service.cost.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-3 text-right">
              <span className="text-sm font-medium text-foreground">
                Total: ${totalCost.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};