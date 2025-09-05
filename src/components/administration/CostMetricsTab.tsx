import { RotateCcw, Info } from "lucide-react";

export const CostMetricsTab = () => {
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
          
          <div className="flex justify-between items-center">
            {/* Pie Chart */}
            <div className="w-40 h-40 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="25" fill="none" stroke="rgb(var(--primary-500))" strokeWidth="20" strokeDasharray="60 157" transform="rotate(-90 50 50)" />
                <circle cx="50" cy="50" r="25" fill="none" stroke="rgb(var(--success-500))" strokeWidth="20" strokeDasharray="40 157" strokeDashoffset="-60" transform="rotate(-90 50 50)" />
                <circle cx="50" cy="50" r="25" fill="none" stroke="rgb(var(--warning-500))" strokeWidth="20" strokeDasharray="30 157" strokeDashoffset="-100" transform="rotate(-90 50 50)" />
                <circle cx="50" cy="50" r="25" fill="none" stroke="rgb(var(--secondary-600))" strokeWidth="20" strokeDasharray="20 157" strokeDashoffset="-130" transform="rotate(-90 50 50)" />
                <circle cx="50" cy="50" r="25" fill="none" stroke="rgb(var(--error-400))" strokeWidth="20" strokeDasharray="7 157" strokeDashoffset="-150" transform="rotate(-90 50 50)" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-background rounded-full border border-border"></div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-col gap-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded"></div>
                <span className="text-foreground">Dept : Dept2</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-secondary-600 rounded"></div>
                <span className="text-foreground">Dept : Dept1</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-warning-500 rounded"></div>
                <span className="text-foreground">Dept : Dept3</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-error-400 rounded"></div>
                <span className="text-foreground">Dept : Dept4</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-success-500 rounded"></div>
                <span className="text-foreground">Untagged : Untagged</span>
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
          <div className="h-48 flex items-end justify-center gap-4">
            {[
              { date: "2025-05-01", values: [1800, 200, 100, 50] },
              { date: "2025-06-01", values: [1700, 250, 150, 80] },
              { date: "2025-07-01", values: [1500, 200, 100, 60] },
              { date: "2025-08-01", values: [1300, 180, 120, 70] },
              { date: "2025-09-01", values: [100, 0, 0, 0] }
            ].map((bar, index) => (
              <div key={bar.date} className="flex flex-col items-center">
                <div className="flex flex-col w-12">
                  {bar.values.map((value, idx) => {
                    const colors = ["rgb(var(--primary-500))", "rgb(var(--success-500))", "rgb(var(--warning-500))", "rgb(var(--error-400))"];
                    const height = (value / 2500) * 160;
                    return (
                      <div 
                        key={idx}
                        className="w-full"
                        style={{ 
                          height: `${height}px`, 
                          backgroundColor: colors[idx] 
                        }}
                      />
                    );
                  })}
                </div>
                <span className="text-xs text-muted-foreground mt-2 transform -rotate-45 origin-left">
                  {bar.date}
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
          <div className="h-48 flex items-end justify-center gap-4">
            {[
              { date: "2025-09-04", value: 10 },
              { date: "2025-09-03", value: 40 },
              { date: "2025-09-02", value: 40 },
              { date: "2025-09-01", value: 40 },
              { date: "2025-08-31", value: 40 }
            ].map((bar, index) => (
              <div key={bar.date} className="flex flex-col items-center">
                <div 
                  className="w-12 bg-primary rounded-t"
                  style={{ height: `${(bar.value / 50) * 160}px` }}
                />
                <span className="text-xs text-muted-foreground mt-2 transform -rotate-45 origin-left">
                  {bar.date}
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
          <div className="h-48 flex items-end justify-center gap-4">
            {[
              { date: "2025-09-01", values: [300, 200, 150, 100, 50] },
              { date: "2025-08-01", values: [900, 250, 200, 150, 100] },
              { date: "2025-07-01", values: [1200, 300, 250, 200, 150] },
              { date: "2025-06-01", values: [1300, 280, 230, 180, 120] },
              { date: "2025-05-01", values: [1300, 270, 220, 170, 110] }
            ].map((bar, index) => (
              <div key={bar.date} className="flex flex-col items-center">
                <div className="flex flex-col w-12">
                  {bar.values.map((value, idx) => {
                    const colors = [
                      "rgb(var(--primary-500))", 
                      "rgb(var(--success-500))", 
                      "rgb(var(--warning-500))", 
                      "rgb(var(--error-400))",
                      "rgb(var(--secondary-500))"
                    ];
                    const height = (value / 1500) * 160;
                    return (
                      <div 
                        key={idx}
                        className="w-full"
                        style={{ 
                          height: `${height}px`, 
                          backgroundColor: colors[idx] 
                        }}
                      />
                    );
                  })}
                </div>
                <span className="text-xs text-muted-foreground mt-2 transform -rotate-45 origin-left">
                  {bar.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};