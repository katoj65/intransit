<template>
<lay-out :title="title">
<ion-item v-for="(l,key) in list" :key="key"  lines="none" class="border-bottom" detail="true" button @click="$router.push(l.url)">
<ion-avatar slot="start">
<img :src="l.icon" style="height:40px;"/>
</ion-avatar>
<ion-label>
<h4>
{{ l.name }}
</h4>
<p color="medium" style="color:#0c3e29;">{{ l.description }} </p>
</ion-label>
</ion-item>
</lay-out>
</template>
<script>
import LayOut from '@/components/LayOut.vue';
import { IonAvatar,IonIcon,
IonNote,IonLabel,
IonItem,
IonInput,
IonButton,

} from '@ionic/vue';
import {
create, ellipsisHorizontal, ellipsisVertical, helpCircle,
location,
notifications,
personCircle,
search,
star,
rainy,
trailSign
} from 'ionicons/icons';

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




},
data(){return{
title:'Services',

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