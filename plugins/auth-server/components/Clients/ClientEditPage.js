import React from 'react'
import ClientWizardForm from './ClientWizardForm'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { editClient } from '../../redux/actions/OIDCActions'
import BlockUi from 'react-block-ui'

function ClientEditPage({
  client,
  scopes,
  scripts,
  loading,
  permissions,
  dispatch,
}) {
  if (
    !client.attributes ||
    (Object.keys(client.attributes).length === 0 &&
      client.attributes.constructor === Object)
  ) {
    client.attributes = {
      runIntrospectionScriptBeforeAccessTokenAsJwtCreationAndIncludeClaims: false,
      keepClientAuthorizationAfterExpiration: false,
      allowSpontaneousScopes: false,
      backchannelLogoutSessionRequired: false,
    }
  }
  scopes = scopes.map((item) => ({ dn: item.dn, name: item.id }))
  const history = useHistory()
  function handleSubmit(data) {
    if (data) {
      dispatch(editClient(data))
      history.push('/clients')
    }
  }
  return (
    <React.Fragment>
      <BlockUi
        tag="div"
        blocking={loading}
        keepInView={true}
        renderChildren={true}
        message={'Performing the request, please wait!'}
      >
        <ClientWizardForm
          client={client}
          scopes={scopes}
          scripts={scripts}
          permissions={permissions}
          customOnSubmit={handleSubmit}
        />
      </BlockUi>
    </React.Fragment>
  )
}
const mapStateToProps = (state) => {
  return {
    client: state.oidcReducer.item,
    loading: state.oidcReducer.loading,
    scopes: state.scopeReducer.items,
    scripts: state.initReducer.scripts,
    permissions: state.authReducer.permissions,
  }
}
export default connect(mapStateToProps)(ClientEditPage)