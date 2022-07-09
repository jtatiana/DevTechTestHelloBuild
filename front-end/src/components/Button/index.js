import { Button } from '@mui/material';
import { memo } from 'react'

const Submit = ({ children, ...props }) => {
  return (
    <Button variant="contained"{...props}>{children}</Button>
  )
}
export default memo(Submit)
