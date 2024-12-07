import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MapView, { Marker, Polyline } from 'react-native-maps'

const mymap = () => {

  const polylineCoordinates = [
    { latitude: 20.972168, longitude: 85.074629 },
    { latitude: 20.284632, longitude: 85.838175 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 20.972168,
          longitude: 85.074629,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        mapType="hybrid"
      >
        {/* Polyline */}
        <Polyline
          coordinates={polylineCoordinates}
          strokeColor="#FF0000" // Line color
          strokeWidth={4} // Line thickness
        />

        {/* Optional: Markers for start and end points */}
        <Marker
          coordinate={polylineCoordinates[0]}
          title="Julu"
          description="This is the starting point"
        />
        <Marker
          coordinate={polylineCoordinates[polylineCoordinates.length - 1]}
          title="Mnu"
          description="This is the end point"
        />
      </MapView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default mymap