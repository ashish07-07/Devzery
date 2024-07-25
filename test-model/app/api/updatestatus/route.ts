import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/db";
export async function POST(req: NextRequest) {
  const res = await req.json();
  console.log(res);

  await prisma.issue.update({
    where: {
      id: res.id,
    },
    data: {
      status: res.value,
    },
  });
  return NextResponse.json({
    msg: "status updated successfully",
  });
}
