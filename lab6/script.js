'use strict';

const inner = document.querySelector('.inner');
const btn = document.querySelector('.button');

async function getResponse() {
    try {
        let response = await fetch('https://randomuser.me/api');
        
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }


        let data = await response.json();

        if (!data.results || data.results.length === 0) {
            throw new Error("No user data found");
        }
        createCards(data);

    } catch (error) {
        console.error("Error fetching user data:", error);

        inner.innerHTML = `<p class="error-message">Oops! Something went wrong. Please try again later.</p>`;
    }
}

function createCards(data) {
    const user = data.results[0];
    const card = `
        <div class="card">
            <div class="card_picture"><img src="${user.picture.large}" alt="User Picture"></div>
            <div class="card_cell">Cell: ${user.cell}</div>
            <div class="card_city">City: ${user.location.city}</div>
            <div class="card_country">Country: ${user.location.country}</div>
            <div class="card_postcode">Postcode: ${user.location.postcode}</div>
            <div class="card_email">Email: ${user.email}</div>
            <div class="card_phone">Phone: ${user.phone}</div>
            <div class="card_coordinates">
                Coordinates: ${user.location.coordinates.latitude}, ${user.location.coordinates.longitude}
            </div>
        </div>`;

    inner.insertAdjacentHTML('beforeend', card);
}


