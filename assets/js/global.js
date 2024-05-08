'use strict';

/**
 * 
 * @param {*} $elements 
 * @param {*} eventType 
 * @param {*} callback 
 */
window.addEventOnElements = ($elements, eventType, callback)  => {
    for(const $element of $elements){
        $element.addEventListener(eventType, callback);
    }

}



/**tab section apartado */

export const /**{Array} */ cardQueries = [
    ["field", "uri"],
    ["field", "label"],
    ["field", "image"],
    ["field", "totalTime"]
]


/**
 * Skeleton card
 */


export const /**[String] */ $skeletonCard = `
<div class="card skeleton-card">
<div class="skeleton card-banner">
   
</div>
<div class="card-body">
    <div class="skeleton card-title"></div>

    <div class="skeleton card-text"></div>

</div>
</div>
`;

