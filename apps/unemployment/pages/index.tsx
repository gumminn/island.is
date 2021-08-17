import React from 'react'
import {
  Box,
  Input,
  Button,
  Text
} from '@island.is/island-ui/core'
import { useRouter } from 'next/router'

export function Index() {
  const router = useRouter()
  
  const login = () => {
    // TODO: Check where the user is in the application
    router.push('/application/1')
  }

  return (
    <Box>
      <Text>Velkomin/n á vef atvinnuleysisbóta.</Text>
      <Text>Vinsamlegast skráðu þig inn rafrænt til að halda áfram</Text>
      <Input
        name="tel"
        placeholder="Símanúmer"
        data-cy="tel"
        />
      <Box>
          <Button onClick={login} width="fluid">
            Innskrá
          </Button>
        </Box>
      </Box>
  )
}

export default Index
