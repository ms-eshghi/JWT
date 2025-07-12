const initializeLogin = () => {
    document.getElementById("loginForm").addEventListener("submit", (event) => {
        fetchData(event)
    })
}

const fetchData = async (event) => {
    event.preventDefault()

    const formData = {
        email: event.target.email.value,
        password: event.target.password.value,
    }

    try {
        const response = await fetch("/api/user/login",  {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        if (!response.ok) {
            document.getElementById("error").innerText = "Error when trying to login. Please try again."
        return
        } else {

              const data = await response.json();
            if (data.token) {
  localStorage.setItem('auth', data.token);  
  window.location.href = '../index.html';          
};            
        }
    
    } catch (error) {
        console.log(`Error while trying to register: ${error.message}`)
    }


}


initializeLogin()