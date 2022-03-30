function pegarDados(){
    let campoConsumo = Number(document.getElementById("campoConsumo").value);
    console.log(campoConsumo);

    calculaForn(campoConsumo)
}

function calculaForn(campoConsumo){
    let fornecimento = (campoConsumo * 0.28172); 
    console.log(fornecimento);

    calculaICMS(fornecimento)
    document.getElementById("1").innerHTML = `${fornecimento }`
}

function calculaICMS(fornecimento){ //if fornecimento < 200 = * 0.136363 | else * 333333
    //let ICMS = fornecimento * 0.136363
    //console.log(ICMS);

    if(fornecimento < 200){
        ICMScalc = fornecimento * 0.136363
    }

    else {
        ICMScalc = fornecimento * 0.333333
    }
    console.log(ICMScalc)//ATE AQUI FUNCIONA
    calculaCOFINS(ICMScalc, fornecimento )
    
}

function calculaCOFINS(fornecimento ){
    if(fornecimento < 200){
        COFINScalc = fornecimento * 0.0614722
    }
    
    else {
        COFINScalc = fornecimento * 0.0730751
    }
    console.log(COFINScalc)
    calculaPIS(COFINScalc, fornecimento)
        
    }

function calculaPIS(fornecimento){
    if(fornecimento < 200){
        PIScalc = fornecimento * 0.013346
    }
        
    else {
        PIScalc = fornecimento * 0.0158651
    }
        
    console.log(PIScalc);
    ICMSCOFINS(COFINScalc,ICMScalc, fornecimento)
            
    }

let ICMSCOFINScalc //declaração fora da função pq ta dando erro
function ICMSCOFINS(COFINScalc,ICMScalc, fornecimento){ //erro ta nessa function
    let ICMSCOFINScalc = (COFINScalc * ICMScalc * fornecimento);

    console.log(ICMSCOFINScalc); //aqui da 25???????????|| tava sendo burro
    ICMSPIS(PIScalc,ICMScalc, fornecimento)
}

function ICMSPIS(PIScalc,ICMScalc, fornecimento){
    let ICMSPIScalc = PIScalc * ICMScalc * fornecimento;
    
    console.log(ICMSPIScalc);
    faturaaa(fornecimento, ICMScalc, COFINScalc ,PIScalc, ICMSCOFINScalc, ICMSPIScalc) //error informa aqui
}


function faturaaa(fornecimento, ICMScalc, COFINScalc,PIScalc, ICMSCOFINScalc, ICMSPIScalc){
    //let FATURAcalca = (fornecimento + ICMScalc + COFINScalc + PIScalc + ICMSCOFINScalc + ICMSPIScalc);
    let FATURAcalca = fornecimento + ICMScalc + COFINScalc + PIScalc + ICMSPIScalc  + (COFINScalc*ICMScalc*fornecimento)

    console.log(FATURAcalca);
    retornarDados(fornecimento, ICMScalc, COFINScalc,PIScalc, ICMSPIScalc)
}


function retornarDados(fornecimento ,ICMScalc, COFINScalc,PIScalc, ICMSPIScalc, FATURAcalca){
    document.getElementById("2").innerHTML = `${ICMScalc}`
    document.getElementById("3").innerHTML = `${COFINScalc}`
    document.getElementById("4").innerHTML = `${PIScalc}`
    document.getElementById("5").innerHTML = `${COFINScalc*ICMScalc*fornecimento}`
    document.getElementById("6").innerHTML = `${ICMSPIScalc}`
    document.getElementById("7").innerHTML = `${fornecimento + ICMScalc + COFINScalc + PIScalc + ICMSPIScalc  + (COFINScalc*ICMScalc*fornecimento)}`    

}