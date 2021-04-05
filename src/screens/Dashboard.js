import * as React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { useStyles } from './styles';
import StatusBar from './containers/StatusBar';
import MenuList from './containers/MenuList';
import MainView from './containers/MainView';

export default function Dashboard() {
    const styles = useStyles();
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    }

    return (
        <div className={styles.root}>
            <CssBaseline />
            <AppBar
                position="absolute"
                className={clsx(styles.appBar, open && styles.appBarShift)}
            >
                <Toolbar className={styles.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        className={clsx(
                            styles.menuButton,
                            open && styles.menuButtonHidden,
                        )}
                    >
                        <MenuIcon />
                    </IconButton>
                    <StatusBar className={styles.title} />
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                name="Hello"
                variant="permanent"
                classes={{
                    paper: clsx(styles.drawerPaper, !open && styles.drawerPaperClose),
                }}
                open={open}
            >
                <div className={styles.toolbarIcon}>
                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                {MenuList}
            </Drawer>
            <MainView styles={styles} />
        </div >
    );
}
