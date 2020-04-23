import React from 'react'
import { Switch, Route} from "react-router-dom";
import Landing from './Components/Landing/Landing'

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/'>
                <Landing/>
            </Route>
        </Switch>
    )
}
export default Routes