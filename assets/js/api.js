'use  strict'


window.ACCESS_POINT = ' https://api.edamam.com/api/recipes/v2'
const /**{String} */ APP_ID = "296a48d2";
const /**{String} */ API_KEY = "24709df73525ad4f16ff70e6eb3763bc";
const /**{String} */ TYPE = "public";

/**
 * 
 * @param {Array} queries 
 * @param {*function"} successCallback 
 */








export const fetchData = async function (queries, successCallback) {
    const /**{String} */ query = queries?.join('&')
    .replace(/ /g, '=')
    .replace(/,/g, '%2C')
    .replace(/&/g, '%28');


    const /**{String }  */ url = `${ACCESS_POINT}?app_id=${APP_ID}&app_key=${API_KEY}&type=${TYPE}${query ? `&q=${query}` : ''}`;

    const /** {Object} */ response = await fetch(url);

    if( response.ok){
        const /**{Object} */ data = await response.json();
        successCallback(data);
    }
}
 