import React from "react";
import { AnimatedContainer } from "@/components/animated-container";

export default function DefaultNotifications() {
  return (
    <AnimatedContainer className="space-y-4">
      <h2 className="text-2xl font-bold">Notifications</h2>
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">New User Signup</h3>
                <p className="text-sm text-muted-foreground">
                  John Doe has joined the platform
                </p>
              </div>
              <span className="text-sm text-muted-foreground">2h ago</span>
            </div>
          </div>
        ))}
      </div>
    </AnimatedContainer>
  );
}
