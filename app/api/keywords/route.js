import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { content } = await req.json();

    // Simple way to extract keywords: Remove stopwords & return important words
    const stopwords = new Set([
      "the", "is", "in", "and", "to", "for", "of", "on", "with", "a", "as",
      "by", "at", "this", "that", "it", "was", "has", "are", "be", "an"
    ]);

    // Lowercase, remove symbols, split by whitespace
    const words = content
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .split(/\s+/)
      .filter(word => word.length > 3 && !stopwords.has(word));

    // Count frequency
    const freq = {};
    words.forEach(word => {
      freq[word] = (freq[word] || 0) + 1;
    });

    // Sort by frequency and return top 10
    const sortedKeywords = Object.entries(freq)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(entry => entry[0]);

    // Return comma-separated string
    return NextResponse.json({ result: sortedKeywords.join(", ") });
  } catch (error) {
    console.error("Keyword extraction error:", error);
    return NextResponse.json({ error: "Failed to extract keywords." }, { status: 500 });
  }
}

