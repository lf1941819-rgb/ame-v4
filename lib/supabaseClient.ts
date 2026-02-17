
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://ngwdjmdjcgreapxfcbpj.supabase.co";
const SUPABASE_KEY = "sb_publishable_hPt5vEGiAfY0TI0t_F7Tpw_ZjxPfj4S";

// Singleton do Cliente Supabase
export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_KEY,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
      storageKey: 'ame-auth-token'
    }
  }
);
