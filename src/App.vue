<template>
<ion-app>
<ion-router-outlet/>
</ion-app>
</template>
<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { StatusBar, Style} from '@capacitor/status-bar';

export default{
components:{
IonApp, IonRouterOutlet,

},
methods:{

test(){
//console.log(this.$store.state.session);
},

status(){
// this.$store.commit('loggedOut');
},

//settings
async settings(){
await StatusBar.setBackgroundColor({ color: '#FFFFFF' });
},

async setStatusBarStyleLight(){
await StatusBar.setStyle({ style: Style.Light });
},








},
mounted(){
this.test();
this.status();
this.settings();
this.setStatusBarStyleLight();
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
color:#37474F;
}
.content{
background:#EBEDEF;
color:#37474F;
}
ion-card{
border-radius: 0;
color:#37474F;
}

ion-content{
--background:#EBEDEF;
color:#37474F;
}
.padding{
padding:10px;
}
.border-bottom{
border-bottom:solid 1px #EBEDEF;
}
ion-label{color:#37474F;}

.border{
  border:solid 1px #EBEDEF;
}
</style>