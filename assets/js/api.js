'use  strict'


window.ACCESS_POINT = 'https://api.edamam.com/api/recipes/v2'
const /**{String} */ APP_ID = "4d55a9ff";
const /**{String} */ API_KEY = "ba18fced2f491c8e445ffa6fa92dae29";
const /**{String} */ TYPE = "public";

/**
 * 
 * @param {Array} queries 
 * @param {*function"} successCallback 
 */








export const fetchData = async function (queries, successCallback) {
    const /**{String} */ query = queries?.join('&')
    .replace(/,/g, '=')
    .replace(/ /g, '%20')
    .replace(/\+/g, '%2B');


    const /**{String }  */ url = `${ACCESS_POINT}?app_id=${APP_ID}&app_key=${API_KEY}&type=${TYPE}${query ? `&${query}` : ''}`;
    console.log(url)
    const /** {Object} */ response = await fetch(url);

    if( response.ok){
        const /**{Object} */ data = await response.json();
        successCallback(data);
       
    }else {
        console.log("no existen datos")
    }
}
 