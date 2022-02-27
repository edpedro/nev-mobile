import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from '../src/Components/CustomTabBar'

import Home from '../src/screens/Home'

const Tab = createBottomTabNavigator();

export default function MenuTabs(){
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen 
        name="Home" 
        component={Home}       
      />
      <Tab.Screen 
        name="card" 
        component={Home}         
      />
       <Tab.Screen 
        name="plus" 
        component={Home}       
       
      />            
      <Tab.Screen 
        name="transaction" 
        component={Home} 
       
      />   
      <Tab.Screen 
        name="acount" 
        component={Home} 
       
      />                         
    </Tab.Navigator>
  );
}