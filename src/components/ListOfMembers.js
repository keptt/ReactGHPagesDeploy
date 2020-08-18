import React from 'react'

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { useStyles } from '../styles.js';

import Member from './Member';


function ListOfMembers() {
    const classes = useStyles();

    const cards = [
        {
            name: 'NikiTa🐹 '
            , title: 'Prince of the day, lord of the night'
            , image: require('../img/nik.jpg')
            , id: 1
        }
        , {
            name: 'AlexZander🦇'
            , title: 'Witcher\'s chest fan (Tbh me too)'
            , image: require('../img/alex.png')
            , id: 2
        }
        , {
            name: 'SirGay🐮'
            , title: 'Toothpick fish... But wait, my totem used to be a cow! (refer to RobotChicken)'
            , image: require('../img/ser.png')
            , id: 3
        }
        , {
            name: 'BohDanister🐽'
            , title: 'Pigs are better than cats \'cuz they are whit... pink'
            , image: require('../img/bohr.jpg')
            , id: 4
        }
        , {
            name: 'DartBohdAnus🐰'
            , title: 'I am your Boh, Luke!'
            , image: require('../img/boh.png')
            , id: 5
        }
        , {
            name: 'Lionardo🦁'
            , title: 'Conservative and loyal lover. Limited edition. Also Eva is a thot for strolling naked with some shitty Adam'
            , image: require('../img/cow-def.jpg')
            , id: 6
        }
        , {
            name: 'IVAN!!!🐻 '
            , title: 'Hates Russians, loves Americans'
            , image: require('../img/cow-def.jpg')
            , id: 7
        }
        , {
            name: 'Ziong🐨'
            , title: 'Busy Guy And... You know what... NikiTa seems to be using his picture'
            , image: require('../img/cow-def.jpg')
            , id: 8
        }
        , {
            name: 'Maximus🐞'
            , title: 'Red Power Ranger. Also knows everything about chick(a)s in the area'
            , image: require('../img/cow-def.jpg')
            , id: 9
        }
        , {
            name: 'Vladius🦄'
            , title: 'You better hide your lolis \'till his magic horn comes into picture'
            , image: require('../img/cow-def.jpg')
            , id: 10
        }
        , {
            name: 'AlexHey🐍'
            , title: 'Guess I really should\'t say anything here'
            , image: require('../img/cow-def.jpg')
            , id: 10
        }
    ];


    return (
        <div>
            <Container className={ classes.cardGrid } maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                    {cards.map((card) => (
                    <Grid item key={ card.id } xs={12} sm={6} md={4}>
                        <Member member={ card } />
                    </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}

export default ListOfMembers;


