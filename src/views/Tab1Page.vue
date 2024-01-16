<template>
<lay-out :title="title">
<template #subtitle>
<div style="background:#F0F3F4;">
<div style="background:#F0F3F4;padding:5px;">
<ion-searchbar placeholder="Search..." class="custom"></ion-searchbar>
</div>
</div>
</template>
<div style="padding-left:10px;padding-right:10px;">
<ion-chip @click="$router.push('/transporters')">Transporters</ion-chip>
<ion-chip  @click="$router.push('/buy')">Buy Items</ion-chip>
<ion-chip @click="$router.push('/services/view')">Other Services</ion-chip>
</div>



<!-- <main-tab/> -->
<!-- <SkeletonComponent/> -->

<!-- <div style="padding:5px;">
<banner-component class="border" style="margin:0;border-radius: 10px;"/>
<ion-grid>
<ion-row>
<ion-col size="4" v-for="(l,key) in list" :key="key" button class="border" @click="$router.push(l.url)" style="border-radius: 5px;">
<div style="background:white;border-radius:2px;padding:5px;text-align:center;padding-top:10px;height:90px;" class="menu">
<img :src="l.icon" style="width:40px;"/>
<p style="font-size:13px;text-align:center;padding:0;margin-top:-1px;">
{{ l.title }}
</p>
</div>
</ion-col>
</ion-row>
</ion-grid>
</div> -->


<div style="padding:10px;margin-top:15px;border-radius:20px 20px 0px 0px;background:white;">



<ion-item lines="none" v-for="(l,key) in list" :key="key" button   @click="$router.push(l.url)" detail="true">
<ion-avatar slot="start" style="border-radius: 0;">
<img :src="l.icon" style="width:40px;border-radius:0;"/>
</ion-avatar>
<ion-label style="font-size:18px;">
{{ l.title }}
<p> {{ l.description }} </p>
</ion-label>
<ion-note slot="end" style="font-size:16px;">
</ion-note>
</ion-item>



</div>







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
IonChip


} from '@ionic/vue';
import { time,location,wallet,searchCircle } from 'ionicons/icons';
import  SkeletonComponent  from "@/components/SkeletonComponent.vue";
import BannerComponent from '@/components/BannerComponent.vue';
import MainTab from '@/components/MainTab.vue';
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
SkeletonComponent,
BannerComponent,
MainTab,
IonChip


},
data(){return{
title:'Logistic services',
list:[

{title:'Transporters',icon:'/icons/lorry.png',url:'/transporters',id:1, description:'Lorries, pickups and trucks'},
{title:'Hire Driver',icon:'/icons/driver.png',url:'/tabs/tab5',id:2, description:'Specialized drivers'},
{title:'Movers',icon:'/icons/mover.png',url:'/tabs/tab5',id:3, description:'Safely move your properties'},
{title:'Excavator',icon:'/icons/excavator.png',url:'/tabs/tab5',id:4, description:'Strong and reliable machines'},
{title:'Crane',icon:'/icons/crane.png',url:'/tabs/tab5',id:5, description:'Heavy lifting and loading'},
{title:'Heavy Machines',icon:'/icons/roller.png',url:'/tabs/tab5',id:6, description:'Premium equipment '},
{title:'Buy Items',icon:'/icons/package.png',url:'/tabs/tab5',id:7, description:'Order from businesses'},
{title:'Warehouse',icon:'/icons/warehouse.png',url:'/tabs/tab5',id:8, description:'Quality storage facilities'},




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
--border-radius:30px;
font-size: 14px;
--box-shadow:none;
--background: white;

}

ion-card{
box-shadow: none;
}
ion-row{

}
ion-col{

}
ion-grid{

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

ion-chip{
background:white;

}

ion-item{
margin-bottom:5px;
border-radius:10px;
}
</style>