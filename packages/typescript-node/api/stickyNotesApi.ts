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

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

import fetch, {Response} from 'node-fetch'
import * as http from 'http'

/* tslint:disable:no-unused-locals */
import {GetBoards400Response} from '../model/getBoards400Response'
import {StickyNoteCreateRequest} from '../model/stickyNoteCreateRequest'
import {StickyNoteItem} from '../model/stickyNoteItem'
import {StickyNoteUpdateRequest} from '../model/stickyNoteUpdateRequest'

import {ObjectSerializer} from '../model/models'

import {HttpError, makeJsonRequest} from './apis'

let defaultBasePath = 'https://api.miro.com'

export interface StickyNotesApiMethods {
  /**
   * Adds a sticky note item to a board.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">boards:write</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 2</a><br/>
   * @summary Create sticky note item
   * @param boardId [Unique identifier (ID) of the board](https://developers.miro.com/reference/board-model) where you want to create the item.
   * @param stickyNoteCreateRequest
   */
  createStickyNoteItem(
    boardId: string,
    stickyNoteCreateRequest: StickyNoteCreateRequest,
  ): Promise<{response: Response; body: StickyNoteItem}>
  /**
   * Deletes a sticky note item from the board.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">boards:write</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 3</a><br/>
   * @summary Delete sticky note item
   * @param boardId [Unique identifier (ID) of the board](https://developers.miro.com/reference/board-model) from which you want to delete the item.
   * @param itemId [Unique identifier (ID) of the item](https://developers.miro.com/reference/rest-api-item-model) that you want to delete.
   */
  deleteStickyNoteItem(boardId: string, itemId: string): Promise<{response: Response; body: object}>
  /**
   * Retrieves information for a specific sticky note item on a board.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">boards:read</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 1</a><br/>
   * @summary Get sticky note item
   * @param boardId [Unique identifier (ID) of the board](https://developers.miro.com/reference/board-model) from which you want to retrieve a specific item.
   * @param itemId [Unique identifier (ID) of the item](https://developers.miro.com/reference/rest-api-item-model) that you want to retrieve.
   */
  getStickyNoteItem(boardId: string, itemId: string): Promise<{response: Response; body: StickyNoteItem}>
  /**
   * Updates a sticky note item on a board based on the data and style properties provided in the request body.<br/><h3>Required scope</h3> <a target=\"blank\" href=\"/reference/scopes\">boards:write</a> <br/><h3>Rate limiting</h3> <a target=\"blank\" href=\"/reference/ratelimiting\">Level 2</a><br/>
   * @summary Update sticky note item
   * @param boardId [Unique identifier (ID) of the board](https://developers.miro.com/reference/board-model) where you want to update the item.
   * @param itemId [Unique identifier (ID) of the item](https://developers.miro.com/reference/rest-api-item-model) that you want to update.
   * @param stickyNoteUpdateRequest
   */
  updateStickyNoteItem(
    boardId: string,
    itemId: string,
    stickyNoteUpdateRequest: StickyNoteUpdateRequest,
  ): Promise<{response: Response; body: StickyNoteItem}>
}

