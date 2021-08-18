
function Title ({text, header, label}){
    return(
        header ? <h2 className="flex-1">{text}</h2> : label ? <div className="discount-tag bg-green p-5-10">
        {text}
      </div> : <p>{text}</p>
    )
}

export default Title;