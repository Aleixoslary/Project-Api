import React from 'react';
import{BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Shop from './pages/Shop';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path ="/" exact component={Home}/>
                <Route path ="/shop" component={Shop}/>
                
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;