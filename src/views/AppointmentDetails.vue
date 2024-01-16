<template>
<lay-out :title="title" :back="back">
<div></div>
<div class="border" style="margin:5px; padding:5px;background:white;">
<ion-item lines="none">
<ion-avatar slot="start">
<img src="https://ionicframework.com/docs/img/demos/avatar.svg" style="height:40px;border-radius:5px;"/>
</ion-avatar>
<ion-label>
<h2>{{ appointment.names }} </h2>
<p>{{ appointment.vehicle }} </p>
</ion-label>
<ion-icon :icon="calendar" slot="end"></ion-icon>
</ion-item>


<ion-item lines="none">
<ion-label>
Route
</ion-label>
<ion-note slot="end">
{{ appointment.route }}
</ion-note>
</ion-item>


<ion-item lines="none">
<ion-label>
Goods
</ion-label>
<ion-note slot="end">
{{ appointment.quantity }}
{{ appointment.goods }}
</ion-note>
</ion-item>


<ion-item lines="none">
<ion-label>
Date and Time
</ion-label>
<ion-note slot="end">
{{ appointment.date }}<span style="margin-left:15px;"> {{ appointment.time }}</span>
</ion-note>
</ion-item>


<ion-item lines="none">
<ion-label>
Amount
</ion-label>
<ion-note slot="end">
{{ appointment.amount }}
</ion-note>
</ion-item>




<ion-item lines="none" class="border-bottom">
<ion-label>
Payment Method
</ion-label>
<ion-note slot="end">
{{ appointment.payment }}
</ion-note>
</ion-item>



<ion-item lines="none">
<ion-label>
Created at
</ion-label>
<ion-note slot="end">
{{ appointment.created_at }}
</ion-note>
</ion-item>

</div>

<div class="border" style="border-bottom:0;margin:5px;">


<ion-item lines="none" class="border-bottom" button detail="true">
<ion-icon :icon="create" slot="start"></ion-icon>
<ion-label>
Edit
</ion-label>
</ion-item>

<ion-item lines="none" class="border-bottom" button detail="true">
<ion-icon :icon="trashBin" slot="start"></ion-icon>
<ion-label>
Delete
</ion-label>
</ion-item>
</div>










</lay-out>
</template>
<script>
import {IonItem,IonLabel,IonNote,IonAvatar,IonIcon } from '@ionic/vue';
import { calendar, create, trashBin, location } from 'ionicons/icons';
import LayOut from '@/components/LayOut.vue';
export default {
components:{
LayOut,
IonItem,
IonLabel,
IonNote,
IonAvatar,
IonIcon

},
data(){return{
title:'Appointment',
back:'/tabs/tab5',
appointment:{
names:'Joshua Kato',
vehicle:'UBA 933J',
date:'12/12/2024',
time:'12:00',
route:'Kampala - Mbarara',
amount:'Shs. 200000',
payment:'Cash',
goods:'Plastic Items',
quantity:'90000',
created_at:'12/09/2023',





}


}},



methods:{




},


setup(){return{
calendar,create,trashBin,location
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

ion-avatar {
--border-radius: 4px;
}

ion-button{
color:#0c3e29;
--background::#EBEDEF;
box-shadow:none;
border:solid 2px #0c3e29;
border-radius:5px;


}
ion-item.userheader{
--background:#EBEDEF;
--padding-bottom:5px;
--padding-top:5px;
}

ion-note{
font-size:15px;
}

</style>