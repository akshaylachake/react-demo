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
    
    // Fetch call ... we can also use axios 
    /*
        Axios is a popular JavaScript library used for making HTTP requests from a web browser or Node.js environment. It simplifies the process of interacting with APIs by providing an easy-to-use interface and features like request and response interceptors, automatic transformation of JSON data, and handling of request cancellations.

        Key Features of Axios
        = Promise-based: Axios uses Promises, which makes it simple to use with modern JavaScript async/await syntax.
        = Client-side Support: Works in the browser and in Node.js environments.
        = Interceptors: Allows you to intercept requests or responses before they are handled by then or catch.
        = Automatic JSON Data Transformation: Automatically transforms JSON data in responses.
        = Request Cancellation: Supports request cancellation using Cancel Tokens.
        = Timeouts: Configurable timeouts for requests.
        = CSRF Protection: Automatically handles Cross-Site Request Forgery (CSRF) protection by including credentials in requests.

        - npm install axios

        - import axios from 'axios';

        axios.get('https://api.example.com/data')
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

        OR
        
        async function fetchData() {
            try {
                const response = await axios.get('https://api.example.com/data');
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    */

    async function FetchData(inputQuery){
        try { //Error Handling.
            let dataURL = API_URL;
  
            if(inputQuery === '')
                dataURL = API_URL
            else
                dataURL = dataURL + '?q=' + inputQuery;
            
            let data = await fetch(dataURL);
            let jsonData = await data.json();
        
            const options = jsonData.products.map((val)=>{return {title : val.title, id: val.id}});
        
            setListData(options)
        } catch (error) {
            console.log(error)
        }
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