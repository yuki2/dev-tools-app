import React from 'react'

import App from '../../components/app'
import SEO from '../../components/seo'
import { NumberConversion } from '../../modules/conversion'

const NumberConversionPage = () => (
  <App>
    <SEO title="Number Conversion" />
    <NumberConversion />
  </App>
)

export default NumberConversionPage
