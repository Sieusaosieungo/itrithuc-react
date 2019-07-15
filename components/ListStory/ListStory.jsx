import React, { Component } from 'react';
import Link from 'next/link';
import ListStoryStyle from './ListStory.style';
import data from '../../containers/TruyenNoi/config.json';

class ListStory extends Component {
  state = {
    stories: data,
  };

  render() {
    const { stories } = this.state;
    const book = stories.map(story => (
      <div className="item" key={story.id}>
        <Link
          href={`/truyen-noi?id=${story.id}`}
          as={`/truyen-noi/${story.id}`}
        >
          <a>
            <img src={story.src} alt={story.book} />
          </a>
        </Link>
        <div className="info-book">
          <div className="title">{story.book}</div>
          <div className="author">
            <i>{story.author}</i>
          </div>
        </div>
      </div>
    ));
    return (
      <ListStoryStyle>
        <div className="containe">
          <div className="title">
            <h3>TRUYỆN NÓI</h3>
          </div>
          <div className="book">{book}</div>
        </div>
      </ListStoryStyle>
    );
  }
}

export default ListStory;
