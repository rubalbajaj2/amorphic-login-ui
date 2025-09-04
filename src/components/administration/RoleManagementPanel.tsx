export const RoleManagementPanel = () => {
  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-foreground">Role Management</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Roles are used to manage access to access permissions of the users, you can create multiple roles and assign them to the users.
          </p>
        </div>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"/>
            <path d="M12 5v14"/>
          </svg>
          Create Role
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 mb-6 border-b border-border">
        <button className="border-b-2 border-primary text-primary pb-2 text-sm font-medium">Roles</button>
        <button className="text-muted-foreground pb-2 text-sm hover:text-foreground">AWS Roles</button>
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
            placeholder="Search by Role Name"
            className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>

      {/* Results Info */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Showing 1 - 58 of 58 results.</span>
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
        </div>
      </div>

      {/* Table */}
      <div className="bg-background border border-border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left p-4 text-sm font-medium text-foreground">
                <div className="flex items-center gap-2">
                  Role Name
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 15l5-5 5 5"/>
                  </svg>
                </div>
              </th>
              <th className="text-left p-4 text-sm font-medium text-foreground">Permissions</th>
              <th className="text-left p-4 text-sm font-medium text-foreground">Role Managers</th>
              <th className="text-left p-4 text-sm font-medium text-foreground">Users Attached</th>
              <th className="text-left p-4 text-sm font-medium text-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border">
              <td className="p-4">
                <div>
                  <div className="text-sm text-foreground font-medium">Users</div>
                  <div className="text-xs text-muted-foreground">Role for users</div>
                </div>
              </td>
              <td className="p-4">
                <span className="text-sm text-primary hover:underline cursor-pointer">Permissions 18</span>
              </td>
              <td className="p-4">
                <span className="text-sm text-primary hover:underline cursor-pointer">Managers 36</span>
              </td>
              <td className="p-4">
                <span className="text-sm text-primary hover:underline cursor-pointer">Users 36</span>
              </td>
              <td className="p-4">
                <div className="flex gap-2">
                  <button className="p-1 hover:bg-accent rounded">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                    </svg>
                  </button>
                  <button className="p-1 hover:bg-accent rounded">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                      <path d="M4 16c-1.1 0-2-.9-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                    </svg>
                  </button>
                  <button className="p-1 hover:bg-accent rounded">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 6h18"/>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            <tr className="border-t border-border">
              <td className="p-4">
                <div className="text-sm text-foreground font-medium">teacherView</div>
              </td>
              <td className="p-4">
                <span className="text-sm text-primary hover:underline cursor-pointer">Permissions 03</span>
              </td>
              <td className="p-4">
                <span className="text-sm text-primary hover:underline cursor-pointer">Managers 01</span>
              </td>
              <td className="p-4">
                <span className="text-sm text-primary hover:underline cursor-pointer">Users 01</span>
              </td>
              <td className="p-4">
                <div className="flex gap-2">
                  <button className="p-1 hover:bg-accent rounded">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                    </svg>
                  </button>
                  <button className="p-1 hover:bg-accent rounded">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                      <path d="M4 16c-1.1 0-2-.9-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                    </svg>
                  </button>
                  <button className="p-1 hover:bg-accent rounded">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 6h18"/>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            <tr className="border-t border-border">
              <td className="p-4">
                <div>
                  <div className="text-sm text-foreground font-medium">Tamu_col_de</div>
                  <div className="text-xs text-muted-foreground">This is for Dept of COL specifically for Data engineers</div>
                </div>
              </td>
              <td className="p-4">
                <span className="text-sm text-primary hover:underline cursor-pointer">Permissions 10</span>
              </td>
              <td className="p-4">
                <span className="text-sm text-primary hover:underline cursor-pointer">Managers 03</span>
              </td>
              <td className="p-4">
                <span className="text-sm text-primary hover:underline cursor-pointer">Users 06</span>
              </td>
              <td className="p-4">
                <div className="flex gap-2">
                  <button className="p-1 hover:bg-accent rounded">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                    </svg>
                  </button>
                  <button className="p-1 hover:bg-accent rounded">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                      <path d="M4 16c-1.1 0-2-.9-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                    </svg>
                  </button>
                  <button className="p-1 hover:bg-accent rounded">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 6h18"/>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            <tr className="border-t border-border">
              <td className="p-4">
                <div>
                  <div className="text-sm text-foreground font-medium">Tamu_coe_de</div>
                  <div className="text-xs text-muted-foreground">This is for Dept of COE specifically for Data engineers</div>
                </div>
              </td>
              <td className="p-4">
                <span className="text-sm text-primary hover:underline cursor-pointer">Permissions 10</span>
              </td>
              <td className="p-4">
                <span className="text-sm text-primary hover:underline cursor-pointer">Managers 03</span>
              </td>
              <td className="p-4">
                <span className="text-sm text-primary hover:underline cursor-pointer">Users 06</span>
              </td>
              <td className="p-4">
                <div className="flex gap-2">
                  <button className="p-1 hover:bg-accent rounded">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                    </svg>
                  </button>
                  <button className="p-1 hover:bg-accent rounded">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                      <path d="M4 16c-1.1 0-2-.9-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                    </svg>
                  </button>
                  <button className="p-1 hover:bg-accent rounded">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 6h18"/>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            <tr className="border-t border-border">
              <td className="p-4">
                <div>
                  <div className="text-sm text-foreground font-medium">tamu-admissions-dataengineer</div>
                  <div className="text-xs text-muted-foreground">This is for TAMU admissions department Data Engineer Role</div>
                </div>
              </td>
              <td className="p-4">
                <span className="text-sm text-primary hover:underline cursor-pointer">Permissions 16</span>
              </td>
              <td className="p-4">
                <span className="text-sm text-primary hover:underline cursor-pointer">Managers 36</span>
              </td>
              <td className="p-4">
                <span className="text-sm text-primary hover:underline cursor-pointer">Users 38</span>
              </td>
              <td className="p-4">
                <div className="flex gap-2">
                  <button className="p-1 hover:bg-accent rounded">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                    </svg>
                  </button>
                  <button className="p-1 hover:bg-accent rounded">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                      <path d="M4 16c-1.1 0-2-.9-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                    </svg>
                  </button>
                  <button className="p-1 hover:bg-accent rounded">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 6h18"/>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            <tr className="border-t border-border">
              <td className="p-4">
                <div>
                  <div className="text-sm text-foreground font-medium">tamu-admissions-dataanalyst</div>
                  <div className="text-xs text-muted-foreground">This is for TAMU admissions department Data Analyst Role</div>
                </div>
              </td>
              <td className="p-4">
                <span className="text-sm text-primary hover:underline cursor-pointer">Permissions 09</span>
              </td>
              <td className="p-4">
                <span className="text-sm text-primary hover:underline cursor-pointer">Managers 36</span>
              </td>
              <td className="p-4">
                <span className="text-sm text-primary hover:underline cursor-pointer">Users 37</span>
              </td>
              <td className="p-4">
                <div className="flex gap-2">
                  <button className="p-1 hover:bg-accent rounded">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                    </svg>
                  </button>
                  <button className="p-1 hover:bg-accent rounded">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                      <path d="M4 16c-1.1 0-2-.9-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                    </svg>
                  </button>
                  <button className="p-1 hover:bg-accent rounded">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 6h18"/>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            <tr className="border-t border-border">
              <td className="p-4">
                <div>
                  <div className="text-sm text-foreground font-medium">tamu-academics-dataanalyst</div>
                  <div className="text-xs text-muted-foreground">This is for TAMU academics department Data Analyst Role</div>
                </div>
              </td>
              <td className="p-4">
                <span className="text-sm text-primary hover:underline cursor-pointer">Permissions 08</span>
              </td>
              <td className="p-4">
                <span className="text-sm text-primary hover:underline cursor-pointer">Managers 36</span>
              </td>
              <td className="p-4">
                <span className="text-sm text-primary hover:underline cursor-pointer">Users 37</span>
              </td>
              <td className="p-4">
                <div className="flex gap-2">
                  <button className="p-1 hover:bg-accent rounded">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                    </svg>
                  </button>
                  <button className="p-1 hover:bg-accent rounded">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                      <path d="M4 16c-1.1 0-2-.9-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                    </svg>
                  </button>
                  <button className="p-1 hover:bg-accent rounded">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 6h18"/>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};