import { NextRequest } from "next/server";
import { createSupabaseBrowserAuthServerClient } from "@/lib/supabase/server";

export function getBearerToken(request: NextRequest) {
  const authorization = request.headers.get("authorization") ?? "";
  const [scheme, token] = authorization.split(" ");

  if (scheme?.toLowerCase() !== "bearer" || !token) {
    return null;
  }

  return token;
}

export async function requireAuthenticatedUser(request: NextRequest) {
  const accessToken = getBearerToken(request);
  if (!accessToken) {
    return { error: "Missing bearer access token.", status: 401 as const };
  }

  const supabase = createSupabaseBrowserAuthServerClient(accessToken);
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    return { error: "Unauthorized.", status: 401 as const };
  }

  return { user };
}
