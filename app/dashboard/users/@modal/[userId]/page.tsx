"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

const users = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "Editor" },
];

export default function UserModal({ params }: { params: { userId: string } }) {
  const user = users.find((u) => u.id === parseInt(params.userId));

  if (!user) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-md rounded-lg bg-background p-6 shadow-lg"
      >
        <Link
          href="/dashboard/users"
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Link>
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Role</h3>
            <p className="text-sm text-muted-foreground">{user.role}</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Actions</h3>
            <div className="flex gap-2">
              <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                Edit User
              </button>
              <button className="rounded-md bg-destructive px-4 py-2 text-sm font-medium text-destructive-foreground hover:bg-destructive/90">
                Delete User
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
