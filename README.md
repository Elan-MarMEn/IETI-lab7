# IETI-lab7

Debido a ciertos fallos en la plataforma de azure se opto por utilizar aws usando el servicio 
API lambda con el cual se logro colocar los endpoint en un servidor web y consumirlos localmente usando los archivos del directorio *taskApiConsume*.

## Iniciando

Usando el comando para clonar:
 > git clone

Debera abrir el taskApiConsume unicamente en su IDE de preferencia o simplemente accerder directamente a su consola y hacer uso del comando 
> npm -i
> 
> npm start

Una vez este corriendo la aplicacion vera la informacion que se consulta 
y podra agregar mas informacion usando el POST que esta conectado con el boton.

### Endpoints
* [GET](https://9atwwkzjcb.execute-api.us-east-1.amazonaws.com/IetiLab7/ieti-lab7-listtasks)
* [POST](https://9atwwkzjcb.execute-api.us-east-1.amazonaws.com/IetiLab7/ieti-lab7-addtask)
