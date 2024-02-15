import supabase from '../database/connection.js';
export default class UserProfileController{
async profile(){
 return await supabase.auth.getUser();

}







}