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

export class TeamMember {
  /**
   * Invited user date
   */
  'createdAt'?: Date
  /**
   * User id of user who invited the team member
   */
  'createdByUserId'?: number
  /**
   * Team member id
   */
  'memberId': number
  /**
   * Latest user role modification date
   */
  'modifiedAt'?: Date
  /**
   * User id of user who updated the team member
   */
  'modifiedByUserId'?: number
  /**
   * Team id
   */
  'teamId': number
  'type'?: string
  /**
   *      * \"non_team\":   External user, non-team user.     * \"member\":     Team member with full member permissions.     * \"admin\":      Admin of a team. Team member with permission to manage team.     * \"team_guest\": Team-guest user, user with access only to a team without access to organization.
   */
  'userRole': string | (typeof TeamMember.UserRoleEnum)[keyof typeof TeamMember.UserRoleEnum]

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
      name: 'createdByUserId',
      baseName: 'createdByUserId',
      type: 'number',
    },
    {
      name: 'memberId',
      baseName: 'memberId',
      type: 'number',
    },
    {
      name: 'modifiedAt',
      baseName: 'modifiedAt',
      type: 'Date',
    },
    {
      name: 'modifiedByUserId',
      baseName: 'modifiedByUserId',
      type: 'number',
    },
    {
      name: 'teamId',
      baseName: 'teamId',
      type: 'number',
    },
    {
      name: 'type',
      baseName: 'type',
      type: 'string',
    },
    {
      name: 'userRole',
      baseName: 'userRole',
      type: 'TeamMember.UserRoleEnum',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return TeamMember.attributeTypeMap
  }
}

export namespace TeamMember {
  export const UserRoleEnum = {
    NonTeam: 'non_team',
    Member: 'member',
    Admin: 'admin',
    TeamGuest: 'team_guest',
  } as const
}
