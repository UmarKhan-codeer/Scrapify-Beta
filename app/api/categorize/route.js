import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { content } = await req.json();

    // Simple rule-based categorization example
    const categories = {
      technology: ["ai", "software", "tech", "robot", "app", "machine", "data", "cloud"],
      sports: ["football", "cricket", "basketball", "olympics", "goal", "tournament"],
      business: ["market", "stock", "startup", "finance", "revenue", "growth", "trade"],
      politics: ["government", "election", "president", "minister", "policy", "vote"],
      health: ["doctor", "hospital", "health", "disease", "covid", "mental", "vaccine"],
    };

    const contentWords = content.toLowerCase().split(/\W+/);
    let categoryScore = {};

    // Count matches for each category
    for (const [category, keywords] of Object.entries(categories)) {
      categoryScore[category] = contentWords.filter(word => keywords.includes(word)).length;
    }

    // Get the best-matching category
    const bestCategory = Object.entries(categoryScore).sort((a, b) => b[1] - a[1])[0][0];

    return NextResponse.json({ result: bestCategory });
  } catch (error) {
    console.error("Categorization error:", error);
    return NextResponse.json({ error: "Failed to categorize content." }, { status: 500 });
  }
}
