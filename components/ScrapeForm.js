 
"use client";

import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Sparkles } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Bot,
  FileJson,
  Clock,
  AlertCircle,
  Download,
  Eye,
  EyeOff,
  Filter,
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

const ScrapeForm = () => {
  const [url, setUrl] = useState("");
  const [dataType, setDataType] = useState([]);
  const [format, setFormat] = useState("json");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrapedData, setScrapedData] = useState("");
  const [scrapeHistory, setScrapeHistory] = useState([]);
  const [expandedItems, setExpandedItems] = useState({});
  const [searchFilter, setSearchFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const [summary, setSummary] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("scrapeHistory");
    if (saved) {
      setScrapeHistory(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("scrapeHistory", JSON.stringify(scrapeHistory));
  }, [scrapeHistory]);

  const dataTypes = [
    { id: "text", label: "Text" },
    { id: "images", label: "Images" },
    { id: "videos", label: "Videos" },
    { id: "links", label: "Links" },
  ];

  const isValidURL = (urlString) => {
    try {
      new URL(urlString);
      return true;
    } catch {
      return false;
    }
  };

  const handleDownload = (data, index) => {
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `scraped-data-${index + 1}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidURL(url)) {
      setErrorMessage("Please enter a valid URL.");
      return;
    }
    setErrorMessage("");
    setLoading(true);

    try {
      const response = await fetch("/api/scrape", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, dataType, format }),
      });

      const result = await response.json();

      if (response.ok && result.metadata) {
        const formattedData = JSON.stringify(result.metadata, null, 2);
        setScrapedData(formattedData);

        toast.success("Scraping completed successfully!", {
          position: "top-right",
          autoClose: 3000,
          theme: "light",
          style: { backgroundColor: "black", color: "white" },
        });

        const newEntry = {
          url,
          dataType,
          format,
          time: new Date().toLocaleString(),
          scrapedData: formattedData,
        };

        setScrapeHistory((prev) => [...prev, newEntry]);
      } else {
        setErrorMessage(result.message || "No data found.");
      }
    } catch {
      setErrorMessage("An error occurred while scraping.");
    } finally {
      setLoading(false);
    }
  };

  const toggleExpand = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleSummarize = async () => {
    if (!scrapedData) {
      toast.warn("No scraped data to summarize.", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    try {
      const response = await fetch("/api/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: scrapedData }),
      });

      const result = await response.json();
      if (response.ok && result.summary) {
        setSummary(result.summary);
        toast.success("Summary generated!", {
          position: "top-right",
          autoClose: 3000,
        });
      } else {
        toast.error(result.message || "Failed to generate summary.");
      }
    } catch {
      toast.error("An error occurred while summarizing.");
    }
  };

  const filteredHistory = scrapeHistory
    .filter((entry) => {
      return (
        entry.url.toLowerCase().includes(searchFilter.toLowerCase()) ||
        entry.dataType
          .join(", ")
          .toLowerCase()
          .includes(searchFilter.toLowerCase()) ||
        entry.time.toLowerCase().includes(searchFilter.toLowerCase())
      );
    })
    .sort((a, b) => {
      const timeA = new Date(a.time).getTime();
      const timeB = new Date(b.time).getTime();
      return sortOrder === "desc" ? timeB - timeA : timeA - timeB;
    });

  return (
    <div className="container mx-auto px-4 py-16">
      <ToastContainer />

      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Start Scraping</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Extract and analyze web data with our AI-powered platform.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Scrape Form */}
        <Card>
          <CardHeader>
            <CardTitle>Configure Your Scraper</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-sm font-medium">Website URL</label>
                <Input
                  type="url"
                  placeholder="https://example.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                />
                {errorMessage && (
                  <div className="text-destructive text-sm mt-1 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errorMessage}
                  </div>
                )}
              </div>

              <div>
                <label className="text-sm font-medium">
                  Data Types to Extract
                </label>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {dataTypes.map((type) => (
                    <div key={type.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={type.id}
                        checked={dataType.includes(type.id)}
                        onCheckedChange={(checked) => {
                          setDataType((prev) =>
                            checked
                              ? [...prev, type.id]
                              : prev.filter((t) => t !== type.id)
                          );
                        }}
                      />
                      <label htmlFor={type.id} className="text-sm">
                        {type.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Export Format</label>
                <Select value={format} onValueChange={setFormat}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="json">JSON</SelectItem>
                    <SelectItem value="csv">CSV</SelectItem>
                    <SelectItem value="markdown">Markdown</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <span className="flex items-center">
                    <Bot className="mr-2 h-4 w-4 animate-spin" />
                    Scraping...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Bot className="mr-2 h-4 w-4" />
                    Start Scraping
                  </span>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

       
        {/* Filters and Sorting */}
        {scrapeHistory.length > 0 && (
          <div className="mt-12 space-y-6">
            <div className="flex justify-between">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                Scrape History
              </h2>
            </div>
            <div className="flex gap-4 items-center mb-4">
              <Input
                placeholder="Search by URL, type or date..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
              />
              <Select value={sortOrder} onValueChange={setSortOrder}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="desc">Newest First</SelectItem>
                  <SelectItem value="asc">Oldest First</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {filteredHistory.map((entry, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row justify-between items-start">
                  <div>
                    <CardTitle className="text-base mb-1">
                      {entry.url}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Data Types: {entry.dataType.join(", ")} | Format:{" "}
                      {entry.format} | Time: {entry.time}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDownload(entry.scrapedData, index)}
                    >
                      <Download className="mr-1 h-4 w-4" />
                      Download JSON
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => toggleExpand(index)}
                    >
                      {expandedItems[index] ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </CardHeader>
                {expandedItems[index] && (
                  <CardContent>
                    <Textarea
                      readOnly
                      value={entry.scrapedData}
                      className="font-mono h-64"
                    />
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ScrapeForm;
