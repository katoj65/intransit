<template>
    <lay-out :title="title" :back="back">




        <ion-list :inset="false">
            <ion-item :button="true" v-for="(l,key) in list" :key="key"  lines="full" detail="true">
              <ion-icon  slot="start" :icon="personCircle" size="large"></ion-icon>
              <ion-label style="font-size:18px;font-weight;">{{ l.name }} </ion-label>
              <ion-note slot="end">

              </ion-note>
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
    import {time, create, ellipsisHorizontal, ellipsisVertical, helpCircle, search, personCircle, star,
    notifications,location
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
    title:'Settings',
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
    </style>