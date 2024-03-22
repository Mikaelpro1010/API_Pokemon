import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vsarwtkvdhnuvesfaenm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzYXJ3dGt2ZGhudXZlc2ZhZW5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA5NjQwNzksImV4cCI6MjAyNjU0MDA3OX0.jjWdc2cGj5nDtLG1FE6P02BHoXbYAMSk0hukayxzaYM';
export const supabase = createClient(supabaseUrl, supabaseKey);