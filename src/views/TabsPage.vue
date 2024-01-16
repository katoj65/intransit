<template>
<ion-page>
<ion-tabs>
<ion-router-outlet></ion-router-outlet>


<ion-tab-bar slot="bottom">
<ion-tab-button tab="tab1" href="/tabs/tab1">
<ion-icon aria-hidden="true" :icon="home" />
<ion-label>Home</ion-label>
</ion-tab-button>



<ion-tab-button tab="tab2" href="/tabs/tab2">
  <ion-icon aria-hidden="true" :icon="statsChart" />
  <ion-label>Activity</ion-label>
  </ion-tab-button>


<ion-tab-button tab="tab5" href="/tabs/tab5">
  <ion-icon aria-hidden="true" :icon="calendar" />
  <ion-label>Appointment</ion-label>
  </ion-tab-button>






<ion-tab-button tab="tab3" href="/messages">
<ion-icon aria-hidden="true" :icon="mail" />
<ion-label>Message</ion-label>
</ion-tab-button>


<ion-tab-button tab="tab4" href="/wallet/user">
  <ion-icon aria-hidden="true" :icon="wallet" />
  <ion-label>Wallet</ion-label>
  </ion-tab-button>



</ion-tab-bar>
</ion-tabs>
</ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle,home,wallet,statsChart,search,bag,car,apps,calendar,mail } from 'ionicons/icons';

export default{
components:{
IonTabBar, IonTabButton, IonTabs,
IonLabel, IonIcon, IonPage,
IonRouterOutlet,


},
setup(){
return{
ellipse,
square,
triangle,
home,
wallet,
statsChart,
search,
bag,
car,
apps,
calendar,
mail

}
}





}




</script>
<style scoped>
ion-tabs{
background:#F0F3F4;
}
ion-tab-bar{
--background:#F0F3F4;
border-bottom: none;
box-shadow:5px 5px 5px 7px #D6DBDF;

}
</style>