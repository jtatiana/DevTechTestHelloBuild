import { memo } from 'react'
import { TextField } from '@mui/material';
import { useField } from 'formik'

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <TextField
      label={label}
      variant="outlined"
      helperText={meta.touched ? meta.error : ""}
      error={meta.touched && Boolean(meta.error)}
      {...field} {...props}
    />
  )
}
export default memo(Input)
