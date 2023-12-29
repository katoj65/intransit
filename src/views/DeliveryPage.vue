<template>
<lay-out :title="title" :back="back">





<ion-grid>
<ion-row>
<ion-col size="4" v-for="(l,key) in list" :key="key">
<div style="background:#EBEDEF;border-radius:2px;padding:5px;text-align:center;padding-top:10px;">
<img :src="l.icon" style="width:30px;"/>
<p style="font-size:15px;text-align:center;">
{{ l.title }}
</p>
</div>
</ion-col>
</ion-row>
</ion-grid>



</lay-out>
</template>
<script>

import LayOut from '@/components/LayOut.vue';
import {
IonButton,
IonIcon,
IonCol, IonGrid,IonRow

} from '@ionic/vue';
import { time } from 'ionicons/icons';
export default {
components:{
IonButton,
IonIcon,
LayOut,
IonCol, IonGrid,IonRow


},
data(){return{
title:'Delivery Service',
back:'/',


list:[
{title:'Construction',icon:'/icons/construction.png',url:''},
{title:'Agriculture',icon:'/icons/agriculture.png',url:''},
{title:'Furniture',icon:'/icons/furniture.png',url:''},
{title:'Metal work',icon:'/icons/metal.png',url:''},
{title:'Electricals',icon:'/icons/electricals.png',url:''},
{title:'Plumbing',icon:'/icons/plumbing.png',url:''},
{title:'Excavation',icon:'/icons/excavation.png',url:''},
{title:'Murram',icon:'/icons/murram.png',url:''},
],

}},




methods:{




},


setup(){return{
time
}}
}
</script>

<style scoped>


ion-button{
color:#0c3e29;
--background::#EBEDEF;
box-shadow:none;

}

</style>