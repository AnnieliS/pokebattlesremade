import React from 'react';
import {Route} from 'react-router-dom';
import {Homepage} from '../components/Homepage/Homepage'
import CreateBattle from '../components/createBattlePage/CreateBattle'
import {Header} from '../components/Header'
import ActiveBattle from '../components/ActiveBattle/ActiveBattle'
import Discover from '../components/MusicSugg/Discover';


const ReactRouter = () => {
return (
    <React.Fragment>
        <div className="flexContainer justify-content-between container-fluid no-gutters pl-0">
        <div className="col-md-2">
        <Header></Header>
        </div>
        <div className="col-10 justify-content-center ">
            <Route exact path="/" component={Homepage} />
            <Route path="/CreateBattle" component={CreateBattle} />
            <Route path="/TestBattle" component={ActiveBattle} />
            <Route path="/MusicChooser" component={Discover} />
            </div>
        </div>

    </React.Fragment>
)
}


export default ReactRouter;