import React from 'react';
import { ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';

import { GlobalStyles } from '~Root/config/styles';
import { Header } from '~Root/components';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';
import HtmlView from '~Root/components/HtmlView';
import { goBack } from '~Root/navigation';

const MyJournalDetailScreen = () => {
  const { t } = useTranslation();

  return (
    <SafeAreaLayout>
      <Header
        onBackPress={goBack}
        isBack={true}
        title={t('my_journal')}
        isRightIcon
        containerHeaderStyle={GlobalStyles.bgTransparent}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={GlobalStyles.p15}>
        <HtmlView
          html={
            '<h4>At vero eos et accusamus et iusto odio dign...</h4><p>Today, 14:35</p><p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat</p>'
          }
        />
      </ScrollView>
    </SafeAreaLayout>
  );
};

export default MyJournalDetailScreen;
