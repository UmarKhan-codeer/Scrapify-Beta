"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Bot } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SummarizationForm() {
  const [content, setContent] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [taskType, setTaskType] = useState("summarize");

  const taskSettings = {
    summarize: {
      endpoint: "/api/summarize",
      buttonText: "Generate Summary",
      loadingText: "Generating Summary...",
      resultTitle: "Summary",
    },
    keywords: {
      endpoint: "/api/keywords",
      buttonText: "Extract Keywords",
      loadingText: "Extracting Keywords...",
      resultTitle: "Keywords",
    },
    categorize: {
      endpoint: "/api/categorize",
      buttonText: "Categorize Content",
      loadingText: "Categorizing...",
      resultTitle: "Category",
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch(taskSettings[taskType].endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });

      const data = await res.json();

      if (res.ok) {
        setResult(Array.isArray(data) ? data.join(", ") : data.result || data.summary);
      } else {
        setResult(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Bot className="h-6 w-6" />
              AI Content Tool
            </div>
            <Select value={taskType} onValueChange={setTaskType}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Select Task" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="summarize">Summarize</SelectItem>
                <SelectItem value="categorize">Categorize</SelectItem>
                <SelectItem value="keywords">Keyword Extraction</SelectItem>
              </SelectContent>
            </Select>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Textarea
              placeholder="Paste your content here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[200px]"
            />
            <Button
              type="submit"
              disabled={isLoading || !content}
              className="w-full"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {taskSettings[taskType].loadingText}
                </>
              ) : (
                taskSettings[taskType].buttonText
              )}
            </Button>
          </form>

          {result && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">
                {taskSettings[taskType].resultTitle}
              </h3>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-sm leading-relaxed">{result}</p>
                </CardContent>
              </Card>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
