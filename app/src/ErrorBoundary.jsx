import React from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false,
            error:null,
            errorInfo: null
        }
    };

    static getDerivedStateFromError(error){
        return {hasError: true, error}
    };

    componentDidCatch(error, errorInfo){
        this.setState({ errorInfo });
    };
    
    render(){
         if(this.state.hasError){
            return(
            <div>
                 <h2>Ocorreu um erro!</h2>
                    <p><strong>Mensagem:</strong></p>
                    <pre>{this.state.error?.toString()}</pre>

                    {this.state.errorInfo && (
                        <>
                            <p><strong>Stack trace:</strong></p>
                            <pre>{this.state.errorInfo.componentStack}</pre>
                        </>
                    )}
            </div>);
         }
        return this.props.children;
    }
}

export default ErrorBoundary;