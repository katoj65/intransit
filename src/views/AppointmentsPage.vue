<template>
<lay-out :title="title">



<div>
<ion-item v-for="(n,key) in 20" :key="key" lines="none" :button="true" @click="$router.push('/appointment/view')" detail="true">
<ion-avatar aria-hidden="true" slot="start">
<img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
</ion-avatar>
<ion-label class="ion-text-wrap">
<h2>Joshua Kato</h2>
<p>UBA 399J</p>
<p>Kapala - Mbarara</p>
</ion-label>
<ion-note slot="end" style="text-align:right;">
12/12/24
<div>1:00 AM</div>
</ion-note>
</ion-item>





</div>
</lay-out>
</template>
<script>

import { time, listCircle, addCircle, addOutline} from 'ionicons/icons';
import { IonItem,IonLabel,IonList,IonNote, IonIcon,IonAvatar } from '@ionic/vue';

import LayOut from '@/components/LayOut.vue';
export default {
components:{
LayOut,
IonItem,
IonLabel,
IonList,
IonNote,
IonIcon,
IonAvatar
},
data(){return{
title:'Appointment',



}},



methods:{




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
ion-item{
--background:white;
--padding-bottom:5px;
--padding-top:5px;
margin-bottom:1px;

}

</style>