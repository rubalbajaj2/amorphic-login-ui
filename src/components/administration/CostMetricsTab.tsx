import { RotateCcw, Info } from "lucide-react";

export const CostMetricsTab = () => {
  const departmentData = [
    { name: "Dept2", cost: 60, color: "#3B82F6" },
    { name: "Untagged", cost: 40, color: "#10B981" },
    { name: "Dept3", cost: 30, color: "#F59E0B" },
    { name: "Dept1", cost: 20, color: "#EF4444" },
    { name: "Dept4", cost: 7, color: "#8B5CF6" }
  ];

  const totalCost = departmentData.reduce((sum, dept) => sum + dept.cost, 0);

  const stackedBarColors = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"];
  const awsResources = [
    ["EC2 Instances", "RDS", "S3 Storage", "Lambda", "CloudWatch"],
    ["VPC", "IAM", "Route 53", "CloudFormation", "Auto Scaling"],
    ["ELB", "SNS", "SQS", "DynamoDB", "API Gateway"],
    ["KMS", "Secrets Manager", "Systems Manager", "Config", "CloudTrail"],
    ["Backup", "Support", "Trusted Advisor", "Personal Health", "Well-Architected"]
  ];

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tag level cost and usage report - 30 Days */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-foreground">Tag level cost and usage report - 30 Days</h3>
            <div className="flex items-center gap-2">
              <button className="p-1 text-muted-foreground hover:text-foreground">
                <RotateCcw size={16} />
              </button>
              <button className="p-1 text-muted-foreground hover:text-foreground">
                <Info size={16} />
              </button>
            </div>
          </div>
          
          <div className="flex gap-6">
            {/* Pie Chart */}
            <div className="flex-1">
              <div className="w-64 h-64 mx-auto relative">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {departmentData.map((dept, index) => {
                    let cumulativeAngle = 0;
                    for (let i = 0; i < index; i++) {
                      cumulativeAngle += (departmentData[i].cost / totalCost) * 360;
                    }
                    
                    const segmentAngle = (dept.cost / totalCost) * 360;
                    const circumference = 2 * Math.PI * 25;
                    const segmentLength = (segmentAngle / 360) * circumference;
                    const offset = (cumulativeAngle / 360) * circumference;
                    
                    return (
                      <circle
                        key={dept.name}
                        cx="50"
                        cy="50"
                        r="25"
                        fill="none"
                        stroke={dept.color}
                        strokeWidth="15"
                        strokeDasharray={`${segmentLength} ${circumference}`}
                        strokeDashoffset={-offset}
                        transform="rotate(-90 50 50)"
                        className="transition-all duration-300 hover:opacity-80 cursor-pointer"
                      >
                        <title>{dept.name}: ${dept.cost}</title>
                      </circle>
                    );
                  })}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-background rounded-full border border-border flex items-center justify-center">
                    <span className="text-xs font-medium text-foreground">${totalCost}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="w-36 flex-shrink-0 flex justify-center items-center">
              <div className="bg-background overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left p-2 text-xs font-medium text-foreground">Department</th>
                      <th className="text-right p-2 text-xs font-medium text-foreground">Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {departmentData.map((dept, index) => (
                      <tr key={dept.name}>
                        <td className="p-2">
                          <div className="flex items-center gap-1">
                            <div 
                              className="w-2 h-2 rounded" 
                              style={{ backgroundColor: dept.color }}
                            ></div>
                            <span className="text-xs text-foreground">{dept.name}</span>
                          </div>
                        </td>
                        <td className="p-2 text-right text-xs text-foreground">${dept.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <button className="p-1 text-muted-foreground hover:text-foreground">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7,10 12,15 17,10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Tag level cost and usage report - monthly */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-foreground">Tag level cost and usage report - monthly</h3>
            <div className="flex items-center gap-2">
              <button className="p-1 text-muted-foreground hover:text-foreground">
                <RotateCcw size={16} />
              </button>
              <button className="p-1 text-muted-foreground hover:text-foreground">
                <Info size={16} />
              </button>
            </div>
          </div>
          
          {/* Stacked Bar Chart */}
          <div className="h-48 flex items-end justify-center gap-3">
            {[
              { date: "2025-05-01", values: [1800, 200, 100, 50] },
              { date: "2025-06-01", values: [1700, 250, 150, 80] },
              { date: "2025-07-01", values: [1500, 200, 100, 60] },
              { date: "2025-08-01", values: [1300, 180, 120, 70] },
              { date: "2025-09-01", values: [100, 0, 0, 0] }
            ].map((bar, index) => (
              <div key={bar.date} className="flex flex-col items-center">
                  <div className="flex flex-col w-10">
                    {bar.values.map((value, idx) => {
                      const height = (value / 2500) * 120;
                      return (
                        <div 
                          key={idx}
                          className="w-full transition-all duration-200 hover:opacity-80 cursor-pointer relative group"
                          style={{ 
                            height: `${height}px`,
                            backgroundColor: stackedBarColors[idx % stackedBarColors.length]
                          }}
                          title={`${awsResources[idx] ? awsResources[idx][index % awsResources[idx].length] : 'Resource'}: $${value}`}
                        />
                      );
                    })}
                  </div>
                  <span className="text-xs text-muted-foreground mt-2">
                    {new Date(bar.date).toLocaleDateString('en-US', { month: 'short' })}
                  </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tag level cost and usage report - Daily */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-foreground">Tag level cost and usage report - Daily</h3>
            <div className="flex items-center gap-2">
              <button className="p-1 text-muted-foreground hover:text-foreground">
                <RotateCcw size={16} />
              </button>
              <button className="p-1 text-muted-foreground hover:text-foreground">
                <Info size={16} />
              </button>
            </div>
          </div>
          
          {/* Daily Bar Chart */}
          <div className="h-48 flex items-end justify-center gap-3">
            {[
              { date: "2025-09-04", value: 10 },
              { date: "2025-09-03", value: 40 },
              { date: "2025-09-02", value: 40 },
              { date: "2025-09-01", value: 40 },
              { date: "2025-08-31", value: 40 }
            ].map((bar, index) => (
              <div key={bar.date} className="flex flex-col items-center">
                <div 
                  className="w-10 bg-primary rounded-t"
                  style={{ height: `${(bar.value / 50) * 120}px` }}
                />
                <span className="text-xs text-muted-foreground mt-2">
                  {new Date(bar.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }).replace(',', '')}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Service Level cost and usage report */}
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-foreground">Service Level cost and usage report (for selected Tag) - Monthly</h3>
            <div className="flex items-center gap-2">
              <button className="p-1 text-muted-foreground hover:text-foreground">
                <RotateCcw size={16} />
              </button>
              <button className="p-1 text-muted-foreground hover:text-foreground">
                <Info size={16} />
              </button>
            </div>
          </div>
          
          {/* Service Level Stacked Bar Chart */}
          <div className="h-48 flex items-end justify-center gap-3">
            {[
              { date: "2025-09-01", values: [300, 200, 150, 100, 50] },
              { date: "2025-08-01", values: [900, 250, 200, 150, 100] },
              { date: "2025-07-01", values: [1200, 300, 250, 200, 150] },
              { date: "2025-06-01", values: [1300, 280, 230, 180, 120] },
              { date: "2025-05-01", values: [1300, 270, 220, 170, 110] }
            ].map((bar, index) => (
              <div key={bar.date} className="flex flex-col items-center">
                  <div className="flex flex-col w-10">
                    {bar.values.map((value, idx) => {
                      const height = (value / 1500) * 120;
                      return (
                        <div 
                          key={idx}
                          className="w-full transition-all duration-200 hover:opacity-80 cursor-pointer"
                          style={{ 
                            height: `${height}px`,
                            backgroundColor: stackedBarColors[idx % stackedBarColors.length]
                          }}
                          title={`${awsResources[idx] ? awsResources[idx][index % awsResources[idx].length] : 'Service'}: $${value}`}
                        />
                      );
                    })}
                  </div>
                  <span className="text-xs text-muted-foreground mt-2">
                    {new Date(bar.date).toLocaleDateString('en-US', { month: 'short' })}
                  </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};