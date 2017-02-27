import React, {Component} from 'react';
import URLSearchParams from 'url-search-params'; // a polyfill for IE

const Home = () =>
  <div>
    <h1>Home</h1>

    {/* Demonstrate hash change via a link. */}
    <a href="#page1">Page 1</a>
    {' '}

    {/* Demonstrate hash change via code. */}
    <button onClick={() => location.hash = '#page2'}>Page 2</button>
  </div>;

const Page1 = () =>
  <div>
    <h1>Page 1</h1>
    <p>Use browser back button to return to home page.</p>
  </div>;

const Page2 = () =>
  <div>
    <h1>Page 2</h1>
    <a href="#">Home</a>
  </div>;

function getLocationParts() {
  return {
    hash: location.hash.substring(1),
    path: location.pathname,
    query: new URLSearchParams(location.search)
  };
}

class App extends Component {
  constructor() {
    super();
    window.addEventListener('hashchange', () => this.forceUpdate());
  }

  render() {
    // Can use hash, path, and query to decide what to render.
    const {hash, path, query} = getLocationParts();
    console.log('App.js: hash =', hash);
    console.log('App.js: path =', path);
    //console.log('App.js: has one? =', query.has('one'));
    console.log('App.js: one =', query.get('one'));

    return (
      <div className="App">
        {
          hash === 'page1' ? <Page1 /> :
          hash === 'page2' ? <Page2 /> :
          <Home />
        }
      </div>
    );
  }
}

export default App;
