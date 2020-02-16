import React from 'react';
import {Route} from 'react-router-dom';
import {Homepage} from '../components/Homepage/Homepage'
import {CreateBattle} from '../components/createBattlePage/CreateBattle'
import {Header} from '../components/Header'


const ReactRouter = () => {
return (
    <React.Fragment>
        <div className="flexContainer container-fluid no-gutters pl-0">
        <div className="col-3">
        <Header></Header>
        </div>
        <div className="col-9">
            <Route exact path="/" component={Homepage} />
            <Route path="/CreateBattle" component={CreateBattle} />
            </div>
        </div>

    </React.Fragment>
)
}


export default ReactRouter;