<template>
<form @submit.prevent="submit" style="padding:0px;">
<ion-searchbar placeholder="Search....." v-model="form.search" class="custom"></ion-searchbar>
</form>
</template>
<script>
import {IonSearchbar } from '@ionic/vue';
export default {
components:{
IonSearchbar
},
data(){return{
form:{
search:'',
}
}},

methods:{
submit(){

}
}

}
</script>
<style scoped>
ion-searchbar.custom {
--background: white;
--color: #fff;
--placeholder-color: #fff;
--icon-color: #fff;
--clear-button-color: #fff;
--border-radius: 4px;
  }
</style>