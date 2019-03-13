import React from 'react';
import Header from './Header'

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {articles: [], text: ''};
    }

    render() {
        return <div>
            <Header />
            <p id="titles-container">
                {this.state.articles.map(a => <p onClick={() => this.setState({text: a.text})}>{a.title}</p>)}
            </p>
            <p id="text-container">{this.state.text}</p>
        </div>;
    }

    componentDidMount() {
        fetch('http://localhost:3000/articles')
            .then(response => response.json())
            .then(data => {
                this.setState({articles: data});
            })

        fetch('https://newsapi.org/v2/top-headlines?country=se&pageSize=3&apiKey=959015783e8f49b888ae47b83bd191f0')
            .then(apiResponse => apiResponse.json())
            .then(apiArray => {
                let i = 4;
                let apiArticles = apiArray.articles.map(a => {
                    return { id: i++, title: a.title, text: a.content }
                })

                this.setState({articles: [...this.state.articles, ...apiArticles]});

                console.log(this.state.articles)
            })
    }
}