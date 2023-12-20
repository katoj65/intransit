<template>
  <ion-fab slot="fixed" vertical="bottom" horizontal="end" :edge="false" class="ion-padding" style="margin-bottom:50px;">
    <ion-fab-button>
      <ion-icon :icon="add"></ion-icon>
    </ion-fab-button>
    <ion-fab-list side="top">
      <ion-fab-button>
        <ion-icon :icon="document"></ion-icon>
      </ion-fab-button>
      <ion-fab-button>
        <ion-icon :icon="colorPalette"></ion-icon>
      </ion-fab-button>
      <ion-fab-button>
        <ion-icon :icon="globe"></ion-icon>
      </ion-fab-button>
    </ion-fab-list>
  </ion-fab>
</template>

<script lang="ts">
  import { IonFab, IonFabButton, IonFabList, IonIcon } from '@ionic/vue';
  import { add, colorPalette, document, globe } from 'ionicons/icons';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonFab, IonFabButton, IonFabList, IonIcon },
    setup() {
      return { add, colorPalette, document, globe };
    },
  });
</script>

<style>
  ion-fab-button::part(native) {
    background-color:#0c3e29;
    border-radius: 15px;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    color: white;
  }

  ion-fab-button::part(native):hover::after {
    background-color: #a3e681;
  }

  ion-fab-button::part(native):active::after {
    background-color: #87d361;
  }
</style>