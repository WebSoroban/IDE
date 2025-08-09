// Test script to check wallet permissions
console.log('Testing wallet permissions...');

// This will only work in browser environment
if (typeof window !== 'undefined') {
  console.log('Browser environment detected');
  
  // Test if we can import the API
  import('@stellar/freighter-api').then(({ getAddress, isConnected, requestAccess }) => {
    console.log('Freighter API imported successfully');
    
    // Test connection status
    isConnected().then(result => {
      console.log('Connection status:', result);
      
      if (result.isConnected) {
        console.log('✅ Wallet is connected');
        
        // Try to get address
        getAddress().then(addressResult => {
          console.log('Address result:', addressResult);
          
          if (addressResult.error) {
            console.error('❌ Error getting address:', addressResult.error);
            console.log('This might be a permission issue');
          } else {
            console.log('✅ Address retrieved:', addressResult.address);
          }
        }).catch(error => {
          console.error('❌ Error calling getAddress:', error);
        });
        
      } else {
        console.log('❌ Wallet is not connected');
        console.log('Trying to request access...');
        
        requestAccess().then(accessResult => {
          console.log('Access request result:', accessResult);
          
          if (accessResult.error) {
            console.error('❌ Access request failed:', accessResult.error);
          } else {
            console.log('✅ Access granted:', accessResult.address);
          }
        }).catch(error => {
          console.error('❌ Error requesting access:', error);
        });
      }
    }).catch(error => {
      console.error('❌ Error checking connection:', error);
    });
    
  }).catch(error => {
    console.error('❌ Failed to import Freighter API:', error);
  });
} else {
  console.log('Not in browser environment');
} 