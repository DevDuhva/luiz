import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({

  
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#ecf0f1',
  },
  loginContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loginInput: {
    width: '80%',
    backgroundColor: '#eee',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
  },
  loginButton: {
    width: '80%',
    padding: 14,
    backgroundColor: '#8cf27c',
    borderRadius: 8,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },

  // NAVBAR
  navbar: {
    backgroundColor: '#000',
    padding: 50,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   
             
  },
navbarSearch: {
  backgroundColor: '#fff',
  marginTop: 20,
  marginBottom: 20,
  padding: 15,
  borderRadius: 8,
  width: '81%',          // <-- deixa menor
  alignSelf: 'center',   // <-- centraliza
  fontSize: width > 550 ? 16 : 14,
},
  hamburger: {
    fontSize: width > 500 ? 28 : 24,
    color: '#fff',
    paddingRight: width * 0.02,
  },

  // HAMBURGER MENU
  menuContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  menuItem: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#8cf27c',
    borderRadius: 8,
    fontWeight: 'bold',
  },

  // PRODUCTS GRID
  productsContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: width * 0.03,
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: width * 0.02,
  },
  productCard: {
    width: width > 800 ? width * 0.2 : width > 500 ? width * 0.4 : width * 0.35,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  productImage: {
    width: '100%',
    height: width > 800 ? 150 : width > 500 ? 120 : 100,
    borderRadius: 8,
    backgroundColor: '#ccc',
  },
  productName: {
    marginTop: 8,
    fontWeight: 'bold',
    fontSize: width > 800 ? 16 : 14,
  },
  productDesc: {
    fontSize: width > 800 ? 13 : 11,
    color: '#555',
  },

  // NOTIFICATIONS
  notificationCard: {
    backgroundColor: '#8cf27c',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },

  // PROFILE
  profileContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  profileOption: {
    padding: 15,
    backgroundColor: '#8cf27c',
    borderRadius: 10,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

// Drawer Styles
export const drawerStyles = {
  headerStyle: {
    backgroundColor: '#000',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  drawerStyle: {
    backgroundColor: '#111',
  },
  drawerActiveTintColor: '#8cf27c',
  drawerInactiveTintColor: '#aaa',
  drawerLabelStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
};