import { supabase } from '../../lib/supabaseClient/subaseCleint';

export async function load() {
	const { data, error } = await supabase
		.from('terms_of_service')
		.select('*')
		.eq('kind_of_terms', 'AGB');

	//console.log(data[0]);
	//console.log(error);

	if (error) return { status: 500, body: error.message };
	return {
		agb: data
	};
}