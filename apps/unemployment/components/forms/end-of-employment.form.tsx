import React, { useContext, useEffect, useState } from 'react'
import {
  Stack,
  Box,
  Select,
  Button,
  DatePicker,
  Text,
  Columns,
  Column
} from '@island.is/island-ui/core'
import { useForm, FormProvider, Controller } from 'react-hook-form'
import { ApplicationData } from './../../entities/application-data'
import { ApplicationService } from './../../services/application.service'
import { ServiceContext } from '../util/ServicesProvider'
import { EndOfEmployment } from './../../entities/end-of-employment'
import { UnemploymentStep } from './../../entities/enums/unemployment-step.enum'

interface PropTypes {
  onBack: () => void
  onSubmit: (data) => void
  defaultValues: ApplicationData
}

const EndOfEmploymentForm: React.FC<PropTypes> = ({
  onBack,
  onSubmit,
  defaultValues,
}: PropTypes) => {
  const hookFormData = useForm<ApplicationData>()
  const context = useContext(ServiceContext)
  const [reasons, setReasons] = useState<string[]>([])
  const [circumStances, setCircumstances] = useState<
    { value: string; label: string }[]
  >([])

  const submit = () => {
    const application = defaultValues
    if (!application.endOfEmployment) {
      application.endOfEmployment = new EndOfEmployment()
    }

    application.endOfEmployment.dateFrom = hookFormData.getValues().endOfEmployment.dateFrom
    application.endOfEmployment.howUnemploymentCameAbout = hookFormData.getValues().endOfEmployment.howUnemploymentCameAbout
    application.endOfEmployment.reasonForUnemployment = hookFormData.getValues().endOfEmployment.reasonForUnemployment
    application.stepCompleted = UnemploymentStep.EndOfEmployment
    ApplicationService.saveApplication(application)
    onSubmit(hookFormData.getValues())
  }

  useEffect(() => {
    async function loadReasons() {
      if (reasons.length === 0) {
        setReasons(
          await context.directorateOfLabourService.getReasonForUnEmployment(),
        )
      }
      if (circumStances.length === 0) {
        setCircumstances(
          (
            await context.directorateOfLabourService.getCircumstancesForUnEmployment()
          ).map((x) => ({ label: x, value: x })),
        )
      }
    }
    loadReasons()
  }, [defaultValues])

  return (
    <Box paddingY={10}>

      <Stack space={3}>
        <FormProvider {...hookFormData}>
          <Box
            component="form"
            display="flex"
            flexDirection="column"
            justifyContent="spaceBetween"
            height="full"
            onSubmit={submit}
          >
            <Stack space={2}>
              <Text variant="h1" marginBottom={3}>Atvinnulok</Text>

              <Box width="half">
                <Controller
                  name="endOfEmployment.dateFrom"
                  defaultValue={
                    defaultValues?.endOfEmployment?.dateFrom
                      ? defaultValues?.endOfEmployment?.dateFrom
                      : new Date()
                  }
                  render={({ onChange, value }) => (
                    <DatePicker
                      label="Frá hvaða dag hefur þú verið atvinnulaus"
                      placeholderText="Veldu dagsetningu"
                      locale="is"
                      selected={value}
                      handleChange={onChange}
                    />
                  )}
                />
              </Box>
            </Stack>

            <Stack space={2}>
              <br />
              <Box width="half">

                <Controller
                  name="endOfEmployment.howUnemploymentCameAbout"
                  defaultValue={
                    defaultValues?.endOfEmployment?.howUnemploymentCameAbout
                  }
                  render={({ onChange, value }) => {
                    return (
                      <Select
                        label="Hvað lýsir best þínum aðstæðum"
                        name="endOfEmployment.howUnemploymentCameAbout"
                        options={circumStances}
                        placeholder="Veldu ástæðu"
                        value={circumStances.find(
                          (option) =>
                            option.value ===
                            defaultValues?.endOfEmployment?.howUnemploymentCameAbout
                        )}
                        onChange={onChange}
                      />
                    )
                  }}
                />
              </Box>

            </Stack>

            <Stack space={2}>
              <br />
              <Box width="half">

                <Controller
                  name="endOfEmployment.reasonForUnemployment"
                  defaultValue={
                    defaultValues?.endOfEmployment?.reasonForUnemployment
                  }
                  render={({ onChange, value }) => {
                    return (
                      <Select
                        label="Hvað lýsir starfslokum þínum best"
                        name="endOfEmployment.reasonForUnemployment"
                        options={reasons.map((x) => ({ label: x, value: x }))}
                        placeholder="Veldu ástæðu"
                        defaultValue={reasons
                          .map((x) => ({ label: x, value: x }))
                          .find((option) => option.value === defaultValues?.endOfEmployment?.reasonForUnemployment)}
                        onChange={onChange}
                      />
                    )
                  }}
                />
              </Box>

            </Stack>
          </Box>

          <Box width="half" paddingTop={5} >
            <Columns space={5}>
              <Column>
                <Button onClick={onBack} variant="ghost">
                  Til baka
            </Button>
              </Column>
              <Column>
                <Button onClick={submit} >
                  Næsta skref
                </Button>
              </Column>
            </Columns>
          </Box>
        </FormProvider>
      </Stack>
    </Box>

  )
}

export default EndOfEmploymentForm
