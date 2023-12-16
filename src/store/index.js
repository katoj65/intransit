import { createStore } from 'vuex';
// Create a new store instance.
const store = createStore({
state:{
session:false,
  },
mutations: {
hasAccess(state) {
state.session=true;
},
noAccess(state) {
state.session=false;
},


  }
});


export default store;
