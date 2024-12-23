import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Users, Calculator, FileText } from "lucide-react";
import { useState } from "react";
import { LoanCalculator } from "./LoanCalculator";
import { ClientList } from "./ClientList";
import { LoanApplications } from "./LoanApplications";

export const Dashboard = () => {
  const [showCalculator, setShowCalculator] = useState(false);

  return (
    <div className="min-h-screen bg-background p-6 animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Loan Management System</h1>
          <p className="text-muted-foreground">Manage your loans and clients efficiently</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 hover:shadow-lg transition-shadow animate-slideIn">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-success/10 rounded-full">
                <FileText className="h-6 w-6 text-success" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Active Loans</h3>
                <p className="text-2xl font-bold">24</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow animate-slideIn [animation-delay:100ms]">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Total Clients</h3>
                <p className="text-2xl font-bold">156</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow animate-slideIn [animation-delay:200ms]">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-warning/10 rounded-full">
                <FileText className="h-6 w-6 text-warning" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Pending Applications</h3>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Recent Applications</h2>
              <Button variant="outline" size="sm">
                <PlusCircle className="h-4 w-4 mr-2" />
                New Application
              </Button>
            </div>
            <LoanApplications />
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Recent Clients</h2>
              <Button variant="outline" size="sm" onClick={() => setShowCalculator(!showCalculator)}>
                <Calculator className="h-4 w-4 mr-2" />
                Loan Calculator
              </Button>
            </div>
            {showCalculator ? <LoanCalculator /> : <ClientList />}
          </div>
        </div>
      </div>
    </div>
  );
};