/*
 * Module dependencies
 */

import React from 'react';
import Reflux from 'reflux';
import ImageStore from '../stores/ImageStore';

let ImageGrid = React.createClass({
  mixins: [Reflux.connect(ImageStore, 'imagestore')],
  render: function(){
    if (this.state.imagestore) {
      return <div>
        {
          this.state.imagestore.map( (image) =>{
            <div className="image">
              <a href={image.link}>
                <img src={image.media.m}/>
              </a>
            </div>
          })
        }
      </div>
    }else {
      return <p> No existen imagenes disponibles</p>
    }
  }
});

export default ImageGrid;
