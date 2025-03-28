import React from "react";
import { AnimatedContainer } from "@/components/animated-container";

export default function SettingsPage() {
  return (
    <AnimatedContainer className="space-y-4 p-4">
      <h2 className="text-2xl font-bold">Settings</h2>
      <div className="space-y-4">
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold">Profile Settings</h3>
          <div className="mt-4 space-y-4">
            <div>
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border p-2"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border p-2"
                placeholder="your@email.com"
              />
            </div>
          </div>
        </div>
      </div>
    </AnimatedContainer>
  );
}
