<template>
<transporter-layout :title="title" :back="back">
<template #subtitle>
<tab-bar style="margin-top:0px;"/>
</template>

















<ion-card>
<div style="background-color:#0c3e29;padding:0;">
<div style="color:red;position:absolute;right:10px;top:200px;color:white;font-weight:bolder;">UBA<br/>933J
</div>
<img src="/public/images/car.jpeg" style="border-radius:0px 0px 400px;height:280px;" />
</div>
<ion-card-content style="padding:0;">






<ion-list :inset="false" style="box-shadow:none;margin-top:-10px;">




    <ion-item>
        <ion-avatar aria-hidden="true" slot="start">
          <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </ion-avatar>
        <ion-label>
            <h2>
Driver details
            </h2>
            <p>
                {{ driver.name }}
            </p>
        </ion-label>
        <ion-button slot="end" size="default">Book</ion-button>
      </ion-item>



<ion-item :button="true" lines="full" v-for="(l,key) in list" :key="key">
<ion-icon color="danger" slot="start" :icon="listCircle" size="large"></ion-icon>
<ion-label>
<h2 style="text-transform: capitalize;">{{ l.title }} </h2>
<p>{{ l.description }} </p>
</ion-label>
<ion-note slot="end" style="font-size:14px;">
       {{ l.tag }} </ion-note><br/>
</ion-item>



</ion-list>




</ion-card-content>
</ion-card>


<ion-button fill="clear" expand="full">
<ion-icon slot="end" :icon="star"></ion-icon>
Book Now
</ion-button>





</transporter-layout>
</template>
<script>
import { IonCard, IonCardContent,
IonLabel,IonItem,IonList,IonIcon,IonNote,IonButton, IonAvatar,


} from '@ionic/vue';
import TabBar from '@/components/TabBar.vue';
import TransporterLayout from '../components/TrasporterLayout.vue';
import { chevronForward, listCircle,star } from 'ionicons/icons';
export default {
components:{
TransporterLayout,
TabBar,
IonCard, IonCardContent,IonLabel,
IonItem,IonList,IonIcon,IonNote,
IonButton, IonAvatar,

},

data(){return{
title:'UBA 933J',
back:'/tabs/tab3',

driver:{name:'Joshua Kato M',tag:'Available'},

list:[
{title:'TATA SFC 407',description:'Model 123 year 2000',tag:'Available',icon:''},
{title:'Route',description:'Kampala - Masaka road',tag:'3:00 PM',icon:''},
{title:'ID NUMBER',description:'#0005678644468',tag:'',icon:''},
{title:'STAGE',description:'Gwowonyegere Stage',tag:'',icon:''},
],

//status
status:'Available',




}},

setup(){return{
listCircle,chevronForward,star


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

h2{
    color:#0c3e29;
    font-weight:bold;
}


</style>

