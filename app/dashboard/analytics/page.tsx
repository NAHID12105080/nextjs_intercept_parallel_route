import React from "react";
import { AnimatedContainer } from "@/components/animated-container";

export default function AnalyticsPage() {
  return (
    <AnimatedContainer className="space-y-4 p-4">
      <h2 className="text-2xl font-bold">Analytics</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">Total Users</h3>
          <p className="text-2xl font-bold">1,234</p>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">Active Sessions</h3>
          <p className="text-2xl font-bold">56</p>
        </div>
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">Conversion Rate</h3>
          <p className="text-2xl font-bold">2.4%</p>
        </div>
      </div>
    </AnimatedContainer>
  );
}
