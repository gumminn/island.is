import React, { ReactNode } from 'react'
import {
  GridRow,
  GridColumn,
  GridContainer,
  Box,
  Stack,
} from '@island.is/island-ui/core'


  
  const ContentWrapper: React.FC = ({ children }) => {
    return (<GridContainer>
      <GridRow>
        <GridColumn span={['12/12', '12/12', '7/12', '8/12', '9/12']}>
          {children}
        </GridColumn>
        <GridColumn span={['12/12', '12/12', '5/12', '4/12', '3/12']}>
          Side bar
        </GridColumn>
      </GridRow>
    </GridContainer>)
  }


export default ContentWrapper