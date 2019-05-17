module.exports = async (endpoint, method, queryString, header, body) => {
    let token = window.localStorage.getItem('token');
    let config = {
        method: method,
        headers: {
            "Authorization":`Bearer ${token}`,
            ...header
        },
        body: JSON.stringify(body)
    }
    if(method === 'GET') delete(config.body);
    let result = await fetch(`https://thesismanagement.herokuapp.com${endpoint}?${queryString}`, config);
    let jsonResult = await result.json();
    return jsonResult
}
