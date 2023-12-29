<template>
<transporter-layout :title="title" :back="back" :subtitle="subtitle" :avatar="true">
<template #subtitle>
<tab-bar style="margin-top:0px;"/>
</template>


<ion-card style="padding:0;margin:0;">
<div style="background-color:#0c3e29;padding:0;margin:0;">

<img src="/public/images/car.jpeg" style="border-radius:0px 0px  240px 0px;height:280px;margin-top:0px;" />

<div>
<ion-item lines="none" class="user">
<ion-label>
<p class="user-details" style="color:white;text-shadow: 0px 0px 4px black;font-size:17px;padding-top:30px;">
UBA 933J
</p>
</ion-label>
Online
</ion-item>
</div>


</div>


<ion-card-content style="padding:0;">
</ion-card-content>
</ion-card>






<div style="padding:5px;">
  <ion-list :inset="false" style="box-shadow:none;">
    <ion-item lines="none">
    <ion-icon slot="start" :icon="idCard" size="large"></ion-icon>
    <ion-label>
    <h2>
    ID Number
    </h2>
    <p>
    390976541
    </p>
    </ion-label>
    <ion-note>
    </ion-note>
    </ion-item>








 
    <ion-item lines="none" v-for="(l,key) in list" :key="key">
    <ion-icon  slot="start" :icon="l.icon" size="large"></ion-icon>
    <ion-label>
    <h2 style="text-transform: capitalize;">{{ l.title }} </h2>
    <p>{{ l.description }} </p>
    </ion-label>
    <ion-note slot="end" style="font-size:14px;">
    {{ l.tag }}
    </ion-note><br/>
    </ion-item>



    </ion-list>
</div>




<template #footer>
<driver-profile-footer/>
</template>
</transporter-layout>
</template>
<script>
import {
IonCard,
IonCardContent,
IonLabel,
IonItem,
IonList,
IonIcon,
IonNote,
IonButton,
IonAvatar,
} from '@ionic/vue';
import TabBar from '@/components/TabBar.vue';
import TransporterLayout from '../components/TransporterLayout.vue';
import { chevronForward, listCircle, send, ellipse,idCard,location,shieldCheckmark,car,star,arrowForward,bookmarks  } from 'ionicons/icons';
import DriverProfileFooter from '../components/DriverProfileFooter.vue';

export default {
components:{
TransporterLayout,
TabBar,
IonCard, IonCardContent,IonLabel,
IonItem,IonList,IonIcon,IonNote,
IonButton,
IonAvatar,
DriverProfileFooter,

},

data(){return{
title:'Joshua Kato',
back:'/tabs/tab5',
subtitle:'Masaka - Kampala',


driver:{name:'Joshua Kato',gender:'Male',age:'35 Years of age',tag:'Available'},


list:[
{title:'Route',description:'Kampala - Masaka road',tag:'3:00 PM',icon:location},
{title:'Stage',description:'Gwowonyegere Stage',tag:'',icon:bookmarks},
{title:'Driver Licence',description:'Validity',tag:'12/01/2025',icon:shieldCheckmark},
{title:'Car Condition',description:'Service date',tag:'12/12/2020',icon:car},
{title:'Rating',description:'Good service',tag:'5 Stars',icon:star},
],


//status
status:'Available',


}},

setup(){return{
listCircle,
chevronForward,
send,
ellipse,
idCard,
location,
shieldCheckmark,
star,
arrowForward,
bookmarks

}}


}
</script>

<style scoped>
ion-card{
margin:0;border-radius:0;
}

ion-button{
--background:#0c3e29;
--padding:20px;
color:white;
font-weight: bold;
}

h1{
--color:white;
font-weight:bold;
}

ion-icon.available{
color:white;
font-size: 15px;
}

ion-item.user{
width:100%;
margin-top:-75px;
--background:none;
color:white;
position: absolute;
}

ion-avatar {
--border-radius: 4px;
}

</style>

