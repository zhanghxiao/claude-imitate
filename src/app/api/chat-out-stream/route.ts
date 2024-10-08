import OpenAI from "openai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const reqJson = await req.json();

    const api_base = process.env.OPENAI_API_BASE || "https://api.openai.com";
    const api_key = process.env.OPENAI_API_KEY || "";

    if (api_key == "") {
      return NextResponse.json(
        { msg: { error: "api_key is not set" }, code: 400 },
        { status: 400 }
      );
    }

    const openai = new OpenAI({
      apiKey: api_key,
      baseURL: api_base?.slice(-1) == "/" ? api_base + "v1" : api_base + "/v1",
    });

    const completion = await openai.chat.completions.create({
      model: reqJson.model,
      messages: [
        { role: "system", content: reqJson.systemPrompt },
        ...reqJson.historyMsgList,
      ],
      stream: false,
    });

    const response = completion.choices[0].message.content;

    return NextResponse.json({ msg: response, code: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { msg: error.message, code: 500 },
      { status: 500 }
    );
  }
}

// GET 函数保持不变
export async function GET() {
  return NextResponse.json({ msg: "hello" });
}
