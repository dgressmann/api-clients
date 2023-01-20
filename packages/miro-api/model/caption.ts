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
 * @internal
 * Contains the connector\'s caption data, such as content and its position.
 */
export class Caption {
  /**
   * The text you want to display on the connector. Supports inline HTML tags.
   */
  'content': string
  /**
   * The relative position of the text on the connector, in percentage, minimum 0%, maximum 100%. With 50% value, the text will be placed in the middle of the connector line. Default: 50%
   */
  'position'?: string
  /**
   * The vertical position of the text on the connector. Default: middle
   */
  'textAlignVertical'?: string | (typeof Caption.TextAlignVerticalEnum)[keyof typeof Caption.TextAlignVerticalEnum]

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'content',
      baseName: 'content',
      type: 'string',
    },
    {
      name: 'position',
      baseName: 'position',
      type: 'string',
    },
    {
      name: 'textAlignVertical',
      baseName: 'textAlignVertical',
      type: 'Caption.TextAlignVerticalEnum',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return Caption.attributeTypeMap
  }
}

export namespace Caption {
  export const TextAlignVerticalEnum = {
    Top: 'top',
    Middle: 'middle',
    Bottom: 'bottom',
  } as const
}
