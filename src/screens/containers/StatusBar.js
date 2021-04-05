import * as React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import * as Actions from '../../state/actions';

class StatusBar extends React.Component {
    render() {
        if (this.props.hasBackButton) {
            let goBackClick = () => {
                this.props.dispatch(Actions.popView());
            };
            return (
                <React.Fragment>
                    <IconButton color="inherit" aria-label="open drawer" onClick={goBackClick}><ChevronLeftIcon /></IconButton>
                    <Typography
                        className={this.props.className}
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        align="center"
                    >
                        {this.props.caption}
                    </Typography>
                </React.Fragment>
            );
        }
        else {
            return (
                <Typography
                    className={this.props.className}
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    align="center"
                >
                    {this.props.caption}
                </Typography>
            );

        }
    }
}

const mapStateToProps = (state) => {
    if (state.view.length > 1)
        return {
            caption: state.view[state.view.length - 1].name,
            hasBackButton: true,
        };
    else
        return {
            caption: state.page,
            hasBackButton: false,
        };
};

StatusBar.propTypes = {
    caption: PropTypes.string.isRequired,
    hasBackButton: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, null)(StatusBar)
