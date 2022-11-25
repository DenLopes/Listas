function calc(n1, n2, op)
{
    switch(op)
    {
        case "-":
            document.write("O resutado da diferença é: "+ (n1-n2));
            break;
        case "+":
            document.write("O resutado da soma é: "+ (n1+n2));
            break;
        case "*":
            document.write("O resutado da multiplicação é: "+ (n1*n2));
            break;
        case "/":
            document.write("O resutado da divisão é: "+ (n1/n2));
            break;
        default:
            document.write("Operação não reconhecida");    
    }
}
function par_impar(n)
{
    switch(n%2)
    {
        case 0:
            document.write("O numero é par");
            break;
        case 1:
            document.write("O numero é impar");
            break;
        default:
             document.write("Valor não reconhecido");
    }
}
