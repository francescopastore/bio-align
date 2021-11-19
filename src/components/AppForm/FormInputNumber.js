import * as React from 'react'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputAdornment from '@mui/material/InputAdornment'
import LooksOneIcon from '@mui/icons-material/LooksOne'
/*
 * props: label, defaultValue, handleChange
 */
export default function FormInputNumber(props) {
  const [value, setValue] = React.useState(props.defaultValue)

  const handleChange = (e) => {
    const value = parseInt(e.target.value)
    if (isNaN(value)) {
      setValue(0)
    } else {
      setValue(value)
    }
    props.handleChange(value)
  }

  const isError = () => {
    return isNaN(parseInt(value)) || value < -10 || value > 10
  }

  return (
    <FormControl margin="normal" sx={props.style}>
      <TextField
        onChange={handleChange}
        label={props.label}
        value={value}
        error={isError()}
        variant="outlined"
        helperText={isError()}
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
