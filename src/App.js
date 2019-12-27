//API key 
//key=(`AIzaSyCOz5M6GtdVE0r-z1yQYkhvlZz-oRhnEq8`);
import React, { Component } from 'react';
import './App.css';

const APIkey ='AIzaSyCOz5M6GtdVE0r-z1yQYkhvlZz-oRhnEq8';
    
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listOfBooks : [],
      baseUrl: "https://www.googleapis.com/books/q={}={$APIkey}"
    }
  }

  updateListOfBooks = ( bookList ) => {
    const allBooks = bookList.message.map( bookUrl => {
      return {url : bookUrl}
    });
    console.log(allBooks);

    this.setState({
      listOfBooks: allBooks
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    event.target.books.value;
      //bookFilter: event.target.value
      //this.props.onChange(event.target.value)
    /*const bookType = event.target;//booktype.value
    const url = `https://www.googleapis.com/books/v1/volumes?q=flowers&filter={select}&key=AIzaSyCOz5M6GtdVE0r-z1yQYkhvlZz-oRhnEq8`;
    fetch( url )
      .then ( response => {
        if( response.ok) {
          return response.json();
        }

        throw new Error("Something Wrong");
        })
        .then( responseJSON => {
          console.log( responseJSON );
          
        })
        .catch( error => {
          console.log(error);
          this.setState({
            listOfBooks: []
          });
        });*/
  };

   displayResults = () => {
     console.log( "Length", this.state.listOfBooks.length )
     if( this.state.listOfBooks.length === 0){
       return (<li> No book found, try something else</li>);
       }
       else{
         return this.state.listOfBooks.map( (book, index ) => {
           return (<li key={index}>
                   </li> )
         })
       }
     };
   

  render(){
    return (
      <main className="App">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="filter">Filter for type of book</label>
          <input type="text" id="filter"
           />
           <select name="books">
             <option value="partial">partial</option>
             <option value="full">full</option>
             <option value="free-ebooks">free ebooks</option>
             <option value="paid-ebooks">paid-ebooks</option>
             <option value="ebooks">ebooks</option>
           </select>
           <button type="submit">
            submit
           </button>
           
        </form>

        <ul className="bookResults">
          {this.displayResults()}
        </ul>
      </main>
    );
   }
  }

export default App;
