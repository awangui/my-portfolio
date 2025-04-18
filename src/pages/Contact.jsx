function Contact(){
    return (
        <>
       
        <form className="contact-form">
        <h1>Contact Me</h1>
            <p>Let's connect! Send me a message below</p>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="e.g John Doe" required />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="e.g johndoe@gmail.com" required />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit" className="btn">Send</button>
        </form>
        </>
    );       
}

export default Contact;