<template>
<lay-out :title="title" :back="back">
<div style="margin:10px;border-bottom:none;" v-if="isLoading==false">
<div v-if="error==null">
<div v-if="row.length>0">
<ion-item v-for="(l,key) in row" :key="key"  lines="none" detail="true" button @click="$router.push('/service/'+l.id+'/category')">
<!-- <ion-avatar slot="start">
<img :src="l.icon" style="height:40px;"/>
</ion-avatar> -->
<ion-label>
<h4>
{{ l.name }}
</h4>
</ion-label>
</ion-item>
</div>
<div v-else style="text-align:center;">
No records
</div>
</div>
<div v-else style="padding:30px;text-align:center;">
{{ error }}
</div>
</div>
<skeleton-component v-else style="margin:20px;"/>
</lay-out>
</template>

<script>
import ServiceConteroller from '@/database/ServiceController.js';
import LayOut from '@/components/LayOut.vue';
import {
IonAvatar,
IonButton,
IonIcon,
IonInput,
IonItem,
IonLabel,
IonNote,


} from '@ionic/vue';
import {create,send } from 'ionicons/icons';
import SkeletonComponent from '@/components/SkeletonComponent.vue';

export default {
components:{
LayOut,
IonIcon,
IonAvatar,
IonNote,
IonLabel,
IonItem,
IonInput,
IonButton,
SkeletonComponent
},

data(){return{
title:'Services',
back:'/',
row:[],
isLoading:false,
error:null,

}},

setup(){return{
create,send
}},






//methods
methods:{
services(){
this.isLoading=true;
let db=new ServiceConteroller;
db.get_services().then(res=>{
this.isLoading=false;
if(res.error==null){
this.row=res.data;
}else{
this.error=res.error.message;
}
}).catch(error=>{
console.log(error);
});
}
},



mounted(){
this.services();
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
padding-top:0;
margin:0;
margin-bottom:1px;
}

ion-button{

}

ion-avatar{
--border-radius: 0;
}


</style>