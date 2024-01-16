<template>
<transporter-layout :title="title" :back="back" :subtitle="subtitle" :avatar="true">
<template #footer>
<driver-footer/>
</template>
</transporter-layout>
</template>
<script>
import TransporterLayout from '@/components/TransporterLayout.vue';
import DriverFooter from '@/components/DriverFooter.vue';
import TabBar from '@/components/TabBar.vue';
import { time} from 'ionicons/icons';
import { IonCard, IonCardContent,IonAvatar,
IonItem,
IonLabel,
IonList,
IonNote,
IonText,
IonButton,
IonIcon,
} from '@ionic/vue';
export default {
components:{

TransporterLayout,
TabBar,
IonCard,
IonCardContent,
IonAvatar,
IonItem,
IonLabel,
IonList,
IonNote,
IonText,
IonButton,
IonIcon,
DriverFooter

},
data(){return{
title:'Joshua Kato',
subtitle:'Driver - UBA 933J',
back:'/transporter/profile',
user:{
names:'Joshua Kato',
role:'Driver',
number:'UBA 933J'
},



list:[

{title:'Gender',value:'Male'},
{title:'Address',value:'Masajja Zone A'},
{title:'Designation',value:'Driver'},
{title:'ID Number',value:'# 123497'},
{title:'Stage',value:'Masajja Kivule stage'},
{title:'Driving Permit',value:'20-12-2024'},


],

}},



methods:{




},


setup(){return{
time
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

}
ion-item.userheader{
--background:#EBEDEF;
--padding-bottom:5px;
--padding-top:5px;
}

</style>