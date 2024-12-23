import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const applications = [
  {
    id: 1,
    client: "John Smith",
    amount: 25000,
    status: "Pending",
    date: "2024-03-15",
  },
  {
    id: 2,
    client: "Sarah Johnson",
    amount: 15000,
    status: "Under Review",
    date: "2024-03-14",
  },
  {
    id: 3,
    client: "Michael Brown",
    amount: 50000,
    status: "Pending",
    date: "2024-03-13",
  },
];

export const LoanApplications = () => {
  return (
    <Card className="divide-y animate-fadeIn">
      {applications.map((application) => (
        <div key={application.id} className="p-4 hover:bg-muted/50 transition-colors">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">{application.client}</h4>
              <p className="text-sm text-muted-foreground">
                ${application.amount.toLocaleString()} - {application.date}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">{application.status}</Badge>
              <div className="flex space-x-1">
                <Button size="icon" variant="ghost" className="h-8 w-8 text-success">
                  <Check className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost" className="h-8 w-8 text-warning">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Card>
  );
};