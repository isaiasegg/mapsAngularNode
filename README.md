# MapAngularNode

Requerimientos:
- NodeJs instalado
- Nodemon (opcional)
- Haber generado un key público para google maps

Instrucciones:
- npm i
- npm i -g nodemon (opcional)
- Agregar el key público en el url de Google Maps dentro del archivo src/index.html

Notas:
- Para levantar el servidor simplemente correr 'nodemon' en el root del repo y luego 'npm run ngDev, el segundo es para correr el servidor del cliente y este tome como puerto para los requests al API, el puerto que se utiliza en el servidor (:3000)
- Si el cliente da un error (google is not defined) recargar la página, esto pasa en ambiente de desarrollo. El mismo error puede causarlo no habe agregado el key público de Google Maps

Espero les sirva!!