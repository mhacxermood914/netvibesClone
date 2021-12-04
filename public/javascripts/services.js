'use strict'
//variables decalrations
function add(service) {
    localStorage.setItem('service', service)

}

function next() {
    location.replace('http://localhost:8080/dashboard')
}