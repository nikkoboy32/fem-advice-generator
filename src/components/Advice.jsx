import React, { useEffect, useState } from "react"

export default function Advice() {

    const [advice, setAdvice] = useState(null)
    const [loading, setLoading] = useState(true);
    

    const fetchAdvice = () => {
        setLoading(true)
        fetch(`https://api.adviceslip.com/advice?${new Date().getTime()}`)
        .then(res => res.json())
        .then(data => {
            setAdvice(data.slip)
            setLoading(false)
        })
    }

    useEffect(()=> {
        fetchAdvice() 
    },[])

    function handleClick() {
        fetchAdvice()
    }

    if (loading) {
        return <p className="loading">Loading...</p>;
    }
   

   console.log(advice)

    return (
        <div className="advice_container">
            <p>ADVICE #{advice.id}</p>
           <div className="advice">
              <h2>"{advice.advice}"</h2>
           </div>
           <div className="btn_container" onClick={handleClick}>
             <button className="generate_btn"><img src="images/icon-dice.svg" alt="" /></button>
           </div>
        </div>
    )
}