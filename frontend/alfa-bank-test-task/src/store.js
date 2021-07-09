import {handOutPlaces} from './helpers'
import {getUsers} from './api/api'
import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
          users: []
        }
    },
    mutations: {
        async getAllUsers(state) {
            const users = await getUsers();
            handOutPlaces(users);
            state.users = users;
        },
      },
      actions: {
        getAllUsers(context) {
          context.commit('getAllUsers')
        }
      }
    }
)


export default store
