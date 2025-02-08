import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Pressable } from 'react-native';

export default function TabRouter() {
    return (
        <Tabs>
            <Tabs.Screen
                name='games'
                options={{
                    title: 'Games',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                    tabBarButton: (props) => (
                        <Pressable {...props} android_ripple={{ color: 'transparent' }} />
                      ),
                }}
            />
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                    tabBarButton: (props) => (
                        <Pressable {...props} android_ripple={{ color: 'transparent' }} />
                      ),
                }}
            />
            <Tabs.Screen
                name="players"
                options={{
                title: 'Players',
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                tabBarButton: (props) => (
                    <Pressable {...props} android_ripple={{ color: 'transparent' }} />
                  ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                title: 'Profile',
                tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                tabBarButton: (props) => (
                    <Pressable {...props} android_ripple={{ color: 'transparent' }} />
                  ),
                }}
            />
        </Tabs>
    )
}