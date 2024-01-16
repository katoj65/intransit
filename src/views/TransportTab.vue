<template>
<lay-out :title="title">
<div style="background:white;padding-bottom:5px;border-radius:0 0 10px 10px;" class="transporter-search">
<div>
<ion-searchbar :search-icon="location" placeholder="Enter your location" v-model="form.from"></ion-searchbar>
</div>
<div>
<ion-searchbar :search-icon="location" placeholder="Enter your destination" model="form.to"></ion-searchbar>
</div>
</div>









  <ion-list :inset="false" style="margin:5px;">
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
import {
IonAvatar,
IonButton,
IonIcon,
IonInput,
IonItem,
IonLabel,
IonList,
IonNote,
IonSearchbar
} from '@ionic/vue';
import {
create,
ellipsisHorizontal,
ellipsisVertical,
helpCircle,
location,
notifications,
personCircle,
search,
star,
time,

} from 'ionicons/icons';
  export default {
  components:{
  LayOut,
  IonIcon,
  IonAvatar,
  IonNote,
  IonLabel,
  IonItem,
  IonList,
  IonInput,
  IonButton,
  IonSearchbar

  },
  data(){return{
  title:'Transportation',
  form:{
  from:'Masajja Zone A',
  to:'',
  }


  }},

  setup(){return{
  create, ellipsisHorizontal, ellipsisVertical, helpCircle, search, personCircle, star,
  notifications,location,time,
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



ion-searchbar{
--background:#EBEDEF;
--box-shadow: none;
--border-radius:10px;
font-size: 14px;

}

  </style>