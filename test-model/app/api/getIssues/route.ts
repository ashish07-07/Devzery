import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/db";

export async function GET(req: NextRequest) {
  const response = await prisma.issue.findMany();
  console.log(response);

  return NextResponse.json({
    response,
  });
}
