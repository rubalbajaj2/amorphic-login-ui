import { useState } from "react";
import { RefreshCw } from "lucide-react";
import { HighCostingResourcesTab } from "./HighCostingResourcesTab";
import { CostTagsTab } from "./CostTagsTab";
import { CostMetricsTab } from "./CostMetricsTab";
import { BudgetsTab } from "./BudgetsTab";

export const CostManagementPanel = () => {
  const [showAllServices, setShowAllServices] = useState(false);
  const [activeTab, setActiveTab] = useState("usage");

  // Service data with unique colors
  const baseServices = [
    { name: "Amazon QuickSight", cost: 28.08, color: "#3B82F6" }, // Blue
    { name: "Amazon Redshift", cost: 13.5, color: "#10B981" }, // Green
    { name: "Amazon Relational Database Service", cost: 11.88, color: "#F59E0B" }, // Orange
    { name: "AWS Security Hub", cost: 10.8, color: "#EF4444" }, // Red
    { name: "Other Services", cost: 62.23, color: "#8B5CF6" } // Purple
  ];

  const additionalServices = [
    { name: "Amazon EC2", cost: 45.67, color: "#EC4899" }, // Pink
    { name: "Amazon S3", cost: 23.45, color: "#06B6D4" }, // Cyan
    { name: "AWS Lambda", cost: 18.92, color: "#84CC16" }, // Lime
    { name: "Amazon VPC", cost: 15.34, color: "#F97316" }, // Orange
    { name: "Amazon CloudWatch", cost: 12.78, color: "#6366F1" }, // Indigo
    { name: "AWS IAM", cost: 8.56, color: "#14B8A6" }, // Teal
    { name: "Amazon Route 53", cost: 6.89, color: "#A855F7" } // Violet
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
        <button 
          onClick={() => setActiveTab("usage")}
          className={`pb-2 text-sm font-medium ${activeTab === "usage" ? "border-b-2 border-primary text-primary" : "text-muted-foreground hover:text-foreground"}`}
        >
          Usage & Billing
        </button>
        <button 
          onClick={() => setActiveTab("high-costing")}
          className={`pb-2 text-sm font-medium ${activeTab === "high-costing" ? "border-b-2 border-primary text-primary" : "text-muted-foreground hover:text-foreground"}`}
        >
          High Costing Resources
        </button>
        <button 
          onClick={() => setActiveTab("cost-tags")}
          className={`pb-2 text-sm font-medium ${activeTab === "cost-tags" ? "border-b-2 border-primary text-primary" : "text-muted-foreground hover:text-foreground"}`}
        >
          Cost Tags
        </button>
        <button 
          onClick={() => setActiveTab("cost-metrics")}
          className={`pb-2 text-sm font-medium ${activeTab === "cost-metrics" ? "border-b-2 border-primary text-primary" : "text-muted-foreground hover:text-foreground"}`}
        >
          Cost Metrics
        </button>
        <button 
          onClick={() => setActiveTab("budgets")}
          className={`pb-2 text-sm font-medium ${activeTab === "budgets" ? "border-b-2 border-primary text-primary" : "text-muted-foreground hover:text-foreground"}`}
        >
          Budgets
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "usage" && (
        <>
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
                  <div className="w-24 h-40 bg-primary rounded-t mb-2 relative">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-foreground font-medium">
                      $126.49
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">Current Usage</span>
                </div>
                
                {/* Estimated Usage Bar */}
                <div className="flex flex-col items-center">
                  <div className="w-24 h-48 bg-sky-300 rounded-t mb-2 relative">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-foreground font-medium">
                      $250
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
                  <div className="w-3 h-3 bg-sky-300 rounded"></div>
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
              <div className="flex-1">
                <div className="w-80 h-80 mx-auto relative">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {currentServices.map((service, index) => {
                      let cumulativeAngle = 0;
                      for (let i = 0; i < index; i++) {
                        cumulativeAngle += (currentServices[i].cost / totalCost) * 360;
                      }
                      
                      const segmentAngle = (service.cost / totalCost) * 360;
                      const circumference = 2 * Math.PI * 25;
                      const segmentLength = (segmentAngle / 360) * circumference;
                      const offset = (cumulativeAngle / 360) * circumference;
                      
                      return (
                        <circle
                          key={service.name}
                          cx="50"
                          cy="50"
                          r="25"
                          fill="none"
                          stroke={service.color}
                          strokeWidth="15"
                          strokeDasharray={`${segmentLength} ${circumference}`}
                          strokeDashoffset={-offset}
                          transform="rotate(-90 50 50)"
                          className="transition-all duration-300"
                        />
                      );
                    })}
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-background rounded-full border border-border flex items-center justify-center">
                      <span className="text-xs font-medium text-foreground">$126</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service List */}
              <div className="w-80 flex-shrink-0">
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
        </>
      )}

      {activeTab === "high-costing" && <HighCostingResourcesTab />}
      {activeTab === "cost-tags" && <CostTagsTab />}
      {activeTab === "cost-metrics" && <CostMetricsTab />}
      {activeTab === "budgets" && <BudgetsTab />}
    </div>
  );
};