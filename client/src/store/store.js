/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import { sync } from 'vuex-router-sync';
// import globalAxios from 'axios';
// import axios from './axios-auth';
import axios from 'axios';
import router from '../router/router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    id_user: null,
    user: null,
    username: null
  },
  mutations: {
    authUser (state, userData) {
      state.token = userData.token
      state.id_user = userData.id_user
      state.username = userData.username
    },
    storeUser (state, user) {
      state.user = user
    },
    clearAuthData (state) {
      state.token = null
      state.id_user = null
      state.username = null
    }
  },
  actions: {
    /*expirationTime is the payload*/
    // setLogoutTimer ({commit}, expirationTime) {
    //   setTimeout(() => {
    //     commit('clearAuthData')
    //   }, expirationTime * 1000)
    // },
    register ({commit, dispatch}, authData) {
      axios.post('/users', {
        username: authData.username,
        email_user: authData.email_user,
        password_user: authData.password_user,
        id_user: authData.id_user,
        returnSecureToken: true
      })
        .then(res => {
          console.log('register store', res.data.user)
          commit('authUser', {
            token: res.data.token,
            id_user: res.data.user.id,
            username: res.data.user.username
          })
          // const now = new Date()
          // const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('id_user', res.data.user.id)
          localStorage.setItem('username', res.data.user.username)
          localStorage.setItem('userId', res.data.user.id)
          // localStorage.setItem('expirationDate', expirationDate)
          // dispatch('storeUser', authData)
          const id_user = this.state.id_user;
          console.log('[store.js => register] getId', this.state.id_user);
          router.replace('/account/' + id_user);
          // dispatch('setLogoutTimer', res.data.expiresIn)
        })
        .catch(error => console.log(error))
    },
    login ({commit, dispatch}, authData) {
      axios.post('/login', {
        username: authData.username,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          console.log(res)
          // const now = new Date()
          // const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('id_user', res.data.user.id)
          localStorage.setItem('username', res.data.user.username)
          localStorage.setItem('userId', res.data.user.id)

          // localStorage.setItem('expirationDate', expirationDate)
          commit('authUser', {
            token: res.data.token,
            id_user: res.data.user.id,
            username: res.data.user.username
          })
          console.log('[store.js => login] getId', this.state.id_user);
          const id_user = this.state.id_user
          // $router.push('/account/' +  this.state.id_user)
          // dispatch('setLogoutTimer', res.data.expiresIn)
          router.replace('/account/' + id_user);
        })
        .catch(error => console.log(error))
        // router.replace('/account/' + res.data.user.id)
    },
    tryAutoLogin ({commit}) {
      const token = localStorage.getItem('token')
      if (!token) {
        return
      }
      // const expirationDate = localStorage.getItem('expirationDate')
      // const now = new Date()
      // if (now >= expirationDate) {
      //   return
      // }
      const id_user = localStorage.getItem('id_user')
      const username = localStorage.getItem('username')
      commit('authUser', {
        token: token,
        id_user: id_user,
        username: username
      })
      router.replace('/account/' + id_user);
    },
    logout ({commit}) {
      commit('clearAuthData')
      // localStorage.removeItem('expirationDate')
      localStorage.removeItem('token')
      localStorage.removeItem('id_user')
      localStorage.removeItem('username')
      localStorage.removeItem('userId')
      router.replace('/')
    },
    // storeUser ({commit, state}, userData) {
    //   if (!state.token) {
    //     return
    //   }
    //   axios.post('/users', userData)
    //     .then(res => console.log(res))
    //     .catch(error => console.log(error))
    // },
    fetchUser ({commit, state}) {
      // let user = []
      if (!state.token) {
        console.log('fetch user no token');
        return
      }
      axios.get('/user/' + this.state.id_user)
      .then((res) => {
        console.log('fetched user', res.data);
        const user = res.data;
        commit('storeUser', user)
      })
        .catch(error => console.log(error))
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    isAuthenticated (state) {
      return state.token !== null
    }
  }
})
