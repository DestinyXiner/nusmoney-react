import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { AccountBalanceWalletOutlined, AccountBalanceOutlined, CreditCardOutlined, Build, CommuteOutlined, FastfoodOutlined} from '@material-ui/icons'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx'
import * as React from 'react'
import { connect } from 'react-redux'
import * as Screens from '../../state/screens'
import * as Actions from '../../state/actions';
import config from '../../config'
import Copyright from '../Copyright'

function NotImplementedPage(props) {
    const styles = props.styles;
    let DataView = <React.Fragment>NOT IMPLEMENTED : {props.page} / {props.currentView.name}</React.Fragment>;
    return (
        <Paper className={styles.paper} variant="outlined" align="center">
            NOT IMPLEMENTED : {props.page} / {props.currentView.name}
            <Box pt={4}>
                <Copyright />
            </Box>
        </Paper>
    );
}

const mockWalletData = [
    { name: "Cash Wallet", type: "cash", currency: "SGD", total: "79", txns:[
        {id: "1", note: "Add Money", category: "deposit", date: "Feb 21", amount: "100"},
        {id: "2", note: "Taxi Fair", category: "transport", date: "Feb 21", amount: "-7.5"},
        {id: "3", note: "Copi", category: "food", date: "Feb 21", amount: "-2.5"},
        {id: "4", note: "Lunch", category: "food", date: "Feb 21", amount: "-9"},
        {id: "5", note: "Water Bottle", category: "food", date: "Feb 21", amount: "-3"},
    ]},
    { name: "DBS Debit", type: "debit", currency: "SGD", total: "4500", txns:[
        {id: "6", note: "Add Money", category: "deposit", date: "Feb 21", amount: "4500"},
    ]},
    { name: "Citibank Credit Card", type: "credit", currency: "USD", total: "-225", txns:[
        {id: "7", note: "Add Money", category: "deposit", date: "Feb 21", amount: "-225"},
    ]},
    { name: "GrabPay", type: "other", currency: "SGD", total: "46", txns:[
        {id: "8", note: "Add Money", category: "deposit", date: "Feb 21", amount: "46"},
    ]},
    { name: "UOB SRS", type: "debit", currency: "SGD", total: "25400", txns:[
        {id: "9", note: "Add Money", category: "deposit", date: "Feb 21", amount: "25400"},
    ]},
];

function WalletIcon(props) {
    if(props.type === "cash")
        return <AccountBalanceWalletOutlined/>;
    if(props.type === "debit")
        return <AccountBalanceOutlined/>;
    if(props.type === "credit")
        return <CreditCardOutlined/>;
    return <AccountBalanceWalletOutlined/>;
}

function TxnIcon(props) {
    if(props.type === "cash")
        return <AccountBalanceWalletOutlined/>;
    if(props.type === "transport")
        return <CommuteOutlined/>;
    if(props.type === "food")
        return <FastfoodOutlined/>;
    return <AccountBalanceWalletOutlined/>;
}


