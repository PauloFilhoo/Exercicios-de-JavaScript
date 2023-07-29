function contar()
{
    let start = document.getElementById('inicio').value
    let end = document.getElementById('final').value
    let step = document.getElementById('passo').value
    let warn = document.getElementById('warn')
    let n1 = Number(start)
    let n2 = Number(end)
    let n3 = Number(step)

    if(!start || !end)
    {
        window.alert('[ERRO]')
        warn.innerHTML = 'Verifique os dados'
    } else if (Number(start) >= Number(end))
    {
        window.alert('[ERRO] O inicio não pode ser maior ou igual ao fim!')
    } else if (step <= 0)
    {
        window.alert('O passo não pode ser igual ou menor a 0, ajustando para 1')
        warn.innerHTML = 'Tente novamente.'
    }
    else
    {
        warn.innerHTML = 'Contando: <br>'
        for(n1;n1<=n2;n1+=n3)
        {
            warn.innerHTML += `${n1}👉`
        }
        warn.innerHTML += '🏴'
    }
}