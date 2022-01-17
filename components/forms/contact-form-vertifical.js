const ContactFormVertical = () => {

    return (
        <div>
            <div className="flex bg-slate-800 font-serif">
                <form className="flex flex-col p-2 items-center w-full">
                    <div className="flex flex-col items-center w-full md:px-8">
                        <div>
                            <div className="py-4 text-center text-2xl text-white">Start Your Project</div>
                        </div>
                        <label className="flex p-2 w-full">
                            <input className="p-2 w-full rounded-md" type="text" name="name" placeholder="Name" required />
                        </label>
                        <label className="p-2 w-full">
                            <input className="p-2 w-full rounded-md" type="email" name="email" placeholder="Email" required />
                        </label>
                        <label className="p-2 w-full">
                            <input className="p-2 w-full rounded-md" type="text" name="phone" placeholder="Mobile" required />
                        </label>
                        <label className="p-2 w-full ">
                            <input className="p-2 w-full rounded-md" type="text" name="website" placeholder="Website" />
                        </label>
                        <label className="p-2 w-full">
                            <textarea className="p-2 w-full rounded-md" name="message" placeholder="Message" required />
                        </label>   
                    </div>
                    <div className="p-2">
                        <button className="py-2 px-8 text-xl bg-slate-50 rounded-lg hover:bg-orange-400 hover:text-white hover:px-10">Get Started Now</button>
                    </div>
                    <div>
                        <p>{}</p>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default ContactFormVertical