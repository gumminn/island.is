import { ExternalData } from '@island.is/application/core'
import { Address } from '@island.is/api/schema'
import { Applications } from './dataProviders/APIDataTypes'

export const hasHealthInsurance = (externalData: ExternalData) => {
  const isInsured = externalData?.healthInsurance?.data
  return isInsured === true
}

export const hasActiveApplication = (externalData: ExternalData) => {
  const applications = externalData?.applications?.data as Applications[]
  const pendingApplications = applications?.filter(
    (application) =>
      application.state === 'draft' ||
      application.state === 'inReview' ||
      application.state === 'missingInfo',
  )
  return pendingApplications?.length > 1
}

export const hasOldPendingApplications = (externalData: ExternalData) => {
  const oldPendingApplications = externalData?.oldPendingApplications
    ?.data as string[]

  return oldPendingApplications?.length > 0
}

export const hasIcelandicAddress = (externalData: ExternalData) => {
  const address = (externalData?.nationalRegistry?.data as {
    address?: Address
  })?.address

  // Users that lives abroad are registered either without address or without streetaddress and postal code. Hence the check below.
  return !address || (address && !(address.streetAddress && address.postalCode))
}

export const isFormerCountryOutsideEu = (externalData: ExternalData) => {
  // TODO:
  // Get EU countries
  // Get FormerCountry
  // Return if FormerCountry is not in EU list
}

export const shouldShowModal = (externalData: ExternalData) => {
  return (
    hasHealthInsurance(externalData) ||
    hasActiveApplication(externalData) ||
    hasOldPendingApplications(externalData) ||
    hasIcelandicAddress(externalData)
  ) // || isFormerCountryOutsideEu(externalData)
}
