import React, { FC } from 'react'
import { TextField } from '@island.is/application/schema'
import { Box, Input } from '@island.is/island-ui/core'
import { FieldBaseProps } from '../../types'
import { useFormContext } from 'react-hook-form'

interface Props extends FieldBaseProps {
  field: TextField
}
const TextFormField: FC<Props> = ({ autoFocus, error, field, register }) => {
  const { id, name } = field
  const { clearErrors } = useFormContext()
  return (
    <Box paddingTop={2}>
      <Input
        id={id}
        name={id}
        label={name}
        ref={register}
        autoFocus={autoFocus}
        hasError={error !== undefined}
        errorMessage={error}
        onChange={() => {
          clearErrors(id)
        }}
      />
    </Box>
  )
}

export default TextFormField
