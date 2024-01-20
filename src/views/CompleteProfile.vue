<template>
<ion-page>
<ion-content class="ion-padding">
<div style="padding:50px;padding-bottom:50px;">
<img src="/logo2.png" style="width:100%"/>
</div>
<h4> <span style="font-weight:bold;"> {{ user.names }}</span> </h4>
<p style="text-align:center;">Complete your profile.</p>
<ion-card>
<ion-card-content style="padding:0;">
<create-user-profile v-if="user_details.role=='user'"/>
<create-agent-profile v-if="user_details.role=='agent'"/>
<create-transporter-profile v-if="user_details.role=='transporter'"/>
</ion-card-content>
</ion-card>
</ion-content>
</ion-page>
</template>
<script>
import { IonCard, IonCardContent, IonCardTitle, IonContent, IonPage,} from '@ionic/vue';
import CreateUserProfile from '@/forms/CreateUserProfile.vue';
import CreateTransporterProfile from '@/forms/CreateTransporterProfile.vue';
import CreateAgentProfile from '@/forms/CreateAgentProfile.vue';
export default {
components:{IonPage, IonContent,IonCard, IonCardContent, IonCardTitle,
CreateUserProfile,CreateTransporterProfile,CreateAgentProfile,


},
data(){return{
user:{names:'Joshua Kato',tel:'0752567534',email:'katoj65@gmail.com'},



}},
methods:{



},


computed:{
user_details(){
return {user:this.user,role:this.$route.params.tag}
},



}



}
</script>
<style scoped>

ion-content {
    --background:#0c3e29;
    --color: #fff;
  }

h4{
text-align: center;
}
ion-item {
    --padding-start: 0;
  }

  ion-card{
margin:0;
  }

ion-card{
--background:#0c3e29;
background:#0c3e29;
margin:0;
padding:0;
box-shadow:none;
border:none;
border-radius:0;
}
ion-list{
--background: #0c3e29;
background:#0c3e29;
}
ion-item{
background: #0c3e29;
}


ion-item::part(native) {
    background: #0c3e29;
    color: #fff;
    margin-bottom:20px;

}
</style>