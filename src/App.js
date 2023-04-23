import { Fragment } from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import{publicRoutes}from '~/routes';
import{DefaulLayout} from '~/component/Layout';
function App() {
    return (
    <Router>
    <div className="App">
       <Routes>
     {publicRoutes.map((route,index)=>{
      const Page=route.component
        let Layout=DefaulLayout
        if(route.layout){
        Layout=route.layout
        }else if(route.layout===null){
          Layout=Fragment;

        }
        return(<Route key={index} path={route.path} element={<Layout><Page/></Layout>}/>)

     
     })}

       </Routes>
   </div>
    </Router>
    )
}

export default App;
