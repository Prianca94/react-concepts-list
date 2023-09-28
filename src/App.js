import { Link } from 'react-router-dom';
import './App.css';
import AppRoute from './AppRoutes/appRoute';
import Comp1 from './Components/HOC/comp1';
import Input from './Components/RenderPropsPattern/Input';
import Tab from './Components/CompoundPattern/Tab';
import { useState } from 'react';
import Home from './Components/CustomHook/home';
import Chat from './Components/CustomHook/chat';
import HomeNew from "./Components/Presentational-ContainerComp/Home";
import Form from "./Components/Presentational-ContainerComp/Form";
import Test from "./Components/ConditionalRendering/Test";
import Button from './Components/Presentational-ContainerComp/Button';
import AutomaticBatch from './Components/Automatic-Batching/automatic-batch';
import Transition from './Components/Tranistion/transition';
import DefferedValueExample from './Components/DefferedValue/defferedValueExample';
import UseIdexample from './Components/UseId/useIdexample';
import Memoexample from './Memoization/memoexample';
import MemoizationPassingFuncAsProp from './Memoization/memoizationPassingFuncAsProp';
import UseMemoExample from './Memoization/useMemoExample';
import Codespliting from './Components/Code-splitting/codespliting';
import LazyloadImages from './Components/LazyLoadImages/lazyloadImages';
import Immurabledatastructure from './Components/ImmutableDataStructure/immurabledatastructure';


export default function App() {

  const showValue=(value)=><>Value is {value}</>
  const multiple=(value)=><>Value is {value * 10}</>

  const [currentTabIndex,setCurrentTabIndex]=useState(1);
  const [istoggled,setToggled]=useState(false);

  const handleChange=(newIndex)=>{
    setCurrentTabIndex(newIndex);

  }
  return (
    <div>
       <h4 style={{"backgroundColor":"grey"}}>Immutable Data Structure</h4>
       <Immurabledatastructure/> 
      <br/>
         <h4 style={{"backgroundColor":"grey"}}>Lazy Load Images</h4>
       <LazyloadImages/> 
      <br/>
         <h4 style={{"backgroundColor":"grey"}}>Code Splitting</h4>
       <Codespliting/> 
      <br/>
   
      
      <h4 style={{"backgroundColor":"grey"}}>Memo Example Passing Primitive prop</h4>
       <Memoexample/> 
      <br/>
      <h4 style={{"backgroundColor":"grey"}}>Memo Example Passing Non-Primitive prop (UseCallback)</h4>
      <MemoizationPassingFuncAsProp/>
      <br/>
      <h4 style={{"backgroundColor":"grey"}}>Use Memo Example Passing useMemo()</h4>
       <UseMemoExample/> 
      <br/>
      <hr/>

      <h4 style={{"backgroundColor":"grey"}}>UseId Example</h4>
      <h4>Host</h4>
      <UseIdexample/>
      <h4>Guest</h4>
      <UseIdexample/><br/>
      <hr/>
      <h4 style={{"backgroundColor":"grey"}}>Presentational Container Component React Design Pattern</h4>
      <HomeNew/><br/>
      <Form/>
      <br/>
      <Button onClick={()=>setToggled(!istoggled)} text="Conditional Component"></Button><br/>
      {istoggled?<Test/>:""}
      <br/>
      <h4 style={{"backgroundColor":"grey"}}>Automatic Batching</h4>
      <AutomaticBatch/>
      <br/><hr/>
      <h4 style={{"backgroundColor":"grey"}}>Transition</h4>
      <Transition/>
      <h4 style={{"backgroundColor":"grey"}}>DefferValue Example</h4>
      <DefferedValueExample/>
      <h4 style={{"backgroundColor":"grey"}}>Render Props React Pattern</h4>
     <div><Comp1 randomnumber="12345"/></div>
      <Input renderTextBelow={showValue}/><br/>
      <Input renderTextBelow={multiple}/><br/>
       
      <div>
     
      <h4 style={{"backgroundColor":"grey"}}>Custom Hooks</h4>
     <Home/><br/>
     <Chat/>

      </div>
    <h4 style={{"backgroundColor":"grey"}}>Debouncing</h4>
      <div>
        <ul>
          <li>
          <Link to="/Debouncing">Debouncing</Link>
          </li>
          <h4 style={{"backgroundColor":"grey"}}>CallBackHell</h4>
          <li>
          <Link to="/CallBackHell">CallBackHell</Link>
          </li>
          <li></li>
        </ul>

    
       
      </div>

      <h4 style={{"backgroundColor":"grey"}}> Compound pattern</h4>
       <Tab currentTab={currentTabIndex} onChange={handleChange}>
        <Tab.HeadContainer>
          <Tab.Item label="Item one" index={1}/>
          <Tab.Item label="Item one" index={2}/>
          <Tab.Item label="Item one" index={3}/>
        </Tab.HeadContainer>
        <Tab.ContentContainer>
          <Tab.ContentItem index={1}>
            <h4>I am content one</h4>
          </Tab.ContentItem>
          <Tab.ContentItem index={2}>
            <h4>I am content two</h4>
          </Tab.ContentItem>       
          <Tab.ContentItem index={3}>
            <h4>I am content three</h4>
          </Tab.ContentItem>       
        </Tab.ContentContainer>
      </Tab> 
      <br/>
      <hr/>
      
      <AppRoute/>
    </div>
  
  );
}


