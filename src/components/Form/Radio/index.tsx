import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';
import React, { ReactElement } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import createStyles from './styles';
import { GlobalStyles } from '~Root/config';
import { Paragraph } from '~Root/components';
import { useAppTheme } from '~Root/services/theme/hook';

interface Props {
  name?: string | null;
  styleContainer?: StyleProp<ViewStyle>;
  selected?: boolean;
  onSelect?: () => void;
  children?: ReactElement;
  customIcon?: (selected: boolean) => ReactElement;
}

const Radio: React.FC<Props> = ({
  name,
  styleContainer = {},
  selected = false,
  customIcon,
  onSelect = () => {},
  children,
}) => {
  const { theme } = useAppTheme();
  const styles = createStyles(theme);
  return (
    <TouchableOpacity
      style={[
        GlobalStyles.rounded,
        GlobalStyles.pv15,
        GlobalStyles.ph10,
        GlobalStyles.justifyCenter,
        selected && styles.radioContainer,
        styleContainer,
      ]}
      onPress={onSelect}>
      <View style={[GlobalStyles.flexRow, GlobalStyles.itemsCenter]}>
        {customIcon ? (
          customIcon(selected)
        ) : (
          <View
            style={[
              GlobalStyles.mr15,
              GlobalStyles.itemsCenter,
              GlobalStyles.justifyCenter,
              selected ? styles.circleSelected : styles.circle,
            ]}>
            {selected && (
              <Icon
                name="checkmark-outline"
                size={20}
                color={theme.extra1Color}
              />
            )}
          </View>
        )}

        {name && <Paragraph textWhite regular h5 title={name} />}
        {children}
      </View>
    </TouchableOpacity>
  );
};

export default Radio;
