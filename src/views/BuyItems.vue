<template>
<lay-out :title="title" :back="back">
<div style="padding:10px;margin-top:15px;">


    


<ion-item lines="none" v-for="n in 20" :key="n" button  detail="true" class="border-bottom">
<ion-label>
<h2>
Some info
</h2>
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
IonItem,
IonLabel,
IonNote,



} from '@ionic/vue';
import { time,location,wallet,searchCircle } from 'ionicons/icons';
import  SkeletonComponent  from "@/components/SkeletonComponent.vue";
export default {
components:{
IonButton,
IonIcon,
LayOut,
IonItem,
IonLabel,
IonNote,
SkeletonComponent,

},
data(){return{
title:'Buy',
back:'/',
business:[
{name:'Hardware'},
{name:'Roofing'},
{name:''},

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