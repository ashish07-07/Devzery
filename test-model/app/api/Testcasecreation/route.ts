import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/db";
export async function POST(req: NextRequest) {
  const res = await req.json();
  console.log(res);
  console.log(typeof res);

  return NextResponse.json({
    res,
  });
}
