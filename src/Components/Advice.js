import {useState} from 'react'
import './Advice.css'
export default function Advice(){
    const [advice, setAdvice] = useState('Please Click The Button To Get Advice');
    const [count,setCount]=useState(0)

    async function getAdvice(){
        const res = await fetch('https://api.adviceslip.com/advice')
        const data =await res.json()
        console.log(res)
        console.log(data)
        setAdvice(data.slip.advice)
        setCount(count+1)



    }
    return(
        <div>
            <div className='Content-Cont'>
            <h3>{advice}</h3>
            <button onClick={getAdvice}>Get Advice</button>
            <p>You have read <b style={{width:'auto',height:'auto',backgroundColor:'white',borderRadius:'50px',padding:"5px"}}>{count}</b> pieces of advice</p>
            </div>
        </div>

    )
}