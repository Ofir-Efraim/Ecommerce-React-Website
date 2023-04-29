import React from 'react';
import useStyles from './styles';
import {Link} from 'react-router-dom';
import {Button, Typography} from '@material-ui/core';


const About = () => {
    const classes = useStyles(); 
        return (
            <>
            <Typography className={classes.title} variant='h2'>היי אנחנו גילי'ז</Typography>
            <div className={classes.image}>
            <img src='https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg' alt="Giliz"/>
            </div>
            <Typography className={classes.title} variant='h5'>כיתוב על מי אנחנו</Typography>
            <Button className={classes.toProducts} component={Link} to='/products' color="primary">למוצרים</Button>
            </>
        )
    }

export default About