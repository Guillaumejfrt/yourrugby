import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class CategorylList extends Component {
  handleClick = (category) => {
    this.props.selectCategory(category);
  }

  renderCategory = (category) => {
    return (
      <li
        key={category}
        className={category === this.props.selectedCategory ? 'active' : null}
        onClick={() => this.handleClick(category)}>
        #{category}
      </li>
    )
  }

  render() {
    return (
      <div className="categories-container">
        <span>Categories</span>
        <ul>
          {this.props.categories.map(this.renderCategory)}
        </ul>
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
  return bindActionCreators({ selectCategory }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
