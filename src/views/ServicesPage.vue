<template>
<lay-out :title="title" :back="back">
<div style="margin:5px;border-bottom:none;" v-if="isLoading==true" class="border">
<div v-if="row.length>0">
<ion-item v-for="(l,key) in row" :key="key"  lines="none" class="border-bottom" detail="true" button @click="$router.push('/service/'+l.id+'/category')">
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
import {
create, ellipsisHorizontal, ellipsisVertical, helpCircle,
location,
notifications,
personCircle,
rainy,
search,
star,
trailSign
} from 'ionicons/icons';
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

list:[
{name:'Weather',description:'',icon:'/icons/weather.png',url:'/weather/user'},
{name:'Traffic',description:'',icon:'/icons/traffic.png',url:'/weather/user'},
{name:'Fuel Prices',description:'',icon:'/icons/fuel.png',url:'/weather/user'},
{name:'Mechanics',description:'',icon:'/icons/mechanic.png',url:'/weather/user'},
{name:'Garage',description:'',icon:'/icons/garage.png',url:'/weather/user'},
{name:'Washing Bay',description:'',icon:'/icons/washingbay.png',url:'/weather/user'},
{name:'Night Parking',description:'',icon:'/icons/parking.png',url:'/weather/user'},
{name:'Spare Parts',description:'',icon:'/icons/spare.png',url:'/weather/user'},
{name:'Breakdown/ Towing',description:'',icon:'/icons/tow.png',url:'/weather/user'},

],


}},

setup(){return{
create, ellipsisHorizontal, ellipsisVertical, helpCircle, search, personCircle, star,
notifications,location,rainy,trailSign
}},






//methods
methods:{
services(){
let db=new ServiceConteroller;
db.get_services().then(res=>{
this.isLoading=true;
this.row=res.data;
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
}

ion-button{
--background:#0c3e29;
border:solid 2px white;
border-radius:5px;
margin:5px;
margin-top:0;
}

ion-avatar{
--border-radius: 0;
}


</style>