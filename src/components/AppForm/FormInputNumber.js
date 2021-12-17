import * as React from 'react'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputAdornment from '@mui/material/InputAdornment'
import LooksOneIcon from '@mui/icons-material/LooksOne'

export default function FormInputNumber(props) {
  const [value, setValue] = React.useState(props.default)

  React.useEffect(() => {
    setValue(props.default)
  }, [props.default])

  const handle = (e) => {
    const value = e.target.value
    setValue(value)
    if (!isError(value) && !isNaN(value)) {
      console.log(value)
      props.handle(parseInt(value))
    }
  }

  const isError = (v) => {
    return (isNaN(parseInt(v)) && v !== '-') || v < -10 || v > 10
  }

  return (
    <FormControl margin="normal" sx={props.style}>
      <TextField
        disabled={props.disabled}
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
