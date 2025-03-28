"use client";

import React from "react";
import { AnimatedContainer } from "@/components/animated-container";

export default function DashboardPage() {
  return (
    <AnimatedContainer className="space-y-4">
      <h2 className="text-2xl font-bold">Welcome to Dashboard</h2>
      <p className="text-muted-foreground">
        Select a section from the sidebar to get started.
      </p>
    </AnimatedContainer>
  );
}
