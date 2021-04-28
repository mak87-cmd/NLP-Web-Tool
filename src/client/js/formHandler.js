function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    const formUrl = document.getElementById('userUrl').value
    if (is_url(formUrl)) {
        console.log("::: Form Submitted :::")
        const formdata = new FormData();
        formdata.append("url", formUrl);

        const requestOptions = {
            method: 'POST',
            body: formdata,
        };

        const response = fetch("http://localhost:8081", requestOptions)
            .then(response => response.json())
            .then(response => {
                document.getElementById('results').innerHTML = JSON.stringify(response);
            })
            .catch(error => console.log('error', error));
    } else {
        document.getElementById('results').innerHTML = 'Invalid URL'
    }   
}

export { handleSubmit }
