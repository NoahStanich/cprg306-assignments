export default function Item({ itemObj }){

    let {id, name, quantity, category} = itemObj;

    return(
        <div className="my-4">
            <ul>
                <li>{id}</li>
                <li>{name}</li>
                <li>{quantity}</li>
                <li>{category}</li>
            </ul>
        </div>
    );
}