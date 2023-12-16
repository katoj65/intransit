<template>

    <form @submit.prevent="submit" style="padding:0;">
    <div style="padding:50px;padding-bottom:30px;">
    <img src="/logo2.png" style="width:100%"/>
    </div>
  
    <h4 style="margin-bottom:30px;">REGISTER</h4>
    <ion-input placeholder="Enter Firstname" v-model="form.firstname" type="text" required></ion-input>
    <ion-input placeholder="Enter Lastname" v-model="form.lastname" type="text" required></ion-input>
    <ion-input placeholder="Enter Email Address" v-model="form.email" type="email" required></ion-input>
    <ion-input placeholder="Enter Telephone Number" v-model="form.tel" type="number" required></ion-input>
    <ion-input placeholder="Enter Password" v-model="form.password" type="password" required></ion-input>
    <ion-button type="submit" fill="clear">Create account</ion-button>
    </form>

    </template>
    <script>
    import {IonInput,IonButton } from '@ionic/vue';
    export default {
    components:{
    IonInput,IonButton
    },

    data(){return{
    form:{
    email:'katoj65@gmail.com',
    tel:'0752567534',
    firstname:'joshua',
    lastname:'kato',
    password:'1234567890'
    }
    }},

methods:{
submit(){
this.$store.commit('loggedIn');
this.$router.push('/account/select-role');
}

}

    }
    </script>

    <style scoped>
    .ion-page{
    background:#0c3e29;
    }

    ion-input{
    border:solid 2px white;
    margin-bottom:10px;
    text-align: center;
    border-radius:5px;
    color:white;
    }

    form{
    padding:0px;
    }

    ion-button{
    width:100%;
    --border-radius:5px;
    --background:white;
    color:#0c3e29;
    margin:0;
    margin-bottom:10px;
    --padding:15px;

    }
    h4{
    text-align: center;
    font-weight: bold;
    color:white;
    }

    .register{
    --background: #0c3e29;
    color: white;
    margin-top:10px;
    }



    </style>