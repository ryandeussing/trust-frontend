/* eslint-disable max-len */
import CardCollection from '../CardCollection/CardCollection';
import React from 'react';
import { link } from '../Common';
import messages from '../../Messages';
import { useIntl } from 'react-intl';

const DataCollection = () => {
  const intl = useIntl();

  const protectionData = [
    {
      collectionTitle: intl.formatMessage(messages.insightsClientArchitecture),
      collectionDesc: intl.formatMessage(
        messages.insightsClientArchitectureBody
      ),
      cards: [
        {
          title: intl.formatMessage(messages.openSourceClientCode),
          body: intl.formatMessage(messages.openSourceClientCodeBody),
          footer: link(
            intl.formatMessage(messages.openSourceClientCodeFooter),
            'https://github.com/RedHatInsights/insights-client'
          ),
        },
        {
          title: intl.formatMessage(messages.minimalSystemMetadata),
          body: intl.formatMessage(messages.minimalSystemMetadataBody),
          footer: link(
            intl.formatMessage(messages.minimalSystemMetadataFooter),
            'https://access.redhat.com/articles/1598863'
          ),
        },
        {
          title: intl.formatMessage(messages.leverageExistingFirewallRules),
          body: intl.formatMessage(messages.leverageExistingFirewallRulesBody),
          footer: link(
            intl.formatMessage(messages.leverageExistingFirewallRulesFooter),
            'https://access.redhat.com/solutions/65300'
          ),
        },
        {
          title: intl.formatMessage(messages.encryptedCommunication),
          body: intl.formatMessage(messages.encryptedCommunicationBody),
        },
        {
          title: intl.formatMessage(messages.resourceRestrictions),
          body: intl.formatMessage(messages.resourceRestrictionsBody),
        },
      ],
    },
    {
      collectionTitle: intl.formatMessage(messages.insightsClientControls),
      collectionDesc: intl.formatMessage(messages.insightsClientControlsBody),
      cards: [
        {
          title: intl.formatMessage(messages.ipHostnameObf),
          body: intl.formatMessage(messages.ipHostnameObfBody),
          footer: link(
            intl.formatMessage(messages.ipHostnameObfFooter),
            'https://access.redhat.com/documentation/en-us/red_hat_insights/2023/html/client_configuration_guide_for_red_hat_insights/con-insights-client-cg-data-obfuscation_insights-cg-obfuscation#proc-obfuscating-ipv4-address_insights-cg-obfuscation'
          ),
        },
        {
          title: intl.formatMessage(messages.minimalHostImpact),
          body: intl.formatMessage(messages.minimalHostImpactBody),
          footer: link(
            intl.formatMessage(messages.minimalHostImpactFooter),
            'https://access.redhat.com/documentation/en-us/red_hat_insights/2023/html/client_configuration_guide_for_red_hat_insights/con-insights-changing-the-client-schedule_insights-cg-changing-schedule'
          ),
        },
        {
          title: intl.formatMessage(messages.proxySupport),
          body: intl.formatMessage(messages.proxySupportBody),
          footer: link(
            intl.formatMessage(messages.proxySupportFooter),
            'https://access.redhat.com/solutions/1606693'
          ),
        },
        {
          title: intl.formatMessage(messages.granularControls),
          body: intl.formatMessage(messages.granularControlsBody),
          footer: link(
            intl.formatMessage(messages.granularControlsFooter),
            'https://access.redhat.com/documentation/en-us/red_hat_insights/2023/html/client_configuration_guide_for_red_hat_insights/con-insights-client-data-redaction_insights-cg-data-redaction'
          ),
        },
        {
          title: intl.formatMessage(messages.payloadTesting),
          body: intl.formatMessage(messages.payloadTestingBody),
          footer: link(
            intl.formatMessage(messages.payloadTestingFooter),
            'https://access.redhat.com/documentation/en-us/red_hat_insights/2023/html/client_configuration_guide_for_red_hat_insights/con-insights-client-data-redaction_insights-cg-data-redaction#con-redaction-and-config-file-use_insights-cg-data-redaction'
          ),
        },
        {
          title: intl.formatMessage(messages.optionalHost),
          body: intl.formatMessage(messages.optionalHostBody),
          footer: link(
            intl.formatMessage(messages.optionalHostFooter),
            'https://access.redhat.com/solutions/1552923'
          ),
        },
      ],
    },
  ];

  return (
    <React.Fragment>
      {protectionData.map((data) => (
        <CardCollection key={data.collectionTitle} {...data} />
      ))}
    </React.Fragment>
  );
};

export default DataCollection;
