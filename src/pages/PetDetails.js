import React, {useContext} from 'react'
import {Grid, TextField} from '@material-ui/core'
import TokenContext from '../components/context'



function PetDetails(){
    const petInfo = useContext(TokenContext)
    return(
        <Grid container style={{marginTop: '60px'}}>
            <Grid item container>
                <Grid item xs={12} style={{background: '#1E1E1E'}}>
                    <center>
                     <img src={petInfo.image} alt={petInfo.name} style={{objectFit: 'contain', maxWidth: '100%', maxHeight: '600px'}}/>
                    </center> 
                </Grid>
            </Grid>

            <Grid item container style={{marginTop: '24px'}}>
                <Grid item xs={false} sm={2} />
                <Grid direction="column" item container xs={12} sm={10}>
                    <Grid direction="column" item xs={12} sm={10} style={{fontSize: '20px', background: '#fff', borderRadius: '16px', fontWeight: '300'}}>
                        <h1 style={{fontWeight: '400', padding: '8px'}}>Meet {petInfo.name}!</h1>
                        <h2 style={{fontWeight: '300', padding: '8px'}}>I'm a {petInfo.size} sized {petInfo.breed}.</h2>
                        <h3 style={{fontWeight: '300', padding: '8px'}}>Gender: {petInfo.gender}</h3>
                        
                        <p className='pet-details-text'>Details: {petInfo.desc}<a href={petInfo.petUrl}>View More</a></p>
                        <p className='pet-details-text'>Adoption status: {petInfo.status}</p>
                        <p className='pet-details-text'>Current on shots?: {petInfo.attributes.shots_current ? 'Up to date' : 'No'}</p>
                        <p className='pet-details-text'>House training status: {petInfo.attributes.trained ? 'Trained' : 'Not trained'} </p>
                        <p className='pet-details-text'>Special needs status: {petInfo.attributes.special_needs ? <><p>Yes. <a href={petInfo.petUrl}>View More</a></p></> : 'None' }</p>
                        
                    </Grid>
                    <Grid  item xs={12} sm={10}  className='pet-details-cta'>
                        <center>
                            <a className='cta-link'href={petInfo.petUrl} >
                                {petInfo.status = 'adoptable' ? 'Adopt me' : "Sorry, I'm already adopted."}
                            </a>
                        </center>
                    </Grid>
                </Grid>
                
            </Grid>
            
            <Grid item container style={{marginTop: '24px', marginBottom: '60px'}}>
                <Grid item xs={false} sm={2} />
                <Grid item container direction="column" xs={12} sm={10} >
                    <Grid item direction='column' xs={12} sm={10} style={{background: '#fff'}}>
                        <h1 style={{fontWeight: '400'}}>Any questions regarding {petInfo.name}?</h1>
                        <h2 style={{fontWeight: '400', paddingTop: '16px'}}>Contact us here</h2>
                    </Grid>
                    <Grid item container xs={12} sm={10} direction="column" style={{background: '#fff'}}>
                        <form>
                            <input type='text' placeholder='Subject' style={{fontSize: '20px', width: '45%', margin: '8px 0', padding: '16px', background: 'transparent', outline: 'none', border: 'none', borderBottom: '1px solid black'}}/>
                            <input type='text' placeholder='First Name'  style={{fontSize: '20px', width: '45%', margin: '8px 0', padding: '16px', background: 'transparent', outline: 'none', border: 'none', borderBottom: '1px solid black', marginLeft: '10%'}}/>
                            <textarea type='text' placeholder='Message'  style={{fontSize: '20px', fontFamily: 'Open Sans', fontWeight: '600', width: '100%', margin: '8px 0', paddingLeft: '16px', background: 'transparent', outline: 'none', border: 'none', borderBottom: '1px solid black'}}/>
                            <center>
                            <input type='submit' placeholder='submit' className='form-submit'/>
                            </center>
                            
                        </form>
                    </Grid>
                </Grid>
                <Grid item xs={false} sm={2} />
            </Grid>
            
            

        </Grid>
    )
}

export default PetDetails