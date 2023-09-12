import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
    console.log("Este Header funciona")
return(
    <div>
        <h1>{props.course}</h1>
    </div>
    )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercises={props.exercises1}/>
      <Part part={props.part2} exercises={props.exercises2}/>
      <Part part={props.part3} exercises={props.exercises3}/>
    </div>
  )
}
const Part = (props) => {
  console.log("Este Part Funciona")
    return(
        <div>
            <p>{props.part} {props.exercises}</p>
        </div>
    )
}
const Total = (props) => {
  console.log("Este TOTAL Funciona")
    return(
        <div>
            <p>{props.total}</p>
        </div>
    )
}



const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
const total = part1.exercises + part2.exercises + part3.exercises

  return (
    <div>
      <Header course={course} />
      <Content part1={part1.name + " " + part1.exercises} part2={part2.name + " " + part2.exercises} part3={part3.name + " " + part3.exercises} />
      <Total total={"Cantidad total de ejercicios: " + total} />
    </div >
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

