<template>
<lay-out :title="title" :back="back">
<div style="padding:10px;margin-top:15px;">


<div v-if="isLoading==true" style="padding:30px;">
<skeleton-component/>
</div>
<div v-else>
<div v-if="row.length>0">
<ion-item lines="none" v-for="(l,key) in row" :key="l" button  detail="true">
<ion-label>
<h2>
{{ l.name }}
</h2>
</ion-label>
<ion-note slot="end" style="font-size:16px;">
</ion-note>
</ion-item>
</div>
<div v-else style="padding:10px;">
No records
</div>

</div>



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
import BusinessController from '@/database/BusinessController.js';
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
row:[],
isLoading:false,








}},




methods:{
business(){
this.isLoading=true;
const db=new BusinessController;
db.business_category().then(res=>{
this.isLoading=false;
this.row=res.data;
}).catch(error=>{
console.log(error);
});

}



},
mounted(){
this.business();
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
--border-radius:0px;
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
margin-bottom:1px;
}
</style>