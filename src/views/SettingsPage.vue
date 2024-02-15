<template>
<lay-out :title="title" :back="back">






<ion-item :button="true" v-for="(l,key) in list" :key="key"  lines="none" detail="true" @click="$router.push(l.url)">
<ion-label style="font-size:18px;font-weight;">{{ l.name }} </ion-label>
<ion-note slot="end">
</ion-note>
</ion-item>





<ion-item lines="full" button @click="signOut()">
<ion-label>
Log Out
</ion-label>
</ion-item>







</lay-out>
</template>
<script>
import LayOut from '@/components/LayOut.vue';
import {
IonIcon,
IonItem,
IonLabel,
IonNote,
IonText,

} from '@ionic/vue';
import {time, create, ellipsisHorizontal, ellipsisVertical, helpCircle, search, personCircle, star,
notifications,location
} from 'ionicons/icons';
import LoginController from '@/database/LoginController';

export default {
components:{
LayOut,
IonIcon,
IonItem,
IonLabel,
IonNote,
IonText,


},
data(){return{
title:'Settings',
back:'/',


list:[
{name:'Profile',url:'/user/profile',icon:''},
{name:'Location',url:'/user/profile',icon:''},
{name:'Tasks',url:'/user/profile',icon:''},
{name:'Preferences',url:'/user/profile',icon:''},
{name:'Transactions',url:'/user/profile',icon:''},
{name:'Wallet',url:'/user/profile',icon:''},
{name:'Change Password',url:'/user/profile',icon:''}

]


}},

setup(){return{
create, ellipsisHorizontal, ellipsisVertical,
 helpCircle, search,
personCircle, star,
notifications,location,time
}},



methods:{
signOut(){
const db=new LoginController;
db.signOut().then((res)=>{
this.$router.push('/Login');
}).catch((error)=>{
console.log(error)
});
},













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
</style>