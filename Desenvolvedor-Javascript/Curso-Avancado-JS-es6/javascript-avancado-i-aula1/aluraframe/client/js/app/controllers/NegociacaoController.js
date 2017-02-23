class NegociacaoController {

    constructor(){
        
        let $ = document.querySelector.bind(document);

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._listaNegociacaoes = new ListaNegociacaoes();
        this._NegociacaoView = new NegociacaoView( $("#NegociacoesView"));

        this._NegociacaoView.update(this._listaNegociacaoes);
    }

    adiciona(event)
    {
        event.preventDefault();       

        this._listaNegociacaoes.adiciona(this._criaNegociacao());
        this._limpaFormulario();

        this._NegociacaoView.update(this._listaNegociacaoes);
        //console.log(this._listaNegociacaoes.negociaoes);

    }

    _criaNegociacao() {

         return new Negociacao(
             DateHelper.textoParaData(this._inputData.value),
             this._inputQuantidade.value,
             this._inputValor.value
         );
         
    }

    _limpaFormulario(){

        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();

    }
}