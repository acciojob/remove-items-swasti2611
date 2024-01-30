//your JS code here. If required.
let InputBtn=document.getElementById("form")

   function removeSelectedColor() { 
    var select = document.getElementById("colorSelect");

    if (select.selectedIndex !== -1) {
        // Check if any option is selected
        select.remove(select.selectedIndex);
    }
}

