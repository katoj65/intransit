<template>
  <ion-app>
    <login-page v-if="loginStatus===false"/>
    <ion-router-outlet v-else/>
  </ion-app>
</template>
<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import LoginPage from './views/LoginPage.vue';
export default{
components:{
  IonApp, IonRouterOutlet,
  LoginPage,
},
methods:{

test(){
console.log(this.$store.state);
},

status(){
this.$store.commit('loggedIn');
console.log(this.$store.state.session);
}
},
mounted(){
this.test();
this.status();
},

computed:{
loginStatus(){
return this.$store.state.session;
}
}




}
</script>
