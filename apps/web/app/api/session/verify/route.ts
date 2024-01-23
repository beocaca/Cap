import { type NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@cap/database/auth/auth-options";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const cookies = req.cookies;

  console.log("req:::::", req);

  console.log("session:::::", session);
  console.log("cookies:::::", cookies);

  if (session) {
    return new Response(
      JSON.stringify({ isLoggedIn: true, user: session.user }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } else {
    return new Response(JSON.stringify({ isLoggedIn: false }), {
      status: 401,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
