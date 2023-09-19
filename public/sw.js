/* eslint-disable no-restricted-globals */
self.addEventListener("install", e =>{
    console.log('se disparo el clg porque sw se esta instalando')
})
self.addEventListener("activate", e =>{
    console.log('se disparo el clg porque sw se esta activando')
})
self.addEventListener("fetch", e =>{
    console.log('se disparo el clg porque sw ahora esta escuchando peticiones')
})