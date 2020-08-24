import './Overview.scss';

import { Card, CardBody, CardTitle, Title, TitleSizes } from '@patternfly/react-core/dist/esm/components';

import React from 'react';
import messages from '../../Messages';
import routerParams from '@redhat-cloud-services/frontend-components-utilities/files/RouterParams';
import { useIntl } from 'react-intl';

const OverviewTab = () => {
    const intl = useIntl();

    const steps = [{
        title: intl.formatMessage(messages.insightsIsDesigned),
        body: intl.formatMessage(messages.insightsIsDesignedBody)
    }, {
        title: intl.formatMessage(messages.youControlWhat),
        body: intl.formatMessage(messages.youControlWhatBody)
    }, {
        title: intl.formatMessage(messages.dataIsEncrypted),
        body: intl.formatMessage(messages.dataIsEncryptedBody)
    }, {
        title: intl.formatMessage(messages.onlyOneUploaded),
        body: intl.formatMessage(messages.onlyOneUploadedBody)
    }];
    const cardBuilder = card => <Card className='ins-c-card'>
        <CardTitle>{card.title}</CardTitle>
        <CardBody>{card.body}</CardBody>
    </Card>;

    return <div className='ins-c-flex-center'>
        <Title headingLevel='h2' size={TitleSizes.lg} className='ins-c-title'>
            {intl.formatMessage(messages.dataPrivacy)}
        </Title>
        {steps.map(step => cardBuilder(step))}
    </div>;
};

export default routerParams(OverviewTab);
