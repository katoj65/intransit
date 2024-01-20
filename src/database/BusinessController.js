import supabase from "./connection";
export default class BusinessController{

async business_category(){
return  await supabase
.from('business_category')
.select('*');
};


async show_business(id){
return  await supabase
.from('business')
.select('*')
.eq('id',id);
};























}