This is a project that handles product management (Add Delete and Edit) itmes.
The information is stored in the browser's memory.
I will use Typescript in this project.

Utilisation de Bootstrap : 

1 : Creation d'un fichier .scss
2 : Creation d'un fichier .css
3 : linker le fichier css a index.html
4 : installer SASS using cmd =>  npm install -g sass (Documentation :  https://sass-lang.com/install)				
5 : Linker le fichier SCSS au ficheier CSS
	==> sass style.scss style.css
	==> automatiser la mise a jour : sass style.scss style.css --watch
6 : Install Bootstrap : npm install bootstrap
7 : Import Bootstrap to style.scss (@import "node_modules/bootstrap/scss/bootstrap.scss";)
8 : 


How to use Utility Bootstrap v5 : https://www.youtube.com/watch?v=4k3AiwXrfig
How to use sweetAlert@ : https://sweetalert2.github.io/


******* Integration de TypeScript *****************

1 : tsc --init                                  Installation du TypeScript
2 : tsconrig.json								Configurer le fichier "rootDir": "./src" et "outDir": "./dist" 
3 : app.tsc										Creation du fichier app.ts dans src 
4 : tsc --watch									Creation du fichier app.js dans dist 