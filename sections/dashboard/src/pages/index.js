import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/Layout'

export default () => (
  <Layout>
    <h1>this app rock</h1>
    <p>Login to find out why</p>
    <Link to="/dashboard"> Go to the dashboard</Link>
  </Layout>
)
