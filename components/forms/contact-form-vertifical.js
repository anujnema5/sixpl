// import PhoneNumberInput from './phone-input'


const ContactFormVertical = () => {
    return (
        <div>
            <div>
                <form>
                    <div className="flex flex-col">
                        <input type="text" name="name" placeholder="Name" required />
                        <input type="email" name="email" placeholder="Email" required />
                        {/* <PhoneNumberInput /> */}
                        <input type="text" name="website" placeholder="Website" />
                        <textarea name="message" placeholder="Message" required />
                        
                    </div>
                </form>
            </div>
        </div>
    )
}
export default ContactFormVertical