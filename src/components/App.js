// create your App component here
import React, {useEffect, useState} from 'react'

function App() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [items, setItems] = useState([])

    useEffect(()=> {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json()
        .then(data => { 
            setIsLoaded(true)
            setItems(data.message) }),[])})

            
            
if(isLoaded){
    return(<div>
        <img src={items} alt='A Random Dog'></img>
        </div>)
        }else 
    return (  
    <div>
        <p>Loading...</p> 
        </div>)
        
    
}


export default App