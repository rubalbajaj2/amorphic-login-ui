import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const MainContent = () => {
  const [reportingPeriod, setReportingPeriod] = useState("Q2 2025");

  const nhsData = [
    {
      trust: "Guy's and St Thomas'",
      aeWaitTime: "95.2%",
      bedOccupancy: "88.5%",
      cancerWait: "93.1%"
    },
    {
      trust: "Barts Health",
      aeWaitTime: "89.7%",
      bedOccupancy: "92.1%",
      cancerWait: "88.5%"
    },
    {
      trust: "Manchester University",
      aeWaitTime: "91.5%",
      bedOccupancy: "94.3%",
      cancerWait: "90.2%"
    },
    {
      trust: "University Hospitals Birmingham",
      aeWaitTime: "85.4%",
      bedOccupancy: "96.5%",
      cancerWait: "86.8%"
    }
  ];

  const periods = ["Q2 2025", "Q1 2025", "Q4 2024", "Q3 2024"];

  return (
    <main className="flex-1 p-6">
      <div className="bg-card rounded-lg shadow-md p-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-heading-xs font-semibold text-foreground">
            NHS Trust Performance Overview
          </h1>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 px-4 py-2 border border-input rounded-md text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
                Reporting Period: {reportingPeriod}
                <ChevronDown size={16} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {periods.map((period) => (
                <DropdownMenuItem
                  key={period}
                  onClick={() => setReportingPeriod(period)}
                  className={period === reportingPeriod ? "bg-accent" : ""}
                >
                  {period}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Data Table */}
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold text-muted-foreground">NHS Trust</TableHead>
                <TableHead className="font-semibold text-muted-foreground">A&E Wait Time (&lt; 4 hours)</TableHead>
                <TableHead className="font-semibold text-muted-foreground">Bed Occupancy</TableHead>
                <TableHead className="font-semibold text-muted-foreground">Cancer Treatment Wait (&lt; 62 days)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {nhsData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{row.trust}</TableCell>
                  <TableCell>{row.aeWaitTime}</TableCell>
                  <TableCell>{row.bedOccupancy}</TableCell>
                  <TableCell>{row.cancerWait}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
};