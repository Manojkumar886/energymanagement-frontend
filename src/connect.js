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

// list one user
export const onListoneuser = async () => {
    const t = await axios.get(`http://localhost:8080/energymanagement/${sessionStorage.getItem('user')}`, {
        headers: {
            "Authorization": `Basic ${sessionStorage.getItem('auth')} `
        }
    })

    return t;
}

// urladd

export const onAddurls = async (object) => {
    const t = await axios.post(`http://localhost:8080/energymanagement/linkCreate`, object, {
        headers: {
            "Authorization": `Basic ${sessionStorage.getItem('auth')}`
        }
    })
    return t;
}

// getparicular urls only

export const onListoneuserURLS = async () => {
    const t = await axios.get(`http://localhost:8080/energymanagement/getall/${sessionStorage.getItem('user')}`, {
        headers: {
            "Authorization": `Basic ${sessionStorage.getItem('auth')}`
        }
    })

    return t;
}

// update urls

export const onUpdateurls = async (obj) => {
    const t = await axios.put(`http://localhost:8080/energymanagement/linkUpdate`, obj,
        {
            headers: {
                "Authorization": `Basic  ${sessionStorage.getItem('auth')}`
            }
        })
}

// read single url

export const onsingleurl = async (title) => {
    const t = await axios.get(`http://localhost:8080/energymanagement/getoneurl/${title}`,
        {
            headers: {
                "Authorization": `Basic  ${sessionStorage.getItem('auth')}`
            }
        })

    return t;

}


export const removeurl = async (title) => {
    alert(title);
    const t = await axios.delete(`http://localhost:8080/energymanagement/deletebyurlid/${title}`, {
        headers: {
            "Authorization": `Basic ${sessionStorage.getItem('auth')}`
        }
    })
    return t;
}