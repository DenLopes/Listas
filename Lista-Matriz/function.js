function randomNumbers(min, max){
    return Math.floor(Math.random()*(max - min + 1)) + min;
}

function fillMatriz(col, row, min, max){
    var matriz = [];
        for(var i = 0; i < col; i++){
            matriz[i]=[]
            for(var j = 0; j < row; j++){
                matriz[i][j]= randomNumbers(min,max);
            }
        }
    return matriz;
}

function largerNumberMatriz(matriz, col, row){
    var max = matriz[0][0];
    for(var i = 0; i < col; i++){
        for(var j = 0; j < row; j++){
            if(max < matriz[i][j]){
                max = matriz[i][j];
            }
        }
    }
    return max;
}

function timesMatrizMax(matriz, col, row, max){
    var mmatriz = [];
    for(var i = 0; i < col; i++){
        mmatriz[i]=[]
        for(var j = 0; j < row; j++){
            mmatriz[i][j] = matriz[i][j]*max
        }
    }
    return mmatriz;
}

function showMatriz(matriz, col , row){
    for(var i = 0;i < col; i++){
        for(var j = 0; j < col; j++){
            document.write(matriz[i][j]+'<br>');
        }
    }
}

function numBigger10(matriz, col, row){
    var n = 0;
    for(var i = 0;i < col; i++){
        for(var j = 0; j < col; j++){
          if (matriz[i][j] > 10){
            n++;
          } 
        }
    }
    if(n > 0){
        document.write("Existem "+n+" maiores que 10 na matriz.")
    }
    else{
        document.write("não encontrado");
    }
}

function userMatriz4x5(){
    var matriz = [];
    for(var i = 0;i < 4; i++){
        matriz [i] = [];
        for(var j = 0; j < 5; j++){
            matriz[i][j] = Number(prompt("Digite o valor da matriz posição ["+i+"]["+j+"]."));
        }
    }
    return matriz;
}

function matriz4x5Sum(matriz){
    var sum = 0;
    for(var i = 0;i < 4; i++){
        for(var j = 0; j < 5; j++){
            sum += matriz[i][j];
        }
    }
    document.write("A soma dos numeros da matriz é "+sum);
}

function findNumberInMatriz(matriz, col ,row, num){
    var bool = false, ncol, nrow = 0;
    for(var i = 0;i < col; i++){
        for(var j = 0; j < row; j++){
            if(matriz[i][j] == num){
                bool = true;
                ncol = i;
                nrow = j;
            }
        }
    }
    if(bool){
        document.write("O valor foi encontrado na posição ["+ncol+"]["+nrow+"].");
    }
    else{
        document.write("Não encontrado");
    }
}

function calcMediaAluno4x10(){
    var matriz = [], media;
    for(var i = 0;i < 4; i++){
        matriz[i] = [];
        for(var j = 0; j < 10; j++){
            matriz[i][j] = Number(prompt("Digite a nota do aluno "+(j+1)+" da disciplina "+(i+1)+"."));
        }
    }
    for(var i = 0;i < 4; i++){
        media = 0;
        for(var j = 0; j < 10; j++){
            media += matriz[i][j];
        }
        media = media/10;
        document.write("A media geral da disciplina "+(i+1)+" é "+media+".<br>");
    }
}

function 