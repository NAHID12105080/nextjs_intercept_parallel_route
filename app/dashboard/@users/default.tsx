import React from "react";
import { AnimatedContainer } from "@/components/animated-container";

export default function DefaultUsers() {
  return (
    <AnimatedContainer className="space-y-4">
      <h2 className="text-2xl font-bold">Users</h2>
      <p className="text-muted-foreground">
        Select a user from the list to view details.
      </p>
    </AnimatedContainer>
  );
}
