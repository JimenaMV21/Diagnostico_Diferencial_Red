import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://bnucykfikwxtefmjnyzg.supabase.co/rest/v1/';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJudWN5a2Zpa3d4dGVmbWpueXpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ1OTA3NTgsImV4cCI6MjEwMDE2Njc1OH0.r-fRU8wIz3tb4C3qLIKCXYKPngBcpwtRQ5tfdi_fkXU';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);