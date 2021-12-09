import './App.css';
import React from 'react';
import axios from 'axios';

// import words from "./words";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            out_sentences: [],
            words: [],
            sentences: [],
            sentence: "Insert words in area and press right",
            mistakes: new Set(),
            show_mistakes: false,
            update_words: true,
        };
    }

    update_words = (words) => {
        const words_arr = words.split('\n').filter(el => {
            return el != null && el !== '';
        });

        this.state.out_sentences.length = 0;
        this.state.mistakes = new Set();

        const data = {"words": words_arr, "sentences": words_arr}

        this.setState(data)
        console.log(words_arr)
        // axios.post(`http://127.0.0.1:8000/api`, data)
        //     .then(res => {
        //         this.setState({"sentences": res.data.sentences})
        //     })
    }

    show_another_word = () => {
        let sents = this.state.sentences.filter(el => {
            return !this.state.out_sentences.includes(el)
        });


        if (sents.length === 0) {
            console.log(sents.length)
            sents = this.state.sentences
            this.state.out_sentences.length = 0;
        }

        const sent = sents[Math.floor(Math.random() * sents.length)];
        this.setState({
            sentence: sent,
            out_sentences: [...this.state.out_sentences, sent],
        })
    }

    number_of_rest_words = () => {
        return this.state.sentences.length - this.state.out_sentences.length
    }

    add_mistakes = () => {
        console.log(this.state.mistakes)
        this.setState({
            mistakes: new Set([...this.state.mistakes, this.state.sentence])
        })
        this.show_another_word()
    }


    render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="menu">
                        <p className="small float-left">
                            Number of words: {this.number_of_rest_words()}
                        </p>
                        <p className="small float-right">
                            Number of mistakes: {this.state.mistakes.size}
                        </p>
                        <div className="py-4 h5" dangerouslySetInnerHTML={{__html: this.state.sentence}}/>
                        <div
                            className="btn btn-danger"
                            onClick={this.add_mistakes}>
                            wrong
                        </div>
                        <div
                            className="btn btn-success"
                            onClick={this.show_another_word}>
                            right
                        </div>
                        <div className="btn btn-block btn-light"
                             onClick={() => {
                                 this.setState({update_words: !this.state.update_words})
                             }}>
                            words
                        </div>
                        <div className="btn btn-light btn-block"
                             onClick={
                                 () => this.setState(
                                     {
                                         show_mistakes: !this.state.show_mistakes
                                     }
                                 )
                             }>
                            mistakes
                        </div>
                    </div>
                </div>
                {
                    this.state.show_mistakes &&
                    <div className="bg-white m-4 p-4 text-dark text-left">
                        <h5>Mistakes:</h5>
                        <ul className="h6">
                            {[...this.state.mistakes].map(el => {
                                return <li key={el} dangerouslySetInnerHTML={{__html: el}}/>
                            })}
                        </ul>
                    </div>
                }
                {
                    this.state.update_words &&
                    <div className="form-group my-4">
                    <textarea className="p-2" name="words" rows="10" placeholder={"Your words:"}
                              value={this.state.words.join("\n") + "\n"}
                              onChange={
                                  event => this.update_words(event.target.value)
                              }/>
                    </div>
                }
            </div>
        );
    }
}

export default App;
