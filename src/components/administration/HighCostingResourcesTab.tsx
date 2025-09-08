import { RefreshCw } from "lucide-react";

export const HighCostingResourcesTab = () => {
  const resourceData = [
    { name: "Datalabs", cost: 45.6, color: "#3B82F6" },
    { name: "Data Pipelines", cost: 23.4, color: "#10B981" },
    { name: "Interactive Sessions", cost: 18.9, color: "#F59E0B" },
    { name: "Datasources", cost: 15.2, color: "#EF4444" },
    { name: "Jobs", cost: 12.8, color: "#8B5CF6" },
    { name: "Healthlake Stores", cost: 8.7, color: "#EC4899" },
    { name: "Datasource Entities", cost: 6.5, color: "#06B6D4" },
    { name: "Omics Stores", cost: 4.3, color: "#84CC16" },
    { name: "Omics Workflows", cost: 2.1, color: "#F97316" }
  ];

  const totalCost = resourceData.reduce((sum, resource) => sum + resource.cost, 0);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">High Costing Resources</h3>
        <button className="p-2 text-muted-foreground hover:text-foreground">
          <RefreshCw size={20} />
        </button>
      </div>

      <div className="flex gap-6">
        {/* Pie Chart */}
        <div className="flex-1">
          <div className="w-96 h-96 mx-auto relative">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {resourceData.map((resource, index) => {
                let cumulativeAngle = 0;
                for (let i = 0; i < index; i++) {
                  cumulativeAngle += (resourceData[i].cost / totalCost) * 360;
                }
                
                const segmentAngle = (resource.cost / totalCost) * 360;
                const circumference = 2 * Math.PI * 25;
                const segmentLength = (segmentAngle / 360) * circumference;
                const offset = (cumulativeAngle / 360) * circumference;
                
                return (
                  <circle
                    key={resource.name}
                    cx="50"
                    cy="50"
                    r="25"
                    fill="none"
                    stroke={resource.color}
                    strokeWidth="15"
                    strokeDasharray={`${segmentLength} ${circumference}`}
                    strokeDashoffset={-offset}
                    transform="rotate(-90 50 50)"
                    className="transition-all duration-300 hover:opacity-80 cursor-pointer"
                  >
                    <title>{resource.name}: ${resource.cost.toFixed(2)}</title>
                  </circle>
                );
              })}
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-background rounded-full border border-border flex items-center justify-center">
                <span className="text-xs font-medium text-foreground">${Math.round(totalCost)}</span>
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
                  <th className="text-left p-3 text-sm font-medium text-foreground">Resource Name</th>
                  <th className="text-right p-3 text-sm font-medium text-foreground">Cost(USD)</th>
                </tr>
              </thead>
              <tbody>
                {resourceData.map((resource, index) => (
                  <tr key={resource.name} className="border-t border-border">
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded" 
                          style={{ backgroundColor: resource.color }}
                        ></div>
                        <span className="text-sm text-foreground">{resource.name}</span>
                      </div>
                    </td>
                    <td className="p-3 text-right text-sm text-foreground">{resource.cost.toFixed(2)}</td>
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
  );
};