import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Deliveries from './pages/Deliveries';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import DeliveryConfirm from '~/pages/DeliveryDetails/Confirm';
import DeliveryDetails from '~/pages/DeliveryDetails/Details';
import DeliveryNewProblem from '~/pages/DeliveryDetails/NewProblem';
import DeliveryProblems from '~/pages/DeliveryDetails/Problems';

Icon.loadFont();

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function DeliveriesTab({ navigation, route }) {
    function goBackOrDeliveries({ canGoBack, onPress }) {
        if (canGoBack) {
            onPress();
        } else {
            navigation.navigate('Deliveries');
        }
    }

    return (
        <Stack.Navigator
            screenOptions={{
                headerTransparent: true,
                headerTintColor: '#FFF',
                headerLeftContainerStyle: {
                    marginLeft: 20,
                },
            }}>
            <Stack.Screen
                name="Deliveries"
                component={Deliveries}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="DeliveryDetails"
                component={DeliveryDetails}
                options={{
                    headerTitleAlign: 'center',
                    title: 'Detalhes da encomenda',
                    headerLeft: ({ canGoBack, onPress, ...rest }) => (
                        <TouchableOpacity
                            onPress={() =>
                                goBackOrDeliveries({ canGoBack, onPress })
                            }>
                            <Icon name="chevron-left" size={20} color="#FFF" />
                        </TouchableOpacity>
                    ),
                }}
            />
            <Stack.Screen
                name="DeliveryNewProblem"
                component={DeliveryNewProblem}
                options={{
                    title: 'Informar Problema',
                    headerLeft: ({ canGoBack, onPress }) => (
                        <TouchableOpacity
                            onPress={() =>
                                goBackOrDeliveries({ canGoBack, onPress })
                            }>
                            <Icon name="chevron-left" size={20} color="#FFF" />
                        </TouchableOpacity>
                    ),
                }}
            />
            <Stack.Screen
                name="DeliveryProblems"
                component={DeliveryProblems}
                options={{
                    title: 'Visualizar Problemas',
                    headerLeft: ({ canGoBack, onPress }) => (
                        <TouchableOpacity
                            onPress={() =>
                                goBackOrDeliveries({ canGoBack, onPress })
                            }>
                            <Icon name="chevron-left" size={20} color="#FFF" />
                        </TouchableOpacity>
                    ),
                }}
            />
            <Stack.Screen
                name="DeliveryConfirm"
                component={DeliveryConfirm}
                options={{
                    title: 'Confirmar Entrega',
                    headerLeft: ({ canGoBack, onPress }) => (
                        <TouchableOpacity
                            onPress={() =>
                                goBackOrDeliveries({ canGoBack, onPress })
                            }>
                            <Icon name="chevron-left" size={20} color="#FFF" />
                        </TouchableOpacity>
                    ),
                }}
            />
        </Stack.Navigator>
    );
}

export default function createRouter(isSigned = false) {
    return !isSigned ? (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="SignIn" component={SignIn} />
        </Stack.Navigator>
    ) : (
        <Tabs.Navigator
            tabBarOptions={{
                activeTintColor: '#7D40E7',
                inactiveTintColor: '#999999',
                style: {
                    backgroundColor: '#fff',
                },
                keyboardHidesTabBar: true,
            }}>
            <Tabs.Screen
                name="Deliveries"
                component={DeliveriesTab}
                options={{
                    tabBarLabel: 'Entregas',
                    tabBarIcon: ({ color }) => (
                        <Icon name="dehaze" size={20} color={color} />
                    ),
                    unmountOnBlur: true,
                }}
            />
            <Tabs.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Meu Perfil',
                    tabBarIcon: ({ color }) => (
                        <Icon name="person" size={20} color={color} />
                    ),
                }}
            />
        </Tabs.Navigator>
    );
}
