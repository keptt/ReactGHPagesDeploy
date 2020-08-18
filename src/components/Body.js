import React from 'react'

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { useStyles } from '../styles.js';

import ListOfMembers from './ListOfMembers';


function Body() {
    const classes = useStyles();
    const instagramUrl = 'https://www.instagram.com/isy.future/';
    const siteUrl = 'http://isyfuture.tilda.ws/';

    return (
        <div>
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h3" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Cow Says "YO"!
                        </Typography>
                        <Typography variant="h4" align="center" color="textSecondary" paragraph>
                            Now Meet Your Team!
                        </Typography>
                        <img src={ require("../img/cow.png") } alt="" style={{ marginRight: 15 }}/>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                <Button variant="contained" color="primary" href={ siteUrl }>
                                    Visit Site
                                </Button>
                                </Grid>
                                <Grid item>
                                <Button variant="outlined" color="primary" href={ instagramUrl }>
                                    Instagram
                                </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                    <ListOfMembers />
                </div>
            </main>
        </div>
    );
}

export default Body;
