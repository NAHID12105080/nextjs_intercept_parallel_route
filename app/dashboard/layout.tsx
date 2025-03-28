import React from "react";
import { Sidebar } from "@/components/sidebar";

export default function DashboardLayout({
  children,
  analytics,
  notifications,
  settings,
  users,
  modal,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  notifications: React.ReactNode;
  settings: React.ReactNode;
  users: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-hidden">{children}</div>
      {modal}
    </div>
  );
}
