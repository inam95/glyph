"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

export default function DemoPage() {
  const [loading, setLoading] = useState(false);
  const [backgroundLoading, setBackgroundLoading] = useState(false);

  const handleBlocking = async () => {
    setLoading(true);
    await fetch("/api/demo/blocking", {
      method: "POST",
    });
    setLoading(false);
  };

  const handleBackground = async () => {
    setBackgroundLoading(true);
    await fetch("/api/demo/background", {
      method: "POST",
    });
    setBackgroundLoading(false);
  };

  return (
    <div className="space-x-4 p-8">
      <Button disabled={loading} onClick={handleBlocking}>
        {loading ? "Loading..." : "Blocking"}
      </Button>
      <Button disabled={backgroundLoading} onClick={handleBackground}>
        {backgroundLoading ? "Loading..." : "Background"}
      </Button>
    </div>
  );
}
