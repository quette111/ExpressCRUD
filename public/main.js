
async function postData() {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    if (!username || !password) {

        document.getElementById('outerForm').style.cssText = 'border:2px solid red'
        para = document.createElement("p")
        para.style.cssText = 'color:red';
        para.innerText = "Please enter a username and password . . .";
        document.body.appendChild(para)


    }
    else {
        try {
            window.response = await axios.post('http://localhost:3001/api/v1/login', {
                username: username,
                password: password,
            });
            console.log(response.data);
            document.getElementById('outerForm').style.cssText = 'border:2px solid green;'
            para = document.createElement("p")
            para.style.cssText = 'color:green;transition: opacity 250ms ease-in;';
            para.innerHTML = "Successfully created an account . . .";
            document.body.appendChild(para)
            document.getElementById('create').innerHTML = 'Login . . . '
            // After login success
            window.localStorage.setItem('token', response.data);
            console.log(response.data)

        } catch (error) {
            console.error('Error sending frontend data', error)
        }
    }
}

const form = document.getElementById('form')

form.addEventListener('submit', (e) => {

    e.preventDefault()
    postData()
    console.log('form submitted')
    document.getElementById('username').value = ''
    document.getElementById('password').value = ''

})

async function verify() {
    if (!response) {
        let unauthText = document.createElement("p")
        unauthText.style.cssText = 'color:red';
        unauthText.innerText = "You are not authorized . . .";
        document.getElementById('verificationBlock').appendChild(unauthText)

    }
    else {
        try {
            const token = localStorage.getItem('token');

            const respond = await axios.get('http://localhost:3001/api/v1/landing', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            let winner = document.createElement('p');
            winner.innerText = 'Logged in'
            document.body.appendChild(winner)
            document.body.innerHTML = `<div id='block'><h1 id='info'>💥GLRDDD BOW💥</h1>
            <audio controls autoplay>
            <source src="gm.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio></div>`
        } catch (error) {
            console.log('Error fetching secret data', error)
        }
    }
}
document.getElementById('verifyButton').addEventListener('click', () => {
    verify()
})