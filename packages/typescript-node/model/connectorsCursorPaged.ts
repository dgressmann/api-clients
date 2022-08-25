/**
 * Miro API
 * Miro API
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {ConnectorWithLinks} from './connectorWithLinks'
import {PageLinks} from './pageLinks'

export class ConnectorsCursorPaged {
  /**
   * A cursor-paginated method returns a portion of the total set of results based on the `limit` specified and a `cursor` that points to the next portion of the results. To retrieve the next set of results of the collection, set the `cursor` parameter in your next request to the value returned in this parameter.
   */
  'cursor'?: string
  /**
   * Contains the result data.
   */
  'data'?: Array<ConnectorWithLinks>
  /**
   * Maximum number of results returned based on the `limit` specified in the request. For example, if there are `20` results, the request has no `cursor` value, and the `limit` is set to `20`,the `size` of the results will be `20`. The rest of the results will not be returned. To retrieve the rest of the results, you must make another request and set the appropriate value for the `cursor` parameter value that you obtained from the response.
   */
  'limit'?: number
  'links'?: PageLinks
  /**
   * Number of results returned in the response considering the `cursor` and the `limit` values sent in the request. For example, if there are `20` results, the request does not have a `cursor` value, and the `limit` set to `10`, the `size` of the results will be `10`.<br>In this example, the response will also return a cursor value that can be used to retrieve the next set of 10 remaining results in the collection.
   */
  'size'?: number
  'total'?: number

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'cursor',
      baseName: 'cursor',
      type: 'string',
    },
    {
      name: 'data',
      baseName: 'data',
      type: 'Array<ConnectorWithLinks>',
    },
    {
      name: 'limit',
      baseName: 'limit',
      type: 'number',
    },
    {
      name: 'links',
      baseName: 'links',
      type: 'PageLinks',
    },
    {
      name: 'size',
      baseName: 'size',
      type: 'number',
    },
    {
      name: 'total',
      baseName: 'total',
      type: 'number',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return ConnectorsCursorPaged.attributeTypeMap
  }
}
