
let MyBooksList = {
                     The_first_mind_adventure: { title: "The first mind adventure", language: "Arabic", author: "Firas Al Sawwah" } ,
                         The_other_side_of_Christ: { title: "The other side of Christ", language: "Arabic", author: "Firas Al Sawwah" },
                             Gilgamesh: { title: "Gilgamesh", language: "Arabic", author: "Firas Al Sawwah" },
                                 The_Mystery_of_Ishtar: { title: "The Mystery of Ishtar", language: "Arabic", author: "Firas Al Sawwah" },
                                      war_and_peace: { title: "war and peace", language: "Russian", author: "Leo Tolstoy" },
                                          da_vinci_code: { title: "da vinci code", language: "English", author: "Dan Brown" },
                                              Returning_to_Haifa: { title: "Returning to Haifa", language: "Arabic" , author: "Ghassan Kanafani" },
                                                  Men_under_the_sun: { title: "Men under the sun", language: "Arabic", author: "Ghassan Kanafani" },
                                                      inferno: { title: "inferno", language: "English", author: "Dan Brown" },
                                                          Love_in_the_time_of_Cholera: { title: "Love in the time of Cholera", language: "Spanish" , author: "Gabriel García Márquez" },
 
};
var MyBooksCover = {
                        The_first_mind_adventure: "http://www.mamnoo3ah.com/BookCover/8290d146cb994f1f80843fc6e51efd8a.jpg",
                            The_other_side_of_Christ: "https://images.gr-assets.com/books/1420126675l/6537163.jpg",
                                Gilgamesh: "http://www.mamnoo3ah.com/BookCover/03fda264aa43466dbbacd900fd7102c3.JPG",
                                    The_Mystery_of_Ishtar: "http://www.mamnoo3ah.com/BookCover/13377640bc904df8872231cb51e88503.jpg",
                                        war_and_peace: " https://quickbutik.imgix.net/3477F/products/5a21191d4b0e5.jpeg",
                                            da_vinci_code: " https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/DaVinciCode.jpg/220px-DaVinciCode.jpg",
                                                Returning_to_Haifa: "https://www.arabicbookshop.net/BookCovers/1-239.jpg",
                                                    Men_under_the_sun: "http://photo.elcinema.com.s3.amazonaws.com/uploads/_315x420_206c8994fb514d00801f5ae5518a79e0165d0622452803bcb2e98725ceb8d75a.jpg",
                                                        inferno: " https://images-na.ssl-images-amazon.com/images/I/71XSSvm0ANL.jpg",
                                                            Love_in_the_time_of_Cholera: "https://images-na.ssl-images-amazon.com/images/I/51LZnRCvpkL._SX323_BO1,204,203,200_.jpg"
}
 
function generateOne() {

    for (var i in MyBooksList) {
        let book = MyBooksList[i]
        document.getElementById("main")
        let booksDetails = document.createElement("ul")
        main.appendChild(booksDetails)
        booksDetails.className= "details"
        
        for (data in book) {
            
            if (data !== "title"){
                var list = document.createElement("li")
                list.classList.add("list")
               

            } else {
                var list = document.createElement("h2")
                list.classList.add("head") 
               
            } 
            list.textContent = book[data]
            booksDetails.appendChild(list)
           
        } 
        var img = document.createElement("IMG")
        img.setAttribute("src", MyBooksCover[i])
        img.setAttribute("alt", i)
        img.setAttribute("class", "Img")
        booksDetails.appendChild(img)
    }

}
generateOne();




