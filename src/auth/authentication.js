import supabase from '../database/connection.js';
export default class authentication{
async auth_status(){
const { data, error } = await supabase.auth.getSession();
return data;
}









}