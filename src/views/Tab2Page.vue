<template>
<lay-out :title="title">

<ion-list :inset="false">
<ion-item :button="true" v-for="(i,key) in items" :key="key" lines="none">
<ion-icon  slot="start" :icon="listCircle" size="large"></ion-icon>
<ion-label>{{ i.title }} </ion-label>
<ion-note slot="end" style="font-size:15px;">
{{ i.value }}
<ion-icon :icon="addOutline" v-if="i.option!=''"></ion-icon>
</ion-note>
</ion-item>
</ion-list>

</lay-out>
</template>
<script>

import { time, listCircle, addCircle, addOutline} from 'ionicons/icons';
import {
IonItem,
IonLabel,
IonList,
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
IonList,
IonNote,
IonText,
IonButton,
IonIcon,
LayOut

},
data(){return{
title:'Tasks',

items:[

{title:'Tasks',value:'4 Pending',icon:'',option:''},
{title:'Appointments',value:5,icon:'',option:'true'},
{title:'Delivery Services',value:'',icon:'',option:'true'},
{title:'Report',value:'',icon:'',option:''},
{title:'Events',value:'',icon:'',option:''},
{title:'Timeline',value:'',icon:'',option:''},
{title:'Location',value:'',icon:'',option:''},
{title:'Payment Log',value:'',icon:'',option:''},

],

}},



methods:{




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
ion-item.userheader{
--background:#EBEDEF;
--padding-bottom:5px;
--padding-top:5px;
}

</style>