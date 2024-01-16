import supabase from "./connection";
class BusinessController{
async get_business(){
return  await supabase
.from('business')
.select('*')
};



async show_business(id){
  return  await supabase
    .from('business')
    .select('*')
    .eq('id',id);
};























}