import React, { useState } from 'react'
//import { AddCategory } from './components/AddCategory'
//import { GifGrid } from './components/GifGrid'
import { AddCategory, GifGrid } from './components'


export const GifApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) =>{
        if(categories.includes(newCategory)) return;
        setCategories([newCategory,...categories ])//no se puede usar push  se usa spread para agragar item
    }

  return (
    <>
    {/*titulo*/}
    <h1>GifApp</h1>

    {/*input*/}
    <AddCategory 
        onNewCategory={value => onAddCategory(value) }
    />


    
        {categories.map(category =>(
                <GifGrid 
                    key={category} 
                    category={category} 
                />
            )
        )}
    

    </>
  )

  //jIE2gvsRkQ5wKAdds2g4us0Fe74pJ7Af
}

