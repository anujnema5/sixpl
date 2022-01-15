import { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'


const PhoneNumberInput = () => {

    const [value, setValue] = useState()

    return(
        <PhoneInput placeholder="Enter Phone Number" value={value} onChange={setValue} />
    )
}

export default PhoneNumberInput