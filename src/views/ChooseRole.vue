<template>
<ion-page>
<ion-content class="ion-padding">
<div style="padding:30px;padding-bottom:0;">
</div>





<div v-if="isLoading2==false">
<div style="text-align:center;padding-left:42%;padding-right:42%;">
<ion-avatar style="text-align:center">
<img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
</ion-avatar>
</div>
<h4><span style="font-weight:bold;text-transform:capitalize;"> {{ user.names }}</span></h4>
<p style="text-align:center;">
</p>
<p style="text-align:center;">Select your preferences</p>
<ion-card>
<ion-card-content style="padding-left:10px;padding-right:10px;">
<div v-if="error!=null" class="ion-padding" style="text-align:center;">
{{ error }}
</div>
<form @submit.prevent="submit">
<ion-radio-group value="" v-if="row.length>0" @ionChange="handleChange($event)">
<ion-item v-for="(r,key) in row" :key="key">
<ion-radio :value="r.tag">
{{ r.name }}
</ion-radio>
</ion-item>
</ion-radio-group>
<div style="padding-top:10px;margin-top:20px;">
<submit-button :isLoading="isLoading" :title="'Continue'"/>
</div>
</form>
</ion-card-content>
</ion-card>
</div>
<div v-else style="text-align:center;" class="ion-padding">
<skeleton-component/>
</div>

</ion-content>
</ion-page>
</template>
<script>
import { IonCard, IonCardContent, IonCardTitle, IonContent, IonPage,
IonInput, IonAvatar,IonSelect, IonSelectOption, IonItem,
IonList, IonSpinner,IonRadio, IonRadioGroup,

} from '@ionic/vue';
import LoginController from '@/database/LoginController.js';
import SkeletonComponent from '@/components/SkeletonComponent.vue';
import SubmitButton from '@/components/SubmitButton.vue';
import RoleController from '@/database/RoleController.js';


export default {
components:{
IonPage, IonContent,IonCard,
IonCardContent, IonCardTitle,
SkeletonComponent, IonInput,IonAvatar,IonSelect,
IonSelectOption,IonItem, IonList,IonSpinner,
IonRadio, IonRadioGroup,SubmitButton



},
data(){return{
user:{
names:null,
email:null
},
error:null,
form:{
role:'',
},

isLoading:false,
isLoading2:false,
row:[],

}},


methods:{
//handle change
handleChange(ev) {
this.form=ev.detail.value;
},
//profile
user_profile(){
this.isLoading2=true;
const db=new LoginController;
db.this_user().then((res)=>{
if(res.data.error==null){
this.roles();
const user=res.data.user.user_metadata;
this.user.names=user.firstname+' '+user.lastname;
}else{
console.log(res.data.error);
}
}).catch((error)=>{
console.log(error);
});
},

//submit
submit(){
this.isLoading2=true;
const db=new LoginController;
const role=this.form.role;
db.set_role(role).then((res)=>{
if(res.data.error==null){
this.$router.push('/');
}else{
this.error='Error has occurred';
console.log(res.data.error);
}
console.log(res);
}).catch((error)=>{console.log(error)});
},



//roles
roles(){
const db=new RoleController;
db.roles().then((res)=>{
if(res.status==200){
this.isLoading2=false;
this.row=res.data;
}else{
this.error=res.data.error;
}
}).catch((error)=>{
console.log(error);
});


},

},


//
mounted(){
this.user_profile();
},

//

computed:{
user_details(){
return {user:this.user,role:this.$route.params.tag}
},


}



}
</script>

<style scoped>

h4{
text-align: center;
}

ion-card{
margin:0;
padding:0;
box-shadow:none;
border:none;
border-radius:0;
padding-bottom:0;
}

ion-select{
--background:white;
padding:10px;
}


ion-input{
--background:none;
padding:10px;
margin-bottom:5px;
}

ion-card{
border-radius: 10px;
}

ion-button{
height:50px;
width:100%;
--border-radius:5px;
--background:#34495E;
margin:0;
margin:0;
margin-bottom:10px;
--padding:15px;
color:white;
box-shadow: none;
}

ion-radio{
padding:10px;
display: block;
}



</style>