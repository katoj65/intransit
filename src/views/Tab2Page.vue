<template>
<lay-out :title="title">
<div>
<ion-item :button="true" v-for="(i,key) in items" :key="key" lines="none">
<ion-icon  slot="start" :icon="location"></ion-icon>
<ion-label>
<h2>{{ i.title }}</h2>
<p>
{{ i.location }}
</p>
</ion-label>
<ion-note slot="end" style="text-align:right;">
{{ i.number }}
 <div>
{{ i.time }}
 </div>
</ion-note>
</ion-item>

</div>
</lay-out>
</template>
<script>

import { time, listCircle, addCircle, addOutline, location} from 'ionicons/icons';
import {
IonItem,
IonLabel,

IonNote,
IonText,
IonButton,
IonIcon
} from '@ionic/vue';
import LayOut from '@/components/LayOut.vue';
export default {
components:{
IonItem,
IonLabel,
IonNote,
IonText,
IonButton,
IonIcon,
LayOut

},
data(){return{
title:'Activities',

items:[

{title:'Medicine',location:'Masajja -Busabala',number:'UBA 993 J',time:'12:00 AM'},
{title:'Food',location:'Masajja -Busabala',number:'UBA 993 J',time:'12:00 AM'},
{title:'Fertilizers',location:'Masajja -Busabala',number:'UBA 993 J',time:'12:00 AM'},
{title:'Marrum',location:'Masajja -Busabala',number:'UBA 993 J',time:'12:00 AM'},
{title:'Excavator',location:'Masajja -Busabala',number:'UBA 993 J',time:'12:00 AM'},
{title:'Cement',location:'Masajja -Busabala',number:'UBA 993 J',time:'12:00 AM'},
{title:'Soil',location:'Masajja -Busabala',number:'UBA 993 J',time:'12:00 AM'},



],

}},



methods:{




},


setup(){return{
time,listCircle,addCircle,addOutline,location
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


ion-button{
color:#0c3e29;
--background::#EBEDEF;
box-shadow:none;
border:solid 2px #0c3e29;
border-radius:5px;


}
ion-item{
margin-bottom:1px;
}

</style>