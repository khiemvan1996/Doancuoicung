import RecommendWordData from 'components/DynoDictionary/Recommend/data';
import useCloseNavigation from 'hooks/useCloseNavigation';
import useTitle from 'hooks/useTitle';
import React from 'react';

function RecommendWordPage() {
  useTitle('Danh sách từ vựng yêu thích');
  useCloseNavigation();

  return <RecommendWordData />;
}

export default RecommendWordPage;
