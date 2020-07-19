import React, {useEffect} from 'react'
import {Router} from '@reach/router'
import {navigate} from 'gatsby'
import Layout from '../components/Layout'
import Profile from '../components/Profile'
import RouteBase from '../components/Route-base'
import RouteSecret from '../components/Route-secret'
import RouteLogin from '../components/Route-login'

const Dashboard = ({location}) => {
  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate('/dashboard/login', {replace: true})
    }
  }, [])
  return (
    <Layout>
      <Profile />
      <p>TODO: Create a dashboard</p>
      <Router>
        <RouteBase path="/dashboard/base" />
        <RouteSecret path="/dashboard/secret" />
        <RouteLogin path="/dashboard/login" />
      </Router>
    </Layout>
  )
}

export default Dashboard
