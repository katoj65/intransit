<template>
<ion-footer>
<ion-toolbar>
<ion-segment value="heart">



<ion-segment-button value="call" layout="icon-end">
<ion-label>Withdraw</ion-label>
<ion-icon :icon="exit"></ion-icon>
</ion-segment-button>



<ion-segment-button value="pin" layout="icon-end">
<ion-label>Deposit</ion-label>
<ion-icon :icon="enter"></ion-icon>
</ion-segment-button>


</ion-segment>
</ion-toolbar>
</ion-footer>
</template>

<script lang="ts">
import {IonFooter,  IonToolbar,IonIcon, IonLabel, IonSegment, IonSegmentButton  } from '@ionic/vue';
import { defineComponent } from 'vue';
import { exit,enter } from 'ionicons/icons';

export default defineComponent({
components: { IonFooter,  IonToolbar,
IonIcon,IonLabel, IonSegment, IonSegmentButton ,

},

setup(){return{
enter,exit


}}
});
</script>

<style scoped>
ion-segment-button{
text-transform: capitalize;
}
</style>