import React from 'react';
import {
    View, Text,
    StyleSheet, FlatList,
    TouchableOpacity, Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');

const projectsData = [
    {
        id: '1',
        title: 'Society Management System.',
        description: `
        * The Project is Developed to demonstrate the Learning obtained during the course and resolve the issue of Buyers.
        * In My Project We have Implemented a User-friendly Web Application designed to help manage the day-to-day operation of residential societies, housing complexes, or gated communities. It aims to simplify and automate the management of residential societies.`,
        technologies: ['NodeJS', 'ReactJS', 'MySql', 'Android'],
    },
    {
        id: '2',
        title: 'Blog Management System.',
        description: `
        * It is a server-side web application using advanced Java, HTML5, CSS, XML, Servlet, Hibernate, POJO's, DAO's Class, etc.
        * Duration – April 2024 – May 2024.
        * Web Server – Apache Tomcat 8.0.22.
        * In this project, I created personal blog details for editing, deleting blogs, and also creating new blogs. All data is stored in a MySQL database.`,
        technologies: ['Advance Java', 'HTML5', 'CSS', 'XML', 'Servlet', 'Hibernate'],
    },
    {
        id: '3',
        title: 'Human Resource and Recruitment System.',
        description: `
        * College Final Year Project • August 2022 -June 2023
        * The goal was to develop a Human Resource System for freshers or experienced candidates, which can automatically assign departments to candidates coming into the company.
        * For freshers, there will be an aptitude test focusing on various areas such as frontend, backend, and database. After analyzing the scores, the system will suggest the most suitable department for the candidate and display their aptitude score to HR.`,
        technologies: ['HTML', 'CSS', 'Bootstrap', 'Javascript', 'MySQL'],
    },
];

const Projects = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                Projects.
            </Text>
            <FlatList
                data={projectsData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.projectItem}>
                        <Text style={styles.projectTitle}>
                            {item.title}
                        </Text>
                        <Text style={styles.projectDescription}>
                            {item.description}
                        </Text>
                        <View style={styles.technologiesContainer}>
                            {item.technologies.map((tech, index) => (
                                <View key={index} style={styles.techBox}>
                                    <Text style={styles.techText}>{tech}</Text>
                                </View>
                            ))}
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#a9a9a9',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 30,
        color: '#6a5acd',
        textAlign: 'center',
    },
    projectItem: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        width: width * 0.9,  // Adjust width based on screen size
        alignSelf: 'center',  // Center the project items
    },
    projectTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'black',
    },
    projectDescription: {
        fontSize: 16,
        color: '#666',
        marginBottom: 10,
    },
    technologiesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',  // Align items to the start
    },
    techBox: {
        backgroundColor: '#61dafb',
        borderRadius: 5,
        padding: 8,
        marginRight: 5,
        marginBottom: 5,
    },
    techText: {
        color: '#fff',
        fontSize: 14,
    },
});

export default Projects;
