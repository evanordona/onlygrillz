
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    "https://kcmfrnpukecelyahextw.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjbWZybnB1a2VjZWx5YWhleHR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI4ODE2NDUsImV4cCI6MjAyODQ1NzY0NX0.cMY03k_UPNJUIiVz2dPdkrmujA7lc9D6q5-hCOH-o-8"
)

export default supabase