<template>
<ion-page>
<ion-header class="ion-no-border" style="background:white;">
<ion-toolbar class="ion-no-border" >
<ion-buttons slot="start">
<ion-back-button default-href="#" v-if="back!=null" @click="$router.push(back)"></ion-back-button>
</ion-buttons>



<ion-buttons slot="end">
<!-- <ion-button @click="$router.push('/my-location')">
<ion-icon :ios="location" :md="location"></ion-icon>
</ion-button>

<ion-button @click="$router.push('/notifications')">
<ion-icon :ios="notifications" :md="notifications"></ion-icon>
</ion-button> -->

<ion-button @click="$router.push('/settings')">
<ion-icon :ios="ellipsisHorizontal" :md="ellipsisVertical"></ion-icon>
</ion-button>
</ion-buttons>
<ion-title>
{{ title }}
</ion-title>
</ion-toolbar>
<slot class="ion-padding" name="subtitle"></slot>
</ion-header>
<ion-content :fullscreen="true">
<ion-header collapse="condense" class="ion-no-border">
<ion-toolbar>
<ion-title size="large">{{ title }} </ion-title>
</ion-toolbar>
</ion-header>




<slot/>




</ion-content>
<slot name="footer"/>
</ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
IonBackButton, IonButton, IonButtons, IonIcon,
IonSearchbar
} from '@ionic/vue';
import { create, ellipsisHorizontal, ellipsisVertical, helpCircle, search, personCircle, star,
notifications,location
} from 'ionicons/icons';


export default{
components:{IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
IonBackButton, IonButton, IonButtons, IonIcon,IonSearchbar


},
props:{
title:{},
back:{},
},
data(){return{


}},

setup(){
return{
create, ellipsisHorizontal, ellipsisVertical, helpCircle, search, personCircle, star,
notifications,location
}
}




}

</script>
<style scoped>
ion-toolbar {
--background:white;
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
</style>