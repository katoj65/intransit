<template>
    <lay-out :title="title">

    <ion-list :inset="false">
    <ion-item v-for="n in 20" :key="n"  lines="none">
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
    <p color="medium" style="color:#0c3e29;">Has reached Kamengo</p>
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
    import { IonIcon,IonAvatar,IonNote,IonLabel,
    IonItem,
    IonList, } from '@ionic/vue';
    import {time, create, ellipsisHorizontal, ellipsisVertical, helpCircle, search, personCircle, star,
    notifications,location
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


    },
    data(){return{
    title:'INTRANSIT',

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