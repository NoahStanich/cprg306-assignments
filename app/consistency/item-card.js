export default function ItemCardComp({itemObj}){

    let {id, name:itemName, quantity, category} = itemObj;

    return(
        <div className="bg-blue-300 rounded-2xl p-4 mb-4 text-center sm:text-left">
            <div className="block sm:inline-block sm:align-middle">
                <h3 className="text-2xl">{itemName}</h3>
                <p>Quantity: {quantity}</p>
                <p>Category: {category}</p>
                <p>ID: {id}</p>
            </div>
        </div>
    );
}