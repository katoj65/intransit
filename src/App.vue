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
await StatusBar.setBackgroundColor({ color: '#F0F3F4' });
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
background:#F0F3F4;
color:#37474F;
}
ion-card{
border-radius: 0;
color:#37474F;
}

ion-content{
--background:#F0F3F4;
color:#37474F;
}
.padding{
padding:10px;
}
.border-bottom{
  border-bottom: solid 1px #D6DBDF;
}
ion-label{
color:#37474F;
}

.border{
  border: solid 1px #D6DBDF;
}
.border-top{
  border-top: solid 1px #D6DBDF;
}

ion-input{
  --background: #EEEEEE;
}




ion-toolbar {
  --background:#F0F3F4;
  --color:black;
  --min-height: 50px;
  --padding-top: 10px;
  --padding-bottom:0px;
  }
  ion-searchbar{
  --background:#EBEDEF;
  --box-shadow: none;
  --border-radius:20px;
  font-size: 14px;
  }
  ion-header{
  border-bottom:none;
  }
  .border-bottom-light{
  border-bottom:solid 1px #ECF0F1;
  }

</style>