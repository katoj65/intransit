<template>
<ion-segment value="custom">
<ion-segment-button value="custom">
<ion-button fill="clear">
<ion-icon slot="start" :icon="business"></ion-icon>
Profile
</ion-button>
</ion-segment-button>
<ion-segment-button value="segment">
<ion-button fill="clear">
<ion-icon slot="start" :icon="heart"></ion-icon>
Requests
</ion-button>
</ion-segment-button>
<ion-segment-button value="buttons">
<ion-button fill="clear">
<ion-icon slot="start" :icon="chatboxEllipses"></ion-icon>
Chat
</ion-button>
</ion-segment-button>
</ion-segment>
</template>
<script>
 import {
IonLabel, IonSegment, IonSegmentButton,IonIcon,IonButton


} from '@ionic/vue';
import { business,chatboxEllipses,heart} from 'ionicons/icons';
export default {
components:{
IonLabel, IonSegment, IonSegmentButton,
IonIcon,IonButton

},

setup(){return{
business,chatboxEllipses,heart
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