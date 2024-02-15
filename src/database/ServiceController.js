import supabase from "./connection";
export default class ServiceConteroller{

async get_services(){
return  await supabase.from('services').select('*');
};


async show_service(id){
return await supabase
.from('services')
.select("*")
.eq('id',id);
}





async service_category(){
return await supabase
.from('service_category')
.select('*')
.order('order_by', { ascending: true })
}







}