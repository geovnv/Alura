var listaFilmes = ['https://upload.wikimedia.org/wikipedia/pt/3/3a/Interstellar_Filme.png', 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/95/96/20122166.jpg', 'https://upload.wikimedia.org/wikipedia/pt/4/43/Butterflyeffect_poster.jpg', 'https://upload.wikimedia.org/wikipedia/pt/thumb/8/82/Pulp_Fiction_cover.jpg/230px-Pulp_Fiction_cover.jpg', 'https://br.web.img3.acsta.net/medias/nmedia/18/94/99/85/20371421.jpg']

var listaNomes = ['Interestelar', 'Clube da Luta', 'Efeito Borboleta', 'Pulp Fiction', 'Os 12 Macacos']

// VAR PODE AINDA SER ASSIM:
//listaFilmes[0] = 'https://upload.wikimedia.org/wikipedia/pt/3/3a/Interstellar_Filme.png'
//listaFilmes[1] = 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/95/96/20122166.jpg'
//listaFilmes[2] = 'https://upload.wikimedia.org/wikipedia/pt/4/43/Butterflyeffect_poster.jpg' 

for (var i = 0; i < listaFilmes.length; i++) {
  document.write('<img src =' + listaFilmes[i] + '>')
}