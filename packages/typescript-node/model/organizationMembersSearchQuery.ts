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

export class OrganizationMembersSearchQuery {
  /**
   * Filtering parameter. Filter organization members by activity
   */
  'active'?: boolean
  /**
   * The ID of the organization member used as the reference for pagination. To retrieve the first portion of the collection don\'t pass a cursor value. To retrieve the next portion of the collection, set the `cursor` parameter value to the ID of the last organization member you received in the response of the previous request.
   */
  'cursor'?: string
  /**
   * Emails of the organization members you want to retrieve. If you specify a value for the `emails` parameter, only the `emails` parameter is considered. All other filtering parameters are ignored.
   */
  'emails'?: Set<string>
  /**
   * Filtering parameter. Filter organization members by license
   */
  'license'?: string
  /**
   * Limit for the number of organization members returned in the result list.
   */
  'limit'?: number
  /**
   * Filtering parameter. Filter organization members by role
   */
  'role'?: string

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'active',
      baseName: 'active',
      type: 'boolean',
    },
    {
      name: 'cursor',
      baseName: 'cursor',
      type: 'string',
    },
    {
      name: 'emails',
      baseName: 'emails',
      type: 'Set<string>',
    },
    {
      name: 'license',
      baseName: 'license',
      type: 'string',
    },
    {
      name: 'limit',
      baseName: 'limit',
      type: 'number',
    },
    {
      name: 'role',
      baseName: 'role',
      type: 'string',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return OrganizationMembersSearchQuery.attributeTypeMap
  }
}
