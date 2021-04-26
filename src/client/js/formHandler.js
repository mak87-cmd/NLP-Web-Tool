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

function is_url(str) {
    const regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    return regexp.test(str) ? true : false
}

export { handleSubmit }
