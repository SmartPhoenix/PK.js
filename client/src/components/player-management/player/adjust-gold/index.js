import React from 'react';
import { Mutation } from 'react-apollo';

import { ADJUST_GOLD } from '../../../../graphql/mutations';

import Loader from './loader';
import ErrorModal from '../../../misc/modals/error-modal';
import Component from './component';

class AdjustGold extends React.Component {
  render() {
    return (
      <Mutation
        mutation={ADJUST_GOLD}
        onError={() => {}}
      >
        {(deleteBan, { loading, error }) => {
          if (loading) return <Loader/>;

          return (
            <>
              {
                error &&
                <ErrorModal errors={error.graphQLErrors}/>
              }
              <Component
                action={variables => {
                  deleteBan({
                    variables: {
                      ...variables,
                      serverID: this.props.serverID,
                      guid: this.props.guid
                    }
                  });
                }}
              />
            </>
          );
        }}
      </Mutation>
    );
  }
}

export default AdjustGold;