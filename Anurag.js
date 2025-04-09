const Anurag=(props)=>{
    const {name,city}=props;
    const country="India";
    return(<div>
        <h1>
            Hi {name}
        </h1>
        <p>City:{city}</p>
        <p>I am From:{country}</p>
    </div>
    )
}
export default Anurag;