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

/**
 * Contains applicable links for the current object.
 */
export class SelfLink {
  /**
   * Link to obtain more information about the current object.
   */
  'self'?: string

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'self',
      baseName: 'self',
      type: 'string',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return SelfLink.attributeTypeMap
  }
}
