<template>
<ion-segment color="light">
<ion-segment-button value="home">
<ion-icon :icon="time"></ion-icon>
</ion-segment-button>
<ion-segment-button value="home">
<ion-icon :icon="time"></ion-icon>
</ion-segment-button>
<ion-segment-button value="home">
<ion-icon :icon="time"></ion-icon>
</ion-segment-button>
<ion-segment-button value="home">
  <ion-icon :icon="time"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="home">
    <ion-icon :icon="time"></ion-icon>
    </ion-segment-button>
<!-- <ion-segment-button value="heart">
Services
</ion-segment-button> -->
</ion-segment>
</template>

<script lang="ts">
import { IonSegment, IonSegmentButton,IonIcon } from '@ionic/vue';
import { chatbox, location, time } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
components: {  IonSegment, IonSegmentButton,IonIcon },
setup() {
return {
location,
time,
chatbox

};
},
});
</script>

<style scoped>
ionic-icon.menu{
 --color:#0c3e29
}

ion-segment{
padding:5px;
padding-top:3px;
padding-bottom:3px;
}


ion-segment-button{
border-radius:5px;
padding:0px;
background:white;
text-transform: capitalize;
margin:2px;
margin-top:3px;
margin-bottom:0;
--border:solid thin #D6DBDF;

}

ion-segment-button::part(indicator-background) {
  background:white;
}

/* Material Design styles */
ion-segment-button.md::part(native) {
  color: #000;
}

.segment-button-checked.md::part(native) {
  color: #08a391;
}

ion-segment-button.md::part(indicator-background) {
  height: 4px;
}

/* iOS styles */
ion-segment-button.ios::part(native) {
  color: #08a391;
}

.segment-button-checked.ios::part(native) {
  color: #fff;
}

ion-segment-button.ios::part(indicator-background) {
  border-radius: 0px;
}
</style>