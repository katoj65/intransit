<template>
<div>
<ion-button expand="block" fill="clear" type="submit" v-if="isLoading==false">{{ title }} </ion-button>
<ion-button expand="block" fill="clear" disabled v-else><ion-spinner></ion-spinner></ion-button>
</div>
</template>
<script>
 import { IonButton, IonSpinner } from '@ionic/vue';
export default {
components:{ IonButton, IonSpinner },
props:{
isLoading:{},
title:{}
}

}
</script>
<style scoped>
ion-button{
--border-radius:5px;
--background:#34495E;
margin:0;
margin-bottom:10px;
--padding:15px;
color:white;

}
</style>