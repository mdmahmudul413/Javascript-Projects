// utility functions
// utility function to get DOM elements from string
function getElementFromString(string){
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}
// Initialize number of parameters
let addedParamCount = 0;

// Hide the parameter box initially
let parameterBox = document.getElementById('parameterBox');
parameterBox.style.display = 'none';

// If the user click parameter radio button then hide json box
let paramsRadio =document.getElementById('paramsRadio');
paramsRadio.addEventListener('click', ()=>{
    document.getElementById('parameterBox').style.display = 'block';
    document.getElementById('requestJsonBox').style.display = 'none';
});

// If the user click json radio button then hide parameter box
let jsonRadio =document.getElementById('jsonRadio');
jsonRadio.addEventListener('click', ()=>{
    document.getElementById('parameterBox').style.display = 'none';
    document.getElementById('requestJsonBox').style.display = 'block';
});

// If the users click plus(+) button, add more parameters
let addParam = document.getElementById('addParam');
addParam.addEventListener('click', ()=>{
    let params = document.getElementById('params');
    let string =    `<div class="mb-3 row">
                        <label for="param" class="col-sm-2 col-form-label">Parameter ${addedParamCount + 2}</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="parameterKey${addedParamCount + 2}" placeholder="Enter parameter ${addedParamCount + 2} key">
                        </div>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="parameterValue${addedParamCount + 2}" placeholder="Enter parameter ${addedParamCount + 2} value">
                        </div>
                        <button class="col-sm-1 btn btn-primary deleteParam">-</button>
                    </div>`;
    // convert the element string to DOM node
    let paramElement = getElementFromString(string);
    params.appendChild(paramElement);

    // Add an event listener to remove the parameter on clicking - button
    let deleteParam = document.getElementsByClassName('deleteParam');

    for(item of deleteParam){
        item.addEventListener('click', (e)=>{
            e.target.parentElement.remove();
        });
    }
    addedParamCount++;
});

// If the user clicks on submit button
let submit = document.getElementById('submit');
submit.addEventListener('click', ()=>{
    // show please wait in the response box
    document.getElementById('responseJsonText').value = 'Please Wait... Fetching response...';

    // fetch all values users has entered
    let url = document.getElementById('url').value;
    let requestType = document.querySelector("input[name='requestType']:checked").value;
    let contentType = document.querySelector("input[name='contentType']:checked").value;

    // log all the values in the console for debugging
    // console.log(url, requestType, contentType);

    // If user choose params option, then collects all parameters in an object
    let data = {};
    if(contentType == 'params'){

        for(let i = 0; i < addedParamCount + 1; i++){
            if(document.getElementById('parameterKey' + (i + 1)) != undefined){
                let key = document.getElementById('parameterKey' + (i + 1)).value;
                let value = document.getElementById('parameterValue' + (i + 1)).value;
                data[key] = value;
            }                
        }

        // convert the object to string
        data = JSON.stringify(data);

        // debugging
        // console.log(data);
    }
    else{
        data = document.getElementById('requestJsonText').value;

        // debugging
        // console.log(data);
    }

    // If the request type is GET, invoke fetch api to create a get request
    if(requestType == 'GET'){
        fetch(url, {
            method: 'GET',
        })
        .then(response => response.text())
        .then((text)=>{
            document.getElementById('responseJsonText').value = text;
        });
    }

    else{
        fetch(url, {
            method: 'POST',
            // body key accept string
            body: data,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => response.text())
        .then((text)=>{
            document.getElementById('responseJsonText').value = text;
        });
    }
});