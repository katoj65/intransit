<template>
<ion-page>
<ion-content class="ion-padding">
<div style="padding:30px;padding-bottom:0;">
</div>



<div v-if="isLoading==false">
<div style="text-align:center;padding-left:42%;padding-right:42%;">
<ion-avatar style="text-align:center">
<img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
</ion-avatar>
</div>
<h4><span style="font-weight:bold;text-transform:capitalize;"> {{ user.names }}</span></h4>
<p style="text-align:center;">
</p>
<p style="text-align:center;">Complete your profile</p>
<ion-card>
<ion-card-content style="padding:0;padding-right:10px;">
<div v-if="error!=null" class="ion-padding" style="text-align:center;">
{{ error }}
</div>
<form @submit.prevent="submit">
<ion-list>
<ion-item>
<ion-select aria-label="Gender" placeholder="Select gender" @ionChange="handleChange($event)">
<ion-select-option value="male">Male</ion-select-option>
<ion-select-option value="female">Female</ion-select-option>
<ion-select-option value="other">Other</ion-select-option>
</ion-select>
</ion-item>
<ion-item>
<ion-input placeholder="Enter your physical address" v-model="form.address"></ion-input>
</ion-item>
<ion-item>
<ion-input placeholder="Enter telephone number" type="number" v-model="form.tel"></ion-input>
</ion-item>


<ion-item lines="none" style="padding-bottom:10px;padding-top:10px;">
<ion-button v-if="isLoading2==false" fill="clear" expand="block" type="submit">Save profile</ion-button>
<ion-button expand="block" fill="clear" disabled v-else><ion-spinner></ion-spinner></ion-button>
</ion-item>


</ion-list>
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
import { IonCard, IonCardContent, IonCardTitle, IonContent, IonPage, IonInput, IonAvatar,IonSelect, IonSelectOption, IonItem, IonList, IonSpinner, IonButton} from '@ionic/vue';
import LoginController from '@/database/LoginController.js';
import SkeletonComponent from '@/components/SkeletonComponent.vue';


export default {
components:{
IonPage, IonContent,IonCard,
IonCardContent, IonCardTitle,
SkeletonComponent, IonInput,IonAvatar,IonSelect,
IonSelectOption,IonItem, IonList,IonSpinner,IonButton




},
data(){return{
user:{
names:null,
email:null
},
error:null,
form:{
gender:'',
address:'',
tel:'',
},

isLoading:false,
isLoading2:false,

}},


methods:{


//
user_profile(){
this.isLoading=true;
const db=new LoginController;
db.this_user().then((res)=>{
if(res.data.error==null){
this.isLoading=false;
const user=res.data.user.user_metadata;
this.user.names=user.firstname+' '+user.lastname;
}else{
console.log(res.data.error);
}
}).catch((error)=>{
console.log(error);
});
},



//
submit(){
this.isLoading2=true;
const db=new LoginController;
db.update_user_metadata(this.form).then((res)=>{
if(res.data.error==null){
this.$router.push('/account/choose-role');
}else{
this.error='Error has occurred';
console.log(res.data.error);
}
}).catch((error)=>{console.log(error)});
},

//set role
handleChange(ev) {
 this.form.gender=ev.detail.value;
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



</style>