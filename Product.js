
export default function Product(props){
    return(       
        <div>
           <h3>{props.pname}</h3>
           <h2>{props.price}</h2>  
            <hr/> 
        </div>
    );
}