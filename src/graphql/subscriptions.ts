/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreatePath = /* GraphQL */ `subscription OnCreatePath(
  $filter: ModelSubscriptionPathFilterInput
  $owner: String
) {
  onCreatePath(filter: $filter, owner: $owner) {
    path
    sort
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePathSubscriptionVariables,
  APITypes.OnCreatePathSubscription
>;
export const onUpdatePath = /* GraphQL */ `subscription OnUpdatePath(
  $filter: ModelSubscriptionPathFilterInput
  $owner: String
) {
  onUpdatePath(filter: $filter, owner: $owner) {
    path
    sort
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePathSubscriptionVariables,
  APITypes.OnUpdatePathSubscription
>;
export const onDeletePath = /* GraphQL */ `subscription OnDeletePath(
  $filter: ModelSubscriptionPathFilterInput
  $owner: String
) {
  onDeletePath(filter: $filter, owner: $owner) {
    path
    sort
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePathSubscriptionVariables,
  APITypes.OnDeletePathSubscription
>;
export const onCreateTenantInfo = /* GraphQL */ `subscription OnCreateTenantInfo(
  $filter: ModelSubscriptionTenantInfoFilterInput
  $owner: String
) {
  onCreateTenantInfo(filter: $filter, owner: $owner) {
    id
    tenantName
    telephoneNumber
    postCode
    tenantAdress
    status
    expirationDate
    stores {
      nextToken
      __typename
    }
    members {
      nextToken
      __typename
    }
    path {
      path
      sort
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    tenantInfoPathPath
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTenantInfoSubscriptionVariables,
  APITypes.OnCreateTenantInfoSubscription
>;
export const onUpdateTenantInfo = /* GraphQL */ `subscription OnUpdateTenantInfo(
  $filter: ModelSubscriptionTenantInfoFilterInput
  $owner: String
) {
  onUpdateTenantInfo(filter: $filter, owner: $owner) {
    id
    tenantName
    telephoneNumber
    postCode
    tenantAdress
    status
    expirationDate
    stores {
      nextToken
      __typename
    }
    members {
      nextToken
      __typename
    }
    path {
      path
      sort
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    tenantInfoPathPath
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTenantInfoSubscriptionVariables,
  APITypes.OnUpdateTenantInfoSubscription
>;
export const onDeleteTenantInfo = /* GraphQL */ `subscription OnDeleteTenantInfo(
  $filter: ModelSubscriptionTenantInfoFilterInput
  $owner: String
) {
  onDeleteTenantInfo(filter: $filter, owner: $owner) {
    id
    tenantName
    telephoneNumber
    postCode
    tenantAdress
    status
    expirationDate
    stores {
      nextToken
      __typename
    }
    members {
      nextToken
      __typename
    }
    path {
      path
      sort
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    tenantInfoPathPath
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTenantInfoSubscriptionVariables,
  APITypes.OnDeleteTenantInfoSubscription
>;
export const onCreateStoresInfo = /* GraphQL */ `subscription OnCreateStoresInfo(
  $filter: ModelSubscriptionStoresInfoFilterInput
  $owner: String
) {
  onCreateStoresInfo(filter: $filter, owner: $owner) {
    id
    storeName
    storeTelephoneNumber
    storepostCode
    storeAdress
    status
    botNo
    accountID
    path {
      path
      sort
      createdAt
      updatedAt
      owner
      __typename
    }
    tenant {
      id
      tenantName
      telephoneNumber
      postCode
      tenantAdress
      status
      expirationDate
      createdAt
      updatedAt
      tenantInfoPathPath
      owner
      __typename
    }
    cameras {
      nextToken
      __typename
    }
    members {
      nextToken
      __typename
    }
    expirationDate
    createdAt
    updatedAt
    tenantInfoStoresId
    storesInfoPathPath
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateStoresInfoSubscriptionVariables,
  APITypes.OnCreateStoresInfoSubscription
>;
export const onUpdateStoresInfo = /* GraphQL */ `subscription OnUpdateStoresInfo(
  $filter: ModelSubscriptionStoresInfoFilterInput
  $owner: String
) {
  onUpdateStoresInfo(filter: $filter, owner: $owner) {
    id
    storeName
    storeTelephoneNumber
    storepostCode
    storeAdress
    status
    botNo
    accountID
    path {
      path
      sort
      createdAt
      updatedAt
      owner
      __typename
    }
    tenant {
      id
      tenantName
      telephoneNumber
      postCode
      tenantAdress
      status
      expirationDate
      createdAt
      updatedAt
      tenantInfoPathPath
      owner
      __typename
    }
    cameras {
      nextToken
      __typename
    }
    members {
      nextToken
      __typename
    }
    expirationDate
    createdAt
    updatedAt
    tenantInfoStoresId
    storesInfoPathPath
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateStoresInfoSubscriptionVariables,
  APITypes.OnUpdateStoresInfoSubscription
>;
export const onDeleteStoresInfo = /* GraphQL */ `subscription OnDeleteStoresInfo(
  $filter: ModelSubscriptionStoresInfoFilterInput
  $owner: String
) {
  onDeleteStoresInfo(filter: $filter, owner: $owner) {
    id
    storeName
    storeTelephoneNumber
    storepostCode
    storeAdress
    status
    botNo
    accountID
    path {
      path
      sort
      createdAt
      updatedAt
      owner
      __typename
    }
    tenant {
      id
      tenantName
      telephoneNumber
      postCode
      tenantAdress
      status
      expirationDate
      createdAt
      updatedAt
      tenantInfoPathPath
      owner
      __typename
    }
    cameras {
      nextToken
      __typename
    }
    members {
      nextToken
      __typename
    }
    expirationDate
    createdAt
    updatedAt
    tenantInfoStoresId
    storesInfoPathPath
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteStoresInfoSubscriptionVariables,
  APITypes.OnDeleteStoresInfoSubscription
>;
export const onCreateCameraInfo = /* GraphQL */ `subscription OnCreateCameraInfo(
  $filter: ModelSubscriptionCameraInfoFilterInput
  $owner: String
) {
  onCreateCameraInfo(filter: $filter, owner: $owner) {
    id
    cameraId
    cameraName
    purpose
    registrationStatus
    cameraParamVer
    descripation
    path {
      path
      sort
      createdAt
      updatedAt
      owner
      __typename
    }
    store {
      id
      storeName
      storeTelephoneNumber
      storepostCode
      storeAdress
      status
      botNo
      accountID
      expirationDate
      createdAt
      updatedAt
      tenantInfoStoresId
      storesInfoPathPath
      owner
      __typename
    }
    detections {
      nextToken
      __typename
    }
    members {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    storesInfoCamerasId
    cameraInfoPathPath
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCameraInfoSubscriptionVariables,
  APITypes.OnCreateCameraInfoSubscription
>;
export const onUpdateCameraInfo = /* GraphQL */ `subscription OnUpdateCameraInfo(
  $filter: ModelSubscriptionCameraInfoFilterInput
  $owner: String
) {
  onUpdateCameraInfo(filter: $filter, owner: $owner) {
    id
    cameraId
    cameraName
    purpose
    registrationStatus
    cameraParamVer
    descripation
    path {
      path
      sort
      createdAt
      updatedAt
      owner
      __typename
    }
    store {
      id
      storeName
      storeTelephoneNumber
      storepostCode
      storeAdress
      status
      botNo
      accountID
      expirationDate
      createdAt
      updatedAt
      tenantInfoStoresId
      storesInfoPathPath
      owner
      __typename
    }
    detections {
      nextToken
      __typename
    }
    members {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    storesInfoCamerasId
    cameraInfoPathPath
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCameraInfoSubscriptionVariables,
  APITypes.OnUpdateCameraInfoSubscription
>;
export const onDeleteCameraInfo = /* GraphQL */ `subscription OnDeleteCameraInfo(
  $filter: ModelSubscriptionCameraInfoFilterInput
  $owner: String
) {
  onDeleteCameraInfo(filter: $filter, owner: $owner) {
    id
    cameraId
    cameraName
    purpose
    registrationStatus
    cameraParamVer
    descripation
    path {
      path
      sort
      createdAt
      updatedAt
      owner
      __typename
    }
    store {
      id
      storeName
      storeTelephoneNumber
      storepostCode
      storeAdress
      status
      botNo
      accountID
      expirationDate
      createdAt
      updatedAt
      tenantInfoStoresId
      storesInfoPathPath
      owner
      __typename
    }
    detections {
      nextToken
      __typename
    }
    members {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    storesInfoCamerasId
    cameraInfoPathPath
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCameraInfoSubscriptionVariables,
  APITypes.OnDeleteCameraInfoSubscription
>;
export const onCreateMemberInfo = /* GraphQL */ `subscription OnCreateMemberInfo(
  $filter: ModelSubscriptionMemberInfoFilterInput
  $owner: String
) {
  onCreateMemberInfo(filter: $filter, owner: $owner) {
    id
    name
    telephoneNumber
    email
    role
    path {
      path
      sort
      createdAt
      updatedAt
      owner
      __typename
    }
    store {
      id
      storeName
      storeTelephoneNumber
      storepostCode
      storeAdress
      status
      botNo
      accountID
      expirationDate
      createdAt
      updatedAt
      tenantInfoStoresId
      storesInfoPathPath
      owner
      __typename
    }
    tenant {
      id
      tenantName
      telephoneNumber
      postCode
      tenantAdress
      status
      expirationDate
      createdAt
      updatedAt
      tenantInfoPathPath
      owner
      __typename
    }
    cameras {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    tenantInfoMembersId
    storesInfoMembersId
    memberInfoPathPath
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMemberInfoSubscriptionVariables,
  APITypes.OnCreateMemberInfoSubscription
>;
export const onUpdateMemberInfo = /* GraphQL */ `subscription OnUpdateMemberInfo(
  $filter: ModelSubscriptionMemberInfoFilterInput
  $owner: String
) {
  onUpdateMemberInfo(filter: $filter, owner: $owner) {
    id
    name
    telephoneNumber
    email
    role
    path {
      path
      sort
      createdAt
      updatedAt
      owner
      __typename
    }
    store {
      id
      storeName
      storeTelephoneNumber
      storepostCode
      storeAdress
      status
      botNo
      accountID
      expirationDate
      createdAt
      updatedAt
      tenantInfoStoresId
      storesInfoPathPath
      owner
      __typename
    }
    tenant {
      id
      tenantName
      telephoneNumber
      postCode
      tenantAdress
      status
      expirationDate
      createdAt
      updatedAt
      tenantInfoPathPath
      owner
      __typename
    }
    cameras {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    tenantInfoMembersId
    storesInfoMembersId
    memberInfoPathPath
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMemberInfoSubscriptionVariables,
  APITypes.OnUpdateMemberInfoSubscription
>;
export const onDeleteMemberInfo = /* GraphQL */ `subscription OnDeleteMemberInfo(
  $filter: ModelSubscriptionMemberInfoFilterInput
  $owner: String
) {
  onDeleteMemberInfo(filter: $filter, owner: $owner) {
    id
    name
    telephoneNumber
    email
    role
    path {
      path
      sort
      createdAt
      updatedAt
      owner
      __typename
    }
    store {
      id
      storeName
      storeTelephoneNumber
      storepostCode
      storeAdress
      status
      botNo
      accountID
      expirationDate
      createdAt
      updatedAt
      tenantInfoStoresId
      storesInfoPathPath
      owner
      __typename
    }
    tenant {
      id
      tenantName
      telephoneNumber
      postCode
      tenantAdress
      status
      expirationDate
      createdAt
      updatedAt
      tenantInfoPathPath
      owner
      __typename
    }
    cameras {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    tenantInfoMembersId
    storesInfoMembersId
    memberInfoPathPath
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMemberInfoSubscriptionVariables,
  APITypes.OnDeleteMemberInfoSubscription
>;
export const onCreateDetectInfo = /* GraphQL */ `subscription OnCreateDetectInfo(
  $filter: ModelSubscriptionDetectInfoFilterInput
  $owner: String
) {
  onCreateDetectInfo(filter: $filter, owner: $owner) {
    id
    cameraId
    detectThumb
    detectTime
    detectCode
    details
    camera {
      id
      cameraId
      cameraName
      purpose
      registrationStatus
      cameraParamVer
      descripation
      createdAt
      updatedAt
      storesInfoCamerasId
      cameraInfoPathPath
      owner
      __typename
    }
    createdAt
    updatedAt
    cameraInfoDetectionsId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateDetectInfoSubscriptionVariables,
  APITypes.OnCreateDetectInfoSubscription
>;
export const onUpdateDetectInfo = /* GraphQL */ `subscription OnUpdateDetectInfo(
  $filter: ModelSubscriptionDetectInfoFilterInput
  $owner: String
) {
  onUpdateDetectInfo(filter: $filter, owner: $owner) {
    id
    cameraId
    detectThumb
    detectTime
    detectCode
    details
    camera {
      id
      cameraId
      cameraName
      purpose
      registrationStatus
      cameraParamVer
      descripation
      createdAt
      updatedAt
      storesInfoCamerasId
      cameraInfoPathPath
      owner
      __typename
    }
    createdAt
    updatedAt
    cameraInfoDetectionsId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateDetectInfoSubscriptionVariables,
  APITypes.OnUpdateDetectInfoSubscription
>;
export const onDeleteDetectInfo = /* GraphQL */ `subscription OnDeleteDetectInfo(
  $filter: ModelSubscriptionDetectInfoFilterInput
  $owner: String
) {
  onDeleteDetectInfo(filter: $filter, owner: $owner) {
    id
    cameraId
    detectThumb
    detectTime
    detectCode
    details
    camera {
      id
      cameraId
      cameraName
      purpose
      registrationStatus
      cameraParamVer
      descripation
      createdAt
      updatedAt
      storesInfoCamerasId
      cameraInfoPathPath
      owner
      __typename
    }
    createdAt
    updatedAt
    cameraInfoDetectionsId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteDetectInfoSubscriptionVariables,
  APITypes.OnDeleteDetectInfoSubscription
>;
export const onCreateReactionInfo = /* GraphQL */ `subscription OnCreateReactionInfo(
  $filter: ModelSubscriptionReactionInfoFilterInput
  $owner: String
) {
  onCreateReactionInfo(filter: $filter, owner: $owner) {
    id
    reactionCode
    reactionTime
    detect {
      id
      cameraId
      detectThumb
      detectTime
      detectCode
      details
      createdAt
      updatedAt
      cameraInfoDetectionsId
      owner
      __typename
    }
    member {
      id
      name
      telephoneNumber
      email
      role
      createdAt
      updatedAt
      tenantInfoMembersId
      storesInfoMembersId
      memberInfoPathPath
      owner
      __typename
    }
    createdAt
    updatedAt
    reactionInfoDetectId
    reactionInfoMemberId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateReactionInfoSubscriptionVariables,
  APITypes.OnCreateReactionInfoSubscription
>;
export const onUpdateReactionInfo = /* GraphQL */ `subscription OnUpdateReactionInfo(
  $filter: ModelSubscriptionReactionInfoFilterInput
  $owner: String
) {
  onUpdateReactionInfo(filter: $filter, owner: $owner) {
    id
    reactionCode
    reactionTime
    detect {
      id
      cameraId
      detectThumb
      detectTime
      detectCode
      details
      createdAt
      updatedAt
      cameraInfoDetectionsId
      owner
      __typename
    }
    member {
      id
      name
      telephoneNumber
      email
      role
      createdAt
      updatedAt
      tenantInfoMembersId
      storesInfoMembersId
      memberInfoPathPath
      owner
      __typename
    }
    createdAt
    updatedAt
    reactionInfoDetectId
    reactionInfoMemberId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateReactionInfoSubscriptionVariables,
  APITypes.OnUpdateReactionInfoSubscription
>;
export const onDeleteReactionInfo = /* GraphQL */ `subscription OnDeleteReactionInfo(
  $filter: ModelSubscriptionReactionInfoFilterInput
  $owner: String
) {
  onDeleteReactionInfo(filter: $filter, owner: $owner) {
    id
    reactionCode
    reactionTime
    detect {
      id
      cameraId
      detectThumb
      detectTime
      detectCode
      details
      createdAt
      updatedAt
      cameraInfoDetectionsId
      owner
      __typename
    }
    member {
      id
      name
      telephoneNumber
      email
      role
      createdAt
      updatedAt
      tenantInfoMembersId
      storesInfoMembersId
      memberInfoPathPath
      owner
      __typename
    }
    createdAt
    updatedAt
    reactionInfoDetectId
    reactionInfoMemberId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteReactionInfoSubscriptionVariables,
  APITypes.OnDeleteReactionInfoSubscription
>;
export const onCreateCameraMembers = /* GraphQL */ `subscription OnCreateCameraMembers(
  $filter: ModelSubscriptionCameraMembersFilterInput
  $owner: String
) {
  onCreateCameraMembers(filter: $filter, owner: $owner) {
    id
    cameraInfoId
    memberInfoId
    cameraInfo {
      id
      cameraId
      cameraName
      purpose
      registrationStatus
      cameraParamVer
      descripation
      createdAt
      updatedAt
      storesInfoCamerasId
      cameraInfoPathPath
      owner
      __typename
    }
    memberInfo {
      id
      name
      telephoneNumber
      email
      role
      createdAt
      updatedAt
      tenantInfoMembersId
      storesInfoMembersId
      memberInfoPathPath
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCameraMembersSubscriptionVariables,
  APITypes.OnCreateCameraMembersSubscription
>;
export const onUpdateCameraMembers = /* GraphQL */ `subscription OnUpdateCameraMembers(
  $filter: ModelSubscriptionCameraMembersFilterInput
  $owner: String
) {
  onUpdateCameraMembers(filter: $filter, owner: $owner) {
    id
    cameraInfoId
    memberInfoId
    cameraInfo {
      id
      cameraId
      cameraName
      purpose
      registrationStatus
      cameraParamVer
      descripation
      createdAt
      updatedAt
      storesInfoCamerasId
      cameraInfoPathPath
      owner
      __typename
    }
    memberInfo {
      id
      name
      telephoneNumber
      email
      role
      createdAt
      updatedAt
      tenantInfoMembersId
      storesInfoMembersId
      memberInfoPathPath
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCameraMembersSubscriptionVariables,
  APITypes.OnUpdateCameraMembersSubscription
>;
export const onDeleteCameraMembers = /* GraphQL */ `subscription OnDeleteCameraMembers(
  $filter: ModelSubscriptionCameraMembersFilterInput
  $owner: String
) {
  onDeleteCameraMembers(filter: $filter, owner: $owner) {
    id
    cameraInfoId
    memberInfoId
    cameraInfo {
      id
      cameraId
      cameraName
      purpose
      registrationStatus
      cameraParamVer
      descripation
      createdAt
      updatedAt
      storesInfoCamerasId
      cameraInfoPathPath
      owner
      __typename
    }
    memberInfo {
      id
      name
      telephoneNumber
      email
      role
      createdAt
      updatedAt
      tenantInfoMembersId
      storesInfoMembersId
      memberInfoPathPath
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCameraMembersSubscriptionVariables,
  APITypes.OnDeleteCameraMembersSubscription
>;
