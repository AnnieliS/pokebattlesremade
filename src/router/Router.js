import React from 'react';
import {Route} from 'react-router-dom';
import {Homepage} from '../components/Homepage/Homepage'
import CreateBattle from '../components/createBattlePage/CreateBattle'
import {Header} from '../components/Header'
import ActiveBattle from '../components/ActiveBattle/ActiveBattle'
import Discover from '../components/MusicSugg/Discover'
import JoinBattle from '../components/JoinBattle/JoinBattle'
import AllBattles from '../components/AllPlayersBattle/AllBattles';

// import CreatePokemon from '../components/CreatePokemon/CreatePokemon';


const ReactRouter = () => {

return (
    <React.Fragment>
        <div className="flexContainer justify-content-between container-fluid no-gutters pl-0">
        <div className="col-sm-2 hideWhenSmall">
        <Header></Header>
        </div>
        <div className="col-10 justify-content-center" style={{overflowX: "hidden"}}>
            <Route exact path="/" component={Homepage} />
            <Route path="/CreateBattle" component={CreateBattle} />
            <Route path="/AllBattles" component={AllBattles} />
            <Route path="/TestBattle" component={ActiveBattle} />
            <Route path="/MusicChooser" component={Discover} />
            <Route path="/JoinBattle" component={JoinBattle} />
            <Route path="/ActiveBattle" component={ActiveBattle} />
            {/* <Route path="/CreatePokemon" component={CreatePokemon} /> */}


            
            </div>
        </div>

    </React.Fragment>
)
}


export default ReactRouter;