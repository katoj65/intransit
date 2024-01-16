<template>
<ion-button @click="showLoading">Submit</ion-button>
</template>
<script>
import { IonButton, loadingController } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
components: { IonButton },
setup() {
const showLoading = async () => {
const loading = await loadingController.create({
message: 'Dismissing after 3 seconds...',
duration: 3000,
});
loading.present();
};
return { showLoading };
},
});
</script>
