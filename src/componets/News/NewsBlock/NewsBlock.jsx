import React from 'react';

import cn from 'classnames';

import { Preloader } from '../../common/Preloader/Preloader';
import { NewsArticle } from './NewsArticle/NewsArticle';

import style from './NewsBlock.module.scss';

const NewsBlock = ({ articles, viewMode }) => {
  let newsList = [];
  if (articles !== null) {
    newsList = articles.map((u, i) => (
      <NewsArticle
        key={i}
        photoUrl={u.urlToImage}
        title={u.title}
        description={u.description}
        publishedAt={u.publishedAt}
        link={u.url}
        authorName={u.source.name}
        viewMode={viewMode}
      />
    ));
  }
  return (
    <React.Fragment>
      {articles ? (
        <div className={style.newsBlock}>
          <ul
            className={cn(
              style.newsBlock__list,
              { [style.newsBlock__list_listMode]: viewMode === 'list' },
              { [style.newsBlock__list_tabletLargeMode]: viewMode === 'large' }
            )}>
            {newsList}
          </ul>
        </div>
      ) : (
        <Preloader className={style.newsBlock__preloader} />
      )}
    </React.Fragment>
  );
};

export { NewsBlock };