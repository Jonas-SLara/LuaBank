import React from 'react';

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = {hasError: false, error:null}
    };

    static getDerivedStateFromError(error){
        return {hasError: true, error}
    };

    componentDidCatch(erro, info){
        console.error(erro + " " + info);
    };
    
    render(){
         if(this.state.hasError){
            return(
            <div>
                <p>{`Erro encontrado: ${this.state.error}`}</p>
            </div>);
         }
        return this.props.children;
    }
}

export default ErrorBoundary;