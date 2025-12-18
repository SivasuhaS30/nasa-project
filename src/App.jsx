

import Main from './components/Main'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import { useEffect, useState } from 'react';


function App() {
  // console.log(apiKey);

  let [data,setData] = useState(null);
  let [loading,setLoading] = useState(false);
  
  useEffect(()=>{
    async function fetchAPI()
    {
      const apiKey = import.meta.env.VITE_APOD_API_KEY;
      const url =   `https://api.nasa.gov/planetary/apod?api_key=` + `${apiKey}`;
      
      let today = (new Date()).toDateString();
      let localKey = `NASA-${today}`;
      if(localStorage.getItem(localKey))
        {
          let apiData = JSON.parse(localStorage.getItem(localKey));
          setData(apiData);
          setLoading(true);

        console.log('Got data from the cache');

        return
      }
      localStorage.clear();
      
      try{

        let res = await fetch(url);
        let apiData = await res.json();
        localStorage.setItem(localKey,JSON.stringify(apiData));
        console.log('Got data from the API key');
        console.log(apiData);
        setData(apiData);
        setLoading(true);
      }

      catch(err)
      {
        console.log(err);
      }

    }

    fetchAPI();

  },[])


  let [showinfo,setShowinfo] = useState(false);
  
  function toggle_show_info()
  {
    setShowinfo(!showinfo);
  }
  
  return (
    <>
      
     {loading ?
      <Main data={data}/>
    :
      <div className='loadingState'>
        <i className="fa-solid fa-gear"></i>
      </div> 
      }

      { showinfo && <Sidebar data={data} toggle_show_info={ toggle_show_info}/>}
      {loading ? <Footer data={data} toggle_show_info={toggle_show_info} showinfo={showinfo}/>
      :
      null}
    </>
  )
}

export default App
