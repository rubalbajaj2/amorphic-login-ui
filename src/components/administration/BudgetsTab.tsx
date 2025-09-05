import { Plus, RotateCcw, Settings } from "lucide-react";

export const BudgetsTab = () => {
  const budgets = [
    {
      name: "deptB",
      description: "This is for Department B Utilization",
      used: 0,
      threshold: "OK",
      tagKey: "department",
      tagValue: "department"
    },
    {
      name: "deptA", 
      description: "This budget is for resources used by Team A",
      used: 0,
      threshold: "OK",
      tagKey: "department", 
      tagValue: "department"
    }
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search in this page"
            className="bg-background border border-border rounded-md pl-10 pr-4 py-2 text-sm w-80 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <svg 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="p-2 text-muted-foreground hover:text-foreground">
            <RotateCcw size={20} />
          </button>
          <button className="p-2 text-muted-foreground hover:text-foreground">
            <Settings size={20} />
          </button>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 flex items-center gap-2">
            <Plus size={16} />
            Create Budget
          </button>
        </div>
      </div>

      <div className="mb-4">
        <span className="text-sm text-muted-foreground">Showing 1 - 2 of 2 results. </span>
        <button className="text-sm text-primary hover:underline">See more</button>
      </div>

      <div className="bg-background border border-border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left p-4 text-sm font-medium text-foreground">
                <div className="flex items-center gap-2">
                  Budget Tag & Description
                  <button className="text-muted-foreground">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6,9 12,15 18,9"/>
                    </svg>
                  </button>
                </div>
              </th>
              <th className="text-left p-4 text-sm font-medium text-foreground">Budget Used</th>
              <th className="text-left p-4 text-sm font-medium text-foreground">Threshold</th>
              <th className="text-left p-4 text-sm font-medium text-foreground">Tag Key & Value</th>
              <th className="text-left p-4 text-sm font-medium text-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {budgets.map((budget, index) => (
              <tr key={budget.name} className="border-t border-border">
                <td className="p-4">
                  <div>
                    <div className="font-medium text-foreground text-sm">{budget.name}</div>
                    <div className="text-sm text-muted-foreground mt-1">{budget.description}</div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: `${budget.used}%` }}></div>
                    </div>
                    <span className="text-sm text-foreground">{budget.used}%</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-success-500 rounded-full flex items-center justify-center">
                      <svg width="10" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                        <polyline points="20,6 9,17 4,12"/>
                      </svg>
                    </div>
                    <span className="text-sm text-foreground">{budget.threshold}</span>
                  </div>
                </td>
                <td className="p-4">
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                    {budget.tagValue}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <button className="p-1 text-muted-foreground hover:text-foreground">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                        <path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                      </svg>
                    </button>
                    <button className="p-1 text-muted-foreground hover:text-error-600">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="3,6 5,6 21,6"/>
                        <path d="m19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,2h4a2,2 0 0,1 2,2v2"/>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};