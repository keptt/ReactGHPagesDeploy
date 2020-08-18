import React from 'react';

import grey from 'material-ui/colors/grey';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


function Header() {
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="relative" style={{  background: grey[50] }}>
                <Toolbar>
                    <img src={ require('../img/isy-logo.png') } alt="logo" style={{ width: 80, height: 55, marginRight: 20 }}/>
                    {/* <CameraIcon className={classes.icon} /> */}
                    <Typography variant="h6" color="initial" style={{ color: "black" }}noWrap>
                        PowerCow & ISY TeamCast
                    </Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Header
