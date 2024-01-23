import supabase from '../database/connection.js';
export default class RoleController{
async roles(){
return  await supabase.from('role').select('*');
}







}