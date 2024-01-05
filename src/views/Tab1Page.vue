<template>
<lay-out :title="title">

{{ $store.state.session }}

<div style="background:white;" class="border-bottom">
<div style="background:white;padding:5px;">
<ion-searchbar placeholder="Search..."></ion-searchbar>
</div>
</div>


<!-- <ion-grid>
<ion-row>
<ion-col size="4" v-for="(l,key) in list" :key="key" button>
<div style="background:white;border-radius:2px;padding:5px;text-align:center;padding-top:10px;" class="menu">
<img :src="l.icon" style="width:40px;"/>
<p style="font-size:13px;text-align:center;padding:0;margin-top:-1px;">
{{ l.title }}
</p>
</div>
</ion-col>
</ion-row>
</ion-grid> -->



<ion-item lines="none" v-for="(l,key) in list" :key="key" button  detail="true" class="border-bottom" @click="$router.push(l.url)">
<ion-avatar slot="start" style="border-radius: 0;">
<img :src="l.icon" style="width:35px;border-radius:0;"/>
</ion-avatar>
<ion-label style="font-size:17px;">
{{ l.title }}
</ion-label>
<ion-note slot="end" style="font-size:16px;">
</ion-note>
</ion-item>















</lay-out>
</template>
<script>

import LayOut from '@/components/LayOut.vue';
import {
IonButton,
IonIcon,
IonCol,
IonGrid,
IonRow,
IonSearchbar,
IonItem,
IonAvatar,
IonLabel,
IonNote,



} from '@ionic/vue';
import { time,location,wallet,searchCircle } from 'ionicons/icons';
export default {
components:{
IonButton,
IonIcon,
LayOut,
IonCol,
IonGrid,
IonRow,
IonSearchbar,
IonItem,
IonAvatar,
IonLabel,
IonNote,




},
data(){return{
title:'Logistic services',
list:[
// {title:'Construction',icon:'/icons/construction.png',url:''},
// {title:'Agriculture',icon:'/icons/agriculture.png',url:''},
// {title:'Furniture',icon:'/icons/furniture.png',url:''},
// {title:'Metal Work',icon:'/icons/metal.png',url:''},
// {title:'Electricals',icon:'/icons/electricals.png',url:''},
// {title:'Plumbing',icon:'/icons/plumbing.png',url:''},
// {title:'Excavation',icon:'/icons/excavation.png',url:''},
// {title:'Murram',icon:'/icons/murram.png',url:''},
// {title:'Machinery',icon:'/icons/excavation.png',url:''},
// {title:'Food',icon:'/icons/excavation.png',url:''},
// {title:'Plastics',icon:'/icons/excavation.png',url:''},
// {title:'Office Items',icon:'/icons/excavation.png',url:''},


{title:'Transporters',icon:'/icons/lorry.png',url:'/tabs/tab5'},
{title:'Hire Driver',icon:'/icons/driver.png',url:'/tabs/tab5'},
{title:'Movers',icon:'/icons/mover.png',url:'/tabs/tab5'},
{title:'Excavator',icon:'/icons/excavator.png',url:'/tabs/tab5'},
{title:'Crane',icon:'/icons/crane.png',url:'/tabs/tab5'},
{title:'Heavy Machinery',icon:'/icons/roller.png',url:'/tabs/tab5'},
{title:'Buy Items',icon:'/icons/package.png',url:'/tabs/tab5'},
{title:'Store & warehouse',icon:'/icons/warehouse.png',url:'/tabs/tab5'},
{title:'Businesses',icon:'/icons/menu.png',url:'/tabs/tab5'},


],

map:{
location:'Masajja Zone A',
district:'Wakiso District',
weather:'Cloudy',
degrees:'34C'
}






}},




methods:{




},


setup(){return{
time,
location,
wallet,searchCircle
}}
}
</script>

<style scoped>

ion-button{
color:#0c3e29;
--background:#EBEDEF;
box-shadow:none;
}

ion-searchbar{
--background:#EBEDEF;
--box-shadow: none;
--border-radius:5px;
font-size: 14px;
}
ion-card{
box-shadow: none;
}
ion-row{
--margin:0;
--padding:0;
}
ion-col{
margin:0;
padding:0;
}
ion-grid{
padding: 0;
margin-top:2px;
}
.menu{
margin:2px;
}
.round{
border-radius: 10px;
}
ion-button{
box-shadow: none;
}
</style>