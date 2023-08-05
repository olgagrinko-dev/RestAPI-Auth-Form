const btnReg = document.querySelector('.btn-reg');
const inpUsernameReg = document.querySelector('.Username-inp-reg');
const inpEmailReg = document.querySelector('.E-mail-inp-reg');
const inpPhoneReg = document.querySelector('.Phone-inp-reg');
const inpPasswordReg = document.querySelector('.Password-inp-reg');
const inpConfirmPasswordReg = document.querySelector('.Confirm-Password-inp-reg');

btnReg.addEventListener('click', async () => {
    const objectToServer = {
        username: inpUsernameReg.value,
        email: inpEmailReg.value,
        phone: inpPhoneReg.value,
        pwd: inpPasswordReg.value,
    }
    console.log(objectToServer);
    const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        body: JSON.stringify(objectToServer),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(response.status);
    console.log(await response.json());
})

const btnAuth = document.querySelector('.btn-auth');
const inpEmailAuth = document.querySelector('.E-mail-inp-auth');
const inpPasswordAuth = document.querySelector('.Password-inp-auth');

btnAuth.addEventListener('click', async () => {
    const objectToServer = {
        email: inpEmailAuth.value,
        pwd: inpPasswordAuth.value,
    }

    const response = await fetch('http://localhost:3000/api/authorize', {
        method: 'POST',
        body: JSON.stringify(objectToServer),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(response.status);
    console.log(await response.json());
})