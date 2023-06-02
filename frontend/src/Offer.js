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
                        <td><button id="deletebtn" onClick={props.deleteOffer}>Delete offer</button><button id="rentbtn" onClick={props.takeOffer}>Rent it!</button></td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default Offer;