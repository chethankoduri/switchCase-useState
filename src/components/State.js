import React from 'react'

function State() {
  //  let stateSelectRef = useRef();
  return (
    <div>
        <form>
            <div>
                <label>State</label>
                <select onChange={(eo)=>{
                  console.log(eo.target.value);
                  let stateSelector = eo.target.value;
                  
                  if(eo.target.value == "Andhra Pradesh"){
                    console.log("Amaravathi")
                  }else if(eo.target.value == "Telangana"){
                    console.log("Hyderabad")
                  }else if(stateSelector == "Tamil Nadu"){
                    console.log("Chennai")
                  }else if(stateSelector == "Maharastra"){
                    console.log("Mumbai")
                  }else if(stateSelector == "Karnataka"){
                    console.log("Bengaluru")
                  }else if(stateSelector == "Gujarat"){
                    console.log("Gandhinagar")
                  }else{
                    console.log("Null")
                  }

                  switch (stateSelector) {
                    case "Andhra Pradesh":
                      console.log("Amaravathi");
                      break;
                      case "Telangana":
                      console.log("Hyderabad");
                      break;
                      case "Tamil Nadu":
                      console.log("Chennai");
                      break;
                      case "Maharastra":
                      console.log("Mumbai");
                      break;
                      case "Karnataka":
                      console.log("Bengaluru");
                      break;
                      case "Gujarat":
                      console.log("Gandhinagar");
                      break;
                  
                    default:
                      console.log("Null")
                      break;
                  }
                }}>
                    <option>Andhra Pradesh</option>
                    <option>Telangana</option>
                    <option>Tamil Nadu</option>
                    <option>Maharastra</option>
                    <option>Karnataka</option>
                    <option>Gujarat</option>

                </select>
            </div>
        </form>
    </div>
  )
}

export default State