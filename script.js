const form = document.getElementById('form-endereco');
const cepInput = document.getElementById('cep');
const logradouroInput = document.getElementById('logradouro');
const numeroInput = document.getElementById('numero');
const ufInput = document.getElementById('uf');
const complementoInput = document.getElementById('complemento');
form.addEventListener('submit', e => {

    e.preventDefault();
    if (cep.value.trim() === "") {
        alert('Por favor, preencha o campo CEP.');
        return;
    }
    if (logradouro.value.trim().length < 5) {
        alert('Por favor, preencha o campo Logradouro com pelo menos 5 caracteres.');
        return;
    }
    if (numero.value.trim() === "") {
        alert('Por favor, preencha o campo Número.');
        return;
    }
    if (!/^\d+$/.test(numero.value)) {
        alert('Por favor, preencha o campo Número com apenas números.');
        return;
    }
    if (ufInput.value.trim() === "") {
        alert('Por favor, preencha o campo UF.');
        return;
    }
    if (!/^[A-Z]{2}$/.test(ufInput.value)) {
        alert('Por favor, preencha o campo UF com exatamente duas letras Maiúsculas.');
        return;
    }
    alert('Formulário enviado com sucesso!');
});
cepInput.addEventListener('input', (e) => {
    let v = e.target.value.replace(/\D/g, '');
    const m = v.match(/^(\d{5})(\d{3})$/);
    if (m) {
        v = m[1] + (m[2] ? '-' + m[2] : '');
    }
    e.target.value = v;
});

numero.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '');
});
f.addEventListener('input', (e) => {
    let v = e.target.value.replace(/[^a-zA-Z]/g, '');
    v = v.toUpperCase().slice(0, 2);
    e.target.value = v;
});
