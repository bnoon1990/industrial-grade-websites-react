function Form() {
    return (
        <div>
            <h2>Get Free Quote</h2>
            <p>Fill out this quick form and we will be in touch with how we can help</p>
    <form>
        <label for="name">Name:</label>
        <input type="text" name="name"></input>
        <label for="email">Email:</label>
        <input type="email" name="email"></input>
        <label for="source">How did you hear about us?</label>
        <input type="text" name="source"></input>
    </form>
    </div>
    )
}

export default Form;