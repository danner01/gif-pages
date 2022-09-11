import React,{useState} from 'react'
import AddCategory from '../AddCategory/AddCategory';
import GitGrid from '../GifGrid/GitGrid';

const GitExpertComponent = props => {

  //const categories=["One Punch","Samurai X","Dragon Ball"]

 const[categories,setCategories]= useState(["One Punch",]);
 
 //const handleAdd=()=>{
 //setCategories(cats=>[...cats,]);
// }

  return (
    
    <>
     <h2>GitExpertApp</h2>
     <AddCategory setCategories={setCategories}/>
    <hr />
    
    <ol>
     {
      categories.map(category=>( 
      <GitGrid
       key={category}
       category={category}
       />
      ))
     }
    </ol>
    </>
   
  )
}


GitExpertComponent.propTypes = {}

export default GitExpertComponent