function Tarjeta({encabezado, children}){
    return(
        <section className="tarjeta-info">
            <h2>{encabezado}</h2>
            <div>{children}</div>
            
        </section>
    )
}
export default Tarjeta;