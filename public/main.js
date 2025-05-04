
async function postData() {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    if (!username || !password) {

        document.getElementById('outerForm').style.cssText = 'border:2px solid red'
        let para = document.createElement("p")
        para.style.cssText = 'color:red';
        para.innerText = "Please enter a username and password . . .";
        document.body.appendChild(para)


    }
    else {
        try {
            const response = await axios.post('http://localhost:3001/api/v1/login', {
                username: username,
                password: password,
            });
            console.log(response.data);
            document.getElementById('outerForm').style.cssText = 'border:2px solid green;'
            let paraG = document.createElement("p")
            paraG.style.cssText = 'color:green;transition: opacity 250ms ease-in;';
            paraG.innerText = "Successfully created an account . . .";
            document.body.appendChild(paraG)
            para.remove()
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