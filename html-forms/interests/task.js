const interestCheck = document.querySelectorAll('.interest__check')

for (const temp of interestCheck) {
    temp.addEventListener('change', () => {
        if(temp.checked == true && temp.closest('label').nextElementSibling != null){
            let tempChecked = temp.closest('label').nextElementSibling.querySelectorAll('.interest__check')
                for(let temp of tempChecked){
                temp.checked = true
            } 
        }
    })  
}