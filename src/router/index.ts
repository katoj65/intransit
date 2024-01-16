import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';
import SelectRole from '../views/SelectRole.vue';
import CompleteProfile from '../views/completeProfile.vue';
import AccountPage from '../views/AccountPage.vue';
import LoginPage from '../views/LoginPage.vue';
import SettingsPage from '../views/SettingsPage.vue';
import NotificationPage from '../views/NotificationPage.vue';
import MyLocationPage from '../views/MyLocationPage.vue';
import TransporterPage from '../views/TransporterPage.vue';
import TransporterProfile from '../views/TransporterProfile.vue';
import RequestsPage from '../views/RequestsPage.vue';
import DriverPage from '../views/DriverPage.vue';
import RequestForm from '../views/RequestForm.vue';
import WalletPage from '../views/WalletPage.vue';
import WalletComponent from '../views/WalletComponent.vue';
import TaskList from '../views/TaskList.vue';
import WeatherPage from '../business/WeatherPage.vue';
import MyWeather from '../business/MyWeather.vue';
import ServicesTab from '../views/ServicesTab.vue';
import AppointmentTab from '../views/AppointmentTab.vue';
import MessagesTab from '../views/MessageTab.vue';
import BuyTab from '../views/BuyTab.vue';

//authentication
import store from '../store/index.js';

const routes: Array<RouteRecordRaw> = [
{
path: '/',
redirect:'/tabs/tab1'
},
{
path: '/tabs/',
component: TabsPage,
children: [
{
path: '',
redirect: '/tabs/tab1',
},
{
path: 'tab1',
name:'tab1',
component: () => import('@/views/Tab1Page.vue'),
meta:{auth:false}
},
{
path: 'tab2',
name:'tab2',
component: () => import('@/views/Tab2Page.vue'),
meta:{auth:true}
},
{
path: 'tab3',
name:'tab3',
component: () => import('@/views/Tab3Page.vue'),
meta:{auth:true}
},
{
path:'tab5',
name:'tab5',
component:()=>import('@/views/AppointmentsPage.vue'),
meta:{auth:true}
}
]
},
{
path:'/account/',
redirect:'/account/login',
},
{
path:'/account/',
component:AccountPage,
children:[
{
path:'/account/login',
component:LoginPage
},
{
path:'/account/select-role',
name:'select role',
component: SelectRole
},
{
path:'/account/complete-profile/:tag',
name:'complete profile',
component: CompleteProfile,
}
]
},
{
path:'/settings',
component:SettingsPage,
name:'settings',
},
{
path:'/notifications',
component:NotificationPage,
name:'notifications',
},
{
path:'/my-location',
component:MyLocationPage,
name:'my location',
},
{
path:'/transporter',
redirect:'/transporters',
},

{
path:'/transporter',
component:TransporterPage,
children:[
{
path:'/transporters',
component:()=>import('@/views/TransportPage.vue'),
name:'transporter profile'
},
{
path:'/transporter/requests',
component:RequestsPage,
name:'requests page',
},
{
path:'/transporter/driver',
component:DriverPage,
name:'driver page',
},
{
path:'/transporter/request/form',
component:RequestForm,
name:'request form'
},
{
path:'/transprter/route',
component:()=>import('@/views/DriverRoute.vue'),
name:'driver route'
}
]
},
{
path:'/wallet/',
redirect:'/wallet/user'
},
{
path:'/wallet',
component:WalletComponent,
children:[
{
path:'/wallet/user',
component:WalletPage,
name:'wallet-user'
}
]
},

{
path:'/task',
component:TaskList,
name:'tasks'
},
{
path:'/weather',
redirect:'/weather/user',
},
{
path:'/weather',
component:WeatherPage,
children:[
{
  path:'/weather/user',
  component:MyWeather,
  name:'my weather'
}



]
},
{
  path:'/login',
  component:()=>import('@/views/LoginPage.vue'),
  name:'login',

},
{
  path:'/services',
  redirect:'/services/view'
},
{
  path:'/services',
  component:ServicesTab,
  children:[
  {
    path:'/services/view',
    component:()=>import('@/views/ServicesPage.vue'),
    name:'services',
  },
  {
    path:'/service/:id/category',
    component:()=>import('@/views/ShowService.vue'),
    name:'service category'
  }


  ]
},
{
  path:'/appointment/details',
  redirect:'/appointment/view'
},
{
  path:'/appointment/details',
  component:AppointmentTab,
  children:[
  {
    path:'/appointment/view',
    component:()=>import('@/views/AppointmentDetails.vue'),
    name:'appointment-view'
  }

  ]
},
{
  path:'/messages',
  redirect:'/messages/view'
},
{
  path:'/messages',
  component:MessagesTab,
  children:[
  {
    path:'/messages/view',
    component:()=>import('@/views/MessagesPage.vue'),
    name:'messages'
  },
  {
    path:'/message/user',
    component:()=>import('@/views/UserMessage.vue'),
    name:'user-message'
  }
  ]

},




//buy
{
  path:'/buy',
  redirect:'/buy/view'
},
{
  path:'/buy',
  component:BuyTab,
  children:[
  {
    path:'/buy/view',
    component:()=>import('@/views/BuyItems.vue'),
    name:'buy'
  },


  ]
},
















];

const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes
});




//Navigation Guard
router.beforeEach((to, from,next)=>{
const auth=store.state.session;
if(to.name!='login'){
console.log(auth);
if(auth==false){
next('/login');
}else{
next();
}
}else{
next();
}
});


export default router;
