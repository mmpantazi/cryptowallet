import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, Title, Caption, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = () => {
  return (
    <ScrollView> 
    <View style={styles.userInfoSection}>
        <View style={{ flexDirection: 'row', marginLeft: 7, }}>
            <Avatar.Image source={ require("../../../assets/icons/avatar.png") }
            size={80} />

            <View style={{marginLeft: 20}}>
                <Title style={[styles.title, {marginTop: 15, marginBottom: 5,}]}>Marius Pantazi</Title>
                <Caption style={styles.caption}>@mmpantazi</Caption>
                <Caption style={styles.caption}>UID: 1000001</Caption>
            </View>
        </View>

        <View style={[styles.userInfoSection, {marginTop: '10%', marginLeft: '-10%'}]}>
            <View style={styles.row}>
                <Icon name="map-marker-radius" color="#fff" size={20} />
                <Text style={{color: '#fff', marginLeft: 20}}>Bucharest, Romania</Text>
            </View>
            <View style={styles.row}>
                <Icon name="phone" color="#fff" size={20} />
                <Text style={{color: '#fff', marginLeft: 20}}>+40 758 521 673</Text>
            </View>
            <View style={styles.row}>
                <Icon name="email" color="#fff" size={20} />
                <Text style={{color: '#fff', marginLeft: 20}}>marius.pantazi@s.utm.ro</Text>
            </View>
        </View>
    </View>

    <View style={styles.menuWrapper}> 
        <TouchableOpacity onPress={() => {}}>
            <View style={styles.menuItem}>
                <Icon name="credit-card" color="#4169e1" size={25}/>
                <Text style={styles.menuItemText}>Payment</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
            <View style={styles.menuItem}>
                <Icon name="share-outline" color="#4169e1" size={25}/>
                <Text style={styles.menuItemText}>Invite your friends</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
            <View style={styles.menuItem}>
                <Icon name="face-agent" color="#4169e1" size={25}/>
                <Text style={styles.menuItemText}>Support</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
            <View style={styles.menuItem}>
                <Icon name="cog" color="#4169e1" size={25}/>
                <Text style={styles.menuItemText}>Settings</Text>
            </View>
        </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        color: '#fff',
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    menuWrapper: {
        marginTop: 5,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#fff',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
});