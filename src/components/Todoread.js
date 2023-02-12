import React, { useState } from 'react'

const useForm = (item) => {

    var [val,setval] = useState(item);

  return [val,(event)=>(
        setval(
            {
                ...val,[event.target.name]:event.target.value
            }
        )
  )]
}
export default useForm