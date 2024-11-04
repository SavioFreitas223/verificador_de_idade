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
            if 
        }
        else if (fsex[1].checked) {
            genero = 'mulher'
        } 
        res.style.textAlign = 'center'
        res.innerHTML = `detecnamos ${genero} com ${idade} anos.`
       }
}