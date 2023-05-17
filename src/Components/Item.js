import './Item.css'

function Item(props){
    const itemName= props.name;
return(
<p className="test">
    {itemName};
    {props.children}
    </p>)
}
export default Item;