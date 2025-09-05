import { Plus, RotateCcw, Settings } from "lucide-react";

export const CostTagsTab = () => {
  const costTags = [
    {
      name: "Project",
      description: "Tracks which project or initiative the resource supports, allowing project-...",
      tagKey: "project",
      tagValues: ["alpha", "beta", "+1"],
      status: "Inactive"
    },
    {
      name: "Environment", 
      description: "",
      tagKey: "environment",
      tagValues: ["development", "production", "+1"],
      status: "Inactive"
    },
    {
      name: "Department",
      description: "Identifies which department uses the resource for data management tasks.",
      tagKey: "department", 
      tagValues: ["a", "b", "+1"],
      status: "Inactive"
    },
    {
      name: "default tag",
      description: "Default tag created for users",
      tagKey: "createdby",
      tagValues: ["harsha"],
      status: "Active"
    }
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Cost Tags</h3>
          <p className="text-sm text-muted-foreground">Cost Tags are used to categorize costs in the application</p>
        </div>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 flex items-center gap-2">
          <Plus size={16} />
          Create Cost Tag
        </button>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search by Tag Key"
              className="bg-background border border-border rounded-md px-4 py-2 text-sm w-80 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 text-muted-foreground hover:text-foreground">
            <RotateCcw size={20} />
          </button>
          <button className="p-2 text-muted-foreground hover:text-foreground">
            <Settings size={20} />
          </button>
        </div>
      </div>

      <div className="mb-4">
        <span className="text-sm text-muted-foreground">Showing 1 - 4 of 4 results. </span>
        <button className="text-sm text-primary hover:underline">See more</button>
      </div>

      <div className="bg-background border border-border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left p-4 text-sm font-medium text-foreground">Cost Tag & Description</th>
              <th className="text-left p-4 text-sm font-medium text-foreground">Tag Key</th>
              <th className="text-left p-4 text-sm font-medium text-foreground">Tag Values</th>
              <th className="text-left p-4 text-sm font-medium text-foreground">Status</th>
              <th className="text-left p-4 text-sm font-medium text-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {costTags.map((tag, index) => (
              <tr key={tag.name} className="border-t border-border">
                <td className="p-4">
                  <div>
                    <div className="font-medium text-foreground text-sm">{tag.name}</div>
                    {tag.description && (
                      <div className="text-sm text-muted-foreground mt-1">{tag.description}</div>
                    )}
                  </div>
                </td>
                <td className="p-4 text-sm text-foreground">{tag.tagKey}</td>
                <td className="p-4">
                  <div className="flex gap-2 flex-wrap">
                    {tag.tagValues.map((value, idx) => (
                      <span 
                        key={idx}
                        className={`px-2 py-1 rounded text-xs ${
                          value.startsWith('+') 
                            ? 'bg-muted text-muted-foreground' 
                            : 'bg-primary/10 text-primary'
                        }`}
                      >
                        {value}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="p-4">
                  <span className={`text-sm ${
                    tag.status === 'Active' 
                      ? 'text-success-600' 
                      : 'text-error-600'
                  }`}>
                    {tag.status}
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
                        <path d="m19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"/>
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