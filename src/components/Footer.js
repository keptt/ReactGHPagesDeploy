import React from 'react';

import Typography from '@material-ui/core/Typography';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';
import IconButton from '@material-ui/core/IconButton';

import { useStyles } from '../styles.js';


function Footer() {
    const classes = useStyles();

    return (
        <div>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Power Rangers Will Return!
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Visit us anyhow anywhere... pleeeeaaaase
                </Typography>
                <IconButton href='https://twitter.com' className={ classes.largeIcon }><TwitterIcon /></IconButton>
                <IconButton href='https://telegram.org' className={ classes.largeIcon }><TelegramIcon /></IconButton>
                <IconButton href='https://www.instagram.com/isy.future/' className={ classes.largeIcon }><InstagramIcon /></IconButton>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    We love you
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    ISY Future &#169;
                </Typography>
            </footer>
        </div>
    );
}

export default Footer;
