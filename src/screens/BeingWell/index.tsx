import React from 'react';
import { useWindowDimensions } from 'react-native';
import { GlobalStyles } from '~Root/config/styles';
import PrimaryView from '~Root/components/View/PrimaryView';
import WheelOfFortune, { WheelItem } from '~Root/screens/BeingWell/Wheel';
import { useQuery } from '@tanstack/react-query';
import { IContent } from '~Root/services/article/types';
import { Loading } from '~Root/components';
import { goBack, navigate } from '~Root/navigation';
import { AppRoute } from '~Root/navigation/AppRoute';

const BeingWellScreen = () => {
  const { width } = useWindowDimensions();

  const {
    data: wheelData,
    isSuccess,
    isLoading,
  } = useQuery<{ data: IContent[] }>({
    queryKey: ['/content/topics/active/7-dimensions'],
    onSuccess: ({ data }) => {
      if (data.length > 0) {
        return;
      }

      goBack();
    },
  });

  const onFinish = (item: WheelItem) => {
    navigate(AppRoute.BEING_WELL_DETAIL, { name: item.label, id: item.value });
  };

  const wheels: WheelItem[] = isSuccess
    ? wheelData.data.map(i => ({ label: i.title, value: i.id }))
    : [];

  return (
    <PrimaryView
      style={[
        GlobalStyles.container,
        GlobalStyles.justifyCenter,
        GlobalStyles.itemsCenter,
      ]}>
      {isLoading ? (
        <Loading />
      ) : (
        isSuccess && (
          <WheelOfFortune
            items={wheels}
            size={width - 30}
            onFinish={onFinish}
          />
        )
      )}
    </PrimaryView>
  );
};

export default BeingWellScreen;
