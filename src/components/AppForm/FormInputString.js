import * as React from 'react'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import EditIcon from '@mui/icons-material/Edit'

/*
 * props: label, defaultValue, handleChange
 */
export default function FormInputString(props) {
  const [value, setValue] = React.useState(props.default)

  const handle = (e) => {
    const value = e.target.value.toUpperCase()
    setValue(value)
    if (!isError(value)) {
      props.handle(value)
    }
  }

  const isError = (value) => {
    return value.length > 8
  }

  return (
    <FormControl fullWidth margin="normal">
      <TextField
        onChange={handle}
        label={props.label}
        value={value}
        variant="outlined"
        error={isError(value)}
        helperText={isError(value) ? 'Max 8 alphabetic characters' : ''}
        data-testid="value-input"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EditIcon />
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  )
}
