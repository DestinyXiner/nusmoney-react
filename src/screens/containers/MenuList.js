import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { AccountBalanceWallet, BarChart, Build, Forum, BusinessCenter, Settings } from '@material-ui/icons'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import * as React from 'react'
import { connect } from 'react-redux'

//import config from '../../config'
import * as Actions from '../../state/actions'
import * as Screens from '../../state/screens'
//import * as AsyncAction from '../../state/asyncActions'
import store from '../../state/store'

function MenuListItemContainer(props) {
    const IconTag = props.icon ? <props.icon /> : <Build />;
    return (
        <ListItem button onClick={
            () => {
                const isDifferentViewSelected = store.getState().page !== props.page
                if (isDifferentViewSelected) {
                    /*
                    const apiAddress = store.getState().apiAddress
                    props.dispatch(AsyncAction.updatePage(props.page, apiAddress))
                    */
                    props.dispatch(Actions.selectPage(props.page));
                }
            }}
        >
            <ListItemIcon>
                {IconTag}
            </ListItemIcon>
            <ListItemText primary={props.page} />
        </ListItem >)
}

const MenuListItem = connect()(MenuListItemContainer)

export default (
    <React.Fragment>
        <Divider />
        <List>
            <div>
                <MenuListItem key={Screens.PAGE.WALLETS} page={Screens.PAGE.WALLETS} icon={AccountBalanceWallet} />
                <MenuListItem key={Screens.PAGE.BUDGET} page={Screens.PAGE.BUDGET} icon={BarChart} />
                <MenuListItem key={Screens.PAGE.PRODUCTS} page={Screens.PAGE.PRODUCTS} icon={BusinessCenter} />
            </div>
        </List>
        <Divider />
        <List>
            <div>
                <MenuListItem key={Screens.PAGE.ASSIST} page={Screens.PAGE.ASSIST} icon={Forum} />
                <MenuListItem key={Screens.PAGE.SETTINGS} page={Screens.PAGE.SETTINGS} icon={Settings} />
            </div>
        </List>
    </React.Fragment>
)
