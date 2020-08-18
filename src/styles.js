import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: theme.transitions.create("all", {
                    easing: theme.transitions.easing.sharp,
                    duration: 200// theme.transitions.duration.leavingScreen,
            }),
        '&:hover': {
            width: '115%',
            "& $cardMedia": {
                paddingTop: '70.25%',
                transition: theme.transitions.create("all", {
                    easing: theme.transitions.easing.sharp,
                    duration: 100// theme.transitions.duration.leavingScreen,
                }),
            }
        }
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    largeIcon: {
        width: 60,
        height: 60,
    }
  }));
