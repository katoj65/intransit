import { createClient } from '@supabase/supabase-js';
// const supabaseUrl = process.env.VUE_APP_SUPABASE_URL;
// const supabaseAnonKey = process.env.VUE_APP_SUPABASE_ANON_KEY;
const  supabase = createClient('https://teukixddhqniroybkfku.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRldWtpeGRkaHFuaXJveWJrZmt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI0NjcxMDMsImV4cCI6MjAxODA0MzEwM30.GbQUcV1Z9fYL5jREXq85DAtkKckTjYQv-tcLzjznjAw');
export default supabase;