import React from 'react'

import App from '../../components/app'
import SEO from '../../components/seo'
import { URLEncode } from '../../modules/encode'

const URLEncodePage = () => (
  <App>
    <SEO title="URL encode" keywords={[`url`]} />
    <URLEncode />
  </App>
)

export default URLEncodePage
