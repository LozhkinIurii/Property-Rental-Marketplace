import React from 'react'
import { useState, useEffect } from 'react'
import Offer from './Offer';

const OfferList = () => {
    const [newOffer, setNewOffer] = useState({id: '', type: '', area: '', price: '', rooms: ''});
    const [offerList, setOfferList] = useState([])

    useEffect(()=>{
        const fetchOffers = async()=>{
            let url = "http://localhost:5000/api/";
            const response = await fetch(url);
            const data = await response.json();
            setOfferList(data);
        }
        fetchOffers();
    }, []);

    const addOffer = async (event) => {
        await event.preventDefault();
        if (newOffer.type && newOffer.area && newOffer.price && newOffer.rooms){
            setOfferList([...offerList, newOffer])
            setNewOffer({...newOffer, type: '', area: '', price: '', rooms: ''})
        } else {
            alert("Please, fill all the fields.")
        }
    }

    const deleteOffer = async(event) => {

    }


    const inputChanged = (event) =>{
        setNewOffer({...newOffer, [event.target.name]: event.target.value})
    }

    const takeOffer = () => {

    }

    return(
        <div className='offerList'>
            <h1>Offers to rent</h1>
            <form onSubmit={addOffer}>
                <input type="text" placeholder="Accomodation type" name='type' value={newOffer.type} onChange={inputChanged}></input>
                <input type='text' placeholder="Area" name='area' value={newOffer.area} onChange={inputChanged}></input>
                <input type='text' placeholder="Price per month in $" name='price' value={newOffer.price} onChange={inputChanged}></input>
                <input type='text' placeholder='Number of rooms' name='rooms' value={newOffer.rooms} onChange={inputChanged}></input>
                <input type='submit' value='Add offer'/>
            </form>
            <br/>
            <Offer offerList={offerList} addOffer={addOffer} deleteOffer={deleteOffer}/>
        </div>
    )
}

export default OfferList