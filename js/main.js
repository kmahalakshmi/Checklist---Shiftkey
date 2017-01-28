var checkboxes = document.querySelectorAll('.items input[type=checkbox]');


checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

let lastchecked;

function handleCheck(e) {

    let inBetween = false;
    if (e.shiftKey && this.checked) {

        checkboxes.forEach(checkbox => {
                console.log(checkbox);
                if (checkbox === this || checkbox === lastchecked) {
                    inBetween = !inBetween;
                }

                if(inBetween)
                {
                	checkbox.checked=true;
                }

            }

        );
    }





    lastchecked = this;
}
