import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, ScrollView } from 'react-native';
import { ProgressBar, IconButton } from 'react-native-paper';
// import { MaterialIcons } from 'react-native-vector-icons';

const trackingData = [
  { status: "Packed", date: "April 19 12:31", description: "Your parcel is packed and will be handed over to our delivery partner." },
  { status: "On the Way to Logistic Facility", date: "April 19 16:20", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { status: "Arrived at Logistic Facility", date: "April 19 19:07", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { status: "Shipped", date: "April 20 06:15", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { status: "Out for Delivery", date: "April 22 11:10", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { status: "Delivered", date: "April 19 12:50", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", completed: true }
];

const Deliveredscreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: "https://randomuser.me/api/portraits/women/44.jpg" }} style={styles.profileImage} />
        <View>
          <Text style={styles.title}>To Receive</Text>
          <Text style={styles.subtitle}>Track Your Order</Text>
        </View>
        <View style={styles.headerIcons}>
          <IconButton icon="bell" size={24} />
          <IconButton icon="settings" size={24} />
        </View>
      </View>

      {/* Progress Bar */}
      <ProgressBar progress={1} color="#0a84ff" style={styles.progressBar} />

      {/* Tracking Number */}
      <View style={styles.trackingBox}>
        <Text style={styles.trackingLabel}>Tracking Number</Text>
        <Text style={styles.trackingNumber}>LGS-i92927839300763731</Text>
        {/* <MaterialIcons name="content-copy" size={20} color="black" style={styles.copyIcon} /> */}
      </View>

      {/* Tracking Timeline */}
      <FlatList
        data={trackingData}
        keyExtractor={(item) => item.status}
        renderItem={({ item }) => (
          <View style={styles.timelineItem}>
            <View style={styles.timelineRow}>
              <Text style={styles.status}>{item.status}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
            <Text style={styles.description}>{item.description}</Text>
            {/* {item.completed && <MaterialIcons name="check-circle" size={20} color="#0a84ff" />} */}
          </View>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9f9f9", padding: 16 },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  profileImage: { width: 50, height: 50, borderRadius: 25 },
  title: { fontSize: 18, fontWeight: "bold" },
  subtitle: { fontSize: 14, color: "gray" },
  headerIcons: { flexDirection: "row" },
  progressBar: { height: 8, borderRadius: 4, marginVertical: 16 },
  trackingBox: {
    backgroundColor: "#ffe6e6",
    padding: 12,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16
  },
  trackingLabel: { fontWeight: "bold", color: "black" },
  trackingNumber: { flex: 1, marginLeft: 8 },
  copyIcon: { marginLeft: 8 },
  timelineItem: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2
  },
  timelineRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 4 },
  status: { fontWeight: "bold", fontSize: 16 },
  date: { fontSize: 12, color: "gray" },
  description: { fontSize: 14, color: "gray" }
});

export default  Deliveredscreen;
