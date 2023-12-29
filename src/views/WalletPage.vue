<template>
<lay-out :title="title" :back="back" class="content">
<template #footer>
<wallet-footer/>
</template>




<ion-card>
<ion-card-header>
<ion-card-title>Balance </ion-card-title>
<ion-card-subtitle style="font-size:18px;">Shs. {{ balance }} </ion-card-subtitle>
</ion-card-header>
<ion-card-content style="padding:0;padding-bottom:20px;">

<ion-item lines="none">
<ion-icon :icon="wallet" slot="start"></ion-icon>
<ion-label>

Wallet Address</ion-label>
<ion-note slot="end">
098765357
</ion-note>
</ion-item>
</ion-card-content>
</ion-card>






<div style="margin-top:1px;">

<ion-item button detail="true" v-for="(l,key) in list" :key="key" lines="none">
<ion-label>
<h3>{{ l.title }} </h3>
</ion-label>
</ion-item>
</div>









</lay-out>
</template>
<script>
import WalletFooter from '@/components/WalletFooter.vue';
import LayOut from '@/components/LayOut.vue';
import {

IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
IonItem, IonLabel, IonNote,IonIcon

} from '@ionic/vue';
import {
wallet
} from 'ionicons/icons';

export default {
components:{
LayOut,
IonButton, IonCard, IonCardContent,
IonCardHeader, IonCardSubtitle, IonCardTitle,
WalletFooter,IonItem, IonLabel, IonNote,
IonIcon



},
data(){return{
title:'Wallet',
back:'/',
balance:2500000,
address:'',
list:[
{title:'Make Payments',icon:''},
{title:'Transfer Funds',icon:''},
{title:'Transactions',icon:''}


],



}},

setup(){return{
wallet
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

ion-button{
color:#0c3e29;;
}

ion-card{
box-shadow:none;
}

ion-item{
margin-bottom:1px;
border-radius:0px;
}


</style>