/* eslint-disable */

import Vue from 'vue';
import VueRouter from 'vue-router';

import store from '../store'

import Home from '@/components/Home';
import LogIn from '@/components/Connexion/LogIn';
import Register from '@/components/Connexion/Register';
import ListOfBooks from '@/components/ListOfBooks';
import Account from '@/components//Account/Account';
import YourLibrary from '@/components/Account/YourLibrary';
import YourLists from '@/components/Account/YourLists';
import YourWishList from '@/components/Account/YourWishList';
import AddBook from '@/components/Library/AddBook';
import AddWishBook from '@/components/WishList/AddWishBook';
import AddList from '@/components/Lists/AddList';
import DeleteBook from '@/components/Library/DeleteBook';
import UpdateBook from '@/components/Library/UpdateBook';
import UpdateWishBook from '@/components/WishList/UpdateWishBook';
import UpdateList from '@/components/Lists/UpdateList';

Vue.use(VueRouter);

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/listofbooks',
    name: 'ListOfBooks',
    component: ListOfBooks,
  },
  {
    path: '/account/:id_user',
    name: 'Account',
    component: Account,
    props: true,
    beforeEnter (to, from, next) {
      if (store.state.token) {
        next()
      } else {
        next('/login')
      }
    },
  },
  {
    path: '/account/:id_user/yourlibrary',
    name: 'YourLibrary',
    component: YourLibrary,
    props: true,
    beforeEnter (to, from, next) {
      if (store.state.token) {
        next()
      } else {
        next('/login')
      }
    },
  },
  {
    path: '/account/:id_user/list',
    name: 'YourLists',
    component: YourLists,
    props: true,
    beforeEnter (to, from, next) {
      if (store.state.token) {
        next()
      } else {
        next('/login')
      }
    },
  },
  {
    path: '/account/:id_user/wishlist',
    name: 'YourWishList',
    component: YourWishList,
    props: true,
    beforeEnter (to, from, next) {
      if (store.state.token) {
        next()
      } else {
        next('/login')
      }
    },
  },
  {
    path: '/account/:id_user/yourlibrary/addbook',
    name: 'AddBook',
    component: AddBook,
    props: true,
    beforeEnter (to, from, next) {
      if (store.state.token) {
        next()
      } else {
        next('/login')
      }
    },
  },
  {
    path: '/account/:id_user/wishlist/addwishbook',
    name: 'AddWishBook',
    component: AddWishBook,
    props: true,
    beforeEnter (to, from, next) {
      if (store.state.token) {
        next()
      } else {
        next('/login')
      }
    },
  },
  {
    path: '/account/:id_user/lists/addlist',
    name: 'AddList',
    component: AddList,
    props: true,
    beforeEnter (to, from, next) {
      if (store.state.token) {
        next()
      } else {
        next('/login')
      }
    },
  },
  {
    path: '/account/:id_user/yourlibrary/updatebook/:id_book',
    name: 'UpdateBook',
    component: UpdateBook,
    props: true,
    beforeEnter (to, from, next) {
      if (store.state.token) {
        next()
      } else {
        next('/login')
      }
    },
  },
  {
    path: '/account/:id_user/wishlist/updatewishbook/:id_book',
    name: 'UpdateWishBook',
    component: UpdateWishBook,
    props: true,
    beforeEnter (to, from, next) {
      if (store.state.token) {
        next()
      } else {
        next('/login')
      }
    },
  },
  {
    path: '/account/:id_user/lists/updatelist/:id_list',
    name: 'UpdateList',
    component: UpdateList,
    props: true,
    beforeEnter (to, from, next) {
      if (store.state.token) {
        next()
      } else {
        next('/login')
      }
    },
  },
  {
    path: '/account/:id_user/yourlibrary/deletebook',
    name: 'DeleteBook',
    component: DeleteBook,
    props: true,
    beforeEnter (to, from, next) {
      if (store.state.token) {
        next()
      } else {
        next('/login')
      }
    },
  },
];

export default new VueRouter({mode: 'history', routes})