function WalletsPage(props) {
    const styles = props.styles;

    let View = null;
    if (props.currentView.name === Screens.VIEW.MAIN) {
        const wallets = mockWalletData;
        const addWalletClick = () => {
            props.dispatch(Actions.pushView(Screens.VIEW.ADD_LINKED_WALLET));
        };
        const viewWallet = (walletName) => {
            props.dispatch(Actions.pushView(Screens.VIEW.VIEW_WALLET, walletName));
        };

        View = (
            <Paper className={styles.paper} variant="outlined" align="center">
                <Table className={styles.table} aria-label="customized table">
                    <TableBody>
                        {wallets.map((wallet) => (
                            <TableRow key={wallet.name} onClick={()=>{viewWallet(wallet)}}>
                                <TableCell><WalletIcon type={wallet.type}/></TableCell>
                                <TableCell component="th" scope="row">
                                    {wallet.name}
                                </TableCell>
                                <TableCell align="right">{wallet.currency}</TableCell>
                                <TableCell align="right">{wallet.total}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div style={{ padding: 10 }}/>
                <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                    <Grid item xs>
                        <Button variant="contained" color="primary" onClick={addWalletClick}>Add Wallet</Button>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
    else if (props.currentView.name === Screens.VIEW.ADD_LINKED_WALLET) {
        let addCashWalletClick = () => {
            props.dispatch(Actions.pushView(Screens.VIEW.ADD_CASH_WALLET));
        };
        View = (
            <Paper className={styles.paper} variant="outlined" align="center">
                <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                    <Grid item xs>
                        <Button variant="contained" color="primary" onClick={addCashWalletClick}>Skip</Button>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
    else if (props.currentView.name === Screens.VIEW.ADD_CASH_WALLET) {
        let confirmNewCashWallet = () => {
            props.dispatch(Actions.selectPage(Screens.PAGE.WALLETS));
        };
        View = (
            <Paper className={styles.paper} variant="outlined" align="center">
                <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                    <Grid item xs>
                        <Button variant="contained" color="primary" onClick={confirmNewCashWallet}>Confirm</Button>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
    else if (props.currentView.name === Screens.VIEW.VIEW_WALLET) {
        const wallet = props.currentView.arg;

        View = (
            <Paper className={styles.paper} variant="outlined" align="center">
                <Table className={styles.table} aria-label="customized table">
                    <TableBody>
                        {wallet.txns.map((txn) => (
                            <TableRow key={txn.id}>
                                <TableCell><TxnIcon type={txn.category}/></TableCell>
                                <TableCell component="th" scope="row">
                                    {txn.note}
                                </TableCell>
                                <TableCell align="right">{txn.date}</TableCell>
                                <TableCell align="right">{wallet.currency}</TableCell>
                                <TableCell align="right">{txn.amount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
    else if (props.currentView.name === Screens.VIEW.ADD_TXN) {
    }
    else if (props.currentView.name === Screens.VIEW.SCAN_RECEIPT) {
        //View = <Paper className={styles.paper}> <React.Fragment>View : {props.page} / {props.currentView.name}</React.Fragment> </Paper>;
    }
    else {
        //View = <Paper className={styles.paper}> <React.Fragment>View : {props.page} / {props.currentView.name}</React.Fragment> </Paper>;
    }

    return (
        <React.Fragment>
            {View}
            <Box pt={4}>
                <Copyright />
            </Box>
        </React.Fragment>
    );
}

function BudgetPage(props) {
    const styles = props.styles;

    let View = null;
    if (props.currentView.name === Screens.VIEW.MAIN) {
        let addBudgetSectionClick = () => {
            props.dispatch(Actions.pushView(Screens.VIEW.ADD_BUDGET_SECTION));
        };
        View = (
            <Paper className={styles.paper} variant="outlined" align="center">
                <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                    <Grid item xs>
                        <Button variant="contained" color="primary" onClick={addBudgetSectionClick}>Add Budget Section</Button>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
    else if (props.currentView.name === Screens.VIEW.ADD_BUDGET_SECTION) {
        let confirmNewBudgetSectionClick = () => {
            props.dispatch(Actions.selectPage(Screens.PAGE.BUDGET));
        };
        View = (
            <Paper className={styles.paper} variant="outlined" align="center">
                <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                    <Grid item xs>
                        <Button variant="contained" color="primary" onClick={confirmNewBudgetSectionClick}>Confirm</Button>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
    else if (props.currentView.name === Screens.VIEW.VIEW_BUDGET_SECTION) {
        View = <Paper className={styles.paper}> <React.Fragment>View : {props.page} / {props.currentView.name}</React.Fragment> </Paper>;
    }
    return (
        <React.Fragment>
            {View}
            <Box pt={4}>
                <Copyright />
            </Box>
        </React.Fragment>
    );
}

function ProductsPage(props) {
    const styles = props.styles;

    let View = null;
    if (props.currentView.name === Screens.VIEW.MAIN) {
        View = (
            <Paper className={styles.paper} variant="outlined" align="center">
            </Paper>
        );
    }
    else if (props.currentView.name === Screens.VIEW.VIEW_PRODUCTS) {
        View = <Paper className={styles.paper}> <React.Fragment>View : {props.page} / {props.currentView.name}</React.Fragment> </Paper>;
    }
    return (
        <React.Fragment>
            {View}
            <Box pt={4}>
                <Copyright />
            </Box>
        </React.Fragment>
    );
}

function AssistPage(props) {
    const styles = props.styles;

    let View = (
        <Paper className={styles.paper} variant="outlined" align="center">
        </Paper>
    );
    return (
        <React.Fragment>
            {View}
            <Box pt={4}>
                <Copyright />
            </Box>
        </React.Fragment>
    );
}

function SettingsPage(props) {
    const styles = props.styles;

    let View = (
        <Paper className={styles.paper} variant="outlined" align="center">
        </Paper>
    );
    return (
        <React.Fragment>
            {View}
            <Box pt={4}>
                <Copyright />
            </Box>
        </React.Fragment>
    );
}

class MainViewContainer extends React.Component {
    /*
    componentDidMount() {
        const updateSnapshot = () => {
            const apiAddress = ...
        }
        this.timer = setInterval(updateSnapshot, 2000)
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    */

    static initPages(props) {
        console.log("Init pages");
        MainViewContainer.page = { notImplemented: NotImplementedPage };
        MainViewContainer.page[Screens.PAGE.WALLETS] = WalletsPage;
        MainViewContainer.page[Screens.PAGE.BUDGET] = BudgetPage;
        MainViewContainer.page[Screens.PAGE.PRODUCTS] = ProductsPage;
        MainViewContainer.page[Screens.PAGE.ASSIST] = AssistPage;
        MainViewContainer.page[Screens.PAGE.SETTINGS] = SettingsPage;
    }

    render() {
        const Page = MainViewContainer.page[this.props.page] || MainViewContainer.page.notImplemented;
        return (
            <main className={this.props.styles.content}>
                <div className={this.props.styles.appBarSpacer} />
                <Page {...this.props} />;
            </main >
        );
    }
}

MainViewContainer.initPages();

const mapStateToProps = (state) => {
    return {
        page: state.page,
        currentView: state.view[state.view.length - 1],
    }
};

export default connect(mapStateToProps)(MainViewContainer)
