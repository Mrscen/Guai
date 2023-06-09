const state = {
  // 防止刷新数据丢失
  accountAddress: sessionStorage.getItem('accountAddress')
  // accountAddress: sessionStorage.getItem('accountAddress') ? sessionStorage.getItem('accountAddress') : ''
}

const mutations = {
  SET_ACOUNT_ADDRESS: (state, data) => {
    state['accountAddress'] = data
  }
}

const actions = {
  setAccountAddress ({ commit }, data) {
    // 会话存储，防止Vuex刷新数据丢失
    console.log(data);
    sessionStorage.setItem('accountAddress', data)
    commit('SET_ACOUNT_ADDRESS', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
