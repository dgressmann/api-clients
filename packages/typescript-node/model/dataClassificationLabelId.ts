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

export class DataClassificationLabelId {
  /**
   * Data classification label id
   */
  'labelId'?: string

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'labelId',
      baseName: 'labelId',
      type: 'string',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return DataClassificationLabelId.attributeTypeMap
  }
}
