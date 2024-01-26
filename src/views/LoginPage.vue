<template>
<ion-page>
<ion-content>
<form @submit.prevent="submit">
<div v-if="screen==='login'">
<div style="padding:50px;padding-bottom:50px;padding-top:80px;">
<img src="/logo4.png" style="width:100%"/>
</div>

<!-----error message-->
<div class="ion-padding" style="color:red;" v-if="error">
{{ error }}
</div>

<h4 style="margin-bottom:30px;">LOGIN</h4>
<ion-input placeholder="Enter email address" v-model="form.email" type="email" required></ion-input>
<ion-input placeholder="Enter password" v-model="form.password" type="password" required></ion-input>
<submit-button :isLoading="isLoading" :title="'Login'"/>
</div>
<register-form v-else/>
<ion-button class="register" v-if="screen==='login'" @click="screen='register'" fill="clear">Register</ion-button>
<ion-button class="register" v-else @click="screen='login'" fill="clear">Login</ion-button>
</form>
</ion-content>
</ion-page>

</template>
<script>
import {IonPage,IonInput,IonButton, IonContent } from '@ionic/vue';
import RegisterForm from '@/forms/RegisterForm.vue';
import SubmitButton from '@/components/SubmitButton.vue';
import LoginController from '@/database/LoginController.js';
export default {
components:{
IonPage,IonInput,IonButton,IonContent,
RegisterForm,SubmitButton
},

data(){
return{
isLoading:false,
error:'',
name:'index',
screen:'login',
form:{
email:'katoj65@gmail.com',
password:'1234567890'
}

}},




methods:{
//submit
submit(){
if(this.form.email!='' && this.form.password!=''){
this.isLoading=true;
const db=new LoginController;
db.login(this.form).then((res)=>{
this.isLoading=false;
if(res.data.error==null){
// this.$store.commit('hasAccess');
this.$router.push('/');
}else{
this.error=res.data.error;
console.log(res.data.error);
}
}).catch((error)=>{
this.error=error.name;
console.log(error);
});


}else{
error='Fill in all fields';
}
}











}



}
</script>

<style scoped>
.ion-page{
background:#0c3e29;
}

ion-input{
margin-bottom:10px;
text-align: center;
border-radius:5px;
--background:#EEEEEE;
--border-radius:5px;

}

form{
padding:20px;
}

ion-button{
width:100%;
--border-radius:5px;
--background:#34495E;
margin:0;
margin-bottom:10px;
--padding:15px;
color:white;

}
h4{
text-align: center;
font-weight: bold;
color:#0c3e29;
}

.register{
--background:white;
margin-top:10px;
color:black;
border:solid 2px #0c3e29;
border-radius:5px;
}

ion-content {
    --background:white;

  }


</style>