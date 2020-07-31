import React from 'react';
import './App.css';

function Reviews() {
    // mempersiapkan data dummy JSON
    const users = [
        {
            "id": 1,
            "name": "Masayoshi",
            "review": "Harganya murah tapi kualitas bukan kaleng-kaleng nih. Keren.",
            "photo": "https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        },
        {
            "id": 2,
            "name": "Shayna",
            "review": "Harganya murah tapi kualitas bukan kaleng-kaleng nih. Keren.",
            "photo": "https://images.pexels.com/photos/764529/pexels-photo-764529.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=300"
        },
        {
            "id": 3,
            "name": "Alqowy",
            "review": "Harganya murah tapi kualitas bukan kaleng-kaleng nih. Keren.",
            "photo": "https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
    ];
    const listReview = users.map((itemReview) =>
        <div key="{itemReview.id}" className="Item">
            <img src={itemReview.photo} />
            <div className="User">
                <h3>{itemReview.name}</h3>
                <p>{itemReview.review}</p>
            </div>
        </div>
    );
    return (
        <div className="Review-box">
            <h2>Reviews</h2>
            {listReview}
        </div>
    );
}

export default Reviews;
