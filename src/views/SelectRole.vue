<template>
<ion-page>
<ion-content class="ion-padding">
<div style="padding:50px;padding-bottom:50px;">
<img src="/logo2.png" style="width:100%"/>
</div>
<h4>Welcome <span style="font-weight:bold;"> {{ user.names }}</span> </h4>
<p style="text-align:center;">Tell us how you want InTransit to serve you.</p>



<ion-card>

<ion-card-content>
<ion-list :inset="false">
<ion-item v-for="(role,key) in roles" :key="key" lines="none" @click="$router.push('/account/complete-profile/'+role.role)">
<ion-thumbnail slot="start">
<img alt="Silhouette of mountains" :src="'/icons/'+role.icon" />
</ion-thumbnail>
<ion-label style="font-weight:bold;font-size:20px;">
<h3 style="font-weight:bold;font-size:20px;">{{ role.title }}</h3>
<p style="color:#D5DBDB;font-weight:normal;">{{ role.description }} </p>
</ion-label>
</ion-item>

</ion-list>
</ion-card-content>
</ion-card>





</ion-content>
</ion-page>
</template>
<script>
import {IonPage, IonContent, IonCard, IonCardContent,  IonCardTitle, IonList, IonItem, IonThumbnail, IonLabel, } from '@ionic/vue';
export default {
components:{IonPage, IonContent,IonCard, IonCardContent, IonCardTitle, IonList, IonItem, IonThumbnail, IonLabel  },
data(){return{
user:{names:'Joshua Kato',tel:'0752567534',email:'katoj65@gmail.com'},
roles:[
{title:'I need transportation',description:'Anyone who needs their goods transported.',icon:'cargo.png',role:'user'},
{title:'Iam a transport',description:'Drivers, truck owners etc.',icon:'truck.png',role:'transporter'},
{title:'Iam a transport agent',description:'Park manager, dealers, fleet manager etc.',icon:'agent.png',role:'agent'},
]


}},
methods:{

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
border:solid 2px white;
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