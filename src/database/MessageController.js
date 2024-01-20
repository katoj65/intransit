import supabase from "./connection";
export default class WalletController{
async user_messages(id){
return await supabase.from('message').select('*').eq('sender_id',id);
}


























}