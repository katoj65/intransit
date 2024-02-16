<template>
<ion-app>
<ion-router-outlet/>
</ion-app>
</template>
<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { StatusBar, Style} from '@capacitor/status-bar';
import LoginController from './database/LoginController.js';
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
await StatusBar.setBackgroundColor({ color: '#148F77' });
},
async setStatusBarStyleLight(){
await StatusBar.setStyle({ style: Style.Dark });
},

//
auth_session(){
const db=new LoginController;
this.$store.state.session=true;
db.user_session().then((res)=>{
if(res.data.error==null){
// const user=res.data.session.user.user_metadata;
this.$store.commit('hasAccess');
this.$router.push('/');
}else{
console.log(res.data.error);
}
}).catch((error)=>{
console.log(error);
});
}







},
mounted(){
this.test();
this.status();
this.settings();
this.setStatusBarStyleLight();
this.auth_session();
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