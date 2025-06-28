
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { discernment, increment } from './redux/features/conuter/counterSlice'

function App() {
  

  const dispatch = useDispatch()
  const {count} = useSelector((state)=> state.conuter)

    const handleIncrement =()=>{
      dispatch(increment())
    }
 const handleDiscrement = () =>{
  dispatch(discernment())
 }

  return (
    <>
      <div>
        <h1 > Learning Redux</h1>
        <button onClick={handleIncrement}>Increment</button>
        <div>{count}</div>
        <button onClick={handleDiscrement}>Discernment</button>
      </div>
    </>
  )
}

export default App
