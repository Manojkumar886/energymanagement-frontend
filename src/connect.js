import axios from 'axios'

export const Loginperformance = async (object) => {
    const credentials = object.username + ":" + object.password;

    const token = btoa(credentials);

    try {
        const t = await axios.get(`http://localhost:8080/energymanagement/list`,
            {
                headers:
                {
                    "Authorization": `Basic ${token}`
                }
            })

        if (t.data) {
            sessionStorage.setItem("user", object.username);
            sessionStorage.setItem("auth", token)

            return t;
        }
    }
    catch (err) {
        alert(err + " something wrong...!")
    }
}


export const onCreate = async (object) => {
    const t = await axios.post(`http://localhost:8080/energymanagement/create`, object);

    return t;
}