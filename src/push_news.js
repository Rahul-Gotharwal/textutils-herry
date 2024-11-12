
import "./App.css";
import News_nav from "./News-Comp/News_nav";
import News from "./News-Comp/News";


const  App = ()=> {
    return (
     <>
      <div>
      <News_nav/> 
      <News key="general" pageSize={6} country="in" category="general"/>
      </div>
      </>
    
    )
  
}
export default App;
