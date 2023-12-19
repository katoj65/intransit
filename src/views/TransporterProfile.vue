<template>
<transporter-layout :title="title" :back="back">
<template #subtitle>
<tab-bar style="margin-top:0px;"/>
</template>






<ion-card>
<div style="background-color:#0c3e29;padding:0;">
<div style="color:red;position:absolute;right:10px;top:200px;color:white;font-weight:bolder;">UBA<br/>933J
</div>
<img src="/public/images/car.jpeg" style="border-radius:0px 0px 400px;height:280px;margin-top:20px;" />



<div>
<ion-item lines="none" class="user">
<ion-avatar aria-hidden="true" slot="start" style="border:solid 4px white;">
<img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
</ion-avatar>
<ion-label>
<h1 style="color:white;text-shadow: 0px 0px 3px black;" class="user_name">
{{ driver.name }}
</h1>
<p class="user-details" style="color:white;text-shadow: 0px 0px 3px black;font-size:17px;">
{{ driver.gender }} . {{ driver.age }}.
</p>
</ion-label>
<ion-icon class="available" slot="end" :icon="ellipse"></ion-icon>
</ion-item>
</div>


</div>
<ion-card-content style="padding:0;">




<ion-list :inset="false" style="box-shadow:none;margin-top:-10px;">





<ion-item lines="none">
<ion-icon color="danger" slot="start" :icon="listCircle" size="large"></ion-icon>
<ion-label>
<h2>
Number
</h2>
<p>
390976541
</p>
</ion-label>
<ion-button slot="end" size="default"  fill="clear">
<ion-icon slot="end" :icon="send"></ion-icon>
Request</ion-button>
</ion-item>




<ion-item :button="true" lines="none" v-for="(l,key) in list" :key="key">
<ion-icon color="danger" slot="start" :icon="listCircle" size="large"></ion-icon>
<ion-label>
<h2 style="text-transform: capitalize;">{{ l.title }} </h2>
<p>{{ l.description }} </p>
</ion-label>
<ion-note slot="end" style="font-size:14px;">
{{ l.tag }}
</ion-note><br/>
</ion-item>








</ion-list>




</ion-card-content>
</ion-card>








</transporter-layout>
</template>
<script>
import { IonCard, IonCardContent,
IonLabel,IonItem,IonList,IonIcon,IonNote,IonButton, IonAvatar,


} from '@ionic/vue';
import TabBar from '@/components/TabBar.vue';
import TransporterLayout from '../components/TrasporterLayout.vue';
import { chevronForward, listCircle, send, ellipse  } from 'ionicons/icons';
export default {
components:{
TransporterLayout,
TabBar,
IonCard, IonCardContent,IonLabel,
IonItem,IonList,IonIcon,IonNote,
IonButton,
IonAvatar,

},

data(){return{
title:'UBA 933J',
back:'/tabs/tab3',

driver:{name:'Joshua Kato Mukasa',gender:'Male',age:'35 Years of age',tag:'Available'},

list:[
{title:'ID Number',description:'Kampala - Masaka road',tag:'3:00 PM',icon:''},
{title:'Route',description:'Kampala - Masaka road',tag:'3:00 PM',icon:''},
{title:'Stage',description:'Gwowonyegere Stage',tag:'',icon:''},
{title:'Driver Licence',description:'Valid',tag:'2020',icon:''},
{title:'Car Condition',description:'Service date',tag:'12/12/2020',icon:''},
{title:'Rating',description:'Good service',tag:'5 Stars',icon:''},
],


//status
status:'Available',


}},

setup(){return{
listCircle,
chevronForward,
send,
ellipse,


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

</style>

