import Profile from './pages/Profile/index'
import Repositories from './pages/Respositories/index'
const PrivateRouting = [{
  to: 'profile',
  path: 'profile',
  label: 'Profile',
  Component: Profile,
  index: true,
  isAvailableToNav: true
}, {
  to: 'repositories',
  path: 'repositories',
  label: 'Respositories',
  Component: Repositories,
  isAvailableToNav: true
}]

export default PrivateRouting
