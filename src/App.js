import React from 'react';
import Header from './Header'

class Accordion extends React.Component {
    render () {
      return (
        <div {...{ className: 'wrapper'}}>
          <ul {...{ className: 'accordion-list'}}>
            {data.map((data, key) => {
              return (
                <li {...{ className: 'accordion-list__item', key}}>
                  <AccordionItem {...data}/>
                </li>
              )
            })}
          </ul>
        </div>
      )
    }
}
class AccordionItem extends React.Component {
    state = {
      opened: false
    }
    
    render () {
      const {
        props: {
          text,
          a_title
        },
        state: {
          opened
        }
      } = this
      
      return (
        <div
          {...{
            className: `accordion-item, ${opened && 'accordion-item--opened'}`,
            onClick: () => { this.setState({ opened: !opened }) }
          }}
        >
          <div {...{ className: 'accordion-item__line' }}>
            <p id="titles-container">
              {this.state.articles.map(a => <p onClick={() => this.setState({text: a.text})}>{a_title}</p>)}
            </p>
          </div>
            <div {...{ className: 'accordion-item__inner' }}>
              <div {...{ className: 'accordion-item__content' }}>
                <p id="text-container">{this.state.text}</p>
              </div>
            </div>
        </div>
      )
    }
  }  
ReactDOM.render(<Accordion />);

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {articles: [], text: ''};
    }

    render() {
        return <div>
            <Header />
            <p id="titles-container">
                {this.state.articles.map(a => <p onClick={() => this.setState({text: a.text})}>{a_title}</p>)}
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
                    return { id: i++, title: a_title, text: a.content }
                })
                
                this.setState({articles: [...this.state.articles, ...apiArticles]});
                
                console.log(this.state.articles)
            })
        }
    }