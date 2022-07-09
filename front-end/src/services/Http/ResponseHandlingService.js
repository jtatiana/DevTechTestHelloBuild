
import ErrorHandlingService from './ErrorHandlingService'

const ResponseHandlingService = async (res) => {
  const { status } = res
  if (status < 400) {
    const body = await res.json()
    return { status, ...body }
  } else {
    ErrorHandlingService(res)
    return { status }
  }
}

export default ResponseHandlingService
