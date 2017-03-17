class ProxyFactory{
    
    static create(objeto, props, acao){

        new  Proxy(new ListaNegociacaoes(), {
        
        get(target, prop, receiver){

                if(props.includes(prop) && typeof(target[prop]) == typeof(Function)){
                    
                    return function(){
                    
                    
                    Reflect.apply(target[prop], target, arguments);

                    return acao(target);

                    }

                }    
                else{
                    return Reflect.get(target, prop, receiver);
                }
            
            }

      });


    }

}