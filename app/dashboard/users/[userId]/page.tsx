"use client";

import React from "react";
import { AnimatedContainer } from "@/components/animated-container";

const users = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Editor" },
];

export default function UserPage({ params }: { params: { userId: string } }) {
  const user = users.find((u) => u.id === parseInt(params.userId));

  if (!user) {
    return (
      <AnimatedContainer className="p-4">
        <h1 className="text-2xl font-bold">User Not Found</h1>
        <p className="text-muted-foreground">
          The requested user could not be found.
        </p>
      </AnimatedContainer>
    );
  }

  return (
    <AnimatedContainer className="p-4">
      <h1 className="text-2xl font-bold">{user.name}</h1>
      <div className="mt-4 space-y-4">
        <div>
          <h2 className="font-semibold">Email</h2>
          <p className="text-muted-foreground">{user.email}</p>
        </div>
        <div>
          <h2 className="font-semibold">Role</h2>
          <p className="text-muted-foreground">{user.role}</p>
        </div>
      </div>
    </AnimatedContainer>
  );
}
