<template>
<lay-out :title="title" :back="back">

<div v-if="isLoading==true" class="ion-padding">
<skeleton-component/>
</div>


<ion-card v-else>
<img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
<ion-card-header>
<ion-card-title style="text-transform:capitalize;text-align:center;">
{{ row.fname }} {{ row.lname }}
</ion-card-title>
</ion-card-header>
<ion-card-content>


<ion-item lines="none">
<ion-label>
Gender
</ion-label>
<ion-note slot="end">
{{ row.gender }}
</ion-note>
</ion-item>

<ion-item lines="none">
<ion-label>
Address
</ion-label>
<ion-note slot="end">
{{ row.address }}
</ion-note>
</ion-item>



<ion-item lines="none">
<ion-label>
Telephone
</ion-label>
<ion-note slot="end">
{{ row.tel }}
</ion-note>
</ion-item>

<ion-item lines="none">
<ion-label>
Email
</ion-label>
<ion-note slot="end">
{{ row.email }}
</ion-note>
</ion-item>





</ion-card-content>
</ion-card>




</lay-out>
</template>
<script>

import { addCircle, addOutline, listCircle, time } from 'ionicons/icons';
import {IonCard, IonCardContent, IonCardHeader, IonCardTitle,IonItem,IonLabel,IonNote } from '@ionic/vue';
import LayOut from '@/components/LayOut.vue';
import SkeletonComponent from '@/components/SkeletonComponent.vue';
import UserProfileController from '@/database/UserProfilecontroller.js';
export default {
components:{
LayOut,
IonCard,
IonCardContent,
IonCardHeader,
IonCardTitle,
SkeletonComponent,
IonItem,IonLabel,IonNote


},
data(){return{
title:'Profile',
back:'/settings',
row:{},
isLoading:false,
error:null,



}},



methods:{
user(){
const db=new UserProfileController;
this.isLoading=true;
db.profile().then((res)=>{
this.isLoading=false;
if(res.error==null){
const meta=res.data.user.user_metadata;
this.row={
email:res.data.user.email,
fname:meta.firstname,
lname:meta.lastname,
gender:meta.gender,
address:meta.address,
role:meta.role,
tel:meta.tel,
};



}else{
this.error=res.error;
}
}).catch((error)=>{console.log(error)});
}




},

mounted(){
this.user();
},


setup(){return{
time,listCircle,addCircle,addOutline
}}
}
</script>

<style scoped>
ion-card{
padding: 0;
margin:0;
border-radius:0;
box-shadow:none;
}

ion-item{
--border:none;
}

ion-card{
    box-shadow:none;
}


</style>