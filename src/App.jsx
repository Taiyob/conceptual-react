import './App.css'
import Card from './component/Card/Card'
import Cards from './component/SingleCard/Cards'
import DynamicCard from './component/DynamicCard/DynamicCard'
import DynamicUiCard from './component/DynamicUiCard/DynamicUiCard';
import FullObjectPass from './component/FullObjectPass/FullObjectPass';
import Example from './component/Example/Example';
import UseState from './component/UseState/UseState';
import StateArray from './component/StateArray/StateArray';
import FetchData from './component/FetchData/FetchData';
import PropsDrilling from './component/PropsDrilling/PropsDrilling';

// function Greetings() {
//   return (
//     <>
//       <h1 className='text-4xl text-center'>Hellow Everyone</h1>
//       <Person></Person>
//       <Message></Message>
//     </>
//   )
// }

// function Person() {
//   return <h1>Zayed Khan</h1>
// }

// function Message() {
//   return <h2>Banglar Tiger...</h2>
// }

function App() {
  let titles = 'My Dynamic Title by props';
  let anotherTitle = 'I am frm another props';
  let views = '500k';
  let moreView = '1000k'
  let objElement = {
    title:'I am from object element',
  }
  let uiObj = {
    title:'This is fourth from UI Object',
    views:'1020k',
  };
  const data = [
    {id:1,name:'Item 1'},
    {id:2,name:'Item 2'},
    {id:3,name:'Item 3'},
  ];
  return (
    <>
      <h1 className='text-center text-4xl font-bold text-white mb-5'>Welcome to my Card</h1>
      <div className="grid grid-cols-3 gap-4 px-12">
          {/* <h2 className='text-center text-3xl'>Hellow {8+8}</h2>
          <div className='text-center'>
            <button className='btn btn-secondary'>Button</button> 
          </div>
          <Greetings></Greetings> */}
          <Card></Card>
          <Card></Card>
          <Card></Card>

          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>

          <DynamicCard titles={titles} views={views}></DynamicCard>
          <DynamicCard titles={objElement.title} views={moreView}></DynamicCard>
          <DynamicCard titles={objElement.title} views={moreView}></DynamicCard>

          <DynamicCard titles={anotherTitle} views={views}></DynamicCard>

          <DynamicUiCard title={uiObj.title} view={uiObj.views}></DynamicUiCard>
          <DynamicUiCard title={uiObj.title} view={uiObj.views}></DynamicUiCard>
          <DynamicUiCard title={uiObj.title} view={uiObj.views}></DynamicUiCard>

          {
            data.map((item)=>{
              return <DynamicUiCard  title={item.name} view={item.id} key={item.id}></DynamicUiCard>
            })
          }

          {
            data.map((element)=>{
              return <FullObjectPass key={element.id} data={element}></FullObjectPass>
            })
          }

          <Example>
            <p>Props</p>
          </Example>

          <UseState></UseState>

          <StateArray></StateArray>

          <FetchData></FetchData>

          <PropsDrilling></PropsDrilling>
      </div>
    </>
  )
}

export default App
