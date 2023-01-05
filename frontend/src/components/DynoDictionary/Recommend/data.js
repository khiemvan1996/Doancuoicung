import wordApi from 'apis/wordApi';
import WordDetailModal from 'components/UI/WordDetailModal';
import { useEffect, useState } from 'react';
import RecommendWord from '.';
import React from 'react';

function RecommendWordData() {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  // get favorite list
  useEffect(() => {
    let isSub = true;

    (async function () {
      try {
        setLoading(true);
        const apiRes = await wordApi.getRecommendWord();
        if (apiRes.status === 200 && isSub) {
          const similarDocuments = apiRes.data.similarDocuments;
          setList(similarDocuments);
        }
      } catch (error) {
      } finally {
        if (isSub) {
          setLoading(false);
          isFirstLoad && setIsFirstLoad(false);
        }
      }
    })();

    return () => (isSub = false);
  }, []);
  return (
    <>
      <RecommendWord list={list} loading={loading} isFirstLoad={isFirstLoad} />
      <WordDetailModal />
    </>
  );
}
export default RecommendWordData;
