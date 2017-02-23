class ListaNegociacaoes{
    
    constructor(){

        this._negociacoes = []

    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }

    get negociaoes(){

        return [].concat(this._negociacoes);

    }

}