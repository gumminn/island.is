import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import './styles.css'
import Header from '../components/layout/header'
import ContentWrapper from '../components/layout/content-wrapper'
import UserProvider from '../components/util/UserProvider'
import { GridRow, GridColumn, GridContainer } from '@island.is/island-ui/core'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider devLoggedIn>
      <Head>
        <title>Atvinnuleysisbætur</title>
      </Head>
      <GridContainer>
        <GridRow>
          <GridColumn span={['12/12', '12/12', '12/12', '12/12', '12/12']}>
            <Header></Header>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn>
            <ContentWrapper>
              <Component {...pageProps} />
            </ContentWrapper>      
          </GridColumn>
        </GridRow>
      </GridContainer>
    </UserProvider>
  )
}

export default CustomApp
