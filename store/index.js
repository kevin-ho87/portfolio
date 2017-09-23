import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      isShowMenu: false
    },
    mutations: {
      showMenu (state) {
        state.isShowMenu = true
      },
      hideMenu (state) {
        state.isShowMenu = false
      }
    }
  })
}

export default createStore
