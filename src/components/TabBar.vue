<template>
<ion-segment value="custom">
<ion-segment-button value="custom" @click="$router.push('/transporter/profile')">
<ion-button fill="clear">
<ion-icon slot="start" :icon="business"></ion-icon>
Vehicle
</ion-button>
</ion-segment-button>
<ion-segment-button value="segment"  @click="$router.push('/transporter/driver')">
<ion-button fill="clear" >
<ion-icon slot="start" :icon="car"></ion-icon>
Driver
</ion-button>
</ion-segment-button>
<ion-segment-button value="buttons" @click="$router.push('/transprter/route')">
<ion-button fill="clear" >
<ion-icon slot="start" :icon="location"></ion-icon>
Route
</ion-button>
</ion-segment-button>
</ion-segment>
</template>
<script>
 import {
IonLabel,
IonSegment,
IonSegmentButton,
IonIcon,
IonButton
} from '@ionic/vue';
import { business,chatboxEllipses,heart,statsChart, car,location } from 'ionicons/icons';
export default {
components:{
IonLabel, IonSegment, IonSegmentButton,
IonIcon,IonButton

},

setup(){return{
business,
chatboxEllipses,
heart,
statsChart,
car,
location
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
text-transform: capitalize;
}


</style>