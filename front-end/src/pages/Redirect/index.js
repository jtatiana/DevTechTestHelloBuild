import { useEffect } from 'react'
// Router
import { useSearchParams, useNavigate } from 'react-router-dom'
// services
import AlertService from '../../services/Alerts/AlertsService'
import AuthService from '../../services/Auth/AuthService'

const Redirect = () => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  useEffect(() => {
    if (searchParams.get('error')) {
      AlertService({
        toast: false,
        icon: 'error',
        titleText: 'No auth granted',
        text: 'GitHub authorization rejected by user'
      })
      navigate('/signIn', { replace: true })
    }
    const code = searchParams.get('code')
    if (code) {
      async function fetchData() {
        await AuthService.setGitTokenBackend(code)
        navigate('/home/profile', { replace: true })
      }
      fetchData()
    }
  }, [searchParams, navigate])

  return (<></>)
}
export default Redirect
