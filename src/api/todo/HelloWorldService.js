import axios from "axios"

class HelloWorldService{

    executeHelloWorldService(){
        return axios.get('http://localhost:8080/hello-world')
        // console.log('executed service')
    }
    executeHelloWorldBeanService(){
        let username='in28minutes'
        let password='dummy'

        let basicAuthHeader='Basic ' + window.btoa(`${username}:${password}`);
        // { Authorization: basicAuthHeaderString }


        return axios.get('http://localhost:8080/hello-world-bean',
        {
            headers : {
                authorization: basicAuthHeader
            }
        }
        )
        // console.log('executed service')
    }
    executeHelloWorldPathVariableService(name){
        // let username='in28minutes'
        // let password='dummy'

        // let basicAuthHeader='Basic ' + window.btoa(`${username}:${password}`);
        // { Authorization: basicAuthHeaderString }

        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}` 
        // ,  {
        //     headers : {
        //         authorization: basicAuthHeader
        //     }
        // }
        )
        
        // console.log('executed service')
    }
}

export default new HelloWorldService()