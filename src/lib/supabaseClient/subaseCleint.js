import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
	'https://mptozxghegokyclcalzu.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wdG96eGdoZWdva3ljbGNhbHp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE4MTA0MzYsImV4cCI6MjAxNzM4NjQzNn0.6mCQ_DV7JzRpHNIFfjFxI0D2q-nXICL43DL4vzr7DWE'
);
