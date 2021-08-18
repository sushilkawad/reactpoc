
function Price ({price}){

    return(
        <p><span className="line-through">Rs. {price.display}</span><strong>Rs. {price.actual}</strong></p>
    )
}

export default Price;