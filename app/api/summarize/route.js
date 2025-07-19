const MAX_CHARS = 3000;

export async function POST(req) {
  const { content } = await req.json();
  const safeContent = content.length > MAX_CHARS ? content.slice(0, MAX_CHARS) : content;

  const response = await fetch("https://api-inference.huggingface.co/models/facebook/bart-large-cnn", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${HUGGINGFACE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ inputs: safeContent }),
  });

  const data = await response.json();

  if (data.error) {
    return new Response(JSON.stringify({ error: data.error }), { status: 500 });
  }

  return new Response(JSON.stringify({ summary: data[0]?.summary_text || "No summary available." }), { status: 200 });
}


