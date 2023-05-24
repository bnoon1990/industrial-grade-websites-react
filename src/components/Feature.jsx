function Feature(props) {
    return (
    <section className="container mx-auto px-4 py-4 md:w-1/2 rounded bg-neutral-600 my-4">
        <h2 className="text-4xl font-bold uppercase text-neutral-300a pb-2">{props.headline}</h2>
        <p className="text-neutral-300 font-mono text-lg">{props.blurb}</p>
        {props.form}
    </section>
    )
}

export default Feature;