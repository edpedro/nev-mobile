import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from '../src/Components/CustomTabBar'

import Home from '../src/screens/Home'
import Card from '../src/screens/Card'
import Transaction from '../src/screens/Transaction'
import Acount from '../src/screens/Acount'

const Tab = createBottomTabNavigator();

export default function MenuTabs(){
  return (
    <Tab.Navigator  tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen 
        name="Home"        
        options={{ headerShown: false }}
        screenOptions={{
          tabBarLabel: "inicio",        
        }}
        component={Home}       
      />
      <Tab.Screen 
        name="Card"
        options={{ headerShown: false }} 
        component={Card}         
      />               
      <Tab.Screen 
        name="Transaction" 
        options={{ headerShown: false }}
        component={Transaction} 
       
      />   
      <Tab.Screen 
        name="Acount" 
        options={{ headerShown: false }}
        component={Acount} 
       
      />                         
    </Tab.Navigator>
  );
}