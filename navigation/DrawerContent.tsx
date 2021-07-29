import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { IAppState } from '../redux/store';
import { AppAction } from '../redux/actions';

export const DrawerContent: React.FC = (props: any) => {

    const canvasToggle = useSelector((state: IAppState) => state.canvas);
    const dispatch = useDispatch();
    
    const toggleCanvas = () => {
        dispatch({
            type: AppAction.TOGGLE_CANVAS,
            payload: {}
        });
    }

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                source={require('../assets/images/illuminati.png')}
                                size={60}
                                style={{ marginTop: 8 }}
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}>God</Title>
                                <Caption style={styles.caption}>@God</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Text style={[styles.paragraph, styles.caption]}>80</Text>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => { props.navigation.navigate("Home", { screen: "Home" }) }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => { props.navigation.navigate('Home', { screen: "Profile" }) }}
                        />
                        <DrawerItem labelStyle={styles.label}
                            icon={({ color, size }) => (
                                <Icon
                                    name="cog"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => { props.navigation.navigate("Home", { screen: "Settings" }) }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="search-web"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Search"
                            onPress={() => { props.navigation.navigate('SearchScreen') }}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => { toggleCanvas() }}>
                            <View style={styles.preference}>
                                <Text>Canvas Toggle</Text>
                                <View pointerEvents="none">
                                    <Switch value={canvasToggle} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => { console.log("sign out") }}
                />
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>

            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
        //   fontFamily:"BadScript"
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 18,
        marginTop: 3,
        fontWeight: 'bold',
        //   fontFamily:"Montserrat"
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        //   fontFamily:"Montserrat"
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
        //   fontFamily:"Montserrat"
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    label: {
        // fontFamily:"BadScript",
    }
});