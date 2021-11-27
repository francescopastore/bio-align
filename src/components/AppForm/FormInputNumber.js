import * as React from 'react'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputAdornment from '@mui/material/InputAdornment'
import LooksOneIcon from '@mui/icons-material/LooksOne'

/*
 * props: label, defaultValue, handleChange
 */
export default function FormInputNumber(props) {
  const [value, setValue] = React.useState(props.default)

  const handle = (e) => {
    const value = parseInt(e.target.value)
    if (isError(value)) {
      setValue(0)
      props.handle(0)
    } else {
      setValue(value)
      props.handle(value)
    }
  }

  const isError = (v) => {
    return isNaN(parseInt(v)) || v < -10 || v > 10
  }

  return (
    <FormControl margin="normal" sx={props.style}>
      <TextField
        onChange={handle}
        label={props.label}
        value={value}
        error={isError(value)}
        helperText={isError(value) ? '' : ''}
        variant="outlined"
        data-testid="value-input"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LooksOneIcon />
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  )
}
