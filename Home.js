import React from 'react';
import {
    FlatList, View, Text,
    StyleSheet, Image, ScrollView, Dimensions, Linking, TouchableOpacity
} from 'react-native';

const logoimg = require("./assets/profile2.png");

const { width } = Dimensions.get('window');

const technologies = [
    'React Native', 'JavaScript', 'Node.js', 'Express',
    'My-SQL', 'Android', 'Java', 'HTML5', 'CSS', 'C++',
    'OOPs', 'Data Structure',
];

const IDE_Editors = [
    'Visual Studio Code', 'Spring Tool Suite', 'Android Studio', 'Jira',
];

const serverside_technologies = [
    'Spring Framework', 'Spring Boot', 'Hibernate',
    'Apache Tomcat 8.0.22', 'ExpressJS', 'NodeJS',
];

const educationData = [
    {
        level: "Post-Graduation in Development of Mobile Computing",
        institute: "Sunbeam Institute, Pune.",
        year: "2024",
        grade: "53.57%"
    },
    {
        level: "Bachelor of Engineering",
        institute: "Pune Vidyarthi Grihas College Of Engineering & S.S.dhamankar Institute of Management. Nashik",
        year: "2019-2023",
        grade: "68.80%"
    },
    {
        level: "HSC",
        institute: "S.N.J.B Secondary & Higher School, Chandwad. Nashik",
        year: "2018-2019",
        grade: "74.00%"
    },
    {
        level: "SSC",
        institute: "S.N.J.B Secondary & Higher School, Chandwad. Nashik",
        year: "2016-2017",
        grade: "89.40%"
    },
];

const openLinkedIn = () => {
    Linking.openURL('https://www.linkedin.com/in/mr-shriyash-thakare-05695b1b2');
};

const LinkedInButton = () => (
    <TouchableOpacity onPress={openLinkedIn}>
        <Text style={[styles.footerText, styles.footcolor]}> *LinkedIn Profile.</Text>
    </TouchableOpacity>
);

const Home = () => {
    const renderTechBoxes = () => (
        <FlatList
            data={technologies}
            keyExtractor={(item, index) => index.toString()}
            numColumns={width > 600 ? 3 : 2} // Conditional number of columns based on screen width
            renderItem={({ item }) => (
                <View style={styles.techBox}>
                    <Text style={styles.techText}>{item}</Text>
                </View>
            )}
        />
    );

    const renderIDEBoxes = () => (
        <FlatList
            data={IDE_Editors}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2} // Maintain 2 columns for IDEs
            renderItem={({ item }) => (
                <View style={styles.ideBox}>
                    <Text style={styles.ideText}>{item}</Text>
                </View>
            )}
        />
    );

    const renderServertechBoxes = () => (
        <FlatList
            data={serverside_technologies}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            renderItem={({ item }) => (
                <View style={styles.servertechBox}>
                    <Text style={styles.servertechText}>{item}</Text>
                </View>
            )}
        />
    );

    return (
        <View style={styles.pageContainer}>
            {/* Header Section */}
            <View style={styles.headerContainer}>
                <Text style={styles.pageHeader}>My Portfolio Page</Text>
            </View>

            {/* ScrollView for Main Content */}
            <ScrollView contentContainerStyle={styles.container}>
                <Image
                    source={logoimg}
                    style={styles.profileImage}
                />
                <Text style={styles.header}>
                    Mr. Shriyash Thakare.
                </Text>
                <Text style={styles.subheader}>
                    Android & React Native Developer.
                </Text>
                <Text style={styles.description}>
                    Welcome to my portfolio app! I am a passionate developer with expertise
                    in building cross-platform mobile applications using React Native.
                </Text>

                {/* Technologies Section */}
                <Text style={styles.subheader1}>Technologies Known</Text>
                <View style={styles.flatListContainer}>
                    {renderTechBoxes()}
                </View>

                {/* IDE & Editors Section */}
                <Text style={styles.subheader1}>IDE & Editors</Text>
                <View style={styles.flatListContainer}>
                    {renderIDEBoxes()}
                </View>

                {/* Server-Side Technologies Section */}
                <Text style={styles.subheader1}>Server Side Technologies</Text>
                <View style={styles.flatListContainer}>
                    {renderServertechBoxes()}
                </View>
                <Text style={styles.subheader1}>Education</Text>
                <View style={styles.tableContainer}>
                    {educationData.map((item, index) => (
                        <View key={index} style={styles.tableRow}>
                            <Text style={styles.tableCell}>{item.level}</Text>
                            <Text style={styles.tableCell}>{item.institute}</Text>
                            <Text style={styles.tableCell}>{item.year}</Text>
                            <Text style={styles.tableCell}>{item.grade}</Text>
                        </View>
                    ))}
                </View>

            </ScrollView>

            {/* Footer Section */}
            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>
                    Contact Me:
                </Text>
                <Text style={styles.footerText}>
                    Email: shriyashthakare671@gmail.com
                </Text>
                <Text style={styles.footerText}>
                    Phone: +91 7887710549.
                </Text>
                <LinkedInButton />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor: '#a9a9a9',
    },
    headerContainer: {
        padding: 20,
        marginTop: 25,
        backgroundColor: '#ffefd5',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomColor: '#006400',
        borderBottomWidth: 3,
    },
    pageHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    subheader: {
        fontSize: 18,
        color: '#dc143c',
        marginBottom: 20,
    },
    subheader1: {
        fontSize: 18,
        color: 'green',
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    flatListContainer: {
        marginBottom: 20,
        width: '100%',
    },
    techBox: {
        backgroundColor: '#61dafb',
        borderRadius: 5,
        padding: 10,
        margin: 5,
        width: width > 600 ? '30%' : '45%', // Adjust width based on screen size
        alignItems: 'center',
    },
    techText: {
        color: '#fff',
    },
    ideBox: {
        backgroundColor: 'green',
        borderRadius: 5,
        padding: 10,
        margin: 5,
        width: '45%',
        alignItems: 'center',
    },
    ideText: {
        color: '#fff',
    },
    servertechBox: {
        backgroundColor: '#5f9ea0',
        borderRadius: 10,
        padding: 10,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: '45%',
    },
    servertechText: {
        color: '#fff',
    },
    tableContainer: {
        alignSelf: 'stretch',
        margin: 10,
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    tableCell: {
        flex: 1,
        fontSize: 14,
        padding: 1,
    },
    footerContainer: {
        padding: 20,
        backgroundColor: '#ffefd5',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        borderTopLeftRadius: 110,
        borderTopRightRadius: 110,
    },
    footerText: {
        fontSize: 16,
        color: '#333',
    },
    footcolor: {
        color: '#4169e1',
    }
});

export default Home;
