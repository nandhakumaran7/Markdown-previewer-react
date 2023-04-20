import React from 'react'
import { AppBar, Avatar, Toolbar, Typography } from '@material-ui/core'
import {RateReview} from '@mui/icons-material'
export default function Appbar(){ 
    return(
        <AppBar variant='outlined'style={{backgroundColor:'black'}}>
            <Toolbar>
                <Typography >MARKDOWN PREVIEWER</Typography>
                <RateReview />
                <div style={{marginLeft:"auto",display:'flex',flexDirection:'row',justifyContent:'space-around'}}>

                <a href='.terminal' className='A1'><h4>PREVIEW</h4></a>&emsp;&emsp;
                <a href='#textblock' className='A1'><h4>WHAT</h4></a>&emsp;&emsp;
                <a href='#textblock1'className='A1'><h4>WHY</h4></a>&emsp;&emsp;
                <a href='#textblock2'className='A1'><h4>HOW</h4></a>&emsp;
                <a href='#COC'className='A1'><h4>CONTACT</h4></a>&emsp;
                </div>
            </Toolbar>
        </AppBar>
    )
}