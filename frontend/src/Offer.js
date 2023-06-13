const Offer = props => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>ID   </th>
                    <th>Accomodation type</th>
                    <th>Area</th>
                    <th>Price per month $</th>
                    <th>Number of rooms</th>
                </tr>
                {
                    props.offerList.map((offer, index)=>
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{offer.type}</td>
                        <td>{offer.area}</td>
                        <td>{offer.price}</td>
                        <td>{offer.rooms}</td>
                        <td><button id="rentbtn" onClick={props.takeOffer}>Rent it!</button><button id="planning">See planning scheme</button><button id="deletebtn" onClick={() => props.deleteOffer(index)}>Delete offer</button></td>
                    </tr>
                    )
                }
                {
                    props.changeId(props.offerList.length + 1)
                }
            </tbody>
        </table>
    )
}

export default Offer;