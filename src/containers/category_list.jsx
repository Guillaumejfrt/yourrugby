import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCategory } from '../actions/index';
import { fetchVideos } from '../actions/index';

import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyAFiXpwV4vRo-6uBny9fFnZTfRkqLrhmJI'

class CategoryList extends Component {
  handleClick = (category) => {
    this.props.selectCategory(category);
    this.youtubeSearch(category);
  }

  youtubeSearch = (word) => {
    YTSearch({ key: API_KEY, term: word }, (videos) => {
      this.props.fetchVideos(videos);
    });
  }

  renderCategory = (category) => {
    return (
      <p
        key={category}
        className={category === this.props.selectedCategory ? 'active' : null}
        onClick={() => this.handleClick(category)}>
        {category}
      </p>
    )
  }

  render() {
    return (
      <div className="categories-container">
        {this.props.categories.map(this.renderCategory)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories,
    selectedCategory: state.selectedCategory
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCategory, fetchVideos }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
