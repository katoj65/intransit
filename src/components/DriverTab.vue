<template>
<ion-segment value="home" color="light">
<ion-segment-button value="home">
<ion-icon :icon="time" class="menu"  size="large"></ion-icon>
</ion-segment-button>
<ion-segment-button value="heart">
<ion-icon :icon="location" class="menu" size="large" ></ion-icon>
</ion-segment-button>
<ion-segment-button value="pin">
<ion-icon :icon="chatbox" class="menu" size="large"></ion-icon>
</ion-segment-button>
</ion-segment>
</template>

<script lang="ts">
  import { IonIcon, IonSegment, IonSegmentButton } from '@ionic/vue';
import { location,time,chatbox } from 'ionicons/icons';
import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonIcon, IonSegment, IonSegmentButton },
    setup() {
      return {
        location,time,chatbox

      };
    },
  });
</script>

<style scoped>
ionic-icon.menu{
 --color:#0c3e29
}

ion-segment-button{
border-radius:10px;
padding:10px;
margin:10px;
background:#EBEDEF;
color:#0c3e29;
}
</style>