import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from '../Components/CustomTabBar'

import Home from '../screens/Home'
import Card from '../screens/Card'
import Transaction from '../screens/Transaction'
import Acount from '../screens/Acount'

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