'use strict'

var Book = React.createClass({
  render: function(){
    return (
      <tr><td>{this.props.book}</td></tr>
    )
  }
})


var Home = React.createClass(
{
    getInitialState: function() {
      return {
        data: []
      }
    },
    componentDidMount: function() {
      $.ajax({
       url: '/bookslist',
       dataType: 'json',
       cache: false,
       success: function(data) {
         this.setState({data: data});
       }.bind(this),
       error: function(xhr, status, err) {
         console.error(this.props.url, status, err.toString());
       }.bind(this)
      });
    },
    handleClick: function() {
      $(window.location).attr('href', '/books');
    },
    render: function() {

      var books = this.state.data.map(function(book, index) {
        return <Book book={book.name} key={index} />
      })

      return (

        <div>
          <table>
            <tbody>
              {books}
            </tbody>
          </table>
          <button onClick={this.handleClick}>Add Book</button>
        </div>
      )
    }
  }
)

ReactDOM.render(<Home />, document.getElementById('entry-point'))
