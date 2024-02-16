<template>
<div>
<form @submit.prevent="submit" style="padding:0;"  v-if="status==false">

<div>
    <div style="padding:50px;padding-bottom:10px;padding-top:80px;text-align:center;">
        <img src="/icon-white.png" style="width:100px;"/>
        <h1 style="font-weight:bold;color:white;font-size:30px;">
          Intransit
        </h1>
        </div>


<h4 style="margin-bottom:30px;">REGISTER</h4>

<div style="color:red;text-align:center;" v-if="error!=null" class="ion-padding">
{{ error }}
</div>
<div>
<ion-input placeholder="Enter Firstname" v-model="form.firstname" type="text" required></ion-input>
<ion-input placeholder="Enter Lastname" v-model="form.lastname" type="text" required></ion-input>
<ion-input placeholder="Enter Email Address" v-model="form.email" type="email" required></ion-input>
<ion-input placeholder="Enter Password" v-model="form.password" type="password" required></ion-input>
<submit-button :title="'Create account'" :isLoading="isLoading"/>
</div>
</div>
</form>
<div v-else>
<h4 style="margin-bottom:30px;">REGISTER</h4>
</div>
</div>
</template>
<script>
import LoginController from '@/database/LoginController.js';
import {IonInput, IonButton } from '@ionic/vue';
import SubmitButton from '@/components/SubmitButton.vue';
import supabase from '@/database/connection';
export default {
components:{
IonInput,
IonButton,
SubmitButton
},

data(){
return{
status:false,
isLoading:false,
error:null,
form:{
email:'katoj65@gmail.com',
firstname:'joshua',
lastname:'kato',
password:'1234567890',
}
}},

methods:{
submit(){
this.isLoading=true;
let form=this.form;
const db=new LoginController;
db.register(form).then((res)=>{
if(res.error==null){

//sign in
supabase.auth.signInWithPassword({
email:this.form.email,
password:this.form.password,
}).then((response)=>{
if(response.data.error==null){


this.isLoading=false;
this.$store.commit('hasAccess');
this.$router.push('/account/create-profile');
console.log(response);


}else{

console.log(response.data.error);

}
}).catch((error1)=>{
console.log(error1);
});
//
}else{
if(res.error.status==0){
this.$store.commit('noConnection');
console.log(res.error.message);
}else if(res.error.status==400){
this.isLoading=false;
this.error=res.error.message;
console.log(res.error);
}
}
}).catch((error)=>{
console.log(error);
});







//this.$store.commit('hasAccess');
//this.$router.push('/account/select-role');



}

},



}
</script>

<style scoped>
.ion-page{
background:#0c3e29;
}

ion-input{
margin-bottom:10px;
text-align: center;
--border-radius:5px;
border-radius:5px;
--background: #EEEEEE;
}

form{
padding:0px;
}

ion-button{
width:100%;
--border-radius:5px;
--background:#0c3e29;
color:white;
margin:0;
margin-bottom:10px;
--padding:15px;

}
h4{
text-align: center;
font-weight: bold;
color:#0c3e29;
}

.register{
--background: #0c3e29;
color: white;
margin-top:10px;
}



</style>