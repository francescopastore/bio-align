import * as React from 'react'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'

import EditIcon from '@mui/icons-material/Edit'
import ShuffleIcon from '@mui/icons-material/Shuffle'

export default function FormInputString(props) {
  const maxLength = 8
  const [value, setValue] = React.useState(props.default)

  React.useEffect(() => {
    setValue(props.default)
  }, [props.default])

  const handle = (e) => {
    const value = e.target.value.toUpperCase()
    changeValue(value)
  }

  const changeValue = (value) => {
    setValue(value)
    if (!isError(value)) {
      props.handle(value)
    }
  }

  const isError = (value) => {
    return value.length > maxLength
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
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                data-testid="shuffle-button"
                onClick={() => {
                  let value = shuffle(4, maxLength)
                  changeValue(value)
                }}
              >
                <ShuffleIcon></ShuffleIcon>
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  )
}

function shuffle(minLength, maxLength) {
  let string = ''
  let length = minLength + Math.round(Math.random() * (maxLength - minLength))

  for (let i = 0; i < length; i++) {
    let rand = Math.round(Math.random() * 3)
    switch (rand) {
      default:
        string += 'A'
        break
      case 1:
        string += 'C'
        break
      case 2:
        string += 'G'
        break
      case 3:
        string += 'T'
        break
    }
  }

  return string
}
