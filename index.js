

async function fetchData() {
    try {
        let resp = await fetch(`https://gauravgitacc.github.io/postAppData/auctionData.json`);

        let data = await resp.json();

        displayData(data);
    } catch (error) {
        console.log(error);
    }
}

fetchData();

const cardsContainer = document.getElementsByClassName("cards-container")[0];

function displayData(list) {
    for (let i = 0; i < list.length; i++) {
        let card = list[i];
        let innerCard = `<div class="top">
        <div class="status">
            <b class="status-chip ${card.status.toLowerCase()}">${card.status
            }</b>
            <span class="case-number">${card.caseNumber}</span>
        </div>
        <span class="date">${card.date}</span>
    </div>
    <div class="bottom">
        <b class="from-location">${card.fromLocation}</b>
        <span class="to-location">${card.toLocation}</span>
    </div>
    <span class="price">${card.fare}</span>`;

    let cardContainer = document.createElement("div");
    cardContainer.className = 'card';
    cardContainer.innerHTML= innerCard;
    cardsContainer.append(cardContainer);
    }
}