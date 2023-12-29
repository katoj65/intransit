<template>
<ion-footer>
<ion-toolbar>
<form>
<ion-item lines="none">
<ion-textarea placeholder="Chat with Kato Joshua..." v-model="form.chat" style="margin-right:50px;"></ion-textarea>

<!-- <ion-fab slot="end" v-if="form.chat!=''" vertical="bottom" horizontal="end">
<ion-fab-button size="small">
<ion-icon :icon="add"></ion-icon>
</ion-fab-button>

<ion-fab-list side="top" style="z-index:100000">
<ion-fab-button>
<ion-icon :icon="document"></ion-icon>
</ion-fab-button>
<ion-fab-button>
<ion-icon :icon="colorPalette"></ion-icon>
</ion-fab-button>
<ion-fab-button>
<ion-icon :icon="globe"></ion-icon>
</ion-fab-button>
</ion-fab-list>
</ion-fab> -->

<ion-fab v-if="form.chat==''" slot="end" vertical="bottom" horizontal="end">
<ion-fab-button size="small" style="position:absolute;right:-10px;top:-48px;">
<ion-icon :icon="add"></ion-icon>
</ion-fab-button>
</ion-fab>


<ion-fab v-else slot="end" vertical="bottom" horizontal="end">
<ion-fab-button size="small" style="position:absolute;right:-10px;top:-48px;">
<ion-icon :icon="send"></ion-icon>
</ion-fab-button>
</ion-fab>



</ion-item>
</form>
</ion-toolbar>
</ion-footer>
</template>

<script lang="ts">
import {IonFooter, IonFab, IonFabButton, IonFabList, IonIcon,IonItem,IonTextarea,IonButton,IonToolbar  } from '@ionic/vue';
import { add,send } from 'ionicons/icons';
import { defineComponent } from 'vue';

export default defineComponent({
components: {
IonFooter, IonFab, IonFabButton, IonFabList, IonIcon,
IonItem,IonTextarea,IonButton,IonToolbar,


},


data(){return{
form:{
chat:'',
},




}},


setup() {
return { add,send };
}

});
</script>

<style scoped>
ion-fab{
box-shadow:none;

}

ion-fab-button{

box-shadow:none;
}

form{
background:#EBEDEF;
margin:5px;
border-radius:50px;
padding:0px;
}
ion-item{
--background:#EBEDEF;
border-radius:50px;
}
</style>