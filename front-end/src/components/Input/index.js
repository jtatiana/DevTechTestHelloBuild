import { memo } from 'react'
// Formik
import { useField } from 'formik'
// material ui
import { TextField } from '@mui/material';

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
