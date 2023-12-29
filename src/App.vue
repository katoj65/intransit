<template>
<ion-app>
<ion-router-outlet/>
</ion-app>
</template>
<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';

import { StatusBar} from '@capacitor/status-bar';

export default{
components:{
  IonApp, IonRouterOutlet,

},
methods:{

test(){
console.log(this.$store.state.session);
},

status(){
// this.$store.commit('loggedOut');
},

//settings
async settings(){
await StatusBar.setBackgroundColor({ color: '#0c3e29' });
}






},
mounted(){
this.test();
this.status();
this.settings();

},

computed:{
loginStatus(){
console.log(this.$store.state.session);
return this.$store.state.session;
}
}




}
</script>
<style>
ion-button{
box-shadow:none;
text-transform: capitalize;
}
.content{
background:#EBEDEF;
}
ion-card{
border-radius: 0;
}

ion-content{
--background:#EBEDEF;
}
.padding{
padding:10px;
}
.border-bottom{
border-bottom:solid 1px #EBEDEF;
}
</style>