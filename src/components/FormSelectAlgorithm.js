import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import InputAdornment from '@mui/material/InputAdornment'

import FunctionsIcon from '@mui/icons-material/Functions'

import AppCard from './AppCard'

export default function FormSelectAlgorithm(props) {
  const [algorithm, setAlgorithm] = React.useState('edit')

  const handleChange = (event) => {
    setAlgorithm(event.target.value)
  }

  return (
    <AppCard>
      <FormControl fullWidth>
        <InputLabel id="algorithm-label">Algorithm</InputLabel>
        <Select
          labelId="algorithm-label"
          id="algorithm"
          label="Algorithm"
          value={algorithm}
          onChange={handleChange}
          startAdornment={
            <InputAdornment position="start">
              <FunctionsIcon />
            </InputAdornment>
          }
        >
          <MenuItem value="edit">Edit Distance</MenuItem>
          <MenuItem value="lcs">Longest common subsequence</MenuItem>
          <MenuItem value="nw">Needleman–Wunsch</MenuItem>
          <MenuItem value="sw">Smith–Waterman</MenuItem>
        </Select>
      </FormControl>
    </AppCard>
  )
}
