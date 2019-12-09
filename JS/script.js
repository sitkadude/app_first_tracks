console.clear()

const resortsData = [
  {
    name: 'Perfect North Slopes',
    long: -84.886362,
    lat: 39.149131
  },
  {
    name: 'Paoli Peaks',
    long: -86.51807,
    lat: 38.55533
  },
  {
    name: 'Mad River Mountain',
    long: -83.7556,
    lat: 40.3634
  }
]

// ------ Function to get Distance in Km
function getDistance(lat1, lon1, lat2, lon2, unit) {
        var radlat1 = Math.PI * lat1/180
        var radlat2 = Math.PI * lat2/180
        var radlon1 = Math.PI * lon1/180
        var radlon2 = Math.PI * lon2/180
        var theta = lon1-lon2
        var radtheta = Math.PI * theta/180
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist)
        dist = dist * 180/Math.PI
        dist = dist * 60 * 1.1515
        if (unit=="K") { dist = dist * 1.609344 }
        if (unit=="N") { dist = dist * 0.8684 }
        return dist
}

///////////////////////////////

const trigger = document.querySelector('#trigger')
const answer = document.querySelector('#answer')
const reset = document.querySelector('#reset')

trigger.addEventListener('click', () => {
    const resort = resortsData[1]
    answer.innerText = 'Loading ...';
    
    navigator.geolocation.getCurrentPosition((usersPosition) => {
    // answer.innerHTML = `Latitude: ${position.coords.latitude}<br>Longitude: ${position.coords.longitude}`
    const distance = getDistance(usersPosition.coords.latitude, usersPosition.coords.longitude, resort.lat, resort.long);
    answer.innerText = distance
    // console.log(distance)
  });
})

reset.addEventListener('click', () => {
    answer.innerText = ''
})


