var app = angular.module('MainApp', []);

app.controller('MainCtrl',function($scope){
  $scope.Tags = [
    {
      "idTagPost": 1,
      "nomeTag": "Musica"
    },
    {
      "idTagPost": 2,
      "nomeTag": "Podcast"
    },
    {
      "idTagPost": 3,
      "nomeTag": "Ciencia"
    },
    {
      "idTagPost": 4,
      "nomeTag": "Eventos"
    }
  ];
});




/*

$scope.posts = [
  {
    "idPost": 1,
    "tituloPost": "titulo 1",
    "textoPost": "Aqui é Body Builder Ipsum PORRA! Vo derrubar tudo essas árvore do parque ibirapuera. Vem porra! Aqui nóis constrói fibra, não é água com músculo. Negativa Bambam negativa. Aqui nóis constrói fibra, não é água com músculo. Vo derrubar tudo essas árvore do parque ibirapuera.\\n É nóis caraio é trapezera buscando caraio! Vo derrubar tudo essas árvore do parque ibirapuera. Que não vai dá rapaiz, não vai dá essa porra.\\n Negativa Bambam negativa. É esse que a gente quer, é ele que nóis vamo buscar. Sai de casa comi pra caralho porra.\\n Vai subir árvore é o caralho porra! Vem porra! É 13 porra!\\n Tá comigo porra. Aqui é Body Builder Ipsum PORRA! Vamo monstro!\\n Vo derrubar tudo essas árvore do parque ibirapuera. Birl! É 13 porra! Eita porra!, tá saindo da jaula o monstro! Vai subir árvore é o caralho porra! Sai filho da puta! É 13 porra! Vai subir árvore é o caralho porra!",
    "dataPost": "2017-12-03T03:18:05.078Z",
    "atualizacaoPost": "2017-12-03T03:18:05.078Z",
    "idCategoria": 1,
    "idUsuario": 1
  },
  {
    "idPost": 2,
    "tituloPost": "titulo 2",
    "textoPost": "Aqui é Body Builder Ipsum PORRA! Vo derrubar tudo essas árvore do parque ibirapuera. Vem porra! Aqui nóis constrói fibra, não é água com músculo. Negativa Bambam negativa. Aqui nóis constrói fibra, não é água com músculo. Vo derrubar tudo essas árvore do parque ibirapuera.\\n É nóis caraio é trapezera buscando caraio! Vo derrubar tudo essas árvore do parque ibirapuera. Que não vai dá rapaiz, não vai dá essa porra.\\n Negativa Bambam negativa. É esse que a gente quer, é ele que nóis vamo buscar. Sai de casa comi pra caralho porra.\\n Vai subir árvore é o caralho porra! Vem porra! É 13 porra!\\n Tá comigo porra. Aqui é Body Builder Ipsum PORRA! Vamo monstro!\\n Vo derrubar tudo essas árvore do parque ibirapuera. Birl! É 13 porra! Eita porra!, tá saindo da jaula o monstro! Vai subir árvore é o caralho porra! Sai filho da puta! É 13 porra! Vai subir árvore é o caralho porra!",
    "dataPost": "2017-12-03T03:18:05.078Z",
    "atualizacaoPost": "2017-12-03T03:18:05.078Z",
    "idCategoria": 2,
    "idUsuario": 1
  },
  {
    "idPost": 3,
    "tituloPost": "titulo 3",
    "textoPost": "Aqui é Body Builder Ipsum PORRA! Vo derrubar tudo essas árvore do parque ibirapuera. Vem porra! Aqui nóis constrói fibra, não é água com músculo. Negativa Bambam negativa. Aqui nóis constrói fibra, não é água com músculo. Vo derrubar tudo essas árvore do parque ibirapuera.\\n É nóis caraio é trapezera buscando caraio! Vo derrubar tudo essas árvore do parque ibirapuera. Que não vai dá rapaiz, não vai dá essa porra.\\n Negativa Bambam negativa. É esse que a gente quer, é ele que nóis vamo buscar. Sai de casa comi pra caralho porra.\\n Vai subir árvore é o caralho porra! Vem porra! É 13 porra!\\n Tá comigo porra. Aqui é Body Builder Ipsum PORRA! Vamo monstro!\\n Vo derrubar tudo essas árvore do parque ibirapuera. Birl! É 13 porra! Eita porra!, tá saindo da jaula o monstro! Vai subir árvore é o caralho porra! Sai filho da puta! É 13 porra! Vai subir árvore é o caralho porra!",
    "dataPost": "2017-12-03T03:18:05.078Z",
    "atualizacaoPost": "2017-12-03T03:18:05.078Z",
    "idCategoria": 1,
    "idUsuario": 1
  },
  {
    "idPost": 4,
    "tituloPost": "titulo 4",
    "textoPost": "Aqui é Body Builder Ipsum PORRA! Vo derrubar tudo essas árvore do parque ibirapuera. Vem porra! Aqui nóis constrói fibra, não é água com músculo. Negativa Bambam negativa. Aqui nóis constrói fibra, não é água com músculo. Vo derrubar tudo essas árvore do parque ibirapuera.\\n É nóis caraio é trapezera buscando caraio! Vo derrubar tudo essas árvore do parque ibirapuera. Que não vai dá rapaiz, não vai dá essa porra.\\n Negativa Bambam negativa. É esse que a gente quer, é ele que nóis vamo buscar. Sai de casa comi pra caralho porra.\\n Vai subir árvore é o caralho porra! Vem porra! É 13 porra!\\n Tá comigo porra. Aqui é Body Builder Ipsum PORRA! Vamo monstro!\\n Vo derrubar tudo essas árvore do parque ibirapuera. Birl! É 13 porra! Eita porra!, tá saindo da jaula o monstro! Vai subir árvore é o caralho porra! Sai filho da puta! É 13 porra! Vai subir árvore é o caralho porra!",
    "dataPost": "2017-12-03T03:18:05.078Z",
    "atualizacaoPost": "2017-12-03T03:18:05.078Z",
    "idCategoria": 1,
    "idUsuario": 1
  },
  {
    "idPost": 5,
    "tituloPost": "titulo 5",
    "textoPost": "Aqui é Body Builder Ipsum PORRA! Vo derrubar tudo essas árvore do parque ibirapuera. Vem porra! Aqui nóis constrói fibra, não é água com músculo. Negativa Bambam negativa. Aqui nóis constrói fibra, não é água com músculo. Vo derrubar tudo essas árvore do parque ibirapuera.\\n É nóis caraio é trapezera buscando caraio! Vo derrubar tudo essas árvore do parque ibirapuera. Que não vai dá rapaiz, não vai dá essa porra.\\n Negativa Bambam negativa. É esse que a gente quer, é ele que nóis vamo buscar. Sai de casa comi pra caralho porra.\\n Vai subir árvore é o caralho porra! Vem porra! É 13 porra!\\n Tá comigo porra. Aqui é Body Builder Ipsum PORRA! Vamo monstro!\\n Vo derrubar tudo essas árvore do parque ibirapuera. Birl! É 13 porra! Eita porra!, tá saindo da jaula o monstro! Vai subir árvore é o caralho porra! Sai filho da puta! É 13 porra! Vai subir árvore é o caralho porra!",
    "dataPost": "2017-12-03T03:18:05.078Z",
    "atualizacaoPost": "2017-12-03T03:18:05.078Z",
    "idCategoria": 1,
    "idUsuario": 1
  }
]


$scope.Tags = [
  {
    "idTagPost": 1,
    "nomeTag": "Musica"
  },
  {
    "idTagPost": 2,
    "nomeTag": "Podcast"
  },
  {
    "idTagPost": 3,
    "nomeTag": "Ciencia"
  },
  {
    "idTagPost": 4,
    "nomeTag": "Eventos"
  }
]

$scope.Categorias = [
  {
    "idCategoriaPost": 1,
    "nomeCategoria": "Transmid"
  },
  {
    "idCategoriaPost": 2,
    "nomeCategoria": "Conect@"
  },
  {
    "idCategoriaPost": 3,
    "nomeCategoria": "RadioWeb"
  }
]

*/