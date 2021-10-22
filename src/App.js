import { useState } from 'react';
import { CssBaseline, MuiThemeProvider, StylesProvider,createGenerateClassName } from '@material-ui/core';
import { muiTheme as theme } from './theme/theme';
import Default from './Default';
import Useraction from './mycomp/useraction/commodity/index'
import Filter from './mycomp/filter/index'
import ChartandTable from './mycomp/Commodity-detail/index'
import './App.css';
import News from './mycomp/news/index'
import CurrentPrice from './mycomp/currentprice/commodity/index'
import CurrentPricedash from './mycomp/currentprice/dash/index'
import DataSource from './mycomp/datasource/index'
import Currency from './mycomp/currency/index'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './Navigation';
import SourceMaintenance from './mycomp/SourceMaintenance/index'
import Dashboard from './mycomp/dash/index'
import UserAction from './mycomp/useraction/dashboard/index'
import Test from './Test';
import DashMenu from './mycomp/dashmenu/index';
import MaterialDash from './mycomp/materialdash/index';

const generateClassNames = createGenerateClassName({
  productionPrefix: 'tracker', // Replace 'cbp' with the name of your app
});


const App = () => {
    const [SeletedCountry,setSeletedCountry]=useState("China");
    const [SeletedCurrency,setSeletedCurrency]=useState("US Cent/");
    const [SeletedUnit,setSeletedUnit]=useState("Kilo");
 return(
<Router>
<StylesProvider generateClassName={generateClassNames}>
    <MuiThemeProvider theme={theme}>
        <CssBaseline/>
        <Default/>
        <Switch>
        <Route path="/test">
            <div className="mainnavdiv">
                <Test/>
            </div>
        </Route>
        <Route path="/Navigation">
            <Useraction/>
            <div className="maincontentdiv">
                <Navigation/>
            </div>
        </Route>
        <Route path="/cotton">
            <Useraction/>
            <div className="maincontentdiv">
                <div className="maincontent">
                <Filter  setSeletedCountry={setSeletedCountry} setSeletedCurrency={setSeletedCurrency}  setSeletedUnit={setSeletedUnit}/>
                <div className="left-hand-content">
                    <div className="chart-news">
                        <ChartandTable SeletedCountry={SeletedCountry} SeletedCurrency={SeletedCurrency} SeletedUnit={SeletedUnit}/>
                        <News/>
                    </div>
                    <div className="right-hand-content">
                        <CurrentPrice/>
                        <DataSource />
                        <Currency/>
                    </div>
                </div>
                </div>
             </div>
            </Route>
            <Route path="/cottondash">
            <Useraction/>
            <div className="maincontentdiv">
                <div className="maincontent">
                <Filter  setSeletedCountry={setSeletedCountry} setSeletedCurrency={setSeletedCurrency} setSeletedUnit={setSeletedUnit}/>
                <div className="left-hand-content">
                <div className="chart-news">
                        <MaterialDash SeletedCurrency={SeletedCurrency} SeletedUnit={SeletedUnit}/>
                        <News/>
                    </div>
                    <div className="right-hand-content">
                        <CurrentPricedash/>
                        <DataSource />
                        <Currency/>
                    </div>
                </div>
                </div>
             </div>
            </Route>
            <Route path="/DashMenu">
            <UserAction/>
            <div className="maincontentdiv">
                <div className="maincontent">
                    <DashMenu/>
                   
                </div>
            </div>
            </Route>
            <Route path="/Dashboard">
            <UserAction/>
            <div className="maincontentdiv">
                <div className="maincontent">
                <Filter/>
                <div className="left-hand-content">
                    <div className="dash">
                        <Dashboard SeletedCurrency={SeletedCurrency} SeletedUnit={SeletedUnit} MaterialDash="cottondash" title="Cotton" />
                        <Dashboard SeletedCurrency={SeletedCurrency} SeletedUnit={SeletedUnit} title="Polyester"/>
                        <Dashboard SeletedCurrency={SeletedCurrency} SeletedUnit={SeletedUnit} title="Viscose"/>
                        <Dashboard SeletedCurrency={SeletedCurrency} SeletedUnit={SeletedUnit} title="Acrylic"/>
                        <Dashboard SeletedCurrency={SeletedCurrency} SeletedUnit={SeletedUnit} title="Recycled Polyester"/>
                        <Dashboard SeletedCurrency={SeletedCurrency} SeletedUnit={SeletedUnit} title="Spandex"/>
                        <Dashboard SeletedCurrency={SeletedCurrency} SeletedUnit={SeletedUnit} title ="Linen"/>
                        <Dashboard SeletedCurrency={SeletedCurrency} SeletedUnit={SeletedUnit} title ="Organic Cotton"/>
                    </div>
                    <div className="right-hand-content">
                        <Currency/>
                    </div>
                </div>
                </div>
            </div>
            </Route>
            <Route path="/Maintenance">
                <div className="mainnavdiv">
                    <SourceMaintenance/>
                </div>
            </Route>
        </Switch>
    </MuiThemeProvider>
</StylesProvider>
</Router>
)}
export default App

