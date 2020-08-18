import React from 'react'


import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { useStyles } from '../styles.js';


function Member(props) {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cardMedia}
                    image={ props.member.image }
                    title={ props.member.name }
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        { props.member.name }
                    </Typography>
                    <Typography>
                        { props.member.title }
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button disabled={ true } size="small" color="primary">
                        Show Nudes
                    </Button>
                    <Button disabled={ true } size="small" color="primary">
                        Donate $
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default Member;
