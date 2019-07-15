import React, { Component } from 'react';
import RecordStyle from './Record.style';

const audioType = 'audio/*';
class Record extends Component {
  constructor(props) {
    super(props);
    this.mediaRecorder = React.createRef();
    this.stream = React.createRef();
    this.audio = React.createRef();
    this.state = {
      recording: false, //
      streaming: false,
      audios: [],
    };
  }

  async componentWillUpdate(newProps, newState) {
    const { streaming } = this.state;
    if (newState.streaming && newState.streaming !== streaming) {
      if (navigator.mediaDevices) {
        this.stream.current = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });

        this.audio.current.play();
        this.mediaRecorder.current = await new MediaRecorder(
          this.stream.current,
        );
        this.chunks = [];
        this.mediaRecorder.current.ondataavailable = e => {
          if (e.data && e.data.size > 0) {
            this.chunks.push(e.data);
          }
        };
      }
    }
  }

  startRecording(e) {
    e.preventDefault();
    try {
      this.setState({ streaming: true });
      console.log('AUDIO', this.audio);
      setTimeout(() => {
        if (
          this.mediaRecorder.current &&
          this.mediaRecorder.current.state === 'inactive'
        ) {
          this.setState({ recording: true });
          console.log(this.mediaRecorder.current);

          this.mediaRecorder.current.start(10);
        }
        this.chunks = [];
      }, 500);
    } catch (error) {
      console.log(error);
    }
  }

  stopRecording(e) {
    e.preventDefault();
    console.log('AUDIO1', this.audio);
    this.mediaRecorder.current.stop();
    this.setState({ recording: false });
    this.saveAudio();
  }

  saveAudio() {
    const blob = new Blob(this.chunks, { type: audioType });
    const audioURL = window.URL.createObjectURL(blob);

    const { audios } = this.state;
    const updatedAudios = audios.concat([audioURL]);
    this.setState({ audios: updatedAudios });
  }

  render() {
    const { recording } = this.state;
    return (
      <RecordStyle colorRecord={recording}>
        <audio style={{ width: 400 }} ref={this.audio}>
          <track kind="captions" />
          <p>Audio stream not available. </p>
        </audio>
        <div>
          {!recording && (
            <button
              type="button"
              className="record"
              onClick={e => this.startRecording(e)}
            >
              <img src="/static/icons/baseline-mic-24px.svg" alt="" />
            </button>
          )}
          {recording && (
            <button
              type="button"
              className="record"
              onClick={e => this.stopRecording(e)}
            >
              <img src="/static/icons/recording.svg" alt="" />
            </button>
          )}
        </div>
      </RecordStyle>
    );
  }
}

export default Record;
