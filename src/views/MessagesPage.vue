<template>
<lay-out :title="title" :back="back">
<skeleton-component v-if="isLoading==true" style="margin:30px;"/>
<div style="margin:10px;" v-else>


<div v-if="row.length>0">
<ion-item v-for="(l,key) in row" :key="key" lines="none"  button @click="$router.push('/message/user')">
<ion-avatar slot="start">
<img src="https://ionicframework.com/docs/img/demos/avatar.svg"/>
</ion-avatar>
<ion-label class="ion-text-nowrap">
<div>Joshua Kato
<span style="float:right;font-size:13px;color:silver;">
{{ l.created_at.split('-',1).join('') }}
</span>
</div>
<p>
{{ l.message }}
</p>
</ion-label>
</ion-item>
</div>
<div v-else>No messages</div>



</div>
</lay-out>
</template>
<script>

import { addCircle, addOutline, listCircle, time, } from 'ionicons/icons';
import { IonItem, IonLabel, IonAvatar } from '@ionic/vue';
import LayOut from '@/components/LayOut.vue';
import MessageController from '@/database/MessageController.js';
import SkeletonComponent from '@/components/SkeletonComponent.vue';
export default {
components:{
LayOut,
IonItem,
IonLabel,
IonAvatar,
SkeletonComponent,
},
data(){return{
title:'Messages',
back:'/',
row:[],
error:null,
isLoading:false,



}},



methods:{
message(){
this.isLoading=true;
const id=1;
const db=new MessageController;
db.user_messages(id).then(res=>{
if(res.status==200){
this.row=res.data;
this.isLoading=false;
}else{
error=res.error;
}
}).catch(error=>{console.log(error)});
}

},





mounted(){
this.message();
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
ion-item{
--background:white;
--padding-bottom:5px;
--padding-top:5px;
margin-bottom:1px;
}

</style>