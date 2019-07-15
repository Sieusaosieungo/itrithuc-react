import React, { Component } from 'react';
import ListStory from '../../components/ListStory/ListStory';
import DetailStory from '../../components/DetailStory/DetailStory';

class story extends Component {
  render() {
    const { id } = this.props;
    let content = null;
    if (!id) {
      content = <ListStory />;
    } else {
      content = <DetailStory id={id} />;
    }
    return content;
  }
}

export default story;
