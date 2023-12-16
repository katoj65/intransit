<template>
<ion-page>
<ion-content>
  {{ $store }}
<form @submit.prevent="submit">
<div v-if="screen==='login'">
<div style="padding:50px;padding-bottom:50px;">
<img src="/logo2.png" style="width:100%"/>
</div>
<h4 style="margin-bottom:30px;">LOGIN</h4>
<ion-input placeholder="Enter email address" v-model="form.email" type="email" required></ion-input>
<ion-input placeholder="Enter password" v-model="form.password" type="password" required></ion-input>
<ion-button type="submit">Login</ion-button>
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
// import supabase from '../database/connection.js';

export default {
components:{
IonPage,IonInput,IonButton,IonContent,
RegisterForm,
},

data(){return{
name:'index',
screen:'login',
form:{
email:'katoj65@gmail.com',
password:'1234567890'
}
}},

methods:{
submit(){
//console.log(this.$supabase);
this.$store.commit('hasAccess');
this.$router.push('/');
}
}

}
</script>

<style scoped>
.ion-page{
background:#0c3e29;
}

ion-input{
border:solid 2px white;
margin-bottom:10px;
text-align: center;
border-radius:5px;
color:white;
}

form{
padding:20px;
}

ion-button{
width:100%;
--border-radius:5px;
--background:white;
color:#0c3e29;
margin:0;
margin-bottom:10px;
--padding:15px;

}
h4{
text-align: center;
font-weight: bold;
color:white;
}

.register{
--background: #0c3e29;
color: white;
margin-top:10px;
}

ion-content {
    --background:#0c3e29;
    --color: #fff;
  }


</style>