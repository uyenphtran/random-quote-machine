const quotes = [
    {quote : "Whenever I'm sad, I stop being sad and be awesome instead.", author : "Barney Stinson", color : "#ADBEE6"},
    {quote : "It's just, eventually, we're all gonna move on. It's called growing up.", author : "Lily Aldrin", color : "#CBAACB"},
    {quote : "The future is scary, but you can't just run back to the past because it's familiar. Yes, it's tempting, but it's a mistake.", author :"Robin Scherbatsky", color : "#F3B0C3"},
    {quote : "Because sometimes even if you know how something's gonna end, that doesn't mean you can't enjoy the ride.", author :"Ted Mosby", color : "#C6DBDA"},
    {quote : "That's life, you know. We never end up where you thought you wanted to be.", author :"Marshall Eriksen", color : "#ECD5E3"},
    {quote : "A lie is just a great story that someone ruined with the truth.", author :"Barney Stinson", color : "#FFC5BF"},
    {quote : "I finally found the one, Marshall. Her name is Bacon.", author :"Ted Mosby", color : "#B6CFB6"},
    {quote : "Believe it or not, I was not always as awesome as I am today.", author :"Barney Stinson", color : "#8FCACA"},
    {quote : "Oprah wasn't built in a day.", author :"Lily Aldrin", color : "#7A4D4A"}, 
    {quote : "If you keep giving up on people so quickly, you're gonna miss out on something great.", author :"Robin Scherbatsky", color : "#FFDBCC"}
  ];

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            quote : quotes[0].quote,
            author : quotes[0].author,
            color : quotes[0].color
        }
        this.getNewQuote = this.getNewQuote.bind(this);
    }
    getNewQuote = () => {
        this.setState(state => {
            const randomIndex = Math.floor(Math.random() * 9);
            return {
                quote: quotes[randomIndex].quote,
                author : quotes[randomIndex].author,
                color : quotes[randomIndex].color
            }
        })
        
    };

    render () {
        return (
            <div style={{backgroundColor :  this.state.color, minHeight : "100vh"}}>
                <div className="container pt-5" id="quote-box" style={{width: 800}}>
                    <div className="text-center align-items-center">
                        <div className="card">
                            <div className="card-body">
                                <p id="text" className="display-3" style={{color: this.state.color}}>
                                    <i class="fa-solid fa-quote-left px-2"></i>
                                    {this.state.quote}
                                </p>
                                <p id="author" className="display-6" style={{color: this.state.color}}>- {this.state.author}</p>
                                <div className="d-flex justify-content-between">
                                    <a className="btn btn-lg" id="tweet-quote" href={"https:twitter.com/intent/tweet?text="+this.state.quote+' - '+this.state.author} 
                                    target="_blank" style={{color: this.state.color}}>
                                        <i className="fa-brands fa-twitter"></i>
                                    </a>
                                    <button id="new-quote" className="btn ml-3 btn-lg" onClick={this.getNewQuote} style={{color: this.state.color}}>new quote</button>            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
