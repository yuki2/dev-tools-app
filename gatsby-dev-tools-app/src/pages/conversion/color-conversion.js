import React from 'react'

import App from '../../components/app'
import SEO from '../../components/seo'
import { ColorConversion } from '../../modules/conversion'

const ColorConversionPage = () => (
  <App>
    <SEO title="Color Conversion" />
    <ColorConversion />
  </App>
)

export default ColorConversionPage
