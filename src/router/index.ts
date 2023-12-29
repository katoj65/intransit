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
import TasksPage from '../views/TasksPage.vue';
import WalletPage from '../views/WalletPage.vue';
import WalletComponent from '../views/WalletComponent.vue';
import TaskList from '../views/TaskList.vue';
import DeliveryPage from '../views/DeliveryPage.vue';
import TransportPage from '../views/TransporterPage.vue';
import WeatherPage from '../business/WeatherPage.vue';
import MyWeather from '../business/MyWeather.vue';

//authentication
import auth from '../auth/authentication.js';
import store from '../store/index.js';
const session=store.state.session;
const my_auth=auth;

const routes: Array<RouteRecordRaw> = [
{
path: '/',
redirect:my_auth==true?'/tabs/tab1':'/account/'
},
{
path: '/tabs/',
component: TabsPage,
children: [
{
path: '',
redirect: '/tabs/tab1'
},
{
path: 'tab1',
component: () => import('@/views/Tab1Page.vue')
},
{
path: 'tab2',
component: () => import('@/views/Tab2Page.vue')
},
{
path: 'tab3',
component: () => import('@/views/Tab3Page.vue')
},
{
path:'tab5',
component:()=>import('@/views/TransportTab.vue'),
name:'tab5'
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
path:'/transporter/',
redirect:'/transporter/profile',
},
{
path:'/transporter',
component:TransporterPage,
children:[
{
path:'/transporter/profile',
component:TransporterProfile,
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
}










]

const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes
})

export default router
