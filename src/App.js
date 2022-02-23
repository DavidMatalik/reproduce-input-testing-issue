import { Button, TextField } from '@mui/material'
import { useFormik } from 'formik'
import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const formik = useFormik({
    initialValues: {
      someInput: '',
    },
    onSubmit: async (values) => {
      setCounter(counter + 1)
      await Promise.resolve('Promise resolved')
    },
  })

  return (
    <div className='App'>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          className='job-input-field'
          name='someInput'
          label='Some Input'
          variant='standard'
          value={formik.values.jobTitle}
          onChange={formik.handleChange}
        />
        <Button variant='outlined' type='submit'>
          Submit
        </Button>
        <h1>{counter}</h1>
      </form>
    </div>
  )
}

export default App
