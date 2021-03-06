import { Dispatch } from 'redux'
import { browse, BrowseAction } from '../../modules/routing/actions'
import { VendorName } from '../../modules/vendor/types'

export type Props = {
  vendor: VendorName
  address?: string
  onBrowse: typeof browse
}

export type MapStateProps = Pick<Props, 'vendor'>
export type MapDispatchProps = Pick<Props, 'onBrowse'>
export type MapDispatch = Dispatch<BrowseAction>
