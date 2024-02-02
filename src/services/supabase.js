// my

import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://mlsfronrbreowdapsktn.supabase.co";
const supabaseKey = "d";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
