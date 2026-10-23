function toggleMode() {
 const html = document.documentElement

  //if(html.classList.contains('light')) {
    //html.classList.remove ('light')
    //}else{
    //  html.classList.add('light')
    //}
  html.classList.toggle('light')

  //pegar a tag img
  const img = document.querySelector ("#profile img")
 //substituir a imagem

  if(html.classList.contains('light')){
 //se  tiver light, adicionar a imagem
    img.setAttribute('src', './Theme/vegeta.png')
  } else{
     //se  tiver light, adicionar aa imagem
  img.setAttribute('src', './Theme/avatarlight.png')
  }

}