<template>
<transporter-layout :title="title" :back="back">
<template #subtitle>
<div style="color:white;padding-left:10px;padding-right:10px;">
Transporter - #0012345
</div>
</template>





some information



</transporter-layout>
</template>
<script>
import TransporterLayout from '../components/TrasporterLayout.vue';
export default {
components:{
TransporterLayout

},

data(){return{
title:'Joshua Kato',
back:'/',

}}




}
</script>