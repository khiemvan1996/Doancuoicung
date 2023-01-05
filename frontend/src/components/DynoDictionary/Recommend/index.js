import PropTypes from 'prop-types';
import DynoDictionaryItemData from '../Item/data';
import DynoDictionarySkeleton from '../Skeleton';
import useStyle from '../style';
import React from 'react';

function RecommendWord({ list, isFirstLoad }) {
  const classes = useStyle();

  return (
    <div className={`${classes.root} dyno-container`}>
      {/* title - menu */}
      <div className="flex-center-between">
        <h1 className="dyno-title">Từ vựng hôm nay</h1>
      </div>
      <div className="dyno-break"></div>

      {/* list content */}
      <div className={classes.contentWrap}>
        <div className={`${classes.listWrap} w-100`}>
          <ul id="dictionaryId" className={`${classes.list} flex-col w-100`}>
            <>
              {isFirstLoad ? (
                <DynoDictionarySkeleton className={classes.skeleton} />
              ) : (
                <>
                  {list && list.length > 0 ? (
                    <>
                      {/* render list */}
                      {list.map((item, index) => (
                        <li className={classes.listItem} key={index}>
                          <DynoDictionaryItemData {...item} />
                        </li>
                      ))}
                    </>
                  ) : (
                    // empty list
                    <h3 className="notfound-title h-100 flex-center t-center">
                      Hiện tại chưa có từ vựng mới, hãy quay lại vào lúc khác
                      nhé 😉
                    </h3>
                  )}
                </>
              )}
            </>
          </ul>
        </div>
      </div>
    </div>
  );
}

RecommendWord.propTypes = {
  isFirstLoad: PropTypes.bool,
  list: PropTypes.array,
};

RecommendWord.defaultProps = {
  list: [],
  loading: false,
};

export default RecommendWord;
