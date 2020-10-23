"use strict";

document.addEventListener("DOMContentLoaded", function() {

    const btn = document.querySelectorAll('button'),
          getParent = document.querySelector('.wrapper'),
          select = document.querySelector('#sel_tipo');
    
        /* btn.addEventListener('click', (e) =>{
            e.preventDefault;
        });
 */

        function showMessage() {
            
            let div = document.createElement('div');
            div.innerHTML = `
                <div class="message">Abbinamento stato creato</div>
            `;

            getParent.append('div');
        };


        // SELECT reset
        

        /* let sel = document.select[ '#sel_tipo' ];
        sel.addEventListener( 'submit', form_submitHandler );

        function form_submitHandler( { target } ){
        target.reset();
        }
 */


        
});