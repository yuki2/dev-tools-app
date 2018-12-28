import React from 'react'

import App from '../../components/app'
import SEO from '../../components/seo'
import { Base64Encode } from '../../modules/encode'

const Base64EncodePage = () => (
  <App>
    <SEO title="Base64 Encode" keywords={[`base64`]} />
    <Base64Encode />
  </App>
)

export default Base64EncodePage
