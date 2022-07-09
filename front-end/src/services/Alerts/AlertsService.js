import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const AlertService = ({
  icon = 'info',
  showConfirmButton = false,
  timer = 3000,
  timerProgressBar = true,
  toast = true,
  ...config
}) => {
  MySwal.fire({
    icon,
    showConfirmButton,
    timer,
    timerProgressBar,
    toast,
    ...config
  })
}

export default AlertService
