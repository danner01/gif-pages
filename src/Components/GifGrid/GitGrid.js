import React from 'react'
import { useFetchGifs } from '../../hooks/useFetchGifs';
import GitGridItem from './GitGridItem';
//import PropTypes from 'prop-types'

   const GitGrid =({category}) => {

  const  {data:images,loading}=useFetchGifs(category);

    return (
    
    <>
     <h3 className='animate__animated animate__bounceIn'>{category}</h3> 
     {loading&&<p className='animate__animated animate__flash'>Loading..</p>}
     <div className='card-grid'>
    {
     images.map(img=>(
        <GitGridItem 
        key={img.id}
        {...img}
        />
     ))
    }
    </div> 
    </>
   
     
  )
}

GitGrid.propTypes = {}

export default GitGrid

