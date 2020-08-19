import React from 'react'
import {Switch, Redirect} from 'react-router-dom'
import {LayoutRoute} from 'src/components'
import {MainLayout} from 'layouts'
//import {} from 'views'

const Routes = () => <Switch>
        <Redirect exact from="/" {/*to={}*/}/>
        <LayoutRoute exact path="/home" component={} layout={MainLayout}/>
    </Switch>

export default Routes
