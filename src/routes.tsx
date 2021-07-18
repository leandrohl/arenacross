
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Training from './pages/Training'

export const Routes = () => {
    return(
        <Switch>
			<Route component={Home} path="/" exact/>  
            <Route component={Training} path="/training" exact/> 
        </Switch>
    )
}