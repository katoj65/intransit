<template>
<user-contact-layout :back="back" :avatar="avatar" :title="title" :subtitle="subtitle">



<div v-for="(m,key) in 30" :key="key" style="margin:10px;" >
<ion-chip style="width:70%;" class="sender">
    Avatars are circular components that usually wrap an image or icon. They can
</ion-chip>

<ion-chip style="width:70%;float:right;" class="receiver">
    Avatars are circular components that usually wrap an image or icon. They can
</ion-chip>
</div>










<template #footer>
<ion-footer>
<ion-toolbar>
<ion-row >
<ion-col size="10" class="col1">
<ion-textarea placeholder="Type message"></ion-textarea>
</ion-col>
<ion-col size="2" class="col2">
<ion-button fill="clear">
<ion-icon :icon="send">
</ion-icon>
</ion-button>
</ion-col>
</ion-row>
</ion-toolbar>
</ion-footer>
</template>
</user-contact-layout>
</template>
<script>
import { send } from 'ionicons/icons';
import { IonChip,IonFooter,IonHeader,IonCol,IonRow,IonTextarea,IonToolbar,IonButton,IonIcon } from '@ionic/vue';
import UserContactLayout from '@/components/UserContactLayout.vue';
export default {
components:{
UserContactLayout,
IonChip,
IonFooter,
IonHeader,
IonCol,
IonRow,
IonTextarea,
IonToolbar,
IonButton,
IonIcon

},
data(){return{
title:'Joshua Kato',
back:'/messages/view',
avatar:true,
subtitle:'Online',
messages:[
{content:'the message goes here in the message component',date:'12/12/24'}



]


}},

methods:{

},
setup(){return{
send
}}

}
</script>
<style scoped>
ion-textarea{
padding-left:5px;
padding-right:5px;
border-radius: 5px;
height:20px;
overflow:auto;
background:#E5E7E9;
}
ion-button{
--border-radius: 100px;
padding:0;
margin:0;
}

ion-chip.sender{
border-radius: 20px 20px 20px 0px;
}
ion-chip.receiver{
border-radius: 20px 20px 0px 20px;
background: #F2F3F4;
}
ion-col.col1{
padding:0;
padding-top:2px;
padding-left:5px;

}
</style>