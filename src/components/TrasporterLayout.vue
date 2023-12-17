<template>
<ion-page>
<ion-header class="ion-no-border" style="background:#0c3e29;">
<ion-toolbar class="ion-no-border" >
<ion-buttons slot="start">
<ion-back-button default-href="#" v-if="back!=null" @click="$router.push(back)"></ion-back-button>
</ion-buttons>



<ion-buttons slot="end">
<ion-button @click="$router.push('/settings')">
<ion-icon :ios="ellipsisHorizontal" :md="ellipsisVertical"></ion-icon>
</ion-button>
</ion-buttons>
<ion-title style="font-weight:bolder;font-size:20px;" size="large">



<ion-button class="title" fill="clear">
<ion-icon slot="start" :icon="car"></ion-icon>
{{ title }}
</ion-button>



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
</ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
IonBackButton, IonButton, IonButtons, IonIcon,
} from '@ionic/vue';
import { create, ellipsisHorizontal, ellipsisVertical, helpCircle, search, personCircle, star,
notifications,location,car
} from 'ionicons/icons';


export default{
components:{IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
IonBackButton, IonButton, IonButtons, IonIcon,


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
notifications,location,car
}
}




}

</script>
<style scoped>
ion-toolbar {
--background:#0c3e29;
--color: white;
--min-height: 80px;
--padding-top: 0px;
--padding-bottom:0px;
}

ion-chip {
    --background:#0c3e29;
    --color: white;
    margin-top:20px;
    z-index: 10000;
  }
ion-button.title{
    --background:#0c3e29;
    font-weight: bolder;
    font-size:20px;
    --color:white;
}


</style>