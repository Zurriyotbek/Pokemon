// Getting HTML Elemnts
const cardGroup = document.querySelector(".content-cards__group");
const contentTopHeader = document.querySelector(".content-top__header");

// Sorting object of an Array
const sortArray = (array) => {
    // Loop through 'Array' and show object properties of array on 'cards' in HTML
    for (let key of array) {
        // Content top header
        contentTopHeader.textContent = `Choose your character among: ${array.length} `;

        // CREATE NEW ELEMENTS

        //////// Card ////////
        const card = document.createElement("div");
        card.setAttribute("class", "content-card card align-items-center"); // class attribute
        cardGroup.appendChild(card); // add 'card' inside 'card group'

        // img inside card
        const cardImg = document.createElement("img");
        cardImg.setAttribute("class", "content-card-img card-img-top"); // set class attribute
        cardImg.setAttribute("src", key.img); // set src attribute
        cardImg.setAttribute("alt", key.candy); //set alt attribute
        card.appendChild(cardImg); // add img inside card as direct child

        //// Card body ////

        // card body div element
        const cardBody = document.createElement("div");
        cardBody.setAttribute(
            "class",
            "content-card-body card-body w-100 p-0 pt-3"
        ); // set class atribute
        card.appendChild(cardBody); // add 'card body' inside card as direct child

        // card body content top //

        const cardBodyTop = document.createElement("div");
        cardBodyTop.setAttribute(
            "class",
            "content-card__body-content-top d-flex justify-content-between mb-4"
        ); // set class attribute
        cardBody.appendChild(cardBodyTop); // add 'card body top' div as the child of 'card body' div

        // card body content top left list
        const cardBodyTopLeftList = document.createElement("div");
        cardBodyTopLeftList.setAttribute("class", "content-card__body-list-left"); //set class attribute
        cardBodyTop.appendChild(cardBodyTopLeftList); // child of card body top

        // card header
        const cardBodyHeader = document.createElement("h2");
        cardBodyHeader.setAttribute("class", "content-card-header m-0 mb-2"); //set class attribute
        cardBodyTopLeftList.appendChild(cardBodyHeader); // add h2 tag inside 'card body left list'

        // card text
        const cardBodyText = document.createElement("p");
        cardBodyText.setAttribute("class", "conten-card__body-text card-text");
        cardBodyTopLeftList.appendChild(cardBodyText); // add p tag inside 'card body left list'

        // card body heart icon
        const cardBodyHeartIcon = document.createElement("a");
        cardBodyHeartIcon.setAttribute("href", "#");
        cardBodyHeartIcon.setAttribute("class", "content-card__body-right");
        cardBodyTop.appendChild(cardBodyHeartIcon); // add a tag inside 'card body top content'

        // card body heart icon img
        const cardBodyHeartIconImg = document.createElement("img");
        cardBodyHeartIconImg.setAttribute("src", "/images/heart.svg");
        cardBodyHeartIconImg.setAttribute("class", "content-card__body-right-img");
        cardBodyHeartIcon.appendChild(cardBodyHeartIconImg); // child of 'heart icon' inside card body

        // card body content bottom //

        const cardBodyBottom = document.createElement("div");
        cardBodyBottom.setAttribute(
            "class",
            "content-card__body-content-bottom d-flex"
        ); // set class attribute
        cardBody.appendChild(cardBodyBottom); // add child of card body

        // card body bottom text weight
        const cardBodyBottomTextWeight = document.createElement("p");
        cardBodyBottomTextWeight.setAttribute(
            "class",
            "body-content-bottom__text me-3"
        ); // set class attribute
        cardBodyBottom.appendChild(cardBodyBottomTextWeight); // add as the child of 'card body bottom'

        // card body bottom text age
        const cardBodyBottomTextAge = document.createElement("p");
        cardBodyBottomTextAge.setAttribute(
            "class",
            "body-content-bottom__text me-5"
        ); // set class attribute
        cardBodyBottom.appendChild(cardBodyBottomTextAge); // add as the child of 'card body bottom'

        /////////// TEXT CONTENT OF NEW ELEMENTS ///////////////

        // card header
        cardBodyHeader.textContent = key.name;

        // card text
        cardBodyText.textContent = key.candy;

        // card wheight
        cardBodyBottomTextWeight.textContent = key.weight;

        // card age
        cardBodyBottomTextAge.textContent = key.height;
    }
};

sortArray(pokemons);