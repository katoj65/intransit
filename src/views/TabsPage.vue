<template>
<ion-page>
<ion-tabs>
<ion-router-outlet></ion-router-outlet>


<ion-tab-bar slot="bottom">
<ion-tab-button tab="tab1" href="/tabs/tab1">
<ion-icon aria-hidden="true" :icon="home" />
<ion-label>Home</ion-label>
</ion-tab-button>



<ion-tab-button tab="tab5" href="/tabs/tab5">
  <ion-icon aria-hidden="true" :icon="car" />
  <ion-label>Transport</ion-label>
  </ion-tab-button>


<ion-tab-button tab="tab2" href="/tabs/tab2">
<ion-icon aria-hidden="true" :icon="statsChart" />
<ion-label>Tasks</ion-label>
</ion-tab-button>



<ion-tab-button tab="tab3" href="/tabs/tab3">
<ion-icon aria-hidden="true" :icon="apps" />
<ion-label>Services</ion-label>
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
import { ellipse, square, triangle,home,wallet,statsChart,search,bag,car,apps } from 'ionicons/icons';

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
apps

}
}





}




</script>
