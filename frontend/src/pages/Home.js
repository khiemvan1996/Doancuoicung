import Grid from '@material-ui/core/Grid';
import communicateIcon from 'assets/icons/communicate.png';
import dictionaryIcon from 'assets/icons/dictionary.png';
import editIcon from 'assets/icons/edit.png';
import favoriteIcon from 'assets/icons/favorite.png';
import flashcardIcon from 'assets/icons/flashcard.png';
import friendsIcon from 'assets/icons/friends.png';
import gameIcon from 'assets/icons/game.png';
import grammarIcon from 'assets/icons/grammar.png';
import ipaIcon from 'assets/icons/ipa.png';
import likeIcon from 'assets/icons/like.png';
import toeicIcon from 'assets/icons/toeic.png';
import verbIcon from 'assets/icons/verb.png';
import medalIcon from 'assets/icons/medal.png';
import FeatureBox from 'components/FeatureBox';
import { ROUTES } from 'constant';
import useScrollTop from 'hooks/useScrollTop';
import useTitle from 'hooks/useTitle';
import React, { useEffect, useState } from 'react';
import ImagetoTextScreen from './ImageToText';
import { useSelector } from 'react-redux';
var FEATURE_LIST = [
  {
    title: 'Từ vựng hôm nay',
    subTitle: 'Tối đa 10 từ vựng dựa trên sở thích gần đây của bạn',
    imgUrl: likeIcon,
    to: ROUTES.RECOMMEND,
  },
  {
    title: 'Bảng phiên âm (IPA)',
    subTitle:
      'Luyện nghe, phát âm chuẩn với 44 âm trong bảng phiên âm quốc tế IPA',
    imgUrl: ipaIcon,
    to: ROUTES.IPA,
  },
  {
    title: '1000+ câu giao tiếp',
    subTitle: 'Luyện nghe, nói câu tiếng Anh giao tiếp hàng ngày cùng EK',
    imgUrl: communicateIcon,
    to: ROUTES.COMMUNICATION_PHRASE,
  },
  {
    title: 'Từ vựng với Flashcard',
    subTitle: 'Flashcard phương pháp học từ vựng nổi tiếng.',
    imgUrl: flashcardIcon,
    to: ROUTES.FLASHCARD,
  },
  {
    title: 'Từ điển',
    subTitle: 'Danh sách từ vựng được phân loại theo cấp độ, loại từ, ...',
    imgUrl: dictionaryIcon,
    to: ROUTES.DYNO_DICTIONARY,
  },
  {
    title: 'Từ vựng yêu thích của bạn',
    imgUrl: favoriteIcon,
    subTitle: 'Danh sách những từ vựng yêu thích mà bạn đã lưu',
    to: ROUTES.FAVORITE,
  },
  {
    title: 'Động từ bất quy tắc',
    imgUrl: verbIcon,
    subTitle: 'Tất cả những động từ bất quy tắc trong tiếng Anh',
    to: ROUTES.IRREGULAR,
  },
  {
    title: 'Ngữ pháp',
    imgUrl: grammarIcon,
    subTitle: 'Danh sách tổng hợp những cấu trúc câu trong tiếng Anh',
    to: ROUTES.GRAMMAR,
  },
  {
    title: 'Play Games',
    imgUrl: gameIcon,
    subTitle:
      'Ôn luyện kiến thức hiệu quả và đỡ nhàm chán hơn qua việc chơi game cùng EK nhé',
    to: ROUTES.GAMES.HOME,
  },
  {
    title: 'Chuyển ảnh sang văn bản',
    subTitle: 'ImagetoText',
    imgUrl: toeicIcon,
    to: ROUTES.TOEIC_DICTIONARY,
  },
  {
    title: 'Bảng xếp hạng',
    imgUrl: medalIcon,
    subTitle: 'Cùng xem thành tích của bạn bè và những người khác nhé',
    to: ROUTES.LEADERBOARD,
  },
  // {
  //   title: 'Chuyển ảnh sang văn bản',
  //   imgUrl: cameraIcon,
  //   subTitle:
  //     'EK sẽ giúp bản chuyển ảnh sang văn bản',
  //   to: ROUTES.IMAGETOTEXT,
  // },
];

