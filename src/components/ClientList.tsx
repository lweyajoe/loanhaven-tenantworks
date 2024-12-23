import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const clients = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@example.com",
    status: "Active",
    loans: 2,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    status: "Pending",
    loans: 1,
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "m.brown@example.com",
    status: "Active",
    loans: 3,
  },
];

export const ClientList = () => {
  return (
    <Card className="divide-y animate-fadeIn">
      {clients.map((client) => (
        <div key={client.id} className="p-4 hover:bg-muted/50 transition-colors">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">{client.name}</h4>
              <p className="text-sm text-muted-foreground">{client.email}</p>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant={client.status === "Active" ? "default" : "secondary"}>
                {client.status}
              </Badge>
              <span className="text-sm text-muted-foreground">{client.loans} loans</span>
            </div>
          </div>
        </div>
      ))}
    </Card>
  );
};