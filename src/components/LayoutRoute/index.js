import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
// object destructuring renamed to jsx type
const index = ({ layout: Layout, component: Component, ...rest }) => <Route
        {...rest}
        render={routeProps => (
            <Layout>
                <Component {...routeProps}/>
            </Layout>
        )}
    />
    
index.propTypes = {
    component: PropTypes.any.isRequired,
    layout: PropTypes.any.isRequired,
    path: PropTypes.string
}

export default index
