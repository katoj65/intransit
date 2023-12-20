<template>
<transporter-layout :title="title" :back="back">
<template #subtitle>
<tab-bar style="margin-top:0px;"/>
</template>






<ion-list :inset="false">



<ion-item :button="true" detail="false" v-for="(m,key) in 20" :key="key" lines="full">
<ion-label>
<strong>Rick Astley</strong>
<ion-text>Never Gonna Give You Up</ion-text><br />
<ion-note color="medium" class="ion-text-wrap">
Never gonna give you up Never gonna let you down Never gonna run...
</ion-note>
</ion-label>
<div class="metadata-end-wrapper" slot="end">
<ion-note color="medium">06:11</ion-note>
</div>
</ion-item>
</ion-list>






</transporter-layout>
</template>
<script>
import TransporterLayout from '@/components/TransporterLayout.vue';
import TabBar from '@/components/TabBar.vue';
import { IonItem, IonLabel,   IonList, IonNote,IonText } from '@ionic/vue';
export default {
components:{
TransporterLayout,
TabBar,IonItem, IonLabel,
IonList,IonNote,IonText
},
data(){return{
title:'UBA 933J',
back:'/transporter/profile',
}},
methods:{




}
}
</script>