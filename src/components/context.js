import React, {createContext} from 'react';

export const TokenContext = createContext(null)
/*
const TokenContext = React.createContext()

class TokenProvider extends Component {
    state={
        token: 'token'
    }
    

     
    componentDidMount(){
        const params = new URLSearchParams();
        params.append("grant_type", "client_credentials")
        params.append("client_id", process.env.REACT_APP_PET_FINDER_KEY)
        params.append("client_secret", process.env.REACT_APP_PET_FINDER_SECRET)

        const fetchToken = async () => {
            const apiCall = await fetch('https://api.petfinder.com/v2/oauth2/token',{
            method: "POST",    
            body: params,
            })
      
            const token = await apiCall.json()
            
            this.setState({token: token.access_token})
            console.log(this.state.token)
          }
    
          fetchToken()
    }
     
    

    render(){
        return(
            <TokenContext.Provider value={{
                state: this.state,
                
            }}>
                {this.props.children}
            </TokenContext.Provider>
        )
    }
}

const TokenConsumer = TokenContext.Consumer
*/

export default TokenContext

