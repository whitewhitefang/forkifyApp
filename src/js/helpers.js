import { TIMEOUT_SEC } from "./config";

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const ajax = async function(url, uploadData = undefined) {  
  try { 
    const fetchPro = uploadData ? fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': "application/json"      
      },
      body: JSON.stringify(uploadData)
    }) : fetch(url, {
      method: "GET"
    });   
    const request = await Promise.race([
      fetchPro,
      timeout(TIMEOUT_SEC)
    ]);
    if (!request.ok) {
      throw new Error(`Some server problem - ${request.statusText}`);
    }        
    const response = await request.json();
    return response;    
  } catch(err) {
    throw err;
  }
}