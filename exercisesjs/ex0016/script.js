function contar()
{
    let start = document.getElementById('inicio').value
    let end = document.getElementById('final').value
    let step = document.getElementById('passo').value
    let warn = document.getElementById('warn')


    if(!start || !end)
    {
        window.alert('[ERRO]')
        warn.innerHTML = 'Verifique os dados'
    } 
    else
    {
        let i = Number(start)
        let e = Number(end)
        let p = Number(step)

        warn.innerHTML = 'Contando... <br>'
        if (p <= 0)
        {
            window.alert('Passo inválido, considerando passo 1')
            p = 1
        }
        if (i < e)
        {
            //Contagem progressiva
            for (let c = i;c <= e; c += p)
            {
                warn.innerHTML += `${c}👉`
            }
        } else 
        {
            // Contagem regressiva
            for (let c=i ; c >= e; c -= p)
            {
                warn.innerHTML += `${c}👉`
            }
        }
        warn.innerHTML += '🏴'
    }
}