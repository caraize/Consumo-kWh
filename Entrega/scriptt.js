function pegarDados(){
    let campoConsumo = Number(document.getElementById("campoConsumo").value);
    console.log(campoConsumo);

    calculaForn(campoConsumo)
}

function calculaForn(campoConsumo){
    let fornecimento = (campoConsumo * 0.28172); 
    console.log(fornecimento);

    calculaICMS(fornecimento)
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

function calculaCOFINS(ICMScalc, fornecimento ){
    if(fornecimento < 200){
        COFINScalc = ICMScalc * 0.0614722
    }
    
    else {
        COFINScalc = ICMScalc * 0.0730751
    }
    console.log(COFINScalc)
    calculaPIS(COFINScalc, fornecimento)
        
    }

function calculaPIS(COFINScalc, fornecimento){
    if(fornecimento < 200){
        PIScalc = COFINScalc * 0.013346
    }
        
    else {
        PIScalc = COFINScalc * 0.0158651
    }
        
    console.log(PIScalc)
    ICMSCOFINS(COFINScalc,ICMScalc, fornecimento)
            
    }

function ICMSCOFINS(COFINScalc,ICMScalc, fornecimento){ //erro ta nessa function
    let ICMSCOFINScalc = (COFINScalc * ICMScalc * fornecimento);

    console.log(ICMSCOFINScalc); //aqui da 25???????????
    ICMSPIS(PIScalc,ICMScalc, fornecimento)
}

function ICMSPIS(PIScalc,ICMScalc, fornecimento){
    let ICMSPIScalc = PIScalc * ICMScalc * fornecimento;
    console.log(ICMSPIScalc);

    faturaaa(fornecimento, ICMScalc, COFINScalc ,PIScalc, ICMSCOFINScalc, ICMSPIScalc) //error informa aqui
}

function faturaaa(fornecimento, ICMScalc, COFINScalc,PIScalc, ICMSCOFINScalc, ICMSPIScalc){
    let FATURAcalca = fornecimento + ICMScalc + COFINScalc + PIScalc + ICMSCOFINScalc + ICMSPIScalc;
    console.log(FATURAcalc);
}