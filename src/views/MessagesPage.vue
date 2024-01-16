<template>
<lay-out :title="title" :back="back">
<div class="border" style="margin:5px;">
<ion-item v-for="(m,key) in 30" :key="key" lines="none"  button @click="$router.push('/message/user')">
<ion-avatar slot="start">
<img src="https://ionicframework.com/docs/img/demos/avatar.svg"/>
</ion-avatar>
<ion-label class="ion-text-nowrap">
<div>Joshua Kato
<span style="float:right;font-size:13px;color:silver;">
12/12/24
</span>
</div>
<p>
Multi-line text that should ellipsis when it is too long to fit on one line. Lorem ipsum dolor sit amet,
consectetur adipiscing elit.
</p>
</ion-label>
</ion-item>


</div>
</lay-out>
</template>
<script>

import { addCircle, addOutline, listCircle, time, } from 'ionicons/icons';
import { IonItem, IonLabel, IonAvatar } from '@ionic/vue';
import LayOut from '@/components/LayOut.vue';
export default {
components:{
LayOut,
IonItem,
IonLabel,
IonAvatar
},
data(){return{
title:'Messages',
back:'/'



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
ion-item.userheader{
--background:#EBEDEF;
--padding-bottom:5px;
--padding-top:5px;
}

</style>