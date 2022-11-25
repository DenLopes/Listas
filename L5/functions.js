function to20()
{   
    var i = 1;
    do {
        document.write(i+"<br>");
        i++;
    } while (i <= 20);
}
function evenTo600()
{
    var i = 1;
    do 
    {
        if(i%2 == 0)
        {
            document.write(i+"<br>");
        }
        i++;
    } while (i <= 600);
}
function plusTo10()
{
    var i = 1, soma = 0;
    do {
        soma += i;
        i++;
    } while (i <= 10);
    document.write(soma+"<br>");
}
function plus_24to200_even()
{
    var i = 24, soma = 0;
    do 
    {
        if(i%2 == 0)
        {
           soma += i; 
        }
        i++;
    } while (i <= 200);
    document.write(soma+"<br>");
}
function plusTo(n)
{
    var i = 1, soma = 0;
    do {
        soma += i;
        i++;
    } while (i <= n);
    return soma;
}
function tabuada(n)
{
    var i = 1, mult = 0;
    do {
        mult = i*n;
        document.write(n+"x"+i+"= "+mult+"<br>");
        i++;
    } while (i <= 10);
}
function tabuada_to_10()
{
    var i = 1, j;
    do {
        j = 1;
        do{
            mult = i*j;
            document.write(i+"x"+j+"= "+mult+"<br>");
            j++;
        }while(j <= 10)
        i++;
    } while (i <= 10);   
}
function oddNumbers(n)
{   
    var i = n;
    while(i > 0)
    {
        if(i%2 != 0)
        {
            document.write(i+"<br>");
        }
        i--;
    }
}
function evenNumbers(n)
{  
    var even = 1, i = 1;
    while(even <= n)
    {
        if(i%2 == 0)
        {
            document.write(i+"<br>");
            even++;
        }
        i++;
    } 
}
function dez()
{
    var i = 0, n = 0, soma = 0, ma = 0, me = 0;
    while(i < 10)
    {
        n = Number(prompt("Digite o numero."));
        soma += n;
        if(n > ma || i == 0)
        {
            ma = n;
        }
        else
        {
            me = n;
        }
        i++;
    }
    document.write("A soma é: "+soma+"<br>");
    document.write("A media é: "+soma/10+"<br>");
    document.write("O menor numero é: "+me+"<br>");
    document.write("O maior numero é: "+ma+"<br>");
}
function one_to_ten_even_odd()
{
    var i = 0, odd = 0, even = 0, n = 0;
    while(i<=9)
    {
        n = Number(prompt("Digite o "+(i+1)+"º numero"));
        if(n%2 == 0)
        {
            even++;
            alert("Par");
        }
        else
        {
            odd++;
            alert("Impar");
        }
        i++;
    }
    document.write("Voce digitou "+even+" numeros pares.");
    document.write("Voce digitou "+odd+" numeros impares.");
}
function funcionario()
{
    var i = 0, sal = 0, nome, aux_sal, aux_nome;

    while(i<=9)
    {
        sal = Number(prompt("Digite o salario do funcionario."));
        nome = prompt("Digite o nome do funcionario.");
        if(i == 0)
        {
            aux_sal = sal;
            aux_nome = nome;
        }
        if(aux_sal<sal)
        {
            aux_sal = sal;
            aux_nome = nome;
        }  
        i++;
    }

    document.write("O maior salario foi de: "+aux_sal+"<br>");
    document.write("O nome do funcionario com o maior salario é: "+aux_nome+"<br>");
}
function escola()
{
    var i = 0, qtaluno = 0, j = 0;
    while(i<=4)
    {
        qtaluno = Number(prompt("Quantidade de aluno"));
        while()
        {

        }
        i++;
    }
}