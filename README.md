### INSTRUCCIONES 
* Proyecto con el ultimo build "\build\index.html"   
* abrir index.html y cliquear el titulo para navegar al root 
* el funcionamiento corresponde con el documento del TP  
### Base de datos - Firebase 
* cpnfiguraciom de la base: src\firebase\config.js  
* en el archivo api.js se encunetran las operaciones posibles con sus ejemplos comentados al final 
* esquema: "items", "categories", "orders" 
* el juego de datos se importó a la base del TP anterior 


<img src="/firebase.png" alt="Alt text" title="firebase esquema">


### Salida 
* los datos de se guardan en la collecion "orders" en "header" y "detail" 



### NOTAS
* el formulario tiene datos hardcoded para facilitar el desarrollo, se comprueba q los 2 mails sean iguales  
* el numero de orden es ficticio correlativo, no consecutivo. Se obtiene a partir una diferencia en segundos 
* se utiliza sweet-alert como libreria adicional 
* Se comenta: React.StrictMode: para controlar cantidad de renders 







## LINKS 
	https://akhtarvahid.medium.com/how-to-access-fetch-the-local-json-file-to-react-5ce07c43731d 
	https://www.robinwieruch.de/react-useeffect-only-once/

## APIs
	https://pablomonteserin.com/curso/react/firebase/ 

## single handler 
	https://blog.greenroots.info/how-to-create-react-form-with-a-single-change-event-handler

## sweet alert examples 
	https://code.tutsplus.com/tutorials/creating-pretty-popup-messages-using-sweetalert2--cms-30662

## hook not run initial render 
	https://stackoverflow.com/questions/53253940/make-react-useeffect-hook-not-run-on-initial-render





## INSTALACION 
	https://www.youtube.com/watch?v=XPBniyikjek&t=635s

	https://react-bootstrap.github.io/getting-started/introduction
	npm install react-bootstrap bootstrap 
	// En index.js: 
	import "../node_modules/react-bootstrap/dist/react-bootstrap"
	import "../node_modules/bootstrap/dist/css/bootstrap.css"

OR 
	https://getbootstrap.com/
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
