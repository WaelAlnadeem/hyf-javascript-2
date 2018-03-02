let books = ["The_first_mind_adventure",
    "The_other_side_of_Christ",
    "Gilgamesh",
    "The_Mystery_of_Ishtar",
    "war_and_peace",
    "da_vinci_code",
    "Returning_to_Haifa",
    "Men_under_the_sun",
    "inferno",
    "Love_in_the_time_of_Cholera"
]

// console.log(books)
function generate() {
    let listOfBooks = document.createElement("ul")

    for (let i = 0; i < books.length; i++) {
        // console.log(books[i])
        let booksItems = document.createElement("li")
        booksItems.textContent = books[i]
        listOfBooks.appendChild(booksItems)

    };

    let body = document.getElementById("main")
    body.appendChild(listOfBooks)


    console.log(listOfBooks)

}
generate();
