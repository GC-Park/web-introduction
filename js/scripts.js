const buttonClick = ()=>{
    let name = document.getElementById('name').value
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    alert(`${name}님, 저와 ${checkboxes.length}개의 취향이 같으시네요!`);
}

const resetAll = ()=>{
    document.getElementById('name').value = ''
    
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    for(let i=0; i<checkboxes.length; i++){
        checkboxes[i].checked = false
    }
}

