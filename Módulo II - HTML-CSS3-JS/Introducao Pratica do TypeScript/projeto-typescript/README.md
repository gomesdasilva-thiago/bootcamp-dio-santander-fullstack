Configurando o TypeScript no VSCode:

1) npm init
2) npm install --save-dev typescript
3) npm istall lite-server
4) inserir no package.json o "start": "lite-server":"
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "lite-server"
5) tsc --init
6) inserir no package.json o "watch": "tsc --watch":
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "lite-server",
    "watch": "tsc --watch"