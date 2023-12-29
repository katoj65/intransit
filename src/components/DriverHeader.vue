<template>
<ion-list :inset="false">
<ion-item  lines="none">
<ion-avatar slot="start">
<img src="https://ionicframework.com/docs/img/demos/avatar.svg" />
</ion-avatar>
<ion-label>
<h3 style="font-size:20px;color:white;">
{{ user.names }}
</h3>
<p style="font-size:13px;color:white;">{{ user.role  }} (UBA 933J) </p>
</ion-label>
<ion-note slot="end" style="font-size:12px;color:white;">
Available
</ion-note>
</ion-item>
</ion-list>
</template>
<script>
import {IonAvatar,
IonItem,
IonLabel,
IonList,
IonNote,
IonText,
} from '@ionic/vue';
export default {

components:{
IonAvatar,
IonItem,
IonLabel,
IonList,
IonNote,
IonText,
},

data(){return{
user:{
names:'Joshua Kato',
role:'Driver'
},



}}
}
</script>

<style scoped>
ion-item{
--background: #0c3e29;
--margin:0;
--color:white;
}
ion-list{
--background: #0c3e29;
--margin:0;
--padding:0;
}
</style>