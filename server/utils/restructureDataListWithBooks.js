
const restructureDataListWithBooks = (result) => {
  // we're getting all the data but not ordered
  //with reduce we transform the objects to get what we need
  //acc refers to the new array we're getting
  //current is what we already received
  return  lists = result.reduce((acc, curr) => {
    //with find we're looking in the new array if we already have an id_list if not go straight back to the else
    let existingLists =  acc.find( list => { return list.id_list === curr.id_list })
    if ( existingLists ) {
      //we're pushing into the books array to add a book since the objects//with the id-list il already exisiting
      existingLists.books.push({
        id_book: curr.id_book,
        name_book: curr.name_book,
        author_book: curr.author_book,
        year_book: curr.year_book,
        description_book: curr.description_book,
        picture_path_book: curr.picture_path_book
      })
    } else {
      //in the else we're push into the array the global data with the first book we loop into
      acc.push({
        id_list: curr.id_list,
        name_list: curr.name_list,
        description_list: curr.description_list,
        user_id: curr.user_id,
        username: curr.username,
        books: [{
          id_book: curr.id_book,
          name_book: curr.name_book,
          author_book: curr.author_book,
          year_book: curr.year_book,
          description_book: curr.description_book,
          picture_path_book: curr.picture_path_book
        }]
      })
    }
   return acc;
   //the empty array below is the new array we're going to fill in
  }, [])
}

module.exports = {
  restructureDataListWithBooks
}
