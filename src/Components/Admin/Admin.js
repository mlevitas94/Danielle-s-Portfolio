import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import Login from './Login';
import Logged from './Logged';

const Admin = (props) => {
    const {admin, setAdmin} = props


    return (
        <div className='page'>
            <div className='adminCont'>
                <Switch>
                    <Route exact path='/admin'>
                        {admin ? <Redirect to='/admin/logged' /> : <Login admin={admin} setAdmin={setAdmin} />}
                    </Route>
                    <Route exact path='/admin/logged'>
                        {!admin ? <Redirect to='/admin'/> : <Logged admin={admin} setAdmin={setAdmin} />}
                    </Route>
                </Switch>
            </div>

        </div>
    )
}

export default Admin