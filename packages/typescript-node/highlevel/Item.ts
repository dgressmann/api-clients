import type {ConnectorCreationData} from '@mirohq/miro-node/model/connectorCreationData'
import type {ItemConnectionCreationData} from '@mirohq/miro-node/model/itemConnectionCreationData'
import {GenericItem} from '../model/genericItem'
import {MiroApi} from '../api'
import {Connector} from '.'

export abstract class Item extends GenericItem {
  abstract _api: MiroApi
  abstract boardId: string

  /**
   * Create a new connector between the current item and some other item
   * @param {string | number | Object} endItem Item that the new connector will connect to
   * @param {Object=} startItem
   * @param {Object=} connectorCreationData
   * @return {Promise}
   */
  async connectTo(
    endItem: string | number | ItemConnectionCreationData,
    startItem?: Omit<ItemConnectionCreationData, 'id'>,
    connectorCreationData?: Omit<ConnectorCreationData, 'startItem' | 'endItem'>,
  ): Promise<Connector> {
    const start = {
      id: this.id.toString(),
      ...startItem,
    }
    const end = typeof endItem === 'object' ? endItem : {id: endItem.toString()}

    const connector = (
      await this._api.createConnector(this.boardId, {
        startItem: start,
        endItem: end,
        ...connectorCreationData,
      })
    ).body
    return new Connector(this._api, this.boardId, connector.id, connector)
  }
}
