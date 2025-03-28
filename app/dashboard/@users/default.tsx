import React from "react";
import { AnimatedContainer } from "@/components/animated-container";

export default function DefaultUsers() {
  return (
    <AnimatedContainer className="p-4">
      <h1 className="text-2xl font-bold">Users</h1>
      <p className="text-muted-foreground">
        Select a user from the list to view details.
      </p>
    </AnimatedContainer>
  );
}
