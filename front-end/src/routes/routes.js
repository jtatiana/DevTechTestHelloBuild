import { lazy } from 'react'
import SignIn from '../pages/SingIn/index'
import SignUp from '../pages/SignUp/index'
import Redirect from '../pages/Redirect/index'
import Repositories from '../pages/Repositories/index'
import Profile from '../pages/Profile/index'
const Home = lazy(() => import('../layouts/Home'))
const AppRouting = [
  {
    to: '/signIn',
    path: 'signIn',
    label: 'Sign In',
    Component: SignIn,
    index: true,
    isAvailableToNav: true
  },
  {
    to: '/home/*',
    path: '/home//*',
    label: '',
    Component: Home,
    isAvailableToNav: false
  },
  {
    to: '/signUp',
    path: 'signUp',
    label: 'Sign Up',
    Component: SignUp,
    isAvailableToNav: true
  },
  {
    to: '',
    path: 'redirect',
    label: 'Sign Up',
    Component: Redirect,
    isAvailableToNav: false
  },
  {
    to: 'profile',
    isPrivate: true,
    path: 'profile',
    label: 'Profile',
    Component: Profile,
    index: true,
    isAvailableToNav: true
  }, {
    to: 'repositories',
    isPrivate: true,
    path: 'repositories',
    label: 'Repositories',
    Component: Repositories,
    isAvailableToNav: true
  }
]
export default AppRouting
