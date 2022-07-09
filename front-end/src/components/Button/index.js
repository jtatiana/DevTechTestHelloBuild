import { memo } from 'react'
// material ui
import { Button } from '@mui/material';

const Submit = ({ children, ...props }) => {
  return (
    <Button variant="contained"{...props}>{children}</Button>
  )
}
export default memo(Submit)
