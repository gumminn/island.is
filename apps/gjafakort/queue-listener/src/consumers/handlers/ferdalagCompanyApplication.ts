import {
  GjafakortCompanyApplicationMessage,
  GjafakortCompanyApplicationRoutingKey,
  GjafakortApplicationExchange,
} from '@island.is/message-queue'
import { logger } from '@island.is/logging'

import { RoutingKeyError } from './errors'
import { ferdalagApi } from './api'

export const exchangeName: GjafakortApplicationExchange =
  'gjafakort-application-updates'

export const routingKeys: GjafakortCompanyApplicationRoutingKey[] = [
  'gjafakort:approved',
  'gjafakort:manual-approved',
]

export const queueName = 'gjafakort-ferdalag-company-application'

export const handler = async (
  message: GjafakortCompanyApplicationMessage,
  routingKey: GjafakortCompanyApplicationRoutingKey,
) => {
  logger.debug(
    `receiving message ${message.id} on ${queueName} with routingKey ${routingKey}`,
    message,
  )

  if (routingKey === 'gjafakort:approved') {
    await ferdalagApi.updateProvider(message)
  } else if (routingKey === 'gjafakort:manual-approved') {
    await ferdalagApi.createProvider(message)
  } else {
    throw new RoutingKeyError(queueName, routingKey)
  }

  logger.info(
    `Successfully processed message ${message.id} on ${queueName} with routingKey ${routingKey}`,
  )
}
