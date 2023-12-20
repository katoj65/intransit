<template>
<ion-segment value="custom">
<ion-segment-button value="custom" @click="$router.push('/transporter/profile')">
<ion-button fill="clear">
<ion-icon slot="start" :icon="business"></ion-icon>
Profile
</ion-button>
</ion-segment-button>
<ion-segment-button value="segment"  @click="$router.push('/transporter/requests')">
<ion-button fill="clear" >
<ion-icon slot="start" :icon="heart"></ion-icon>
Requests
</ion-button>
</ion-segment-button>
<ion-segment-button value="buttons" @click="$router.push('/transporter/driver/')">
<ion-button fill="clear" >
<ion-icon slot="start" :icon="person"></ion-icon>
Driver
</ion-button>
</ion-segment-button>
</ion-segment>
</template>
<script>
 import {
IonLabel, IonSegment, IonSegmentButton,IonIcon,IonButton


} from '@ionic/vue';
import { business,chatboxEllipses,heart,person} from 'ionicons/icons';
export default {
components:{
IonLabel, IonSegment, IonSegmentButton,
IonIcon,IonButton

},

setup(){return{
business,chatboxEllipses,heart,person
}}
}
</script>

<style scoped>
ion-segment-button{
--color:white;
}
ion-button{
--color:white;
--background:#0c3e29;
box-shadow:none;
}


</style>