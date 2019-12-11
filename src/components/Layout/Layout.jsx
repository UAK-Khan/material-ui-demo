import React, {useState} from 'react';
import AppBar from '../Appbar/Appbar';
import Drawer from '../Drawer/Drawer';

const Layout = () => {
    const [state, setState] = useState({
        drawerVisibled: false
    });

    const toggleDrawerHandler = (event, is) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({drawerVisibled: is})
    };

    return (
        <div>
            <Drawer drawerVisible={state.drawerVisibled} toggleDrawer={toggleDrawerHandler} />
            <AppBar toggleDrawer={toggleDrawerHandler}/>
        </div>
    )
};

export default Layout;