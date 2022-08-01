import { useNavigate } from "react-router-dom";

function withNavigation(Component){
    console.log(Component)
    return props=><Component {...props} nav={useNavigate()}/>
}

export default withNavigation

