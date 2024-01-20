import supabase from '../database/connection.js';
export default class LoginController{
async login(){






};

//register
async register(form){
return await supabase.auth.signUp({
email: form.email,
password: form.password,
options: {
data: {
firstname:form.firstname,
lastname:form.lastname,
gender:'',
role:'',
tel:'',
address:''
}
}
}
);
};


//get logged in user
async this_user(){
// return await
}












}








