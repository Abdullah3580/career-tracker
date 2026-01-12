import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://eclpxsegdjxxphtkbgns.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjbHB4c2VnZGp4eHBodGtiZ25zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgyNDk2NDgsImV4cCI6MjA4MzgyNTY0OH0.6VRgTDcHgapRHWKbCPGJWsWfVhxLVmoGxS-VvXiu9O4'

export const supabase = createClient(supabaseUrl, supabaseKey)