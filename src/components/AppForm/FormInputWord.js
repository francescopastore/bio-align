import * as React from 'react'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import EditIcon from '@mui/icons-material/Edit'

/*
 * props: label, defaultValue, handleChange
 */
export default function FormInputWord(props) {
  const [value, setValue] = React.useState(props.defaultValue)
  const handleChange = (e) => {
    const value = e.target.value.toUpperCase()
    setValue(value)
    props.handleChange(value)
  }
  const isError = () => {
    return value.length > 20
  }
  return (
    <FormControl fullWidth margin="normal">
      <TextField
        onChange={handleChange}
        label={props.label}
        value={value}
        error={isError()}
        variant="outlined"
        helperText={isError() ? 'Max 20 alphabetic characters' : ''}
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
