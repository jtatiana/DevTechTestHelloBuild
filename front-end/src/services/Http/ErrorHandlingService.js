import AlertsService from '../Alerts/AlertsService'
const ErrorHandlingService = (res) => {
  res.json().then((e) => {
    AlertsService({
      titleText: e.name,
      text: e.message,
      icon: 'error',
      position: 'top-end'
    })
  })
}

export default ErrorHandlingService
