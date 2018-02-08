import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Menu from './pages/Menu';
import PlantationTutorial from './pages/PlantationTutorial';
import ToolsMarketplace from './pages/ToolsMarketplace';
import CommunitySharing from './pages/CommunitySharing';
import YourPlant from './pages/YourPlant';
import ProfileSetting from './pages/ProfileSetting';
import ProductStorefront from './pages/ProductStorefront';
import CalendarYourPlant from './pages/CalendarYourPlant';
import YourPlantDetailA from './pages/YourPlantDetailA';
import YourPlantDetailB from './pages/YourPlantDetailB';
import YourPlantDetailC from './pages/YourPlantDetailC';
import TanamanA from './pages/TanamanA';
import TanamanB from './pages/TanamanB';
import TanamanC from './pages/TanamanC';
import AddPlantationTutorial from './pages/AddPlantationTutorial';



export default class Routes extends Component<{}> {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={false}>
			      <Scene key="login" component={Login} title="Login" initial={true}/>
			      <Scene key="signup" component={Signup} title="Register"/>
						<Scene key="menu" component={Menu} title="Menu"/>
						<Scene key="plantationtutorial" component={PlantationTutorial} title="PlantationTutorial"/>
						<Scene key="toolsmarketplace" component={ToolsMarketplace} title="ToolsMarketplace"/>
						<Scene key="communitysharing" component={CommunitySharing} title="CommunitySharing"/>
						<Scene key="yourplant" component={YourPlant} title="YourPlant"/>
						<Scene key="profilesetting" component={ProfileSetting} title="ProfileSetting"/>
						<Scene key="productstorefront" component={ProductStorefront} title="ProductStorefront"/>
						<Scene key="calendaryourplant" component={CalendarYourPlant} title="CalendarYourPlant"/>
						<Scene key="yourplantdetaila" component={YourPlantDetailA} title="YourPlantDetailA"/>
						<Scene key="yourplantdetailb" component={YourPlantDetailB} title="YourPlantDetailB"/>
						<Scene key="yourplantdetailc" component={YourPlantDetailC} title="YourPlantDetailC"/>
						<Scene key="tanamana" component={TanamanA} title="TanamanA"/>
						<Scene key="tanamanb" component={TanamanB} title="TanamanB"/>
						<Scene key="tanamanc" component={TanamanC} title="TanamanC"/>
						<Scene key="addplantationtutorial" component={AddPlantationTutorial} title="AddPlantationTutorial"/>
			    </Stack>
			 </Router>
			)
	}
}