function calcular(){
    var nome = document.getElementById('nome')
    var nota1 = document.getElementById('nota1')
    var nota2 = document.getElementById('nota2')
    var n1 = Number(nota1.value)
    var n2 = Number(nota2.value)
    var res = document.getElementById('res')
    var m = (n1 + n2) / 2
    
    var img = document.getElementById('imge')
    var react = document.getElementById('react')
    var corpo = document.getElementById('corpo')
    if(m >= 7){
        corpo.style.backgroundColor = 'rgb(154, 200, 50)'
        res.innerHTML = `A media de ${nome.value} é igual a ${m}. `
        img.src = 'naruto.png'
        react.innerHTML = `Parabéns! ${nome.value} alcançou a média minima de 7 pontos.`
    }else {
        corpo.style.backgroundColor = 'rgb(223, 30, 38)'
        res.innerHTML = `A media de ${nome.value} é igual a ${m} `
        img.src = 'sadnaruto.png'
        react.innerHTML = `${nome.value} não alcançou a média minima de 7 pontos. Continue se esforçando!`
    }

}