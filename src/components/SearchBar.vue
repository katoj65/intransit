<template>
<form @submit.prevent="submit" style="padding:0px;">
<ion-searchbar placeholder="Search....." v-model="form.search"></ion-searchbar>
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