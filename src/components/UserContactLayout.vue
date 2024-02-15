<template>
<ion-page>
<ion-header class="ion-no-border">
<ion-toolbar class="ion-no-border">
<ion-buttons slot="start">
<ion-back-button default-href="#" v-if="back!=null" @click="$router.push(back)"></ion-back-button>
<!-- <ion-icon slot="end" :icon="car"></ion-icon> -->
<ion-avatar slot="start" style="width:40px;" v-if="avatar==true">
<img src="https://ionicframework.com/docs/img/demos/avatar.svg" style="width:40px;height:40px;margin-top:10px;" />
</ion-avatar>

</ion-buttons>
<ion-buttons slot="end">
<ion-button @click="$router.push('/settings')">
<ion-icon :ios="ellipsisHorizontal" :md="ellipsisVertical"></ion-icon>
</ion-button>
</ion-buttons>
<ion-title style="font-size:18px;" size="large">
{{ title }}
<br/><span style="font-size:13px;">
{{ subtitle }}
</span>
</ion-title>
</ion-toolbar>
<slot class="ion-padding" name="subtitle"></slot>
</ion-header>
<ion-content :fullscreen="true">
<ion-header collapse="condense" class="ion-no-border">
<ion-toolbar>
<ion-title size="large">
{{ title }}
</ion-title>
</ion-toolbar>
</ion-header>
<slot/>
</ion-content>
<slot name="footer"/>
</ion-page>
</template>

<script>
import {
IonAvatar,
IonBackButton, IonButton, IonButtons,
IonContent,
IonHeader,
IonIcon,
IonPage,
IonTitle,
IonToolbar
} from '@ionic/vue';
import {
car,
create, ellipsisHorizontal,
ellipsisVertical, helpCircle,
location,
mail,
notifications,
personCircle,
search,
star
} from 'ionicons/icons';


export default{
components:{
IonPage, IonHeader, IonToolbar,
IonTitle, IonContent,
IonBackButton, IonButton,
IonButtons, IonIcon,
IonAvatar,


},
props:{
title:{},
back:{},
subtitle:{},
avatar:true,
},
data(){return{


}},

setup(){
return{
create, ellipsisHorizontal, ellipsisVertical, helpCircle, search, personCircle, star,
notifications,location,car,mail
}
}




}

</script>
<style scoped>
ion-toolbar {
--background:#196F3D;
color:white;
--min-height: 50px;
--padding-top: 0px;
--padding-bottom:0px;

}

ion-chip {

    margin-top:20px;
    z-index: 10000;
  }
ion-button.title{

    font-weight: bolder;
    font-size:20px;
    --color:white;
}

ion-toolbar{
border-bottom:solid 2px #F2F3F4;
padding-bottom:5px;
--background:#196F3D;
color:white;

}

</style>