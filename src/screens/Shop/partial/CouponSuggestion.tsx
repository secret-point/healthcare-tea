import React from 'react';
import { Paragraph, PrimaryToolBox } from '~Root/components';
import { GlobalStyles } from '~Root/config';

const CouponSuggestion = () => {
  return (
    <>
      <PrimaryToolBox containerStyle={GlobalStyles.mb20}>
        <Paragraph
          textWhite
          medium
          p
          title="“Use the code MINDFULNESS and get 15% discount for mindfulness products.”"
          style={[GlobalStyles.pt5, GlobalStyles.pb5]}
        />
      </PrimaryToolBox>
    </>
  );
};

export default CouponSuggestion;
