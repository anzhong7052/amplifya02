/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createPath = /* GraphQL */ `mutation CreatePath(
  $input: CreatePathInput!
  $condition: ModelPathConditionInput
) {
  createPath(input: $input, condition: $condition) {
    path
    sort
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePathMutationVariables,
  APITypes.CreatePathMutation
>;
export const updatePath = /* GraphQL */ `mutation UpdatePath(
  $input: UpdatePathInput!
  $condition: ModelPathConditionInput
) {
  updatePath(input: $input, condition: $condition) {
    path
    sort
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePathMutationVariables,
  APITypes.UpdatePathMutation
>;
export const deletePath = /* GraphQL */ `mutation DeletePath(
  $input: DeletePathInput!
  $condition: ModelPathConditionInput
) {
  deletePath(input: $input, condition: $condition) {
    path
    sort
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePathMutationVariables,
  APITypes.DeletePathMutation
>;
export const createTenantInfo = /* GraphQL */ `mutation CreateTenantInfo(
  $input: CreateTenantInfoInput!
  $condition: ModelTenantInfoConditionInput
) {
  createTenantInfo(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateTenantInfoMutationVariables,
  APITypes.CreateTenantInfoMutation
>;
export const updateTenantInfo = /* GraphQL */ `mutation UpdateTenantInfo(
  $input: UpdateTenantInfoInput!
  $condition: ModelTenantInfoConditionInput
) {
  updateTenantInfo(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateTenantInfoMutationVariables,
  APITypes.UpdateTenantInfoMutation
>;
export const deleteTenantInfo = /* GraphQL */ `mutation DeleteTenantInfo(
  $input: DeleteTenantInfoInput!
  $condition: ModelTenantInfoConditionInput
) {
  deleteTenantInfo(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteTenantInfoMutationVariables,
  APITypes.DeleteTenantInfoMutation
>;
export const createStoresInfo = /* GraphQL */ `mutation CreateStoresInfo(
  $input: CreateStoresInfoInput!
  $condition: ModelStoresInfoConditionInput
) {
  createStoresInfo(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateStoresInfoMutationVariables,
  APITypes.CreateStoresInfoMutation
>;
export const updateStoresInfo = /* GraphQL */ `mutation UpdateStoresInfo(
  $input: UpdateStoresInfoInput!
  $condition: ModelStoresInfoConditionInput
) {
  updateStoresInfo(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateStoresInfoMutationVariables,
  APITypes.UpdateStoresInfoMutation
>;
export const deleteStoresInfo = /* GraphQL */ `mutation DeleteStoresInfo(
  $input: DeleteStoresInfoInput!
  $condition: ModelStoresInfoConditionInput
) {
  deleteStoresInfo(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteStoresInfoMutationVariables,
  APITypes.DeleteStoresInfoMutation
>;
export const createCameraInfo = /* GraphQL */ `mutation CreateCameraInfo(
  $input: CreateCameraInfoInput!
  $condition: ModelCameraInfoConditionInput
) {
  createCameraInfo(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCameraInfoMutationVariables,
  APITypes.CreateCameraInfoMutation
>;
export const updateCameraInfo = /* GraphQL */ `mutation UpdateCameraInfo(
  $input: UpdateCameraInfoInput!
  $condition: ModelCameraInfoConditionInput
) {
  updateCameraInfo(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCameraInfoMutationVariables,
  APITypes.UpdateCameraInfoMutation
>;
export const deleteCameraInfo = /* GraphQL */ `mutation DeleteCameraInfo(
  $input: DeleteCameraInfoInput!
  $condition: ModelCameraInfoConditionInput
) {
  deleteCameraInfo(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCameraInfoMutationVariables,
  APITypes.DeleteCameraInfoMutation
>;
export const createMemberInfo = /* GraphQL */ `mutation CreateMemberInfo(
  $input: CreateMemberInfoInput!
  $condition: ModelMemberInfoConditionInput
) {
  createMemberInfo(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMemberInfoMutationVariables,
  APITypes.CreateMemberInfoMutation
>;
export const updateMemberInfo = /* GraphQL */ `mutation UpdateMemberInfo(
  $input: UpdateMemberInfoInput!
  $condition: ModelMemberInfoConditionInput
) {
  updateMemberInfo(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMemberInfoMutationVariables,
  APITypes.UpdateMemberInfoMutation
>;
export const deleteMemberInfo = /* GraphQL */ `mutation DeleteMemberInfo(
  $input: DeleteMemberInfoInput!
  $condition: ModelMemberInfoConditionInput
) {
  deleteMemberInfo(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMemberInfoMutationVariables,
  APITypes.DeleteMemberInfoMutation
>;
export const createDetectInfo = /* GraphQL */ `mutation CreateDetectInfo(
  $input: CreateDetectInfoInput!
  $condition: ModelDetectInfoConditionInput
) {
  createDetectInfo(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateDetectInfoMutationVariables,
  APITypes.CreateDetectInfoMutation
>;
export const updateDetectInfo = /* GraphQL */ `mutation UpdateDetectInfo(
  $input: UpdateDetectInfoInput!
  $condition: ModelDetectInfoConditionInput
) {
  updateDetectInfo(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateDetectInfoMutationVariables,
  APITypes.UpdateDetectInfoMutation
>;
export const deleteDetectInfo = /* GraphQL */ `mutation DeleteDetectInfo(
  $input: DeleteDetectInfoInput!
  $condition: ModelDetectInfoConditionInput
) {
  deleteDetectInfo(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteDetectInfoMutationVariables,
  APITypes.DeleteDetectInfoMutation
>;
export const createReactionInfo = /* GraphQL */ `mutation CreateReactionInfo(
  $input: CreateReactionInfoInput!
  $condition: ModelReactionInfoConditionInput
) {
  createReactionInfo(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateReactionInfoMutationVariables,
  APITypes.CreateReactionInfoMutation
>;
export const updateReactionInfo = /* GraphQL */ `mutation UpdateReactionInfo(
  $input: UpdateReactionInfoInput!
  $condition: ModelReactionInfoConditionInput
) {
  updateReactionInfo(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateReactionInfoMutationVariables,
  APITypes.UpdateReactionInfoMutation
>;
export const deleteReactionInfo = /* GraphQL */ `mutation DeleteReactionInfo(
  $input: DeleteReactionInfoInput!
  $condition: ModelReactionInfoConditionInput
) {
  deleteReactionInfo(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteReactionInfoMutationVariables,
  APITypes.DeleteReactionInfoMutation
>;
export const createCameraMembers = /* GraphQL */ `mutation CreateCameraMembers(
  $input: CreateCameraMembersInput!
  $condition: ModelCameraMembersConditionInput
) {
  createCameraMembers(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCameraMembersMutationVariables,
  APITypes.CreateCameraMembersMutation
>;
export const updateCameraMembers = /* GraphQL */ `mutation UpdateCameraMembers(
  $input: UpdateCameraMembersInput!
  $condition: ModelCameraMembersConditionInput
) {
  updateCameraMembers(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCameraMembersMutationVariables,
  APITypes.UpdateCameraMembersMutation
>;
export const deleteCameraMembers = /* GraphQL */ `mutation DeleteCameraMembers(
  $input: DeleteCameraMembersInput!
  $condition: ModelCameraMembersConditionInput
) {
  deleteCameraMembers(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCameraMembersMutationVariables,
  APITypes.DeleteCameraMembersMutation
>;
