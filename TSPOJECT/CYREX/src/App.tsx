import Header from './components/Header/Header'
import { useEffect, useState } from 'react'
import { JSONResponse } from './types'





function App() {

  const [state, setState] = useState<string>('hello')

  const [resp, setResp] = useState<null | JSONResponse[]>(null)

  const handleGetData = async () => {
    const req = await fetch('https://jsonplaceholder.typicode.com/todos/')
    const response = await req.json()
    setResp(response)
  }
  useEffect(() => {
    handleGetData()
  }, [])

  useEffect(() => {
    // console.log(resp)
  }, [resp])

  if(resp){
    resp.map(() => {})
  }

  const arr: (number|boolean|string)[] = ['apple', 'banana', false, 1]
  const result = arr.filter((item) => {
    if(typeof item === 'string'){
      console.log('1')
    }
  })

  console.log(result)
  
  arr.map(()=>{})
  
  
    

  console.log('banana')

  

  return (
    <> 
      <Header state={state} setState = {setState} arr = {[1,2,3,4,5,6,7,8,9]} />

    </>
  )
}

export default App