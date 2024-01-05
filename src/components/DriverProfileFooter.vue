<template>
<ion-footer>
<ion-toolbar>
<ion-segment value="">


<ion-segment-button layout="icon-start" class="btn1">
<ion-label>Request</ion-label>
<ion-icon :icon="megaphone"></ion-icon>
</ion-segment-button>



<ion-segment-button layout="icon-start">
<ion-label>Shared Space</ion-label>
<ion-icon :icon="albums"></ion-icon>
</ion-segment-button>


</ion-segment>
</ion-toolbar>
</ion-footer>
</template>

    <script lang="ts">
    import {IonFooter,  IonToolbar,IonIcon, IonLabel, IonSegment, IonSegmentButton  } from '@ionic/vue';
    import { defineComponent } from 'vue';
    import { exit,enter,megaphone,albums } from 'ionicons/icons';

    export default defineComponent({
    components: { IonFooter,  IonToolbar,
    IonIcon,IonLabel, IonSegment, IonSegmentButton ,

    },

    setup(){return{
    enter,
    exit,
    megaphone,
    albums


    }}
    });
    </script>

    <style scoped>
    ion-segment-button{
    text-transform: capitalize;
    margin:4px;
    border-radius: 10px;
    border:solid thin #0c3e29;
    }

    ion-segment-button.btn1{
    border:solid thin #0c3e29;
    }


    ion-footer{
    border-radius:10px 10px 0 0;
    }

    ion-toolbar{
    border-radius:10px 10px 0 0;
    border:solid thin #0c3e29;
    }

    ion-segment{
    border:solid 1px white;
    }
    </style>