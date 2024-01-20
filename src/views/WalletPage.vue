<template>
<lay-out :title="title" :back="back">
<template #footer>
<wallet-footer/>
</template>



<Skeleton-component v-if="isLoading==true"/>
<ion-card v-else>
<ion-card-header>
<ion-card-title>Balance </ion-card-title>
<ion-card-subtitle style="font-size:18px;">Shs. {{ balance }} </ion-card-subtitle>
</ion-card-header>
<ion-card-content style="padding:0;padding-bottom:20px;">
<ion-item lines="none">
<ion-label>
Wallet Address</ion-label>
<ion-note slot="end" style="font-size:16px;">
{{ address}}
</ion-note>
</ion-item>
</ion-card-content>
</ion-card>
<div></div>



<div style="margin:10px;" >
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
import WalletController from '@/database/WalletController.js';
import {

IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
IonItem, IonLabel, IonNote

} from '@ionic/vue';
import {
wallet
} from 'ionicons/icons';
import SkeletonComponent from '@/components/SkeletonComponent.vue';

export default {
components:{
LayOut,
IonButton, IonCard, IonCardContent,
IonCardHeader, IonCardSubtitle, IonCardTitle,
WalletFooter,IonItem, IonLabel, IonNote,
SkeletonComponent




},
data(){return{
title:'Wallet',
back:'/',
isLoading:false,
error:null,
balance:null,
address:null,
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
wallet_row(){
this.isLoading=true;
const id=1;
const db=new WalletController;
db.balance(id).then(res=>{
this.isLoading=false;
if(res.status==200){
res.data.forEach(el=>{
this.balance=el.amount;
this.address=el.wallet_address;
});
}else{
this.error=this.res.error;
}
}).catch(error=>{console.log(error)});
},
},


mounted(){
this.wallet_row();
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