
function load() 
{
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var date = new Date()
    var hour = date.getHours()
    msg.innerHTML = `Agora são ${hour} horas.`
    if (hour >= 0 && hour <= 12)
    {
        //Bom dia
        img.src = 'imagens/fotomanha.png'
        document.body.style.backgroundColor = '#fda97b'
    } else if (hour > 12 && hour <= 18)
    {
        //Boa tarde
        img.src = 'imagens/fototarde.png'
        window.document.body.style.backgroundColor = '#f74a00'
    } else
    {
        //Boa noite
        img.src = 'imagens/fotonoite.png'
        document.body.style.backgroundColor = '#463a60'
    }
}
