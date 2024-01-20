import supabase from "./connection";
export default class WalletController{
async balance(id){
return await supabase.from('wallet')
.select('amount,wallet_address')
.eq('user_id',id);
}



























}