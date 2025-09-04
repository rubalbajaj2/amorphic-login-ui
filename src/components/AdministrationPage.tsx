import { useState } from "react";
import { AppHeader } from "./dashboard/AppHeader";
import { InfraManagementPanel } from "./administration/InfraManagementPanel";
import { CostManagementPanel } from "./administration/CostManagementPanel";
import { TagsManagementPanel } from "./administration/TagsManagementPanel";
import { RoleManagementPanel } from "./administration/RoleManagementPanel";
import { UserManagementPanel } from "./administration/UserManagementPanel";

interface AdministrationPageProps {
  onLogout: () => void;
  onNavigate: (page: string) => void;
}

export const AdministrationPage = ({ onLogout, onNavigate }: AdministrationPageProps) => {
  const [activePanel, setActivePanel] = useState("system-status");
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <AppHeader onLogout={onLogout} onNavigate={onNavigate} />
      <div className="flex-1 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <button onClick={() => onNavigate('dashboard')} className="hover:text-foreground">Home</button>
            <span>›</span>
            <span className="text-foreground">Administration</span>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-heading-md font-semibold text-foreground mb-2">Administration</h1>
            <p className="text-base text-muted-foreground">Manage users, roles, costs and permissions</p>
          </div>

          {/* Content */}
          <div className="flex gap-8">
            {/* Sidebar */}
            <div className="w-64 space-y-1">
              <button 
                onClick={() => setActivePanel("system-status")}
                className={`w-full flex items-center gap-3 p-3 text-left text-sm font-medium rounded-lg ${
                  activePanel === "system-status" 
                    ? "bg-primary/10 text-primary" 
                    : "text-foreground hover:bg-accent"
                }`}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 11h6"/>
                    <path d="M9 15h6"/>
                    <path d="M4 4h16v16H4z"/>
                  </svg>
                </div>
                System Status
              </button>
              
              <button 
                onClick={() => setActivePanel("user-management")}
                className={`w-full flex items-center gap-3 p-3 text-left text-sm font-medium rounded-lg ${
                  activePanel === "user-management" 
                    ? "bg-primary/10 text-primary" 
                    : "text-foreground hover:bg-accent"
                }`}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                User Management
              </button>

              <button 
                onClick={() => setActivePanel("role-management")}
                className={`w-full flex items-center gap-3 p-3 text-left text-sm font-medium rounded-lg ${
                  activePanel === "role-management" 
                    ? "bg-primary/10 text-primary" 
                    : "text-foreground hover:bg-accent"
                }`}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12l2 2 4-4"/>
                    <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                    <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
                    <path d="M13 7h3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-3"/>
                    <path d="M11 7H8a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h3"/>
                  </svg>
                </div>
                Role Management
              </button>

              <button 
                onClick={() => setActivePanel("tags-management")}
                className={`w-full flex items-center gap-3 p-3 text-left text-sm font-medium rounded-lg ${
                  activePanel === "tags-management" 
                    ? "bg-primary/10 text-primary" 
                    : "text-foreground hover:bg-accent"
                }`}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 7h10v10H7z"/>
                    <path d="M7 3v4"/>
                    <path d="M17 3v4"/>
                    <path d="M7 17v4"/>
                    <path d="M17 17v4"/>
                  </svg>
                </div>
                Tags Management
              </button>

              <button 
                onClick={() => setActivePanel("cost-management")}
                className={`w-full flex items-center gap-3 p-3 text-left text-sm font-medium rounded-lg ${
                  activePanel === "cost-management" 
                    ? "bg-primary/10 text-primary" 
                    : "text-foreground hover:bg-accent"
                }`}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M3 12h1m16 0h1M12 3v1m0 16v1m-9-9 .7.7m12.6 0 .7-.7m0 12.6-.7.7M4.3 4.3l.7.7"/>
                  </svg>
                </div>
                Cost Management
              </button>

              <button 
                onClick={() => setActivePanel("infra-management")}
                className={`w-full flex items-center gap-3 p-3 text-left text-sm font-medium rounded-lg ${
                  activePanel === "infra-management" 
                    ? "bg-primary/10 text-primary" 
                    : "text-foreground hover:bg-accent"
                }`}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    <path d="M9 9h6"/>
                    <path d="M9 13h6"/>
                  </svg>
                </div>
                Infra Management
              </button>

              <button className="w-full flex items-center gap-3 p-3 text-left text-sm text-foreground hover:bg-accent rounded-lg">
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                    <polyline points="10,17 15,12 10,7"/>
                    <line x1="15" x2="3" y1="12" y2="12"/>
                  </svg>
                </div>
                Application Management
              </button>

              <button className="w-full flex items-center gap-3 p-3 text-left text-sm text-foreground hover:bg-accent rounded-lg">
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                DWH Management
              </button>

              <button className="w-full flex items-center gap-3 p-3 text-left text-sm text-foreground hover:bg-accent rounded-lg">
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14,2 14,8 20,8"/>
                  </svg>
                </div>
                OS Management
              </button>

              <button className="w-full flex items-center gap-3 p-3 text-left text-sm text-foreground hover:bg-accent rounded-lg">
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12l2 2 4-4"/>
                    <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                    <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
                  </svg>
                </div>
                Access Grants
              </button>

              <button className="w-full flex items-center gap-3 p-3 text-left text-sm text-foreground hover:bg-accent rounded-lg">
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="12" cy="12" r="6"/>
                    <circle cx="12" cy="12" r="2"/>
                  </svg>
                </div>
                Resource Operations
              </button>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {activePanel === "system-status" && (
                <div className="bg-card rounded-lg border border-border p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-foreground">System Status</h2>
                    <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90">
                      Refresh
                    </button>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-6">
                    Status of the core system components. This is used to monitor the health of the system and to troubleshoot issues.
                  </p>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                    <span>Last Synced:</span>
                    <span className="text-foreground">Aug 29, 2025 09:21 pm GMT+1</span>
                  </div>

                  {/* Status Cards Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background border border-border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                              <path d="M3 6h18"/>
                              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                            </svg>
                          </div>
                          <span className="font-medium text-foreground">Data Warehouse</span>
                        </div>
                        <span className="bg-success-100 text-success-700 px-2 py-1 rounded text-xs font-medium">Active</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        A Data Warehouse is a centralized repository used for storing, processing, and analyzing structured data from multiple sources.
                      </p>
                      <div className="text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          Maintenance Window: sat-07:30-sat-08:00
                        </span>
                      </div>
                    </div>

                    <div className="bg-background border border-border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                              <circle cx="11" cy="11" r="8"/>
                              <path d="M21 21l-4.35-4.35"/>
                            </svg>
                          </div>
                          <span className="font-medium text-foreground">Search Engine Core</span>
                        </div>
                        <span className="bg-success-100 text-success-700 px-2 py-1 rounded text-xs font-medium">Active</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Provides search functionality for users, indexing content and delivering search results efficiently.
                      </p>
                    </div>

                    <div className="bg-background border border-border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                            </svg>
                          </div>
                          <span className="font-medium text-foreground">Data Lake</span>
                        </div>
                        <span className="bg-success-100 text-success-700 px-2 py-1 rounded text-xs font-medium">Active</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        A data lake is used for storing vast amounts of raw data, often for analytics, machine learning, and reporting.
                      </p>
                    </div>

                    <div className="bg-background border border-border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                              <path d="M2 17l10 5 10-5"/>
                              <path d="M2 12l10 5 10-5"/>
                            </svg>
                          </div>
                          <span className="font-medium text-foreground">Systems Manager</span>
                        </div>
                        <span className="bg-success-100 text-success-700 px-2 py-1 rounded text-xs font-medium">Active</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        System Manager used for overseeing and controlling various system resources, configurations, and settings.
                      </p>
                    </div>

                    <div className="bg-background border border-border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                              <polyline points="22,6 12,13 2,6"/>
                            </svg>
                          </div>
                          <span className="font-medium text-foreground">App Database</span>
                        </div>
                        <span className="bg-success-100 text-success-700 px-2 py-1 rounded text-xs font-medium">Active</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Stores structured data for applications, handling transactions, user data, and business logic.
                      </p>
                    </div>

                    <div className="bg-background border border-border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                              <path d="M9 12l2 2 4-4"/>
                              <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                              <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
                            </svg>
                          </div>
                          <span className="font-medium text-foreground">App Access Service</span>
                        </div>
                        <span className="bg-success-100 text-success-700 px-2 py-1 rounded text-xs font-medium">Active</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        App Access Service likely handles authentication, user login, and access control for the application.
                      </p>
                    </div>

                    <div className="bg-background border border-border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                              <polyline points="22,6 12,13 2,6"/>
                            </svg>
                          </div>
                          <span className="font-medium text-foreground">SMTP</span>
                        </div>
                        <span className="bg-success-100 text-success-700 px-2 py-1 rounded text-xs font-medium">Active</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Simple Mail Transfer Protocol for sending emails and notifications from the platform.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activePanel === "infra-management" && <InfraManagementPanel />}
              {activePanel === "cost-management" && <CostManagementPanel />}
              {activePanel === "tags-management" && <TagsManagementPanel />}
              {activePanel === "role-management" && <RoleManagementPanel />}
              {activePanel === "user-management" && <UserManagementPanel />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};