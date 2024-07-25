import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/db";

export async function POST(req: NextRequest) {
  const res = await req.json();
  console.log(res);
  console.log(typeof res);
  const rstimated = parseInt(res.estimateTime);
  console.log(rstimated);

  await prisma.issue.create({
    data: {
      testcasename: res.testCaseName,
      testdescription: res.testDescription,
      estimatedtime: rstimated,
      module: res.module,
      priority: res.priority,
    },
    select: {
      priority: true,
    },
  });

  return NextResponse.json({
    res,
  });
}