var FEATURE_LIST_2 = [
  {
    title: 'Từ vựng hôm nay',
    subTitle: 'Tối đa 10 từ vựng dựa trên sở thích gần đây của bạn',
    imgUrl: likeIcon,
    to: ROUTES.RECOMMEND,
  },
  {
    title: 'Bảng phiên âm (IPA)',
    subTitle:
      'Luyện nghe, phát âm chuẩn với 44 âm trong bảng phiên âm quốc tế IPA',
    imgUrl: ipaIcon,
    to: ROUTES.IPA,
  },
  {
    title: '1000+ câu giao tiếp',
    subTitle: 'Luyện nghe, nói câu tiếng Anh giao tiếp hàng ngày cùng EK',
    imgUrl: communicateIcon,
    to: ROUTES.COMMUNICATION_PHRASE,
  },
  {
    title: 'Từ vựng với Flashcard',
    subTitle: 'Flashcard phương pháp học từ vựng nổi tiếng.',
    imgUrl: flashcardIcon,
    to: ROUTES.FLASHCARD,
  },
  {
    title: 'Từ điển',
    subTitle: 'Danh sách từ vựng được phân loại theo cấp độ, loại từ, ...',
    imgUrl: dictionaryIcon,
    to: ROUTES.DYNO_DICTIONARY,
  },
  {
    title: 'Từ vựng yêu thích của bạn',
    imgUrl: favoriteIcon,
    subTitle: 'Danh sách những từ vựng yêu thích mà bạn đã lưu',
    to: ROUTES.FAVORITE,
  },
  {
    title: 'Động từ bất quy tắc',
    imgUrl: verbIcon,
    subTitle: 'Tất cả những động từ bất quy tắc trong tiếng Anh',
    to: ROUTES.IRREGULAR,
  },
  {
    title: 'Ngữ pháp',
    imgUrl: grammarIcon,
    subTitle: 'Danh sách tổng hợp những cấu trúc câu trong tiếng Anh',
    to: ROUTES.GRAMMAR,
  },
  {
    title: 'Play Games',
    imgUrl: gameIcon,
    subTitle:
      'Ôn luyện kiến thức hiệu quả và đỡ nhàm chán hơn qua việc chơi game cùng EK nhé',
    to: ROUTES.GAMES.HOME,
  },
  {
    title: 'Chuyển ảnh sang văn bản',
    subTitle: 'ImagetoText',
    imgUrl: toeicIcon,
    to: ROUTES.TOEIC_DICTIONARY,
  },
  {
    title: 'Bảng xếp hạng',
    imgUrl: medalIcon,
    subTitle: 'Cùng xem thành tích của bạn bè và những người khác nhé',
    to: ROUTES.LEADERBOARD,
  },
  {
    title: 'Đóng góp',
    imgUrl: editIcon,
    subTitle:
      'EK rất mong được sự đóng góp của bạn. Bạn có thể thêm từ mới, sửa lỗi sai',
    to: ROUTES.CONTRIBUTION,
  },
];

function HomePage() {
  useTitle('EK - Ứng dụng học tiếng Anh miễn phí');
  useScrollTop();
  const currentUser = useSelector((state) => state.userInfo);

  return (
    <div className="container my-10">
      {/* <ImagetoTextScreen /> */}
      <Grid container spacing={3}>
        {currentUser.username.includes('khiemvan1996')
          ? FEATURE_LIST_2.map((box, index) => (
              <Grid item xs={12} md={12} lg={6} key={index}>
                <FeatureBox
                  imgUrl={box.imgUrl}
                  title={box.title}
                  to={box.to}
                  subTitle={box.subTitle}
                />
              </Grid>
            ))
          : FEATURE_LIST.map((box, index) => (
              <Grid item xs={12} md={12} lg={6} key={index}>
                <FeatureBox
                  imgUrl={box.imgUrl}
                  title={box.title}
                  to={box.to}
                  subTitle={box.subTitle}
                />
              </Grid>
            ))}
      </Grid>
    </div>
  );
}

export default HomePage;
