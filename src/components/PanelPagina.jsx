function Panel({encabezado, children}){
    return(
        <section className="tarjeta-info">
            <h2>{encabezado}</h2>
            <div>{children}</div>
            <div>jollllllaaaa</div>
        </section>
    )
}
export default Panel