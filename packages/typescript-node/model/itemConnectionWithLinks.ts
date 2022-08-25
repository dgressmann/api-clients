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

import {RelativeOffset} from './relativeOffset'
import {SelfLink} from './selfLink'

/**
 * The starting point of the connector.
 */
export class ItemConnectionWithLinks {
  /**
   * Unique identifier (ID) of the item the connector is attached to.
   */
  'id'?: string
  'links'?: SelfLink
  'position'?: RelativeOffset

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'id',
      baseName: 'id',
      type: 'string',
    },
    {
      name: 'links',
      baseName: 'links',
      type: 'SelfLink',
    },
    {
      name: 'position',
      baseName: 'position',
      type: 'RelativeOffset',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return ItemConnectionWithLinks.attributeTypeMap
  }
}
