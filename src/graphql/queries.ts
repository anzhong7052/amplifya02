/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getPath = /* GraphQL */ `query GetPath($path: String!) {
  getPath(path: $path) {
    path
    sort
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPathQueryVariables, APITypes.GetPathQuery>;
export const listPaths = /* GraphQL */ `query ListPaths(
  $path: String
  $filter: ModelPathFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listPaths(
    path: $path
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      path
      sort
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListPathsQueryVariables, APITypes.ListPathsQuery>;
export const pathBySort = /* GraphQL */ `query PathBySort(
  $sort: String!
  $path: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPathFilterInput
  $limit: Int
  $nextToken: String
) {
  pathBySort(
    sort: $sort
    path: $path
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      path
      sort
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PathBySortQueryVariables,
  APITypes.PathBySortQuery
>;
export const getTenantInfo = /* GraphQL */ `query GetTenantInfo($id: ID!) {
  getTenantInfo(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetTenantInfoQueryVariables,
  APITypes.GetTenantInfoQuery
>;
export const listTenantInfos = /* GraphQL */ `query ListTenantInfos(
  $filter: ModelTenantInfoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTenantInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTenantInfosQueryVariables,
  APITypes.ListTenantInfosQuery
>;
export const getStoresInfo = /* GraphQL */ `query GetStoresInfo($id: ID!) {
  getStoresInfo(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetStoresInfoQueryVariables,
  APITypes.GetStoresInfoQuery
>;
export const listStoresInfos = /* GraphQL */ `query ListStoresInfos(
  $filter: ModelStoresInfoFilterInput
  $limit: Int
  $nextToken: String
) {
  listStoresInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListStoresInfosQueryVariables,
  APITypes.ListStoresInfosQuery
>;
export const getCameraInfo = /* GraphQL */ `query GetCameraInfo($id: ID!) {
  getCameraInfo(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCameraInfoQueryVariables,
  APITypes.GetCameraInfoQuery
>;
export const listCameraInfos = /* GraphQL */ `query ListCameraInfos(
  $filter: ModelCameraInfoFilterInput
  $limit: Int
  $nextToken: String
) {
  listCameraInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCameraInfosQueryVariables,
  APITypes.ListCameraInfosQuery
>;
export const getMemberInfo = /* GraphQL */ `query GetMemberInfo($id: ID!) {
  getMemberInfo(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetMemberInfoQueryVariables,
  APITypes.GetMemberInfoQuery
>;
export const listMemberInfos = /* GraphQL */ `query ListMemberInfos(
  $filter: ModelMemberInfoFilterInput
  $limit: Int
  $nextToken: String
) {
  listMemberInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMemberInfosQueryVariables,
  APITypes.ListMemberInfosQuery
>;
export const getDetectInfo = /* GraphQL */ `query GetDetectInfo($id: ID!) {
  getDetectInfo(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetDetectInfoQueryVariables,
  APITypes.GetDetectInfoQuery
>;
export const listDetectInfos = /* GraphQL */ `query ListDetectInfos(
  $filter: ModelDetectInfoFilterInput
  $limit: Int
  $nextToken: String
) {
  listDetectInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDetectInfosQueryVariables,
  APITypes.ListDetectInfosQuery
>;
export const getReactionInfo = /* GraphQL */ `query GetReactionInfo($id: ID!) {
  getReactionInfo(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetReactionInfoQueryVariables,
  APITypes.GetReactionInfoQuery
>;
export const listReactionInfos = /* GraphQL */ `query ListReactionInfos(
  $filter: ModelReactionInfoFilterInput
  $limit: Int
  $nextToken: String
) {
  listReactionInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      reactionCode
      reactionTime
      createdAt
      updatedAt
      reactionInfoDetectId
      reactionInfoMemberId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListReactionInfosQueryVariables,
  APITypes.ListReactionInfosQuery
>;
export const getCameraMembers = /* GraphQL */ `query GetCameraMembers($id: ID!) {
  getCameraMembers(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCameraMembersQueryVariables,
  APITypes.GetCameraMembersQuery
>;
export const listCameraMembers = /* GraphQL */ `query ListCameraMembers(
  $filter: ModelCameraMembersFilterInput
  $limit: Int
  $nextToken: String
) {
  listCameraMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      cameraInfoId
      memberInfoId
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCameraMembersQueryVariables,
  APITypes.ListCameraMembersQuery
>;
export const cameraMembersByCameraInfoId = /* GraphQL */ `query CameraMembersByCameraInfoId(
  $cameraInfoId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCameraMembersFilterInput
  $limit: Int
  $nextToken: String
) {
  cameraMembersByCameraInfoId(
    cameraInfoId: $cameraInfoId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      cameraInfoId
      memberInfoId
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CameraMembersByCameraInfoIdQueryVariables,
  APITypes.CameraMembersByCameraInfoIdQuery
>;
export const cameraMembersByMemberInfoId = /* GraphQL */ `query CameraMembersByMemberInfoId(
  $memberInfoId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCameraMembersFilterInput
  $limit: Int
  $nextToken: String
) {
  cameraMembersByMemberInfoId(
    memberInfoId: $memberInfoId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      cameraInfoId
      memberInfoId
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CameraMembersByMemberInfoIdQueryVariables,
  APITypes.CameraMembersByMemberInfoIdQuery
>;
