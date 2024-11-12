function submitForm() {
    const pibInput = document.getElementById('pib');
    const groupInput = document.getElementById('group');
    const telephoneInput = document.getElementById('telephone');
    const cardInput = document.getElementById('card');
    const facultyInput = document.getElementById('faculty');


    
    let isValid = true;
    if (!pib.value.match(/^[А-ЯІЇЄҐA-Zа-яіїєґa-z]+ [А-ЯІЇЄҐA-Z]\.[А-ЯІЇЄҐA-Z]\.$/)) {
        pib.classList.add('error');
        isValid = false;
    }
    else {
        pib.classList.remove('error');
        pib.classList.add('valid');
    }
    if (!group.value.match(/^[A-ZА-ЯІЇЄҐ]{2}-\d{2}$/)) {
        group.classList.add('error');
        isValid = false;
    }
    else {
        group.classList.remove('error');
        group.classList.add('valid');
    }
    if (!telephone.value.match(/^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/)) {
        telephone.classList.add('error');
        isValid = false;
    }
    else {
        telephone.classList.remove('error');
        telephone.classList.add('valid');
    }
    if (!card.value.match(/^[A-ZА-ЯІЇЄҐ]{2}\s№\d{6}$/)) {
        card.classList.add('error');
        isValid = false;
    }
    else {
        card.classList.remove('error');
        card.classList.add('valid');
    }
    if (!faculty.value.match(/^[А-ЯІЇЄҐA-Z]{4}$/)) {
        faculty.classList.add('error');
        isValid = false;

    }
    else {
        faculty.classList.remove('error');
        faculty.classList.add('valid');
    }
    if (isValid) {
    
        document.getElementById('pibOutput').innerText = "ПІБ: " + pib.value;
        document.getElementById('groupOutput').innerText = "Група: " + group.value;
        document.getElementById('telephoneOutput').innerText = "Телефон: " + telephone.value;
        document.getElementById('cardOutput').innerText = "ID-card: " + card.value;
        document.getElementById('facultyOutput').innerText = "Факультет: " + faculty.value;
    }
}

