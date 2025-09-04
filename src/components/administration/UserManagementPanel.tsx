export const UserManagementPanel = () => {
  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-foreground">User Management</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Manage users and their permissions. Add, edit, or delete users, and set up configurations for user management.
          </p>
        </div>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"/>
            <path d="M12 5v14"/>
          </svg>
          Create User
        </button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
          <input
            type="text"
            placeholder="Search by User Name"
            className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>

      {/* Results Info */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Showing 1 - 152 of 152 results.</span>
          <button className="text-primary text-sm hover:underline">See more</button>
        </div>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-accent rounded border border-border">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12h18"/>
              <path d="M12 3v18"/>
            </svg>
          </button>
          <button className="p-2 hover:bg-accent rounded border border-border">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
          </button>
          <button className="p-2 hover:bg-accent rounded border border-border">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-background border border-border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left p-4 text-sm font-medium text-foreground">User Name</th>
              <th className="text-left p-4 text-sm font-medium text-foreground">User Id</th>
              <th className="text-left p-4 text-sm font-medium text-foreground">Status</th>
              <th className="text-left p-4 text-sm font-medium text-foreground">Apps Only User</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border">
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">AD</span>
                  </div>
                  <div>
                    <div className="text-sm text-foreground font-medium">Admin</div>
                    <div className="text-sm text-muted-foreground">admin@cloudwick.com</div>
                  </div>
                </div>
              </td>
              <td className="p-4 text-sm text-foreground">admin</td>
              <td className="p-4">
                <span className="bg-success-100 text-success-700 px-2 py-1 rounded-full text-xs font-medium">Active</span>
              </td>
              <td className="p-4 text-sm text-foreground">No</td>
            </tr>
            <tr className="border-t border-border">
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">DE</span>
                  </div>
                  <div>
                    <div className="text-sm text-foreground font-medium">Demo</div>
                    <div className="text-sm text-muted-foreground">demo@cloudwick.com</div>
                  </div>
                </div>
              </td>
              <td className="p-4 text-sm text-foreground">demo</td>
              <td className="p-4">
                <span className="bg-success-100 text-success-700 px-2 py-1 rounded-full text-xs font-medium">Active</span>
              </td>
              <td className="p-4 text-sm text-foreground">No</td>
            </tr>
            <tr className="border-t border-border">
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">T1</span>
                  </div>
                  <div>
                    <div className="text-sm text-foreground font-medium">Test1</div>
                    <div className="text-sm text-muted-foreground">test1@cloudwick.com</div>
                  </div>
                </div>
              </td>
              <td className="p-4 text-sm text-foreground">test1</td>
              <td className="p-4">
                <span className="bg-success-100 text-success-700 px-2 py-1 rounded-full text-xs font-medium">Active</span>
              </td>
              <td className="p-4 text-sm text-foreground">No</td>
            </tr>
            <tr className="border-t border-border">
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">T2</span>
                  </div>
                  <div>
                    <div className="text-sm text-foreground font-medium">Test2</div>
                    <div className="text-sm text-muted-foreground">test2@cloudwick.com</div>
                  </div>
                </div>
              </td>
              <td className="p-4 text-sm text-foreground">test2</td>
              <td className="p-4">
                <span className="bg-success-100 text-success-700 px-2 py-1 rounded-full text-xs font-medium">Active</span>
              </td>
              <td className="p-4 text-sm text-foreground">No</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};