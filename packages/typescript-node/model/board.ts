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

import {BoardMember} from './boardMember'
import {BoardPolicy} from './boardPolicy'
import {Picture} from './picture'
import {Team} from './team'
import {UserInfoShort} from './userInfoShort'

/**
 * Contains the result data.
 */
export class Board {
  /**
   * Date and time when the board was created. Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).
   */
  'createdAt'?: Date
  'createdBy'?: UserInfoShort
  'currentUserMembership'?: BoardMember
  /**
   * Description of the board.
   */
  'description'?: string
  /**
   * Unique identifier (ID) of the board.
   */
  'id'?: string
  /**
   * Date and time when the board was last modified. Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).
   */
  'modifiedAt'?: Date
  'modifiedBy'?: UserInfoShort
  /**
   * Name of the board.
   */
  'name'?: string
  'owner'?: UserInfoShort
  'picture'?: Picture
  'policy'?: BoardPolicy
  'team'?: Team
  /**
   * Type of the object that is returned. In this case, type returns `board`.
   */
  'type'?: string
  /**
   * URL to view the board.
   */
  'viewLink'?: string

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'createdAt',
      baseName: 'createdAt',
      type: 'Date',
    },
    {
      name: 'createdBy',
      baseName: 'createdBy',
      type: 'UserInfoShort',
    },
    {
      name: 'currentUserMembership',
      baseName: 'currentUserMembership',
      type: 'BoardMember',
    },
    {
      name: 'description',
      baseName: 'description',
      type: 'string',
    },
    {
      name: 'id',
      baseName: 'id',
      type: 'string',
    },
    {
      name: 'modifiedAt',
      baseName: 'modifiedAt',
      type: 'Date',
    },
    {
      name: 'modifiedBy',
      baseName: 'modifiedBy',
      type: 'UserInfoShort',
    },
    {
      name: 'name',
      baseName: 'name',
      type: 'string',
    },
    {
      name: 'owner',
      baseName: 'owner',
      type: 'UserInfoShort',
    },
    {
      name: 'picture',
      baseName: 'picture',
      type: 'Picture',
    },
    {
      name: 'policy',
      baseName: 'policy',
      type: 'BoardPolicy',
    },
    {
      name: 'team',
      baseName: 'team',
      type: 'Team',
    },
    {
      name: 'type',
      baseName: 'type',
      type: 'string',
    },
    {
      name: 'viewLink',
      baseName: 'viewLink',
      type: 'string',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return Board.attributeTypeMap
  }
}
