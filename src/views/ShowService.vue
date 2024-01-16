<template>
<lay-out :title="title" :back="back">
<template #subtitle>
<ion-item lines="none">
<ion-icon :icon="location" slot="start"></ion-icon>
<label style="font-size:13px;color:gray;">
{{ address }}
</label>
</ion-item>
</template>


<div v-if="isLoading==true"  style="padding:30px;">
<skeleton-component/>
</div>
<div v-else>
<div style="margin:10px;">

<ion-item v-for="x in 50" :key="x" lines="none" class="border-bottom">
<ion-thumbnail slot="start">
<img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
</ion-thumbnail>
<ion-label>
<h3>Business Name</h3>
<p>Some description</p>
</ion-label>
<ion-note slot="end">
<ion-chip>
Submit
</ion-chip>
</ion-note>
</ion-item>











</div>
</div>
</lay-out>
</template>
<script>
import { location } from 'ionicons/icons';
import { IonItem, IonLabel,IonIcon,IonThumbnail, IonNote, IonChip} from '@ionic/vue';
import LayOut from '@/components/LayOut.vue';
import ServiceConteroller from '@/database/ServiceController';
import SkeletonComponent from '@/components/SkeletonComponent.vue';
export default {
components:{
LayOut,
SkeletonComponent,
IonItem,
IonLabel,
IonIcon,
IonThumbnail,
IonNote,
IonChip
},
data(){return{
title:null,
row:null,
isLoading:false,
back:'/services/view',
address:'Masajja Zone A, Busabala road'


}},




methods:{
service(){
const id=this.$route.params.id;
const db=new ServiceConteroller;
this.isLoading=true;
db.show_service(id).then(res=>{
this.isLoading=false;
res.data.forEach(element => {
this.title=element.name;
this.row=element;
});
}).catch(error=>{
console.log(error);
});
}

},

mounted(){
this.service();
},


setup(){return{
location
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
ion-item{
border-radius: 10px;
margin-bottom: 10px;
}
</style>