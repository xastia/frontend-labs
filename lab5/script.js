function submitForm() {
    const pibInput = document.getElementById('pib');
    const groupInput = document.getElementById('group');
    const telephoneInput = document.getElementById('telephone');
    const cardInput = document.getElementById('card');
    const facultyInput = document.getElementById('faculty');

    let isValid = true;
    if (!pibInput.value.match(/^[А-ЯІЇЄҐA-Zа-яіїєґa-z]+ [А-ЯІЇЄҐA-Z]\.[А-ЯІЇЄҐA-Z]\.$/)) {
        pibInput.classList.add('error');
        pibInput.classList.remove('valid');
        isValid = false;
    }
    else {
        pibInput.classList.remove('error');
        pibInput.classList.add('valid');
    }
    if (!groupInput.value.match(/^[A-ZА-ЯІЇЄҐ]{2}-\d{2}$/)) {
        groupInput.classList.add('error');
        groupInput.classList.remove('valid');
        isValid = false;
    }
    else {
        groupInput.classList.remove('error');
        groupInput.classList.add('valid');
    }
    if (!telephoneInput.value.match(/^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/)) {
        telephoneInput.classList.add('error');
        telephoneInput.classList.remove('valid');
        isValid = false;
    }
    else {
        telephoneInput.classList.remove('error');
        telephoneInput.classList.add('valid');
    }
    if (!cardInput.value.match(/^[A-ZА-ЯІЇЄҐ]{2}\s№\d{6}$/)) {
        cardInput.classList.add('error');
        cardInput.classList.remove('valid');
        isValid = false;
    }
    else {
        cardInput.classList.remove('error');
        cardInput.classList.add('valid');
    }
    if (!facultyInput.value.match(/^[А-ЯІЇЄҐA-Z]{4}$/)) {
        facultyInput.classList.add('error');
        facultyInput.classList.remove('valid');
        isValid = false;
    }
    else {
        facultyInput.classList.remove('error');
        facultyInput.classList.add('valid');
    }

    if (isValid) {
        document.getElementById('pibOutput').innerText = "ПІБ: " + pibInput.value;
        document.getElementById('groupOutput').innerText = "Група: " + groupInput.value;
        document.getElementById('telephoneOutput').innerText = "Телефон: " + telephoneInput.value;
        document.getElementById('cardOutput').innerText = "ID-card: " + cardInput.value;
        document.getElementById('facultyOutput').innerText = "Факультет: " + facultyInput.value;
    }
}


function createTable() {
    const table = document.getElementById('colorTable').getElementsByTagName('tbody')[0];

    for (let row = 0; row < 6; row++) {
        let tr = document.createElement('tr');
        for (let col = 0; col < 6; col++) {
            let td = document.createElement('td');
            td.innerText = row * 6 + col + 1;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function handleTableEvents() {
    const secondCell = document.querySelector('#colorTable td:nth-child(2)');
    let selectedColor = "#FF6347"; 

   
    secondCell.addEventListener('mouseenter', () => {
        secondCell.style.backgroundColor = getRandomColor(); 
    });

    
    secondCell.addEventListener('click', (e) => {
        
        if (e.target.querySelector('input[type="color"]')) return;

       
        const colorPickerContainer = document.createElement('div');
        colorPickerContainer.style.position = 'absolute';
        colorPickerContainer.style.top = '0';
        colorPickerContainer.style.left = '0';
        colorPickerContainer.style.zIndex = '10';

        const colorPicker = document.createElement('input');
        colorPicker.type = 'color';
        colorPicker.value = selectedColor; 
        colorPicker.style.width = '30px';
        colorPicker.style.height = '30px';

        colorPickerContainer.appendChild(colorPicker);
        e.target.appendChild(colorPickerContainer);

        
        colorPicker.addEventListener('input', (e) => {
            selectedColor = e.target.value;
            e.target.closest('td').style.backgroundColor = selectedColor; // Зміна кольору клітинки

          
            e.target.closest('td').removeChild(colorPickerContainer);
        });
    });


    secondCell.addEventListener('dblclick', () => {
        const columnIndex = Array.from(secondCell.parentElement.children).indexOf(secondCell);
        const allRows = document.querySelectorAll('#colorTable tr');
        allRows.forEach(row => {
            row.children[columnIndex].style.backgroundColor = selectedColor;
        });
    });
}


createTable();
handleTableEvents();

           


