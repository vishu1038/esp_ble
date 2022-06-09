function isWebBLEAvailable() {
  if(!navigator.bluetooth) {
    console.log('Web Bluetooth is not available!');
    return false;
  }

  return true
}

function getDeviceInfo() {
  let options = {
    acceptAllDevices: true
  }

  console.log('Requesting BLE device info...')
  navigator.bluetooth.requestDevice(options).then(device => {
    console.log('Name: ' + device.name)
  }).catch(error => {
    console.log('Request device error:' + error)
  })
}

document.querySelector('form').addEventListener('submit',
function(event) {
  event.stopPropagation()
  event.preventDefault()

  if (isWebBLEAvailable()) {
    getDeviceInfo()
  }
})
