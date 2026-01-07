import React, { useState,useEffect} from 'react'

const App = () => {
  const[principal,setPrincipal]=useState(0);
  const [interest, setInterest] = useState(0)
  const [years, setYears] = useState(0);
  const [emi, setEmi] = useState(0)

  const handleChange=(e)=>{
    console.log(e.target.id,e.target.value);
    const id=e.target.id;
    const value=parseInt(e.target.value);

    if(id=='principal'){
      setPrincipal(value);
    }
    else if(id==='interest')
    {
      setInterest(value);
    }
    else{
      setYears(value);
    }
  }

  const calculateEMI=()=>{
    let r=interest;
    if(principal && interest && years){
      r=r/12/100;
      const calcPow=Math.pow(1+r,years*12);
      const amount=principal*((r*calcPow)/(calcPow-1));
      setEmi(Math.round(amount));
    }
  }

  useEffect(() => {
    calculateEMI();
  }, [principal,interest,years])
  

  return (
    <div>
      <h1>Mortage Calculator</h1>
      <div>
        <p>Principle:</p>
        <input onChange={handleChange} type="number" name="" id="principal" />
        <p>Interest:</p>
        <input onChange={handleChange}  type="number" name="" id="interest" />
        <p>Years:</p>
        <input onChange={handleChange}  type="number" name="" id="year" />
      </div>
      <div>
        Your EMI is {emi} 
      </div>
    </div>
  )
}

export default App;