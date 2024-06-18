import React, { useEffect, useState } from 'react'

function FetchApi() {
    const API_URL = 'https://dummyjson.com/products/search'
  
    const [listData, setListData] = useState([]);
    const [inputData, setInputData] = useState('');
  
    useEffect(() => {
        let myTimeOut = '';

        // Debouncing achieved so after 1000 function will trigger
        if(inputData !== ''){
            myTimeOut = setTimeout(()=>{
            FetchData(inputData)
            }, 1000)
        }
        
        // Optionally return a cleanup function, because of clearTimeout on every key change created timeout got clear an only works last
        return ()=> clearTimeout(myTimeOut);
    }, [inputData])

    const InputText = (typedVal) => {
        setInputData(typedVal)
    }
    
    // Fetch call
    async function FetchData(inputQuery){
      let dataURL = API_URL;
  
      if(inputQuery === '')
        dataURL = API_URL
      else
        dataURL = dataURL + '?q=' + inputQuery;
      
      let data = await fetch(dataURL);
      let jsonData = await data.json();
  
      const options = jsonData.products.map((val)=>{return {title : val.title, id: val.id}});
  
      setListData(options)
    }
    
    return (
        <div className="App">
            <p>
                On every type search option api get triggered after 1 sec once user stops typing; <b>Example For</b> Debouncing, Fetch, Async / Await 
            </p>
            <form>
            <label htmlFor="search">Search:</label>
            <input type="text" id="search" name="search" list="suggestions" onKeyUp={(e)=>{ 
                InputText(e.currentTarget.value)
            }}/>
            <datalist id="suggestions">
                {listData.map((val) => {
                    console.log(val)
                return <option key={val.id} value={val.title}> {val.title} </option>
                })}
            </datalist>
            {/* <ul>
                {listData.map((val) => {
                return <li key={val.id} value={val.title}> {val.title} </li>
                })}
            </ul> */}
            </form>
        </div>
    );
  }
export default FetchApi