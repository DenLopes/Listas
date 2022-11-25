function num1to20()
{
    for(var i = 1; i<=20; i++)
    {   
        n = Math.pow(i, 2);
        document.write(n+'</br>');
    }
}
function nparto600()
{
    for(var i = 1; i<=600; i++)
    {
        if(i%2 == 0)
        {
            document.write(i+"</br>");
        }
    }
}
function to10plus()
{
    let n = 0;
    for(var i = 0; i<=10; i++)
    {
        n += i;
        document.write(i+"</br>");
    }
    document.write(n);
}
function evenPlus200()
{
    let n = 0;
    for(var i = 24; i<=200; i += 2)
    {
      n += i;   
    }
    document.write(n);
}
function soma()
{
    let n, li;
    n = 0;
    li = Number(prompt("Digite o numero para somar até"));
    for(var i = 0; i <= li; i++)
    {
        n += i;
    }
    document.write(n);
}
function tabuada()
{
    let n, t = 0;
    n = Number(prompt("Digite o numero para tabuada"));
    t = n;
    for(var i = 0; i <= 10; i++)
    {
        t = n*i;
        document.write(n+"*"+i+"= "+t+"</br>");
    }
}
function tabaudato10()
{
    let t = 0;
    for(var i = 0; i <= 10; i++)
    {
        for(var j = 0; j <= 10; j++)
        {
            t = i*j;
            document.write(i+"*"+j+"= "+t+"</br>");
        }
        document.write("</br>")
    }
}
function limSup()
{
    let lim;
    lim = Number(prompt("Digite o numero limite"));
    for(var i = 0; i<lim; i++)
    {   
        if(i%3 == 0)
        {
            document.write(i+"</br>");
        } 
    }
}
function evenAfter2()
{
    let lim, n;
    n = 0;
    lim = Number(prompt("Digite quantos pares depois de 2"));
    for(var i = 1; i<=lim; i++)
    {   
        n += 2;
        document.write(n+"</br>");
    }
}
