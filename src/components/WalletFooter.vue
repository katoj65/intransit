<template>
<ion-footer>
<ion-toolbar>
<ion-segment value="heart">



<ion-segment-button value="call" layout="icon-end" @click="isOpen=true">
<ion-label>Withdraw</ion-label>
<ion-icon :icon="exit"></ion-icon>
</ion-segment-button>



<ion-segment-button value="pin" layout="icon-end" @click="isOpen=true">
<ion-label>Deposit</ion-label>
<ion-icon :icon="enter"></ion-icon>
</ion-segment-button>


</ion-segment>
</ion-toolbar>
</ion-footer>








<ion-modal :is-open="isOpen" :initial-breakpoint="1" :breakpoints="[0, 1]"   @didDismiss="isOpen=false">
<ion-header>
<ion-toolbar>
<ion-title>Modal</ion-title>
<ion-buttons slot="end">
<ion-button @click="isOpen=false">Close</ion-button>
</ion-buttons>
</ion-toolbar>
</ion-header>
<ion-content class="ion-padding block">
<p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus quos
reprehenderit. Veniam, molestias quos, dolorum consequuntur nisi deserunt omnis id illo sit cum qui. Eaque,
dicta.
</p>
</ion-content>
</ion-modal>








</template>

<script>
import {IonFooter,  IonToolbar,IonIcon, IonLabel, IonSegment,IonSegmentButton,
IonModal, IonHeader, IonContent, IonTitle,IonButtons,IonInput,IonButton

} from '@ionic/vue';

import { exit,enter } from 'ionicons/icons';

export default{
components: { IonFooter,  IonToolbar,
IonIcon,IonLabel, IonSegment, IonSegmentButton ,
IonModal, IonHeader, IonContent, IonTitle,
IonButtons,IonInput,IonButton

},

data(){return{
isOpen:false,
form_deposit:{
amount:'',
id:'',
},
form_withdraw:{
amount:'',
id:'',
}



}},


setup(){return{
enter,exit


}}
};
</script>

<style scoped>
ion-segment-button{
text-transform: capitalize;
}
.block {
width: 100%;
height: 50%;

}

ion-modal {
--height: auto;
}
</style>