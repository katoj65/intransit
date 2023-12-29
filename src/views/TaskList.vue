<template>
<lay-out :title="title" :back="back">
<ion-list :inset="false">
<ion-item>
<ion-label>Basic Item</ion-label>
</ion-item>

<ion-item>
<ion-label>
Multi-line text that should wrap when it is too long to fit on one line. Lorem ipsum dolor sit amet, consectetur
adipiscing elit.
</ion-label>
</ion-item>

<ion-item>
<ion-label class="ion-text-nowrap">
Multi-line text that should ellipsis when it is too long to fit on one line. Lorem ipsum dolor sit amet,
consectetur adipiscing elit.
</ion-label>
</ion-item>

<ion-item>
<ion-label>
<h1>H1 Heading</h1>
<p>Paragraph</p>
</ion-label>
</ion-item>

<ion-item>
<ion-label>
<h2>H2 Heading</h2>
<p>Paragraph</p>
</ion-label>
</ion-item>

<ion-item>
<ion-label>
<h3>H3 Heading</h3>
<p>Paragraph</p>
</ion-label>
</ion-item>


</ion-list>


</lay-out>
</template>
<script>

import { time} from 'ionicons/icons';
import {
IonItem,
IonLabel,
IonList,
IonNote,
IonText,
IonButton,
IonIcon
} from '@ionic/vue';
import LayOut from '@/components/LayOut.vue';
export default {
components:{
IonItem,
IonLabel,
IonList,
IonNote,
IonText,
IonButton,
IonIcon,
LayOut

},
data(){return{
title:'Tasks',
back:'/',


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
--padding-bottom:5px;
--padding-top:5px;
}

</style>