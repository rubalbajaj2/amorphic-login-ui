import { useState } from "react";
import { ChevronDown, Plus, Search, Database, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CreateDatasourceModal } from "./CreateDatasourceModal";
import { S3ConfigSideSheet } from "./S3ConfigSideSheet";
import { ExternalAPIConfigModal } from "./ExternalAPIConfigModal";
import { AmorphicConfigModal } from "./AmorphicConfigModal";
import { EmailConfigModal } from "./EmailConfigModal";
import { SaaSConfigModal } from "./SaaSConfigModal";
import { StreamConfigModal } from "./StreamConfigModal";
import { OracleConfigModal } from "./OracleConfigModal";
import { MySQLConfigModal } from "./MySQLConfigModal";

export const DatasourcesContent = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showS3Config, setShowS3Config] = useState(false);
  const [showExternalAPIConfig, setShowExternalAPIConfig] = useState(false);
  const [showAmorphicConfig, setShowAmorphicConfig] = useState(false);
  const [showEmailConfig, setShowEmailConfig] = useState(false);
  const [showSaaSConfig, setShowSaaSConfig] = useState(false);
  const [showStreamConfig, setShowStreamConfig] = useState(false);
  const [showOracleConfig, setShowOracleConfig] = useState(false);
  const [showMySQLConfig, setShowMySQLConfig] = useState(false);

  const datasources = [
    {
      name: "Customer Analytics DB",
      type: "PostgreSQL",
      status: "Connected",
      lastSync: "2 mins ago",
      records: "1.2M"
    },
    {
      name: "Sales Data Warehouse",
      type: "Amazon Redshift",
      status: "Connected",
      lastSync: "5 mins ago",
      records: "850K"
    },
    {
      name: "User Behavior Events",
      type: "S3 Bucket",
      status: "Syncing",
      lastSync: "1 hour ago",
      records: "3.4M"
    },
    {
      name: "Legacy CRM System",
      type: "Oracle",
      status: "Error",
      lastSync: "2 days ago",
      records: "500K"
    }
  ];

  const handleCreateFromScratch = () => {
    setShowCreateModal(true);
  };

  const handleS3Select = () => {
    setShowCreateModal(false);
    setShowS3Config(true);
  };

  const handleExternalAPISelect = () => {
    setShowCreateModal(false);
    setShowExternalAPIConfig(true);
  };

  const handleAmorphicSelect = () => {
    setShowCreateModal(false);
    setShowAmorphicConfig(true);
  };

  const handleEmailSelect = () => {
    setShowCreateModal(false);
    setShowEmailConfig(true);
  };

  const handleSaaSSelect = () => {
    setShowCreateModal(false);
    setShowSaaSConfig(true);
  };

  const handleStreamSelect = () => {
    setShowCreateModal(false);
    setShowStreamConfig(true);
  };

  const handleOracleSelect = () => {
    setShowCreateModal(false);
    setShowOracleConfig(true);
  };

  const handleMySQLSelect = () => {
    setShowCreateModal(false);
    setShowMySQLConfig(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Connected":
        return "text-success-600 bg-success-50";
      case "Syncing":
        return "text-warning-600 bg-warning-50";
      case "Error":
        return "text-error-600 bg-error-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <>
      <main className="p-6">
        <div className="bg-card rounded-lg p-6 shadow-md">
          {/* Breadcrumbs */}
          <div className="mb-4">
            <span className="text-sm text-muted-foreground">Home / Datasources</span>
          </div>

          {/* Page Header */}
          <div className="mb-6">
            <h1 className="text-heading-xs font-semibold text-foreground mb-2">
              Datasources
            </h1>
            <p className="text-sm text-muted-foreground">
              Manage and configure your data connections
            </p>
          </div>

          {/* Action Bar */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="gap-2">
                <Filter size={16} />
                Filter
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Search size={16} />
                Search
              </Button>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="gap-2">
                  <Plus size={16} />
                  Create Datasource
                  <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={handleCreateFromScratch}>
                  <Database className="mr-2 h-4 w-4" />
                  Create from scratch
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Plus className="mr-2 h-4 w-4" />
                  Import from template
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Results Summary */}
          <div className="mb-4">
            <p className="text-sm text-muted-foreground">
              Showing {datasources.length} of {datasources.length} datasources
            </p>
          </div>

          {/* Datasources Table */}
          <div className="rounded-md border mb-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left p-4 font-medium text-muted-foreground">Name</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Type</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Status</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Last Sync</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Records</th>
                    <th className="text-left p-4 font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {datasources.map((datasource, index) => (
                    <tr key={index} className="border-b hover:bg-muted/30">
                      <td className="p-4 font-medium">{datasource.name}</td>
                      <td className="p-4 text-muted-foreground">{datasource.type}</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(datasource.status)}`}>
                          {datasource.status}
                        </span>
                      </td>
                      <td className="p-4 text-muted-foreground">{datasource.lastSync}</td>
                      <td className="p-4 text-muted-foreground">{datasource.records}</td>
                      <td className="p-4">
                        <Button variant="ghost" size="sm">
                          Configure
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Page 1 of 1
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                <ChevronLeft size={16} />
                Previous
              </Button>
              <Button variant="outline" size="sm" disabled>
                Next
                <ChevronRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </main>

        <CreateDatasourceModal
          isOpen={showCreateModal}
          onClose={() => setShowCreateModal(false)}
          onS3Select={handleS3Select}
          onExternalAPISelect={handleExternalAPISelect}
          onAmorphicSelect={handleAmorphicSelect}
        onEmailSelect={handleEmailSelect}
        onSaaSSelect={handleSaaSSelect}
        onStreamSelect={handleStreamSelect}
        onOracleSelect={handleOracleSelect}
        onMySQLSelect={handleMySQLSelect}
        />

      <S3ConfigSideSheet
        isOpen={showS3Config}
        onClose={() => setShowS3Config(false)}
        onBack={() => {
          setShowS3Config(false);
          setShowCreateModal(true);
        }}
      />

        <ExternalAPIConfigModal
          isOpen={showExternalAPIConfig}
          onClose={() => setShowExternalAPIConfig(false)}
          onBack={() => {
            setShowExternalAPIConfig(false);
            setShowCreateModal(true);
          }}
        />

        <AmorphicConfigModal
          isOpen={showAmorphicConfig}
          onClose={() => setShowAmorphicConfig(false)}
          onBack={() => {
            setShowAmorphicConfig(false);
            setShowCreateModal(true);
          }}
        />

        <EmailConfigModal
          isOpen={showEmailConfig}
          onClose={() => setShowEmailConfig(false)}
          onBack={() => {
            setShowEmailConfig(false);
            setShowCreateModal(true);
          }}
        />

        <SaaSConfigModal
          isOpen={showSaaSConfig}
          onClose={() => setShowSaaSConfig(false)}
          onBack={() => {
            setShowSaaSConfig(false);
            setShowCreateModal(true);
          }}
        />

      <StreamConfigModal
        isOpen={showStreamConfig}
        onClose={() => setShowStreamConfig(false)}
        onBack={() => {
          setShowStreamConfig(false);
          setShowCreateModal(true);
        }}
      />

      <OracleConfigModal
        isOpen={showOracleConfig}
        onClose={() => setShowOracleConfig(false)}
        onBack={() => {
          setShowOracleConfig(false);
          setShowCreateModal(true);
        }}
      />

      <MySQLConfigModal
        isOpen={showMySQLConfig}
        onClose={() => setShowMySQLConfig(false)}
        onBack={() => {
          setShowMySQLConfig(false);
          setShowCreateModal(true);
        }}
      />
    </>
  );
};