import { createStore } from 'vuex';
// import authentication from '../auth/authentication';
// const Auth=new authentication;

//login session
import supabase from '../database/connection.js';
const { data, error } = supabase.auth.getSession();
let login_status=false;

// if(data.session!=null){
// login_status=true;
// }

// console.log(data);
//













const store = createStore({
state:{
session:null,
connection:null,
//
},

settings:{
driver_chat:{
options:[
],
state:false,
}
},



mutations: {
hasAccess(state) {
state.session=true;
},
noAccess(state) {
state.session=false;
},
noConnection(state){
state.connection='Connecting....';
}

},



});

export default store;
