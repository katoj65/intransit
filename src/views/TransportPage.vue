<template>
<lay-out :title="title">

<div style="margin:10px;">

<ion-item v-for="n in 20" :key="n"  lines="none">
<ion-avatar aria-hidden="true" slot="start">
<img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
</ion-avatar>
<ion-label>
<h2>
UBA 933J
</h2>
<p>
<ion-icon :ios="location" :md="location" style="color:#0c3e29;"></ion-icon>  Kampala - Masaka.
</p>
<p color="medium" style="color:#0c3e29;">Has reached Kamengo</p>
</ion-label>
<ion-note slot="end">
10:00 PM<br/>
<span style="float:right;">
<ion-chip>
 <ion-icon :ios="send" :md="send"></ion-icon>
</ion-chip>
</span>
</ion-note>
</ion-item>





</div>


</lay-out>
</template>
<script>
import LayOut from '@/components/LayOut.vue';
import { IonIcon,IonAvatar,IonNote,IonLabel,IonItem,IonChip} from '@ionic/vue';
import {time, create, ellipsisHorizontal, ellipsisVertical, helpCircle, search, personCircle, star,
notifications,location,send
} from 'ionicons/icons';

export default {
components:{
LayOut,
IonIcon,
IonAvatar,
IonNote,
IonLabel,
IonItem,
IonChip



},
data(){return{
title:'Transporters',

}},

setup(){return{
create, ellipsisHorizontal, ellipsisVertical, helpCircle, search, personCircle, star,
notifications,location,time,send
}},



methods:{


}
}
</script>

<style scoped>
ion-card{
margin:0;
box-shadow:none;
padding:0;

}
ion-item{
margin-bottom:1px;
}

ion-chip{
background: none;
border:solid thin #D7DBDD;
border-radius: 5px;
margin-top:10px;
}
</style>