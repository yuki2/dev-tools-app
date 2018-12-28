import React from 'react'

import App from '../components/app'
import SEO from '../components/seo'
import Home from '../modules/home/home'

const IndexPage = () => (
  <App>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Home />
  </App>
)

export default IndexPage
