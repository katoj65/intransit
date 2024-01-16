<template>
<lay-out :title="title">
</lay-out>
</template>
<script>

import { addCircle, addOutline, listCircle, time } from 'ionicons/icons';

import LayOut from '@/components/LayOut.vue';
export default {
components:{
LayOut

},
data(){return{
title:'Appointment',



}},



methods:{




},


setup(){return{
time,listCircle,addCircle,addOutline
}}
}
</script>

<style scoped>
ion-card{
padding: 0;
margin:0;
border-radius:0;
box-shadow:none;
}

ion-avatar {
--border-radius: 4px;
}

ion-button{
color:#0c3e29;
--background::#EBEDEF;
box-shadow:none;
border:solid 2px #0c3e29;
border-radius:5px;


}
ion-item.userheader{
--background:#EBEDEF;
--padding-bottom:5px;
--padding-top:5px;
}

</style>