<template>
  <lay-out :title="title" :back="back">



<template #subtitle style="margin-top:-20px;">
<div style="background:#0c3e29;">
<ion-item>
<ion-input  placeholder="Enter your location"></ion-input>
<ion-icon slot="start" :icon="location" aria-hidden="true"></ion-icon>
</ion-item>
<ion-item>
<ion-input  placeholder="Enter destination"></ion-input>
<ion-icon slot="start" :icon="location" aria-hidden="true"></ion-icon>
</ion-item>
<ion-button expand="full">Find transporters/ agents</ion-button>
</div>
</template>






  <ion-list :inset="false">
  <ion-item v-for="n in 20" :key="n"  lines="none" @click="$router.push('/transporter/profile')">
  <ion-avatar aria-hidden="true" slot="start">
  <img alt="" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
  </ion-avatar>
  <ion-label>
  <h4 style="font-weight:bold;font-size:17px;">
  UBA 933J
  </h4>
  <p>
  <ion-icon :ios="location" :md="location" style="color:#0c3e29;"></ion-icon>  Kampala - Masaka.
  </p>
  <p color="medium" style="color:#0c3e29;">Namasuba stage</p>
  </ion-label>
  <ion-note slot="end">
  10:00 PM<br/>
  <span style="float:right;">
      <ion-icon :ios="time" :md="time" style="color:#0c3e29;font-size:20px"></ion-icon>
  </span>
  </ion-note>
  </ion-item>
  </ion-list>

  </lay-out>
  </template>
  <script>
  import LayOut from '@/components/LayOut.vue';
  import { IonAvatar,IonIcon,
  IonNote,IonLabel,
  IonItem,
  IonList,
  IonInput,
  IonButton


  } from '@ionic/vue';
  import {
  create, ellipsisHorizontal, ellipsisVertical, helpCircle,
  location,
  notifications,
  personCircle,
  search,
  star,
  time
  } from 'ionicons/icons';

  export default {
  components:{
  LayOut,
  IonIcon,IonAvatar,IonNote,IonLabel,
  IonItem,IonList,
  IonInput,IonButton



  },
  data(){return{
  title:'Search',
  back:'/',

  }},

  setup(){return{
  create, ellipsisHorizontal, ellipsisVertical, helpCircle, search, personCircle, star,
  notifications,location,time
  }},



  methods:{


  }
  }
  </script>

  <style scoped>
  ion-card{
  margin:0;
  box-shadow:none;
  padding:0;

  }
  ion-item{
  padding:5px;
  padding-top:0;
  --border-radius:5px;
  }

  ion-button{
  --background:#0c3e29;
  border:solid 2px white;
  border-radius:5px;
  margin:5px;
  margin-top:0;
  }
  </style>