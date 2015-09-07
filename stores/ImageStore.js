/*
 * Module Dependecies
 */

import Reflux from 'reflux';
import $ from 'jquery';
import ImageActions from '../actions/ImageActions'

let ImageStore = Reflux.createStore({
  url: "https://api.flickr.com/services/feeds/photos_public.gne?format=json",
  listenables: [ImageActions],
  imagelist: [],
  init: function (){
    this.fetchList();
  },
  fetchList: function(){
    let tags = ['web', 'animation', 'cars', 'sports', 'react'];
    let randomTag = tags[Math.floor(Math.random() * tags.length)]
    $.ajax({
      url: this.url + `&tag=sports`,
      dataType: 'jsonp',
      jsonpCallback: 'jsonFlickrFeed',
      chache: false,
      context: this,
      success: function(data){
        console.log('fetch ok');
        this.imagelist = data.items;
        this.trigger(this.imagelist)
      }
    })
  }

});

export default ImageStore;
