import React from 'react'
import Grid from '../template/grid'

export default props =>(

    <div role='form' className='todoForm'>
    
        <Grid >
            <input id='description' className='form-control'
            placeholder='Adicione uma tarefa'></input> 
        </Grid>

        <div className='col-xs-12 col-sm-3 col-md-2'>
            <button className="btn btn-primary">
                <i className='fa fa-plus'></i>
            </button>
        
        </div>
    
    
    </div>

)