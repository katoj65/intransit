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










}