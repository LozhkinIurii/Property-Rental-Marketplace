import React from 'react'
import { useState, useEffect } from 'react'
import Offer from './Offer';

const OfferList = () => {
    const [newOffer, setNewOffer] = useState({id: '', type: '', area: '', price: '', rooms: ''});
    const [offerList, setOfferList] = useState([]);
    const [id, setId] = useState(0);
    const url = "http://localhost:5000/api/"

    useEffect(()=>{
        const fetchOffers = async()=>{
            const response = await fetch(url);
            const data = await response.json();
            setOfferList(data);
        }
        fetchOffers();
    }, []);

    const inputChanged = (event) =>{
        setNewOffer({...newOffer, id: id, [event.target.name]: event.target.value});
    }

    // const addOffer = async (event) => {
    //     event.preventDefault();
    //     if (newOffer.type && newOffer.area && newOffer.price && newOffer.rooms){
    //         if (isNaN(+newOffer.type) && !isNaN(+newOffer.area) && !isNaN(+newOffer.price) && Number.isInteger(+newOffer.rooms)){
    //             setOfferList([...offerList, newOffer])
    //             setNewOffer({...newOffer, type: '', area: '', price: '', rooms: ''})
    //         } else {
    //             alert("Make sure that the 'Accomodation type' is a text, 'Area' and 'Price' are numbers and 'Rooms' is integer.")
    //         }
    //     } else {
    //         alert("Please, fill all the fields.")
    //     }
    // }

    const addOffer = async (event) => {
        event.preventDefault();
        if (newOffer.type && newOffer.area && newOffer.price && newOffer.rooms) {
            if (isNaN(+newOffer.type) && !isNaN(+newOffer.area) && !isNaN(+newOffer.price) && Number.isInteger(+newOffer.rooms)) {
                try {
                    const response = await fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(newOffer),
                    });
                    if (response.ok) {
                        setOfferList([...offerList, newOffer]);
                        setNewOffer({ type: '', area: '', price: '', rooms: '' });
                    } else {
                        throw new Error('Error: ' + response.status);
                    }
                } catch (error) {
                    console.error(error);
                }
            } else {
                alert("Make sure that the 'Accommodation type' is text, 'Area' and 'Price' are numbers, and 'Rooms' is an integer.");
            }
        } else {
            alert("Please fill in all the fields.");
        }
    };

    const deleteOffer = async (id) => {
        setOfferList(offerList.filter((offer,index) => index !== id));
        try {
            const response = await fetch(url + id+1, {
                method: 'DELETE',
                headers:{
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok){
                console.log('Deleted successfully ' + id);
            } else {
                console.log('Error occured');
            }
        } catch(error) {
            console.error(error);
        }
    }

    const takeOffer = () => {

    }

    const planningScheme = () => {

    }

    const changeId = (id) => {
        setId(id);
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
            <Offer offerList={offerList} deleteOffer={deleteOffer} takeOffer={takeOffer} planningScheme={planningScheme} changeId={changeId}/>
        </div>
    )
}

export default OfferList