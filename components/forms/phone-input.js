import { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'


const PhoneNumberInput = () => {

    const [value, setValue] = useState()

    return(
        <label>
            <PhoneInput className="p-2" placeholder="Phone" value={value} defaultCountry="US" onChange={setValue} required />
        </label>
    )
}

export default PhoneNumberInput