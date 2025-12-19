import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://dahbkyucichmipvptyka.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvcWVreGpucGp5ZWl0YnNxcG51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0OTUxODAsImV4cCI6MjA4MTA3MTE4MH0.VaJ9fme-DXY6___2Xmzpwnxm5nxpMv2hjzg1x5-f0l0"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
