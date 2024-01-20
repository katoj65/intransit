import { createStore } from 'vuex';
// Create a new store instance.
const store = createStore({
state:{
session:false,
connection:null,
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
