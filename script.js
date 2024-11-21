function verificar () {
    var data = new Date ()
    var ano= data.getFullYear ()
    var Fano = document.getElementById ('txtano')
    var res = document.getElementById ('res')
    if (Fano.ariaValue.length == 0 || Number(Fano.value) > ano) {
        window.alert('[error] verifique os dados e tente novamente! ')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(Fano.value)
        var genero =''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {

            genero = 'homem'
            if (idade >=0 && idade < 15) {
                //criança
                img.setAttribute('src', 'criançaM.jpg')
            } else if (idade <= 21){
                //jovem
                img.setAttribute('src','jovemM.jpg')
            } else if (idade <= 50){
                //adulto
                img.setAttribute('src','augeM.jpg')
            } else {
                //idoso
                img.setAttribute('src','velhoM.jpg')
            }
        }
        else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >=0 && idade < 15) {
                //criança
                img.setAttribute('src', 'criançaF.jpg')
            } else if (idade <= 21){
                //jovem
                img.setAttribute('src','jovemF.jpg')
            } else if (idade <= 50){
                //adulto
                img.setAttribute('src','augeF.jpg')
            } else {
                //idoso
                img.setAttribute('src','velhoF.jpg')
            }
        } 
        res.style.textAlign = 'center'
        res.innerHTML = `detecnamos ${genero} com ${idade} anos.`
       }
}