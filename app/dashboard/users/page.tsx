import React from "react";
import Link from "next/link";
import { AnimatedContainer } from "@/components/animated-container";

const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com" },
];

export default function UsersPage() {
  return (
    <AnimatedContainer className="space-y-4">
      <h2 className="text-2xl font-bold">Users</h2>
      <div className="space-y-4">
        {users.map((user) => (
          <Link
            key={user.id}
            href={`/dashboard/users/${user.id}`}
            className="block rounded-lg border p-4 hover:bg-muted"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{user.name}</h3>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>
              <span className="text-sm text-muted-foreground">→</span>
            </div>
          </Link>
        ))}
      </div>
    </AnimatedContainer>
  );
}
