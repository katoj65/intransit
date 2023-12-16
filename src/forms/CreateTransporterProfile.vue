<template>
<form @submit.prevent="submit">
    <h4 style="text-align:center;color:white;padding:15px;font-weight:bold;">Transporter profile</h4>
<ion-input label="Outline input" label-placement="floating" fill="outline" placeholder="Enter text" class="custom"></ion-input>

<ion-input label="Outline input" label-placement="floating" fill="outline" placeholder="Enter text" class="custom"></ion-input>

<ion-input label="Outline input" label-placement="floating" fill="outline" placeholder="Enter text" class="custom"></ion-input>

<ion-input label="Outline input" label-placement="floating" fill="outline" placeholder="Enter text" class="custom"></ion-input>

<div style="text-align:center;">
<ion-button type="submit" class="submit" fill="clear">Complete</ion-button>
</div>
<div style="text-align:center;margin-top:20px;">
<ion-button class="back" @click="$router.push('/account/select-role')" fill="clear">Back</ion-button>
</div>
</form>
</template>
<script>
import { IonButton, IonInput, } from '@ionic/vue';
export default {
components:{
IonInput,IonButton
},
data(){return{



}},
methods:{
submit(){
this.$router.push('/');
}


},
computed:{
role(){
return this.$route.params.tag;
}


}



}
</script>

<style scoped>
ion-input{
--border:solid 2px white;
}


ion-input.custom {
--background:none;
--color: #fff;
--placeholder-color: #ddd;
--placeholder-opacity: 0.8;
--padding-bottom: 10px;
--padding-end: 10px;
--padding-start: 10px;
--padding-top: 10px;
border:solid 2px white;
border-radius:5px;
margin-bottom:20px;
}



ion-button.submit{
--border-radius:10px;
--background: white;
--color: #0c3e29;
--padding-top: 15px;
--padding-bottom: 15px;
}

ion-button.back{
--background:#0c3e29;
--color:#fff;
}
h3{
text-align: center;
color:white;
}
</style>