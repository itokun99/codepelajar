const website = {
    isOnline : false,
}

const urlPath = {
    basePath : "",
    apiPath : `${website.isOnline ? "" : "http://localhost:8000/"}`
}


const Setting = {
    website,
    urlPath
}


export default Setting;
