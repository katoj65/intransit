<template>
<transporter-layout :title="title" :back="back">
<template #subtitle>
<tab-bar style="margin-top:0px;"/>
</template>

<ion-card>
<ion-list :inset="false" style="margin-top:-10px;">
<ion-item  lines="none" class="userheader">
<ion-avatar slot="start">
<img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
</ion-avatar>
<ion-label>
<h3 style="font-size:20px;weight:bolder;">
{{ user.names }}
</h3>
</ion-label>
<ion-note slot="end" style="font-size:17px;">
Available
</ion-note>
</ion-item>
</ion-list>

<ion-card-content style="padding:0;">
<ion-list :inset="false">



<ion-item v-for="(l,key) in list" lines="none">
<ion-label>{{ l.title }} </ion-label>
<ion-note slot="end" style="font-size:17px;">
{{ l.value }}
</ion-note>
</ion-item>
</ion-list>
<div style="height:150px;"></div>





</ion-card-content>
</ion-card>
<div style="padding:3px;background:#EBEDEF;border-radius: 30px 30px 0 0;position:fixed;width:100%;bottom:0;">
<ion-button expand="block" fill="clear">
<ion-icon :icon="time" slot="start"></ion-icon>
No Task</ion-button>
</div>
</transporter-layout>
</template>
<script>
import TransporterLayout from '@/components/TransporterLayout.vue';
import TabBar from '@/components/TabBar.vue';
import { time} from 'ionicons/icons';
import { IonCard, IonCardContent,IonAvatar,
IonItem,
IonLabel,
IonList,
IonNote,
IonText,
IonButton,
IonIcon
} from '@ionic/vue';
export default {
components:{

TransporterLayout,
TabBar,
IonCard,
IonCardContent,
IonAvatar,
IonItem,
IonLabel,
IonList,
IonNote,
IonText,
IonButton,
IonIcon

},
data(){return{
title:'UBA 933J',
back:'/transporter/profile',
user:{
names:'Joshua Kato',
role:'Driver'
},



list:[

{title:'Gender',value:'Male'},
{title:'Address',value:'Masajja Zone A'},
{title:'Designation',value:'Driver'},
{title:'ID Number',value:'# 123497'},
{title:'Stage',value:'Masajja Kivule stage'},
{title:'Driving Permit',value:'20-12-2024'},


],

}},
methods:{




},


setup(){return{
time
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

}
ion-item.userheader{
--background:#EBEDEF;
--padding-bottom:10px;
--padding-top:10px;
}

</style>