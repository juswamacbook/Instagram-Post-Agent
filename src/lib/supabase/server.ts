import { createClient, type SupabaseClient } from "@supabase/supabase-js";

type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

type Database = {
  public: {
    Tables: {
      assets: {
        Row: {
          id: string;
          user_id: string;
          original_path: string;
          width: number | null;
          height: number | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          original_path: string;
          width?: number | null;
          height?: number | null;
          created_at?: string;
        };
        Update: Partial<{
          user_id: string;
          original_path: string;
          width: number | null;
          height: number | null;
        }>;
      };
      asset_analysis: {
        Row: {
          asset_id: string;
          palette: Json;
          safe_zones: Json;
          tags: Json;
          ocr_text: string;
          created_at: string;
        };
        Insert: {
          asset_id: string;
          palette: Json;
          safe_zones: Json;
          tags: Json;
          ocr_text?: string;
          created_at?: string;
        };
        Update: Partial<{
          palette: Json;
          safe_zones: Json;
          tags: Json;
          ocr_text: string;
        }>;
      };
      design_sets: {
        Row: {
          id: string;
          asset_id: string;
          user_id: string;
          params: Json;
          created_at: string;
        };
        Insert: {
          id?: string;
          asset_id: string;
          user_id: string;
          params: Json;
          created_at?: string;
        };
        Update: Partial<{
          asset_id: string;
          user_id: string;
          params: Json;
        }>;
      };
      design_variants: {
        Row: {
          id: string;
          design_set_id: string;
          template_id: string;
          style_id: string;
          format: string;
          spec: Json;
          render_path: string | null;
          thumb_path: string | null;
          score: number | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          design_set_id: string;
          template_id: string;
          style_id: string;
          format: string;
          spec: Json;
          render_path?: string | null;
          thumb_path?: string | null;
          score?: number | null;
          created_at?: string;
        };
        Update: Partial<{
          template_id: string;
          style_id: string;
          format: string;
          spec: Json;
          render_path: string | null;
          thumb_path: string | null;
          score: number | null;
        }>;
      };
    };
  };
};

function getRequiredEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is required`);
  }
  return value;
}

export function createSupabaseBrowserAuthServerClient(accessToken: string): SupabaseClient<Database> {
  const supabaseUrl = getRequiredEnv("https://fehkhdzjdroeayrxwnzm.supabase.co");
  const supabaseAnonKey = getRequiredEnv("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZlaGtoZHpqZHJvZWF5cnh3bnptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI2NjE3MzgsImV4cCI6MjA4ODIzNzczOH0.fZ8ZCg3KuOPnV1dMOZAqbiZJ6Jh7ZfDZ7Zb4Pts0rnc");

  return createClient<Database>(supabaseUrl, supabaseAnonKey, {
    global: {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });
}

export function createSupabaseServiceRoleClient(): SupabaseClient<Database> {
  const supabaseUrl = getRequiredEnv("https://fehkhdzjdroeayrxwnzm.supabase.co");
  const serviceRoleKey = getRequiredEnv("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZlaGtoZHpqZHJvZWF5cnh3bnptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI2NjE3MzgsImV4cCI6MjA4ODIzNzczOH0.fZ8ZCg3KuOPnV1dMOZAqbiZJ6Jh7ZfDZ7Zb4Pts0rnc");

  return createClient<Database>(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });
}

export function sanitizeFilename(name: string) {
  return name.replace(/[^a-zA-Z0-9._-]/g, "_");
}

export async function uploadPrivateObject(params: {
  bucket: "uploads" | "renders";
  path: string;
  content: Buffer;
  contentType: string;
}) {
  const supabase = createSupabaseServiceRoleClient();
  const { error } = await supabase.storage
    .from(params.bucket)
    .upload(params.path, params.content, {
      contentType: params.contentType,
      upsert: false,
    });

  if (error) {
    throw new Error(`Storage upload failed: ${error.message}`);
  }

  return {
    bucket: params.bucket,
    path: params.path,
  };
}

export async function getSignedPrivateObjectUrl(params: {
  bucket: "uploads" | "renders";
  path: string;
  expiresInSeconds?: number;
}) {
  const supabase = createSupabaseServiceRoleClient();
  const { data, error } = await supabase.storage
    .from(params.bucket)
    .createSignedUrl(params.path, params.expiresInSeconds ?? 3600);

  if (error || !data?.signedUrl) {
    throw new Error(`Failed to create signed URL: ${error?.message ?? "unknown error"}`);
  }

  return data.signedUrl;
}
