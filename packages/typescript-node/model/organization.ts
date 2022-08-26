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

export class Organization {
  /**
   * Purchased FULL licenses
   */
  'fullLicensesPurchased'?: number
  /**
   * Id of the organization
   */
  'id'?: string
  /**
   * Name of the organization
   */
  'name'?: string
  /**
   * Organization plan type
   */
  'plan'?: Organization.PlanEnum
  'type'?: string

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'fullLicensesPurchased',
      baseName: 'fullLicensesPurchased',
      type: 'number',
    },
    {
      name: 'id',
      baseName: 'id',
      type: 'string',
    },
    {
      name: 'name',
      baseName: 'name',
      type: 'string',
    },
    {
      name: 'plan',
      baseName: 'plan',
      type: 'Organization.PlanEnum',
    },
    {
      name: 'type',
      baseName: 'type',
      type: 'string',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return Organization.attributeTypeMap
  }
}

export namespace Organization {
  export enum PlanEnum {
    Unknown = <any>'UNKNOWN',
    Company = <any>'COMPANY',
    Consultant = <any>'CONSULTANT',
    ConsultantSlf = <any>'CONSULTANT_SLF',
    Business = <any>'BUSINESS',
    PaidTeamOrg = <any>'PAID_TEAM_ORG',
    IntegrationOrg = <any>'INTEGRATION_ORG',
    Professional2022 = <any>'PROFESSIONAL_2022',
    EduTeamOrg = <any>'EDU_TEAM_ORG',
    FreeTeamOrg = <any>'FREE_TEAM_ORG',
  }
}
