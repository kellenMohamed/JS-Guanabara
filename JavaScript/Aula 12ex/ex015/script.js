function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')    
    if (fAno.value.lenght == 0 || fAno.value>ano){
        windows.alert('[Erro] Verifique os dados e tente novamente')
    }      
    else{
        var fsexo = document.getElementsByName('radsexo')
        var idade = ano - Number(fAno.value)
        var gênero = ''
        //Criar a foto dinamicamente -> 2 comandos abaixo:
        var img = document.createElement('img')        
        img.setAttribute('id','foto')
        //
        if (fsexo[0].checked){
            gênero = 'homem'
            if (idade>=0 && idade<=12){
                //Criança
                img.setAttribute('src','bebeMenino.PNG')
            } else if (idade>12 && idade<=65){
                //Adulto
                img.setAttribute('src','homemAdulto.PNG')
            }else{
                //Idoso
                img.setAttribute('src','homemIdoso.PNG')
            }
        } else if (fsexo[1].checked){
            gênero = 'mulher'
            if (idade>=0 && idade<=12){
                //Criança
                img.setAttribute('src','bebeMenina.PNG')
            } else if (idade>12 && idade<=65){
                //Adulto
                img.setAttribute('src','mulherAdulta.PNG')
            }else{
                //Idoso
                img.setAttribute('src','mulherIdosa.PNG')
            }
        }            
        res.innerHTML = 'center';
        res.innerHTML = `Você é uma ${gênero} e sua idade calculada é ${idade} anos.`
        res.appendChild(img) //Para adicionar as imagens
    }
}