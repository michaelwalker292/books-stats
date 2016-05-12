'use strict'

var Books = React.createClass(
  {
    handleClick: function(){

      var book = {
        name: this.refs.name.value,
        email: this.refs.price.value,
      }

      return $.post('/books', book, function(result) {
        console.log(result)
        $(window.location).attr('href', '/');
      }.bind(this))
    },
    render: function(){
      return (
        <div>
          <form>
          <label for='name'>Name</label>
          <input type='text' name='name' id='name' ref='name'/>
          <label for='price'>Price</label>
          <input type='text' name='price' id='price' ref='price'/>
          <button onClick={this.handleClick}>Add Book</button>
          </form>
        </div>
      )
    }
  }
)

ReactDOM.render(<Books />, document.getElementById('entry-point'))
