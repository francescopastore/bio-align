import * as React from 'react'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import EditIcon from '@mui/icons-material/Edit'

export default function FormInputWord() {
  return (
    <FormControl fullWidth margin="normal">
      <TextField
        label="Word"
        variant="outlined"
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
