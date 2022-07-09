import { lazy } from 'react'
import SignIn from '../pages/SingIn/index'
import SignUp from '../pages/SignUp/index'
import Redirect from '../pages/Redirect/index'
import Repositories from '../pages/Redirect/index'
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
  }
]
export default AppRouting
