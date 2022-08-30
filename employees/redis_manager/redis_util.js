
const redis_client = require('./redis_connection.js');

const setkeyvalue = (key, value)=>{
    redis_client.set(key, JSON.stringify(value));
}

const getkeyvalue = async(key)=>{
    const data = await redis_client.get(key);
    if(data !== null){
        return JSON.parse(data);
    }
    else return null;
}

module.exports = {
    setkeyvalue,
    getkeyvalue
}