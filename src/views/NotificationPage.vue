<template>
    <lay-out :title="title" :back="back" style="padding:0;">


      <ion-list :inset="false" lines="full">

        <ion-item button="true"  detail="false" v-for="(n,key) in 30" :key="key">

          <ion-label>
            <strong>Rick Astley</strong>
            <ion-text>Never Gonna Give You Up</ion-text><br />
            <ion-note color="medium" class="ion-text-wrap">
              Never gonna give you up Never gonna let you down Never gonna run...
            </ion-note>
          </ion-label>
          <div class="metadata-end-wrapper" slot="end">
            <ion-note color="medium">06:11</ion-note>
          </div>
        </ion-item>


      </ion-list>







    </lay-out>
    </template>
    <script>
    import LayOut from '@/components/LayOut.vue';
import {
IonIcon,
IonItem,
IonLabel,
IonList,
IonNote,
IonText,
} from '@ionic/vue';
import {
create, ellipsisHorizontal, ellipsisVertical, helpCircle,
location,
notifications,
personCircle,
search,
star,
time,
chevronForward
} from 'ionicons/icons';

    export default {
    components:{
    LayOut,

    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonNote,
    IonText,


    },
    data(){return{
    title:'Notifications',
    back:'/',


    list:[
    {name:'Profile',url:'/profile',icon:''},
    {name:'Location',url:'/location',icon:''},
    {name:'Tasks',url:'/preference',icon:''},
    {name:'Preferences',url:'/preference',icon:''},
    {name:'Transactions',url:'/preference',icon:''},
    {name:'Wallet',url:'/preference',icon:''},
    {name:'Change Password',url:'/preference',icon:''}

    ]


    }},

    setup(){return{
    create, ellipsisHorizontal, ellipsisVertical, helpCircle, search, personCircle, star,
    notifications,location,time,chevronForward
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
    </style>