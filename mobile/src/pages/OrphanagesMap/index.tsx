import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import mapMarker from '../../images/map-marker.png';

// import { Container } from './styles';

const OrphanagesMap: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigateToOrphanageDetails() {
    navigation.navigate('OrphanagesDetails');
  }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -23.6387626,
          longitude: -46.5192747,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        <Marker
          icon={mapMarker}
          calloutAnchor={{
            x: 2.2,
            y: 0.6,
          }}
          coordinate={{
            latitude: -23.6387626,
            longitude: -46.5192747,
          }}
        >
          <Callout tooltip onPress={handleNavigateToOrphanageDetails}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Instituto Lar das Crianças</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>2 Orfanatos encontrados</Text>

        <TouchableOpacity
          style={styles.createOrphanageButton}
          onPress={() => {}}
        >
          <Feather name="plus" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrphanagesMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255,255,255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center',
  },

  calloutText: {
    fontFamily: 'Nunito_700Bold',
    color: '#0089a5',
    fontSize: 14,
  },

  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 32,

    backgroundColor: '#FFF',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    elevation: 3,
  },

  footerText: {
    fontFamily: 'Nunito_700Bold',
    color: '#8fa7b3',
  },

  createOrphanageButton: {
    width: 56,
    height: 56,
    backgroundColor: '#26a867',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },
});