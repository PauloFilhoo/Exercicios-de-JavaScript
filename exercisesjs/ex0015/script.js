function verificar()
{
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano').value
    var res = document.querySelector('div#res')

    if (fano == 0 || Number(fano) > ano)
    {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else 
    {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked)
        {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10)
            {
                //Criança
                img.setAttribute('src', 'homem-bebe.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'homem-jovem.png')
            } else if (idade < 50)
            {
                //Adulto
                img.setAttribute('src', 'homem-jovem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'homem-idoso.png')
            }
        } else
        {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10)
            {
                //Criança
                img.setAttribute('src', 'mulher-bebe.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'mulher-jovem.png')
            } else if (idade < 50)
            {
                //Adulto
                img.setAttribute('src', 'mulher-jovem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'mulher-idoso.png')
            }
        }

        res.innerHTML = `Detectamos um(a) ${gênero} de ${idade} anos.`
        res.appendChild(img)
    }
}