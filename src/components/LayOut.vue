<template>
<ion-page>
<ion-header class="ion-no-border">
<ion-toolbar class="ion-no-border" >
<ion-buttons slot="start">
<ion-back-button default-href="#" v-if="back!=null" @click="$router.push(back)"></ion-back-button>
</ion-buttons>
 <ion-buttons slot="end">
<ion-button @click="$router.push('/my-location')">
<ion-icon :ios="location" :md="location"></ion-icon>
</ion-button>


<ion-button @click="$router.push('/messages/view')">
<ion-icon :ios="mail" :md="mail"></ion-icon>
</ion-button>


<ion-button @click="$router.push('/settings')">
<ion-icon :ios="menu" :md="menu"></ion-icon>
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
import { create, ellipsisHorizontal, menu, helpCircle, search, personCircle, star,
notifications,location,mail
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
create, ellipsisHorizontal, menu, helpCircle, search, personCircle, star,
notifications,location,mail
}
}




}

</script>
<style scoped>
ion-toolbar {
--background:#196F3D;
--color:black;
--min-height: 50px;
--padding-top: 10px;
--padding-bottom:0px;
color:white;
}

ion-searchbar{
--background:#EBEDEF;
--box-shadow: none;
--border-radius:20px;
font-size: 14px;
}
ion-header{
border-bottom:none;
--background:#196F3D;
color:white;
}
ion-icon{
color:white;
}
ion-back-button{
color:white;
}
</style>