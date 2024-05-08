'use strict';

import { fetchData } from "./api.js";
import { $skeletonCard, cardQueries } from "./global.js";

/**
 * Home page Search
 */

const /**{NodeElement} */ $searchField = document.querySelector('[data-search-field]');

const /**{NodeElement} */ $searchBtn = document.querySelector('[data-search-btn]');



$searchBtn.addEventListener('click', function () { 
    if ($searchField.value) window.location = `/recipes.html?q=${$searchField.value}`;
    
}); 

/**
 * Search submit when press "ENTER" key 
 */

$searchField.addEventListener('keydown', function(e) {
    if(e.key === 'Enter') $searchBtn.click();
});

/**
 * Tab panel navigation
 */

const /**{NodeList} */ $tabBtns = document.querySelectorAll('[data-tab-btn]');
console.log($tabBtns)
const /**{NodeList} */  $tabPanels = document.querySelectorAll('[data-tab-panel]');
console.log($tabPanels)
let /**{NodeElement} */ [$lastActiveTabPanel] = $tabPanels
let /**{NodeELement} */ [$lastActiveTabBtn] = $tabBtns


addEventOnElements($tabBtns, 'click', function() {
    $lastActiveTabPanel.setAttribute('hidden', '');
    $lastActiveTabBtn.setAttribute('aria-selected', 'false');
    $lastActiveTabBtn.setAttribute('tabindex', '-1');

    const /**{NodeELement} */ $currentTabPanel = document.querySelector(`#${this.getAttribute('aria-controls')}`);
    console.log($currentTabPanel)
    $currentTabPanel.removeAttribute('hidden'); 
    this.setAttribute('aria-selected', 'true');
    this.setAttribute('tabindex', '0');


    $lastActiveTabPanel = $currentTabPanel;
    $lastActiveTabBtn = this;

    /**seccion de tab panel despues de la api */
    addTabContent(this, $currentTabPanel);
});



/**
 * Navigate tab with arrow key 
 */


addEventOnElements($tabBtns, 'keydown', function(e) {

    const /**{NodeElement} */ $nextElement = this.nextElementSibling;
    const /**{NodeElement} */ $previousELement = this.previousElementSibling;
     
    if(e.key === 'ArrowRight' && $nextElement){
        this.setAttribute('tabindex', '-1');
        $nextElement.setAttribute('tabindex', '0');
        $nextElement.focus();

    }else if(e.key === 'ArrowLeft' && $previousELement){
        this.setAttribute('tabindex', '-1');
        $previousELement.setAttribute('tabindex', '0');
        $previousELement.focus();
    } else if(e.key === "Tab"){
        this.setAttribute('tabindex', -1);
        $lastActiveTabBtn.setAttribute('tabindex', '0');
    }

});  



/**
 * Work with api 
 * fetch dat for tab contet
*/


const addTabContent = ($currentTabBtn, $currentTabPanel) => {

    const $gridList = document.createElement('div');
    $gridList.classList.add('grid-list');

    $currentTabPanel.innerHTML = `
    <div class="grid-list">
        ${$skeletonCard.repeat(12)}
    </div>`;

    fetchData([['mealType', $currentTabBtn.textContent.trim().toLowerCase(), ...cardQueries], function (data){
        console.log(data)
    }])
}


addTabContent($lastActiveTabBtn, $lastActiveTabPanel);


