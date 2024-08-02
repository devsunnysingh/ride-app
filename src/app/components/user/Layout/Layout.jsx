import { Grid } from '@mui/material'
import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='h-screen'>
    <Grid container>
        <Grid item xs={12} xm={8} lg={5}>hello</Grid>
        <Grid item className='h-screen w-full' xs={0} xm={4} lg={7}>
            <img src='https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' 
            className='w-full h-full object-cover'/>
        </Grid>
    </Grid>

    </div>
  )
}

export default Layout