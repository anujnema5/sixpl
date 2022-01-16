import { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const ContactFormVertical = () => {

    const [value, setValue] = useState()

    return (
        <div>
            <div>
                <form>
                    <div className="flex flex-col">
                        <input type="text" name="name" placeholder="Name" required />
                        <input type="email" name="email" placeholder="Email" required />
                        <PhoneInput
                            country={'us'}
                            value={value}
                            onChange={setValue}
                        />
                        <input type="text" name="website" placeholder="Website" />
                        <textarea name="message" placeholder="Message" required />
                        
                    </div>
                </form>
            </div>
        </div>
    )
}
export default ContactFormVertical