export function StickyNotesApi(
  accessToken: string | (() => Promise<string>),
  basePath: string = defaultBasePath,
  logger?: (...thing: any) => void,
): StickyNotesApiMethods {
  return {
    /*
     */

    createStickyNoteItem: async function (
      boardId: string,
      stickyNoteCreateRequest: StickyNoteCreateRequest,
    ): Promise<{response: Response; body: StickyNoteItem}> {
      const localVarPath = '/v2/boards/{board_id}/sticky_notes'.replace(
        '{' + 'board_id' + '}',
        encodeURIComponent(String(boardId)),
      )
      let localVarQueryParameters = new URLSearchParams()
      // verify required parameter 'boardId' is not null or undefined
      if (boardId === null || boardId === undefined) {
        throw new Error('Required parameter boardId was null or undefined when calling createStickyNoteItem.')
      }

      const resource = new URL(localVarPath, basePath)
      resource.search = localVarQueryParameters.toString()

      const {response, bodyAsJson} = await makeJsonRequest(
        typeof accessToken === 'function' ? await accessToken() : accessToken,
        'POST',
        resource,
        JSON.stringify(ObjectSerializer.serialize(stickyNoteCreateRequest, 'StickyNoteCreateRequest')),

        logger,
      )

      const body = ObjectSerializer.deserialize(bodyAsJson, 'StickyNoteItem')

      return {response, body}
    },

    /*
     */

    deleteStickyNoteItem: async function (
      boardId: string,
      itemId: string,
    ): Promise<{response: Response; body: object}> {
      const localVarPath = '/v2/boards/{board_id}/sticky_notes/{item_id}'
        .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
        .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
      let localVarQueryParameters = new URLSearchParams()
      // verify required parameter 'boardId' is not null or undefined
      if (boardId === null || boardId === undefined) {
        throw new Error('Required parameter boardId was null or undefined when calling deleteStickyNoteItem.')
      }
      // verify required parameter 'itemId' is not null or undefined
      if (itemId === null || itemId === undefined) {
        throw new Error('Required parameter itemId was null or undefined when calling deleteStickyNoteItem.')
      }

      const resource = new URL(localVarPath, basePath)
      resource.search = localVarQueryParameters.toString()

      const {response, bodyAsJson} = await makeJsonRequest(
        typeof accessToken === 'function' ? await accessToken() : accessToken,
        'DELETE',
        resource,
        undefined,

        logger,
      )

      const body = ObjectSerializer.deserialize(bodyAsJson, 'object')

      return {response, body}
    },

    /*
     */

    getStickyNoteItem: async function (
      boardId: string,
      itemId: string,
    ): Promise<{response: Response; body: StickyNoteItem}> {
      const localVarPath = '/v2/boards/{board_id}/sticky_notes/{item_id}'
        .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
        .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
      let localVarQueryParameters = new URLSearchParams()
      // verify required parameter 'boardId' is not null or undefined
      if (boardId === null || boardId === undefined) {
        throw new Error('Required parameter boardId was null or undefined when calling getStickyNoteItem.')
      }
      // verify required parameter 'itemId' is not null or undefined
      if (itemId === null || itemId === undefined) {
        throw new Error('Required parameter itemId was null or undefined when calling getStickyNoteItem.')
      }

      const resource = new URL(localVarPath, basePath)
      resource.search = localVarQueryParameters.toString()

      const {response, bodyAsJson} = await makeJsonRequest(
        typeof accessToken === 'function' ? await accessToken() : accessToken,
        'GET',
        resource,
        undefined,

        logger,
      )

      const body = ObjectSerializer.deserialize(bodyAsJson, 'StickyNoteItem')

      return {response, body}
    },

    /*
     */

    updateStickyNoteItem: async function (
      boardId: string,
      itemId: string,
      stickyNoteUpdateRequest: StickyNoteUpdateRequest,
    ): Promise<{response: Response; body: StickyNoteItem}> {
      const localVarPath = '/v2/boards/{board_id}/sticky_notes/{item_id}'
        .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
        .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
      let localVarQueryParameters = new URLSearchParams()
      // verify required parameter 'boardId' is not null or undefined
      if (boardId === null || boardId === undefined) {
        throw new Error('Required parameter boardId was null or undefined when calling updateStickyNoteItem.')
      }
      // verify required parameter 'itemId' is not null or undefined
      if (itemId === null || itemId === undefined) {
        throw new Error('Required parameter itemId was null or undefined when calling updateStickyNoteItem.')
      }

      const resource = new URL(localVarPath, basePath)
      resource.search = localVarQueryParameters.toString()

      const {response, bodyAsJson} = await makeJsonRequest(
        typeof accessToken === 'function' ? await accessToken() : accessToken,
        'PATCH',
        resource,
        JSON.stringify(ObjectSerializer.serialize(stickyNoteUpdateRequest, 'StickyNoteUpdateRequest')),

        logger,
      )

      const body = ObjectSerializer.deserialize(bodyAsJson, 'StickyNoteItem')

      return {response, body}
    },
  }
}
