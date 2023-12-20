<template>
<transporter-layout :title="title" :back="back">
<template #subtitle>
<tab-bar style="margin-top:0px;"/>
</template>




<form  class="ion-padding" @submit.prevent="submit">
<h5>
Request for service
</h5>
<ion-input label="Transporter" label-placement="floating" fill="outline" v-model="form.transporter" disabled></ion-input>
<ion-input label="Goods" label-placement="floating" fill="outline" placeholder="Enter type of goods you transport"></ion-input>
<ion-select label="Select quantity" label-placement="floating" fill="outline">
<ion-select-option :value="s.value" v-for="(s,key) in select">{{ s.name }} </ion-select-option>
</ion-select>
<ion-input label="From" label-placement="floating" fill="outline" placeholder="Enter location"></ion-input>
<ion-input label="To" label-placement="floating" fill="outline" placeholder="Enter destination"></ion-input>
<ion-button expand="block" type="submit" fill="clear">Submit </ion-button>
</form>




<!----submit--------->
<ion-alert
:is-open="open"
  :header="alert.title"
  :message="alert.message"
  :buttons="alertButtons"
  @didDismiss="open=false"
></ion-alert>






</transporter-layout>
</template>
<script>
import TabBar from '@/components/TabBar.vue';
import TransporterLayout from '@/components/TransporterLayout.vue';
import { IonInput, IonButton, IonSelect, IonSelectOption,IonAlert } from '@ionic/vue';
export default {
components:{
TransporterLayout,
TabBar,
IonInput,
IonButton,
IonSelect,
IonSelectOption,
IonAlert
},
data(){return{
title:'Request',
back:'/transporter/profile',
form:{
transporter:'Joshua Kato - UBA 933J',
uid:null,
tid:null,

},

status:false,
open:false,
alert:{title:null,message:null},
//select
select:[
{name:'Less than half a tone',value:1},
{name:'More than 2 tones',value:2},
{name:'Less than 5 tones',value:5},
{name:'More than 5 tones',value:4},
],


}},
methods:{
submit(){
this.open=true;
this.alert.title='Successfull';
this.alert.message='You have successfully subscribed.';
},
submit_alert(){

}


},



setup(){return{
alertButtons:[{text: 'OK', role: 'cancel',handler:()=>{this.open=false}}],
}}


}
</script>

<style scoped>
ion-input, ion-select{
--margin:15px;
margin-bottom:15px;
}
ion-button{
--margin-top:20px;
--border-shadow:none;
background: #0c3e29;
color:white;
border-radius: 5px;
}
h5{
margin-bottom:20px;
}
</style>