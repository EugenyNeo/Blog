import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css'

import { Header, AddForm, FullPost, NotFound, Footer } from './node_modeles/components';
import { PostsList } from './node_modeles/modules';

class App extends Component {
  render() {
    return (
      <div>
        <Header
        title='Header site'
        description='Description'
        imageUrl='https://jssorcdn7.azureedge.net/demos/img/gallery/980x380/002.jpg'
        />
          <div className='container'>
              <div className='content'>
                  <h1>Latest list</h1>
                  <div className='content'>
                      <Router>
                         <div>
                             <Switch>
                                 <Route exact path='/' component={()=> <PostsList />}
                                 />
                                 <Route exact path='/post/:id' component={()=>(
                                     <FullPost title='Main article' createdAt={'' + new Date()}/>
                                 )} />
                                 <Route path='/post/:id/edit' exact component={AddForm} />
                                 <Route path='/' component={NotFound} />
                             </Switch>
                         </div>
                      </Router>
                  </div>
              </div>
          </div>
         <Footer
             title='Footer site'
             description='Description'
             />
      </div>
    );
  }
}

export default App;

