import Home from '@/components/Home'
import ContainerFirst from '@/components/ContainerFirst'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import Connexion from '@/components/Connexion'
export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Connexion',
    name: 'Connexion',
    component: Connexion
  },
  {
    path: '/',
    name: 'ContainerFirst',
    component: ContainerFirst
  },
  {
    path: '/SignIn',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  }
]
