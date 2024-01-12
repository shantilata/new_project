import axios from "axios"

export const checkUserEmail = async (email) => {
    // const config = {
    //     method: "GET",
    //     url: "http://localhost:1000/product",
    //     params: {
    //         email: email
    //     }
    // }
    // const result=await axios(config)

    const result = await axios.get("http://localhost:1000/product", {
        params: {
            email: email

        }
    })
    const resultLength = result.data.length;
    const doesUserExist = resultLength !== 0;
    return doesUserExist;
}

export const checkLogin = async (mail,pwd) => {
    // const config = {
    //     method: "GET",
    //     url: "http://localhost:1000/product",
    //     params: {
    //         email: email
    //     }
    // }
    // const result=await axios(config)

    const result = await axios.get("http://localhost:1000/product", {
        params: {
            email: mail,
            password:pwd

        }
    })
    // const resultItem = result.data.length>0?result.data[0]:false;

    
    // return resultItem;

const resultLength=result.data.length
if(resultLength>0){
    return result.data[0];
}
else{
    return false;
}

}



