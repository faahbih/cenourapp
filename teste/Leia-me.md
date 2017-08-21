# Algumas informações úteis

Necessário Nodejs instalado

Depois de instalar o Node
  
     $ npm install -g cordova
     
     Verificar se o cordova foi instalado
     $ cordova -v
     5.4.1
     
     Criar projeto
     $ cordova create projeto org.fabiana.projeto "Nome do Projeto"
     
     Add plataforma de teste para rodar o cordova (neste caso, para rodar no browser, mas podemos add para android, ios etc.)
     $ cd projeto/
     projeto $ cordova platform add browser
     
     Se queremos rodar no dispositivo, adicionamos também --device
     projeto $ cordova platform add android --device
     
     Para rodar
     $ cordova run browser
     



