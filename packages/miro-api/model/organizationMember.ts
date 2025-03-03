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
 * Response for search organization members by user emails
 */
export class OrganizationMember {
  /**
   * Flag is user active
   */
  'active': boolean
  /**
   * User email
   */
  'email': string
  /**
   * Id of the user
   */
  'id': string
  /**
   * Last time when the user was active
   */
  'lastActivityAt'?: Date
  /**
   * Name of the current user license in the organization
   */
  'license': string | (typeof OrganizationMember.LicenseEnum)[keyof typeof OrganizationMember.LicenseEnum]
  /**
   * Time when the license was assigned to the user
   */
  'licenseAssignedAt'?: Date
  /**
   * Name of the user role in the organization
   */
  'role': string | (typeof OrganizationMember.RoleEnum)[keyof typeof OrganizationMember.RoleEnum]
  'type'?: string

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
      name: 'email',
      baseName: 'email',
      type: 'string',
    },
    {
      name: 'id',
      baseName: 'id',
      type: 'string',
    },
    {
      name: 'lastActivityAt',
      baseName: 'lastActivityAt',
      type: 'Date',
    },
    {
      name: 'license',
      baseName: 'license',
      type: 'OrganizationMember.LicenseEnum',
    },
    {
      name: 'licenseAssignedAt',
      baseName: 'licenseAssignedAt',
      type: 'Date',
    },
    {
      name: 'role',
      baseName: 'role',
      type: 'OrganizationMember.RoleEnum',
    },
    {
      name: 'type',
      baseName: 'type',
      type: 'string',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return OrganizationMember.attributeTypeMap
  }
}

export namespace OrganizationMember {
  export const LicenseEnum = {
    Full: 'full',
    Occasional: 'occasional',
    Free: 'free',
    FreeRestricted: 'free_restricted',
    FullTrial: 'full_trial',
    Unknown: 'unknown',
  } as const
  export const RoleEnum = {
    OrganizationInternalAdmin: 'organization_internal_admin',
    OrganizationInternalUser: 'organization_internal_user',
    OrganizationExternalUser: 'organization_external_user',
    OrganizationTeamGuestUser: 'organization_team_guest_user',
    Unknown: 'unknown',
  } as const
}
