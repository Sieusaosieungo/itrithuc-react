import React, { Component } from 'react';
import DetailStoryStyle from './DetailStory.style';
import PartContent from './PartContent/PartContent';
import Record from '../Record/Record';
import data from '../../containers/TruyenNoi/config.json';

class DetailStory extends Component {
  constructor() {
    super();
    this.audioPlayer = React.createRef();
    this.state = {
      book: {},
      chapterId: 0,
      isPlaying: null,
      indexPart: 0,
      displayContentChapter: false,
    };
  }

  componentDidMount() {
    const { id } = this.props;
    const idParsed = Number.parseInt(id, 10);
    const book = data.find(item => item.id === idParsed);
    this.setState({ book });
  }

  onToggleAudio = () => {
    const { chapterId, book, indexPart } = this.state;
    const { paragraphs } = book.chapters[chapterId - 1];
    this.setState(prevState => ({
      indexPart: prevState.indexPart + 1,
    }));

    if (indexPart < paragraphs.length - 1) {
      this.audioPlayer.current.src = paragraphs[indexPart + 1].link;
      this.audioPlayer.current.play();
    }

    if (indexPart === paragraphs.length - 1) {
      this.setState({ indexPart: 0 });
      this.audioPlayer.current.src = paragraphs[0].link;
      this.audioPlayer.current.pause();
    }
  };

  onSelectedChapter = id => {
    const { book, chapterId, displayContentChapter } = this.state;
    const chapterSelected = book.chapters.find(chapter => chapter.id === id);
    const isPlaying = chapterSelected.paragraphs[0].link;

    if (
      chapterId === 0 ||
      chapterId === id ||
      displayContentChapter === false
    ) {
      this.setState(prevState => ({
        displayContentChapter: !prevState.displayContentChapter,
      }));
    }
    this.setState({
      chapterId: id,
      isPlaying,
      indexPart: 0,
    });

    this.audioPlayer.current.src = chapterSelected.paragraphs[0].link;
    this.audioPlayer.current.play();
  };

  onClickParagraph = idParagraph => {
    const { book, chapterId, indexPart } = this.state;

    const paragraphClicked =
      book.chapters[chapterId - 1].paragraphs[idParagraph];
    if (indexPart !== idParagraph) {
      this.setState({ indexPart: idParagraph });
      this.audioPlayer.current.src = paragraphClicked.link;
      this.audioPlayer.current.play();
    }
  };

  pauseAudio = () => {
    this.audioPlayer.current.pause();
  };

  render() {
    const {
      book,
      isPlaying,
      chapterId,
      indexPart,
      displayContentChapter,
    } = this.state;

    if (this.audioPlayer.current && !displayContentChapter) {
      this.audioPlayer.current.src = null;
    }

    let chapters = null;
    if (book.chapters) {
      chapters = book.chapters.map(chapter => (
        <div key={chapter.title} className="chapters">
          <div className="chapter">
            <span
              onClick={() => this.onSelectedChapter(chapter.id)}
              className="chapter-title"
            >
              {chapter.title}
            </span>
          </div>

          {displayContentChapter && (
            <PartContent display={`${chapterId === chapter.id ? '' : 'hide'}`}>
              {chapter.paragraphs.map((paragraph, index) => (
                <div key={paragraph.link} className="section">
                  <p
                    onClick={() => this.onClickParagraph(index)}
                    className={`${
                      index === indexPart
                        ? 'highlight contentPart'
                        : 'contentPart'
                    }`}
                  >
                    {paragraph.content}
                  </p>
                  <Record clicked={this.pauseAudio} />
                </div>
              ))}
            </PartContent>
          )}
        </div>
      ));
    }

    return (
      <DetailStoryStyle>
        <div className="containe">
          <div className="content-left">
            <img src={book.src} alt={book.book} />
            <div className="title">{book.book}</div>
            <div className="author">
              <i>{book.author}</i>
            </div>
          </div>
          <div>
            <audio onEnded={this.onToggleAudio} controls ref={this.audioPlayer}>
              <source src={isPlaying} />
              <track kind="captions" />
            </audio>
            {chapters}
          </div>
        </div>
      </DetailStoryStyle>
    );
  }
}

export default DetailStory;
