"use client";

import React from "react";
import Link from "next/link";
import { AnimatedContainer } from "@/components/animated-container";

const users = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Editor" },
];

export default function UsersPage() {
  return (
    <AnimatedContainer className="space-y-4 p-4">
      <h1 className="text-2xl font-bold">Users</h1>
      <div className="grid gap-4">
        {users.map((user) => (
          <Link
            key={user.id}
            href={`/dashboard/users/${user.id}`}
            className="block rounded-lg border p-4 hover:bg-accent"
          >
            <h2 className="font-semibold">{user.name}</h2>
            <p className="text-sm text-muted-foreground">{user.email}</p>
            <p className="text-sm text-muted-foreground">{user.role}</p>
          </Link>
        ))}
      </div>
    </AnimatedContainer>
  );
}
