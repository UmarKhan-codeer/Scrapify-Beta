"use client";
import { useState } from "react";

export default function AISummaryButton({ textToSummarize }) {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSummarize = async () => {
    setLoading(true);
    setSummary("");
    setError("");

    try {
      const response = await fetch("https://api-inference.huggingface.co/models/facebook/bart-large-cnn", {
        method: "POST",
        headers: {
          "Authorization": "Bearer ${process.env.HF_API_KEY}", 
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ inputs: textToSummarize })
      });

      const result = await response.json();
      if (result.error) {
        throw new Error(result.error);
      }

      setSummary(result[0]?.summary_text || "No summary generated.");
    } catch (err) {
      console.error(err);
      setError("Failed to summarize. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-6">
      <button
        onClick={handleSummarize}
        className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all shadow"
      >
        <img src="/ai-icon.svg" alt="AI" className="w-5 h-5" />
        {loading ? "Summarizing..." : "Summarize with AI"}
      </button>

      {error && <p className="mt-2 text-red-600">{error}</p>}

      {summary && (
        <div className="mt-4 p-4 border border-gray-300 bg-gray-50 rounded-xl">
          <h3 className="text-lg font-semibold mb-2 text-gray-800">AI Summary</h3>
          <p className="text-gray-700">{summary}</p>
        </div>
      )}
    </div>
  );
}
