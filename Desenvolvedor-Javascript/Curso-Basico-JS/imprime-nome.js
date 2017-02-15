
var trsPacientes = document.getElementsByClassName("paciente");

    percorreArray(trsPacientes, function(){
        
    var tdnome = pacienteTr.getElementsByClassName("info-nome")[0];
    var tdpeso = pacienteTr.getElementsByClassName("info-peso")[0];
    var tdaltura = pacienteTr.getElementsByClassName("info-altura")[0];

    var pacienteAtual = {nome   : tdnome.textContent, 
                        peso    : tdpeso.textContent, 
                        altura  : tdaltura.textContent,
                        pegaImc : function(){
                                    if(this.altura != 0){
                                        var imc = this.peso / (this.altura * this.altura);
                                        return imc;
                                        } 
                                        else{
                                            console.log("Não posso executar uma divisão por 0!");
                                        }
                        }};
    });



 for(var posicaoAtual = 0; posicaoAtual <= trsPacientes.length -1; posicaoAtual++){

 }