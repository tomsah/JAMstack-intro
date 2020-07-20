import React, {useEffect, useState} from 'react'
import {Router} from '@reach/router'
import {IdentityModal} from 'react-netlify-identity-widget'
import {navigate} from 'gatsby'
import Layout from '../components/Layout'
import Profile from '../components/Profile'
import PrivateRoute from '../components/Private-route'
import RouteBase from '../components/Route-base'
import RouteSecret from '../components/Route-secret'
import RouteLogin from '../components/Route-login'
import 'react-netlify-identity-widget/styles.css'
import '@reach/dialog/styles.css'
import '@reach/tabs/styles.css'

const Dashboard = ({location}) => {
  const [isVisible, setVisibility] = useState(true)

  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate('/dashboard/login', {replace: true})
    }
  })

  const showModal = () => setVisibility(true)

  return (
    <Layout>
      <Profile showModal={showModal} />
      <Router>
        <PrivateRoute path="/dashboard/base" component={RouteBase} />
        <PrivateRoute path="/dashboard/secret" component={RouteSecret} />
        <RouteLogin path="/dashboard/login" showModal={showModal} />
      </Router>
      <IdentityModal
        aria-labelledby="login"
        showDialog={isVisible}
        onCloseDialog={() => setVisibility(false)}
      />
    </Layout>
  )
}

export default Dashboard
