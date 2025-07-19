"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ScrapeHistoryPage() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("scrapeHistory");
    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="container mx-auto py-16 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Clock className="h-5 w-5 mr-2" />
            Full Scrape History
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 max-h-[75vh] overflow-y-auto">
          {history.length === 0 ? (
            <p className="text-center text-muted-foreground">No scrape history yet.</p>
          ) : (
            history.map((entry, index) => (
              <div key={index} className="p-4 border rounded-md bg-muted">
                <p><strong>URL:</strong> {entry.url}</p>
                <p><strong>Types:</strong> {entry.dataType.join(", ")}</p>
                <p><strong>Format:</strong> {entry.format}</p>
                <p><strong>Time:</strong> {entry.time}</p>
                <Textarea readOnly className="mt-2 font-mono" value={entry.data} />
              </div>
            ))
          )}
          <Link href="/">
            <Button className="mt-4 w-full">← Back to Scraper</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
