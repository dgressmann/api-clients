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
 * Team copy access settings
 */
export class TeamCopyAccessLevelSettingsChanges {
  /**
   *  * \"anyone\":       Anyone with the board access can copy board content on newly created boards. * \"team_members\": Team members can copy board content on newly created boards. * \"team_editors\": Team members with editing rights can copy board content on newly created boards. * \"board_owner\":  Board owners only can copy board content on newly created boards.
   */
  'copyAccessLevel'?: TeamCopyAccessLevelSettingsChanges.CopyAccessLevelEnum
  /**
   *  * \"anyone\":       Team members and users outside team can be given permission to copy board content. * \"team_members\": Only team members can be given permission to copy board content.
   */
  'copyAccessLevelLimitation'?: TeamCopyAccessLevelSettingsChanges.CopyAccessLevelLimitationEnum

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'copyAccessLevel',
      baseName: 'copyAccessLevel',
      type: 'TeamCopyAccessLevelSettingsChanges.CopyAccessLevelEnum',
    },
    {
      name: 'copyAccessLevelLimitation',
      baseName: 'copyAccessLevelLimitation',
      type: 'TeamCopyAccessLevelSettingsChanges.CopyAccessLevelLimitationEnum',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return TeamCopyAccessLevelSettingsChanges.attributeTypeMap
  }
}

export namespace TeamCopyAccessLevelSettingsChanges {
  export enum CopyAccessLevelEnum {
    Anyone = <any>'anyone',
    TeamMembers = <any>'team_members',
    TeamEditors = <any>'team_editors',
    BoardOwner = <any>'board_owner',
  }
  export enum CopyAccessLevelLimitationEnum {
    Anyone = <any>'anyone',
    TeamMembers = <any>'team_members',
  }
}
