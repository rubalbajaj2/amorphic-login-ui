import { RefreshCw } from "lucide-react";

export const HighCostingResourcesTab = () => {
  const resourceData = [
    { name: "Datalabs", cost: 45.6, color: "rgb(var(--primary-500))" },
    { name: "Data Pipelines", cost: 23.4, color: "rgb(var(--success-500))" },
    { name: "Interactive Sessions", cost: 18.9, color: "rgb(var(--secondary-600))" },
    { name: "Datasources", cost: 15.2, color: "rgb(var(--warning-500))" },
    { name: "Jobs", cost: 12.8, color: "rgb(var(--error-500))" },
    { name: "Healthlake Stores", cost: 8.7, color: "rgb(var(--gray-600))" },
    { name: "Datasource Entities", cost: 6.5, color: "rgb(var(--primary-300))" },
    { name: "Omics Stores", cost: 4.3, color: "rgb(var(--success-300))" },
    { name: "Omics Workflows", cost: 2.1, color: "rgb(var(--secondary-400))" }
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

      <div className="flex gap-8">
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
                const circumference = 2 * Math.PI * 30;
                const segmentLength = (segmentAngle / 360) * circumference;
                const offset = (cumulativeAngle / 360) * circumference;
                
                return (
                  <circle
                    key={resource.name}
                    cx="50"
                    cy="50"
                    r="30"
                    fill="none"
                    stroke={resource.color}
                    strokeWidth="20"
                    strokeDasharray={`${segmentLength} ${circumference}`}
                    strokeDashoffset={-offset}
                    transform="rotate(-90 50 50)"
                    className="transition-all duration-300"
                  />
                );
              })}
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-background rounded-full border border-border"></div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="w-80 flex-shrink-0">
          <div className="grid grid-cols-3 gap-4">
            {resourceData.map((resource) => (
              <div key={resource.name} className="flex items-center gap-2">
                <div 
                  className="w-4 h-4 rounded" 
                  style={{ backgroundColor: resource.color }}
                ></div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">{resource.name}</span>
                  <span className="text-xs text-muted-foreground">${resource.cost}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};