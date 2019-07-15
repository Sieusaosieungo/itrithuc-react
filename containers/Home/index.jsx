import React from 'react';
import Link from 'next/link';
import HomeStyle from './index.style';
import routes from '../App/routes';

class Home extends React.Component {
  render() {
    return (
      <HomeStyle>
        <div className="title">
          <h3>CÔNG NGHỆ TIẾNG NÓI TIẾNG VIỆT</h3>
          <h4>Dành cho cộng đồng sử dụng miễn phí</h4>
        </div>
        <div className="home-content">
          <div className="home-content-item">
            <img
              src="/static/images/media/microphone.92c4d63a.png"
              alt="microphone"
            />
            <div className="introduce-content">
              <h4>
                <a href="https://voiceviet.itrithuc.vn">Voice Việt</a>
              </h4>
              <p>
                Kho dữ liệu tiếng nói tiếng Việt dùng chung cho cộng đồng. Kho
                dữ liệu được đóng góp bởi các Cơ quan Nhà nước, tổ chức, doanh
                nghiệp và mỗi người dân. Bất kỳ ai cũng có thể tiếp cận kho dữ
                liệu để giải quyết các nhu cầu của mình.
              </p>
            </div>
          </div>

          <div className="home-content-item">
            <img
              src="/static/images/media/vbee.fc9f8c12.jpg"
              alt="text-to-speech"
            />
            <div className="introduce-content">
              <h4>
                <Link href={routes.textToSpeech}>
                  <a>Text-To-Speech</a>
                </Link>
              </h4>
              <p>
                Text-To-Speech là công nghệ chuyển đổi tự động từ văn bản thành
                tiếng nói. Text-To-Speech được ứng dụng trên rất nhiều lĩnh vực:
                dịch vụ tổng đài tự động, hệ thống thông báo tự động trên các
                dịch vụ công cộng (ngân hàng, bệnh viện, ...), chuyển sách/báo
                văn bản thành sách/báo nói, giao tiếp người máy, nhà thông minh,
                thuyết minh phim tự động, ...
              </p>
            </div>
          </div>
          <div className="home-content-item">
            <img
              src="/static/images/media/speech-to-text.52be9730.png"
              alt="speech-to-text"
            />
            <div className="introduce-content">
              <h4>
                <Link href={routes.speechToText}>
                  <a>Speech-To-Text</a>
                </Link>
              </h4>
              <p>
                Speech-To-Text là công nghệ chuyển đổi từ tiếng nói sang văn
                bản. Speech-To-Text được ứng dụng trong các lĩnh vực như tạo phụ
                đề cho video, nhập liệu bằng tiếng nói, giao tiếp người máy, nhà
                thông minh...
              </p>
            </div>
          </div>
          <div className="home-content-item">
            <img src="/static/images/media/mars.svg" alt="mars" />
            <div className="introduce-content">
              <h4>
                <Link href={routes.troLyAo}>
                  <a>Trợ lý ảo</a>
                </Link>
              </h4>
              <p>
                Trợ lý ảo là một tác tử phần mềm có khả năng tương tác với con
                người bằng tiếng nói. Con người có thể ra lệnh để điều khiển ứng
                dụng, điều khiển thiết bị... bằng tiếng nói, hoặc hỏi đáp, trò
                chuyện với Trợ lý ảo.
              </p>
            </div>
          </div>
        </div>
        <div className="title-main-member">
          <h3>THÀNH VIÊN CHÍNH</h3>
        </div>
        <div className="logos">
          <div>
            <img src="/static/images/main-member/VwcFwJ1yNfhuXOmV.png" alt="" />
          </div>
          <div>
            <img src="/static/images/main-member/kwwE9vRgvKnp2f80.png" alt="" />
          </div>
          <div>
            <img src="/static/images/main-member/WaJb99iJg13IBIom.png" alt="" />
          </div>
          <div>
            <img src="/static/images/main-member/aeT3FSMbhClD5Lmx.png" alt="" />
          </div>
        </div>
      </HomeStyle>
    );
  }
}

export default Home;
