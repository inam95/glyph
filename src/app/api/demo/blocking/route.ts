import { generateText } from "ai";

export async function POST() {
  const response = await generateText({
    model: "openai/gpt-5-nano",
    prompt: "Write a vegetarian lasagna recipe for 4 people.",
  });

  return Response.json({ response });
}
