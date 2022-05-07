import React from 'react';
import {Grid, Avatar, Typography,makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    gridContainer: {
        // height:'240px',
        display: 'flex',
        alignItems: 'flex-center',
        paddingTop: '10px',
        paddingBottom: '30px'
    },
    gridItem1: {
        textAlign : 'right',
        verticalAlign:'middle',
        margin:'auto',
        display:'flex',
    },
    avatarType: {
        display: 'block',
        margin: 'auto',
        width:'160px',
        height:'160px',
        alignContent:'center',
        position: 'relative'
    },
    gridItem2: {
        verticalAlign:'middle',
        maxWidth: 'calc(100% - 160px)'
    },
    typoType1: {
        fontSize: '1.3rem',
        textIndent: '2rem',
        lineHeight: '1.9em',
        textAlign:'justify',
        margin:'40px'
    }
}));

function PersonalIntro(props) {
    const classes = useStyles();
    return (
        <Grid container className={classes.gridContainer}>
        <Grid item xs = {2} className={classes.gridItem1}>
            <Avatar src = './imgs/avatar.jpg' className = {classes.avatarType}/>
        </Grid>
        <Grid item xs = {10} className={classes.gridItem2}>
            <Typography variant = 'body1' className = {classes.typoType1}>
                I'm a 4th-year Computer Science Ph.D. candidate at State Key Lab of CAD&CG, Zhejiang University, supervised by Prof. Yingcai Wu. My research interest lies in machine learning for visualization and computer vision.
            </Typography>
        </Grid>
        </Grid>
    )
}
export default PersonalIntro