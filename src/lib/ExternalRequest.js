//
// This module handles all the external api requests
//
class ExternalRequest{
  
  //
  // Set Header for All the requests
  //
  static get HEADERS() {
    return  {
              "Accept":  "application/json, text/plain", 
              "Content-Type": "application/json", 
              "Access-Control-Allow-Origin": "*"
            }
    }

  //
  // GET Request
  //  
  static get(url){
    return fetch(url)
   .then(response => {
       if (!response.ok) { throw Error(response.statusText); }
       return response.json();
    })
   .catch(error => {throw Error(error)});
  }
  
  //
  // POST Request
  //  
  static post(url, data){
    return fetch(url, {method: 'post', mode: 'cors', headers: this.HEADERS, body: JSON.stringify(data)})
           .then(response => {
              if (!response.ok) { throw Error(response.statusText); }
               //return Promise.reject(response.statusText);
              return response.json();
            })
           .catch(error => {throw Error(error)});
  
  }

  //
  // PUT Request
  //  
  static put(url, data){
    return fetch(url, {method: 'put', headers: this.HEADERS, body: JSON.stringify(data)})
    .then(response => {
      if (!response.ok) { throw Error(response.statusText); }
      return response.json();
    })
   .catch(error => {throw Error(error)});
  }
  
  //
  // DELETE Request
  //  
  static delete(url){
   return fetch(url, {method: 'delete', headers: this.HEADERS})
   .then(response => {
      if (!response.ok) { throw Error(response.statusText); }
      return response.ok;
    })
   .catch(error => {throw Error(error)});
  }

}

//Default Export
export default ExternalRequest;