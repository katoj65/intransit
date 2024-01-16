<template>
<div>
<ion-skeleton-text :animated="true" style="width: 20%"></ion-skeleton-text>
<ion-skeleton-text :animated="true" style="width: 40%"></ion-skeleton-text>
<ion-skeleton-text :animated="true" style="width: 60%"></ion-skeleton-text>
</div>
</template>

<script>
import { IonSkeletonText, } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
components: {
IonSkeletonText,
},
});
</script>
<style scoped>
ion-skeleton-text{
margin-bottom:3px;
border-radius: 5px;
height:10px;
}
</style>
