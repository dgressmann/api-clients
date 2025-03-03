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

export class EmbedDataPlatformTags {
  /**
   * Type of the embedded item\'s content.
   */
  'contentType'?: string
  /**
   * Short description of the embedded item.
   */
  'description'?: string
  /**
   * Html code of the embedded item.
   */
  'html'?: string
  /**
   * Defines how the content in the embed item is displayed on the board. `inline`: The embedded content is displayed directly on the board. `modal`: The embedded content is displayed inside a modal overlay on the board.
   */
  'mode'?: string | (typeof EmbedDataPlatformTags.ModeEnum)[keyof typeof EmbedDataPlatformTags.ModeEnum]
  /**
   * The URL to download the resource. You must use your access token to access the URL.  The URL contains the `redirect` parameter and the `format` parameter to control the request execution as described in the following parameters: `format` parameter: By default, the image format is set to the preview image. If you want to download the original image, set the `format` parameter in the URL to `original`. `redirect`: By default, the `redirect` parameter is set to `false` and the resource object containing the URL and the resource type is returned with a 200 OK HTTP code. This URL is valid for 60 seconds. You can use this URL to retrieve the resource file. If the `redirect` parameter is set to `true`, a 307 TEMPORARY_REDIRECT HTTP response is returned. If you follow HTTP 3xx responses as redirects, you will automatically be redirected to the resource file and the content type returned can be `image/png`, \'image/svg\', or \'image/jpg\', depending on the original image type.
   */
  'previewUrl'?: string
  /**
   * Name of the content\'s provider.
   */
  'providerName'?: string
  /**
   * Url of the content\'s provider.
   */
  'providerUrl'?: string
  /**
   * Title of the embedded item.
   */
  'title'?: string
  /**
   * A [valid URL](https://developers.miro.com/reference/data#embeddata) pointing to the content resource that you want to embed in the board. Possible transport protocols: HTTP, HTTPS.
   */
  'url'?: string

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'contentType',
      baseName: 'contentType',
      type: 'string',
    },
    {
      name: 'description',
      baseName: 'description',
      type: 'string',
    },
    {
      name: 'html',
      baseName: 'html',
      type: 'string',
    },
    {
      name: 'mode',
      baseName: 'mode',
      type: 'EmbedDataPlatformTags.ModeEnum',
    },
    {
      name: 'previewUrl',
      baseName: 'previewUrl',
      type: 'string',
    },
    {
      name: 'providerName',
      baseName: 'providerName',
      type: 'string',
    },
    {
      name: 'providerUrl',
      baseName: 'providerUrl',
      type: 'string',
    },
    {
      name: 'title',
      baseName: 'title',
      type: 'string',
    },
    {
      name: 'url',
      baseName: 'url',
      type: 'string',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return EmbedDataPlatformTags.attributeTypeMap
  }
}

export namespace EmbedDataPlatformTags {
  export const ModeEnum = {
    Inline: 'inline',
    Modal: 'modal',
  } as const
}
