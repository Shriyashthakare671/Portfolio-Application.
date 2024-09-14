import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Projects from './Project';
import Icon from 'react-native-vector-icons/Ionicons'; // Import vector icons
import { View, StyleSheet } from 'react-native'; // Import View and StyleSheet
// import Navigation from './Navigation';

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
            {/* <Navigation /> */}
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        // Define icons based on route name
                        if (route.name === 'Home') {
                            iconName = 'home-outline';
                        } else if (route.name === 'Projects') {
                            iconName = 'briefcase-outline';
                        }

                        // Custom style for the active tab background
                        const dynamicStyle = focused ? styles.activeIconContainer : {};

                        return (
                            <View style={[styles.iconContainer, dynamicStyle]}>
                                <Icon name={iconName} size={size} color={color} />
                            </View>
                        );
                    },
                    tabBarActiveTintColor: '#61dafb',
                    tabBarInactiveTintColor: '#999',
                    tabBarLabelStyle: {
                        fontSize: 16,
                        fontWeight: 'bold',
                    },
                    tabBarStyle: styles.tabBarStyle, // Use tab bar style
                })}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
                <Tab.Screen
                    name="Projects"
                    component={Projects}
                    options={{ headerShown: false }}
                />
            </Tab.Navigator>
        </NavigationContainer>
        
    );
};

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: '#ffefd5', // Light peach background color
        height: 60,
        position: 'relative',
        left: 0,
        right: 0,
        bottom: 0,
        elevation: 0,
        borderTopWidth: 0,
    },
    iconContainer: {
        backgroundColor: 'transparent', // Default icon container
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
    },
    activeIconContainer: {
        backgroundColor: '#ffefd5', // Same color as the tab bar for a seamless look
        borderRadius: 30,           // Fully round when active
        borderWidth: 2,
        borderColor: '#61dafb',     // Highlight border for active tab
    },
});

export default App;
