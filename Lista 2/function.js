function par_impar(num)
{
    if (num%2 == 0)
    {
        return "par"
    }
    else
    {
        return "impar"
    }
}
function getRandInt(min, max)
{
    return Math.floor(Math.random() * (max - min) ) + min;
}
function pos_neg_nul(num)
{
    if (num > 0)
    {
        return "positivo"
    }
    else if(num < 0)
    {
        return "negativo"
    }
    else
    {
        return  "nulo"
    }
}
function desconto(num)
{
    if (num>5000)
    {
        return num*0.2
    }
    else
    {
        return num*0.15
    }
}
function calcMedia(nota1, nota2, nota3, nota4)
{
    return (nota1*.2+nota2*.3+nota3*.1+nota4*.4)
}
function calcAreaRet(alt, comp, larg)
{
    return alt*comp*larg
}
function cTof(c)
{
    return (9/5)+c+32
} 
function fToc(f)
{
    return (f-32)*(5/9)
} 
function calcularSalF()
{
    inss = salB*.05;
    ir = salB*.07;
    auxAl = salB*.08;
    salL = salB - inss - ir + auxAl;
}