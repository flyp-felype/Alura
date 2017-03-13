class NegociacaoController {

    constructor(){
        
        let $ = document.querySelector.bind(document);

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        
        /*
        this._listaNegociacaoes = 
                new ListaNegociacaoes(model => this._NegociacaoView.update(model) );
        */

        this._NegociacaoView = new NegociacaoView( $("#NegociacoesView"));        
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemview'));
        this._mensagemView.update(this._mensagem);
        
    }

    adiciona(event)
    {
        event.preventDefault();       

        this._listaNegociacaoes.adiciona(this._criaNegociacao());
        this._limpaFormulario();
        this._mensagem.texto = 'Negociação Cadastrada com Sucesso';
        this._mensagemView.update(this._mensagem);

        //console.log(this._listaNegociacaoes.negociaoes);
    }

    apaga(){
        
        this._listaNegociacaoes.esvazia();


        this._mensagem.texto = 'Negociações apagadas com sucesso!';
        this._mensagemView.update(this._mensagem)
    }


    _criaNegociacao() {

         return new Negociacao(
             DateHelper.textoParaData(this._inputData.value),
             this._inputQuantidade.value,
             this._inputValor.value
         );
         
    }

    apaga(){

        this._listaNegociacaoes.esvazia();

        this._mensagem.texto = 'Negociações apagadas com sucesso!';
        this._mensagemView.update(this._mensagem);
    }

    _limpaFormulario(){

        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();

    }
}