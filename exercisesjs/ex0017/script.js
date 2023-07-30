function calcular()
{
    let num = document.getElementById('numipt')
    let tab = document.getElementById('seltab')
    if (!num.value)
    {
        window.alert('Insira um número')
    } else 
    {
        // Pegando o valor do num digitado
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' // Limpando a tabela
        for (let i = c; i <= 10; i++) // For da tabuada
        {
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}` // nxi=ni Texto da opção
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
}