const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)

function Counter() {
  const [countNum, setCountNum] = React.useState(0)
  const [title, setTitle] = React.useState("CCAC")

  const updateCounter = (n) => {
    if(countNum+n < 0) {
      return
    }
    // setCountNum( (prv)=>{
    //   console.log(prv)
    //   return prv+n
    // })
    // setCountNum( prv => prv + n)
    // console.log(countNum)
    setCountNum(countNum + n)
  }
  return (
   <div className='counter '>
      <button className = 'btn-hover1 color-11' onClick = {()=>updateCounter(-1)}> - </button>
      <h3>{countNum}</h3>
      <button className = 'btn-hover1 color-11'onClick = {()=>updateCounter(1)}> + </button>
      <button className = 'btn-hover1 color-12'onClick = {()=>updateCounter(-countNum)}> C </button>
   </div>
  )
}

function SumInfo(props)  {
  console.log(props)
  const stTitle = {
    color : props.color,
    fontSize : props.size==='big' ? '50px' : '40px'
  }
  return (
    <div className='suminfo'>
      {/* <h1 style={stTitle}>Sum = 0</h1> */}
      <h1 style={ { color: props.color, fontSize: '50px' } }>Sum = 0</h1>
    </div>
  )
}



function App(){
  const [counters, setCounters] = React.useState([]);

  const addCounter = () => {
      setCounters([...counters, <Counter key={counters.length} />]);
  };

  return(
      <>
      <h1 className='text-center'>Codecamp Academy 01</h1><br/>
      <button  className='btn-hover color-10' onClick={addCounter}>Add Counter</button>
      <SumInfo color="" size="big"/>
      {counters}
      </>
  )
}

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

// function App() {
//   const [counters, setCounters] = React.useState([
//     {id: 1, number: 5},
//     {id: 2, number: 9},
//     {id: 3, number: 7},
//   ])
//   return (
//     <>
//       <h1 className="text-center">Codecamp Academy 01</h1>
//       <button className="text-center">Add Counter</button>
//       <SumInfo />

//       {counters.map( el => {
//         let output = <Counter key={el.id} item={el} />
//         return output
//       })}
//     </>
//   );
// }

// function SumInfo() {
//   return (
//     <div className="suminfo">
//       <h1> Sum = 0</h1>
//     </div>
//   );
// }

// function Counter(props) {
  
//   return (
//     <div className="counter">
//       <button>-</button>
//       <h3>{props.item.number}</h3>
//       <button >+</button>
//       <button>C</button>
//     </div>
//   );
// }
