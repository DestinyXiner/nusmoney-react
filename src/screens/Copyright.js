import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://myresume.alexeytkachenko.repl.co/">
                NUS FinTech Group 1, 2021
            </Link>
        </Typography>
    );
}

export default Copyright;