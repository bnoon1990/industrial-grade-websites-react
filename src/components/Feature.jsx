function Feature(props) {
    return (
    <section class="container mx-auto px-4 py-4 md:w-2/3 bg-neutral-600 my-4">
        <h2 class="text-4xl font-bold uppercase text-neutral-300a pb-2">{props.headline}</h2>
        <p class="text-neutral-300 font-mono text-lg">{props.blurb}</p>
        {props.form}
    </section>
    )
}

export default Feature;