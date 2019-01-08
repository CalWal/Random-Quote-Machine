import React from "react";

class SimpsonsQuotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      character: "",
      image: "",
      isLoading: true
    };
    this.getRandomQuote = this.getRandomQuote.bind(this);
    this.tweetQuote = this.tweetQuote.bind(this);
  }

  getRandomQuote() {
    const quotes = [
      "They taste like...burning.",
      'Last night\'s "Itchy & Scratchy" was, without a doubt, the worst episode ever. Rest assured that I was on the Internet within minutes, registering my disgust throughout the world.',
      "Ha ha!",
      "By chilling my loins I increase the chances of impregnating my wife.",
      "Oh boy, sleep! That's where I'm a viking!",
      "Well, I'm better than dirt. Well, most kinds of dirt. I mean not that fancy store bought dirt. That stuffs loaded with nutrients. I.. I can't compete with that stuff.",
      "Shut up, brain. I got friends now. I don't need you anymore.",
      "Remember the time he ate my goldfish? And you lied and said I never had a goldfish. Then why did I have the bowl, Bart? Why did I have the bowl?",
      "And this is the snack holder where I can put my beverage or, if you will, cupcake.",
      "You're turning me into a criminal when all I want to be is a petty thug."
    ];

    const characters = [
      "Ralph Wiggum",
      "Comic Book Guy",
      "Nelson Muntz",
      "Apu Nahasapeemapetilon",
      "Ralph Wiggum",
      "Moe Szyslak",
      "Lisa Simpson",
      "Milhouse Van Houten",
      "Homer Simpson",
      "Bart Simpson"
    ];

    const images = [
      "https://frinkiac.com/img/S09E14/634333.jpg",
      "https://frinkiac.com/img/S08E14/944342.jpg",
      "https://frinkiac.com/img/S08E07/317516.jpg",
      "https://frinkiac.com/img/S11E07/226760.jpg",
      "https://frinkiac.com/img/S07E05/390923.jpg",
      "https://frinkiac.com/img/S07E12/147914.jpg",
      "https://frinkiac.com/img/S06E01/925441.jpg",
      "https://frinkiac.com/img/S08E20/716982.jpg",
      "https://frinkiac.com/img/S04E12/771404.jpg",
      "https://frinkiac.com/img/S06E07/912845.jpg"
    ];

    const randomNum = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomNum];
    const randomCharacter = characters[randomNum];
    const randomImage = images[randomNum];

    this.setState({
      quote: randomQuote,
      character: randomCharacter,
      image: randomImage,
      isLoading: false
    });
  }

  componentDidMount() {
    console.log("component mounted!");
    this.getRandomQuote();
  }

  tweetQuote() {}

  render() {
    let tweetURL =
      "https://twitter.com/intent/tweet?" +
      "hashtags=quotes&related=freecodecamp&text=" +
      encodeURIComponent('"' + this.state.quote + '" -' + this.state.character);
    if (this.state.isLoading) {
      return (
        <img src="https://66.media.tumblr.com/55c0c0c46dc12c76ce5128ee409147ca/tumblr_mopiw6K8ab1rgh9l8o1_500.gif" />
      );
    } else {
      return (
        <div>
          <h1>{this.state.quote}</h1>
          <h2>{this.state.character}</h2>
          <img src={this.state.image} />
          <button onClick={this.getRandomQuote}>Get Simpsons Quote</button>
          <button>
            <a id="tweetButton" href={tweetURL} target="_blank">
              Tweet Quote
            </a>
          </button>
        </div>
      );
    }
  }
}

export default SimpsonsQuotes;
