import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState,useEffect} from 'react';

function Api() {
    const [jokes,setJokes]=useState([])

    useEffect(() => {
        getJokes();
      }, [])

      useEffect(()=>{
          console.log(jokes);
      },[jokes])
    useEffect(() => {
        document.title = 'Jokes Generator Project'
     }, []);

      const getJokes =async()=>{
        const response=await Axios('http://official-joke-api.appspot.com/random_ten');
        setJokes(response.data)
      } 
  
      return(
          <div className="container-fluid">
              <div class="row m-1">
              {jokes && jokes.map(joke=>{
                      return(
                        
                          <div key={joke.id} className="col-md-4 jokebox">
                             <span class="badge badge-primary joke-no bg-dark">{joke.id}</span>
                              <h5>{joke.setup}</h5>
                              <p><b>Punchline</b> : {joke.punchline}</p>
                          </div>
                          
                      )
                    })
                }
                </div>
                <div className="button-con">
                <button className="button bg-dark" onClick={getJokes}>generate more 10 jokes</button>
                </div>
          </div>
      )
}
export default Api;