export default function Item({ name, quantity, category }){
    return(
        <div className="my-4">
            <ul>
                <li>{name}</li>
                <li>{quantity}</li>
                <li>{category}</li>
            </ul>
        </div>
    );
}