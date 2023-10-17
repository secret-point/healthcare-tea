import { useCallback, useEffect, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { OnProgressData } from 'react-native-video';
import { delay } from 'lodash';
import {
  IArticle,
  IDetailContent,
  ISummaryArticle,
} from '~Root/services/article/types';
import { useDebounce } from '~Root/config/hooks';
import { articles } from '~Root/screens/Exercise/partial/ListSection';
import { IPaginate } from '~Root/config/types';

const findArticle = (articleId: number): IArticle | undefined =>
  articles.find(article => article.id === articleId);

export const useArticleDetail = (articleId: number) => {
  const result = {
    isSuccess: true,
    data: findArticle(articleId) as IArticle,
    isLoading: false,
  };

  const progressRef = useRef<number | null>(null);

  const [lastScroll, setLastScroll] = useState(0);
  const [lastProgressVideo, setLastProgressVideo] = useState(0);

  const lastScrollDebounce = useDebounce((position: number) => {
    setLastScroll(position);
  }, 300);

  useEffect(() => {
    return () => {
      clearProgress();
    };
  }, []);

  useEffect(() => {
    console.log(`Call API Last scroll: ${lastScroll}`);
  }, [lastScroll]);

  useEffect(() => {
    console.log(`Call API last progress video: ${lastProgressVideo}%`);
  }, [lastProgressVideo]);

  const clearProgress = () => {
    if (!progressRef.current) {
      return;
    }

    clearTimeout(progressRef.current);
    progressRef.current = null;
  };

  const onScroll = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      lastScrollDebounce.current(e.nativeEvent.contentOffset.y);
    },
    [lastScrollDebounce],
  );

  const onProgressVideo = useCallback(
    ({ currentTime, seekableDuration }: OnProgressData) => {
      if (progressRef.current) {
        return;
      }

      progressRef.current = delay(clearProgress, 2000);
      setLastProgressVideo(Math.ceil((currentTime * 100) / seekableDuration));
    },
    [],
  );

  return {
    result,
    onScroll,
    onProgressVideo,
  };
};

export const useContentTopic = ({
  topicId,
  onFailed,
}: {
  topicId: string;
  onFailed?: () => void;
}) => {
  const { data: summaryArticle } = useQuery<IPaginate<ISummaryArticle>>({
    queryKey: [`/content/topic/${topicId}/published?page=1&size=1`],
    onSuccess: ({ data }) => {
      if (!onFailed) {
        return;
      }

      if (data.length > 0) {
        return;
      }

      onFailed();
    },
    onError: () => {
      onFailed && onFailed();
    },
  });

  const articleId = summaryArticle?.data?.[0]?.id;

  const result = useQuery<IDetailContent>({
    queryKey: [`/content/${articleId}`],
    enabled: !!articleId,
    onError: () => {
      onFailed && onFailed();
    },
  });

  return {
    result,
  };
};
