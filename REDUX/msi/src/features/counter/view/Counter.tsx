import { increment, decrement } from "../model/counterAction"
import { useSelector, useDispatch } from "react-redux"

const Counter = () => {

    const countValue = useSelector((state) => state.counter.countValue)

    console.log(countValue)

    const dispatch = useDispatch()

    return(
        <>
            <p>{countValue}</p>
            <div>
                <button onClick={() => dispatch(increment())}>Increase</button>
                <br />
                <br />
                <button onClick={() => dispatch(decrement())}>Decrease</button>
            </div>
        
        </>
    )
}

export default Counter