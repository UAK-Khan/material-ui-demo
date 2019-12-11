import React from 'react';
import { SwipeableDrawer } from '@material-ui/core';

const Drawer = (props) => {

    return (
        <SwipeableDrawer 
            anchor="left"
            open={props.drawerVisible}
            onClose={(e) => props.toggleDrawer(e, false)}
            onOpen={(e) => props.toggleDrawer(e, true)}>
            <h1>Drawer</h1>
        </SwipeableDrawer>   
    )
};

export default Drawer;