/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePathInput = {
  path: string,
  sort: string,
};

export type ModelPathConditionInput = {
  sort?: ModelStringInput | null,
  and?: Array< ModelPathConditionInput | null > | null,
  or?: Array< ModelPathConditionInput | null > | null,
  not?: ModelPathConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Path = {
  __typename: "Path",
  path: string,
  sort: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdatePathInput = {
  path: string,
  sort?: string | null,
};

export type DeletePathInput = {
  path: string,
};

export type CreateTenantInfoInput = {
  id?: string | null,
  tenantName: string,
  telephoneNumber?: string | null,
  postCode?: string | null,
  tenantAdress?: string | null,
  status: string,
  expirationDate?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  tenantInfoPathPath?: string | null,
};

export type ModelTenantInfoConditionInput = {
  tenantName?: ModelStringInput | null,
  telephoneNumber?: ModelStringInput | null,
  postCode?: ModelStringInput | null,
  tenantAdress?: ModelStringInput | null,
  status?: ModelStringInput | null,
  expirationDate?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTenantInfoConditionInput | null > | null,
  or?: Array< ModelTenantInfoConditionInput | null > | null,
  not?: ModelTenantInfoConditionInput | null,
  tenantInfoPathPath?: ModelStringInput | null,
};

export type TenantInfo = {
  __typename: "TenantInfo",
  id: string,
  tenantName: string,
  telephoneNumber?: string | null,
  postCode?: string | null,
  tenantAdress?: string | null,
  status: string,
  expirationDate?: string | null,
  stores?: ModelStoresInfoConnection | null,
  members?: ModelMemberInfoConnection | null,
  path?: Path | null,
  createdAt: string,
  updatedAt: string,
  tenantInfoPathPath?: string | null,
  owner?: string | null,
};

export type ModelStoresInfoConnection = {
  __typename: "ModelStoresInfoConnection",
  items:  Array<StoresInfo | null >,
  nextToken?: string | null,
};

export type StoresInfo = {
  __typename: "StoresInfo",
  id: string,
  storeName: string,
  storeTelephoneNumber?: string | null,
  storepostCode?: string | null,
  storeAdress?: string | null,
  status: string,
  botNo?: string | null,
  accountID?: string | null,
  path?: Path | null,
  tenant?: TenantInfo | null,
  cameras?: ModelCameraInfoConnection | null,
  members?: ModelMemberInfoConnection | null,
  expirationDate?: string | null,
  createdAt: string,
  updatedAt: string,
  tenantInfoStoresId?: string | null,
  storesInfoPathPath?: string | null,
  owner?: string | null,
};

export type ModelCameraInfoConnection = {
  __typename: "ModelCameraInfoConnection",
  items:  Array<CameraInfo | null >,
  nextToken?: string | null,
};

export type CameraInfo = {
  __typename: "CameraInfo",
  id: string,
  cameraId: string,
  cameraName?: string | null,
  purpose?: string | null,
  registrationStatus?: string | null,
  cameraParamVer: string,
  descripation: string,
  path?: Path | null,
  store?: StoresInfo | null,
  detections?: ModelDetectInfoConnection | null,
  members?: ModelCameraMembersConnection | null,
  createdAt: string,
  updatedAt: string,
  storesInfoCamerasId?: string | null,
  cameraInfoPathPath?: string | null,
  owner?: string | null,
};

export type ModelDetectInfoConnection = {
  __typename: "ModelDetectInfoConnection",
  items:  Array<DetectInfo | null >,
  nextToken?: string | null,
};

export type DetectInfo = {
  __typename: "DetectInfo",
  id: string,
  cameraId: string,
  detectThumb?: string | null,
  detectTime?: string | null,
  detectCode?: string | null,
  details?: string | null,
  camera?: CameraInfo | null,
  createdAt: string,
  updatedAt: string,
  cameraInfoDetectionsId?: string | null,
  owner?: string | null,
};

export type ModelCameraMembersConnection = {
  __typename: "ModelCameraMembersConnection",
  items:  Array<CameraMembers | null >,
  nextToken?: string | null,
};

export type CameraMembers = {
  __typename: "CameraMembers",
  id: string,
  cameraInfoId: string,
  memberInfoId: string,
  cameraInfo: CameraInfo,
  memberInfo: MemberInfo,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type MemberInfo = {
  __typename: "MemberInfo",
  id: string,
  name: string,
  telephoneNumber?: string | null,
  email: string,
  role?: string | null,
  path?: Path | null,
  store?: StoresInfo | null,
  tenant?: TenantInfo | null,
  cameras?: ModelCameraMembersConnection | null,
  createdAt: string,
  updatedAt: string,
  tenantInfoMembersId?: string | null,
  storesInfoMembersId?: string | null,
  memberInfoPathPath?: string | null,
  owner?: string | null,
};

export type ModelMemberInfoConnection = {
  __typename: "ModelMemberInfoConnection",
  items:  Array<MemberInfo | null >,
  nextToken?: string | null,
};

export type UpdateTenantInfoInput = {
  id: string,
  tenantName?: string | null,
  telephoneNumber?: string | null,
  postCode?: string | null,
  tenantAdress?: string | null,
  status?: string | null,
  expirationDate?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  tenantInfoPathPath?: string | null,
};

export type DeleteTenantInfoInput = {
  id: string,
};

export type CreateStoresInfoInput = {
  id?: string | null,
  storeName: string,
  storeTelephoneNumber?: string | null,
  storepostCode?: string | null,
  storeAdress?: string | null,
  status: string,
  botNo?: string | null,
  accountID?: string | null,
  expirationDate?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  tenantInfoStoresId?: string | null,
  storesInfoPathPath?: string | null,
};

export type ModelStoresInfoConditionInput = {
  storeName?: ModelStringInput | null,
  storeTelephoneNumber?: ModelStringInput | null,
  storepostCode?: ModelStringInput | null,
  storeAdress?: ModelStringInput | null,
  status?: ModelStringInput | null,
  botNo?: ModelStringInput | null,
  accountID?: ModelStringInput | null,
  expirationDate?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStoresInfoConditionInput | null > | null,
  or?: Array< ModelStoresInfoConditionInput | null > | null,
  not?: ModelStoresInfoConditionInput | null,
  tenantInfoStoresId?: ModelIDInput | null,
  storesInfoPathPath?: ModelStringInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateStoresInfoInput = {
  id: string,
  storeName?: string | null,
  storeTelephoneNumber?: string | null,
  storepostCode?: string | null,
  storeAdress?: string | null,
  status?: string | null,
  botNo?: string | null,
  accountID?: string | null,
  expirationDate?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  tenantInfoStoresId?: string | null,
  storesInfoPathPath?: string | null,
};

export type DeleteStoresInfoInput = {
  id: string,
};

export type CreateCameraInfoInput = {
  id?: string | null,
  cameraId: string,
  cameraName?: string | null,
  purpose?: string | null,
  registrationStatus?: string | null,
  cameraParamVer: string,
  descripation: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  storesInfoCamerasId?: string | null,
  cameraInfoPathPath?: string | null,
};

export type ModelCameraInfoConditionInput = {
  cameraId?: ModelStringInput | null,
  cameraName?: ModelStringInput | null,
  purpose?: ModelStringInput | null,
  registrationStatus?: ModelStringInput | null,
  cameraParamVer?: ModelStringInput | null,
  descripation?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCameraInfoConditionInput | null > | null,
  or?: Array< ModelCameraInfoConditionInput | null > | null,
  not?: ModelCameraInfoConditionInput | null,
  storesInfoCamerasId?: ModelIDInput | null,
  cameraInfoPathPath?: ModelStringInput | null,
};

export type UpdateCameraInfoInput = {
  id: string,
  cameraId?: string | null,
  cameraName?: string | null,
  purpose?: string | null,
  registrationStatus?: string | null,
  cameraParamVer?: string | null,
  descripation?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  storesInfoCamerasId?: string | null,
  cameraInfoPathPath?: string | null,
};

export type DeleteCameraInfoInput = {
  id: string,
};

export type CreateMemberInfoInput = {
  id?: string | null,
  name: string,
  telephoneNumber?: string | null,
  email: string,
  role?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  tenantInfoMembersId?: string | null,
  storesInfoMembersId?: string | null,
  memberInfoPathPath?: string | null,
};

export type ModelMemberInfoConditionInput = {
  name?: ModelStringInput | null,
  telephoneNumber?: ModelStringInput | null,
  email?: ModelStringInput | null,
  role?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMemberInfoConditionInput | null > | null,
  or?: Array< ModelMemberInfoConditionInput | null > | null,
  not?: ModelMemberInfoConditionInput | null,
  tenantInfoMembersId?: ModelIDInput | null,
  storesInfoMembersId?: ModelIDInput | null,
  memberInfoPathPath?: ModelStringInput | null,
};

export type UpdateMemberInfoInput = {
  id: string,
  name?: string | null,
  telephoneNumber?: string | null,
  email?: string | null,
  role?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  tenantInfoMembersId?: string | null,
  storesInfoMembersId?: string | null,
  memberInfoPathPath?: string | null,
};

export type DeleteMemberInfoInput = {
  id: string,
};

export type CreateDetectInfoInput = {
  id?: string | null,
  cameraId: string,
  detectThumb?: string | null,
  detectTime?: string | null,
  detectCode?: string | null,
  details?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  cameraInfoDetectionsId?: string | null,
};

export type ModelDetectInfoConditionInput = {
  cameraId?: ModelStringInput | null,
  detectThumb?: ModelStringInput | null,
  detectTime?: ModelStringInput | null,
  detectCode?: ModelStringInput | null,
  details?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDetectInfoConditionInput | null > | null,
  or?: Array< ModelDetectInfoConditionInput | null > | null,
  not?: ModelDetectInfoConditionInput | null,
  cameraInfoDetectionsId?: ModelIDInput | null,
};

export type UpdateDetectInfoInput = {
  id: string,
  cameraId?: string | null,
  detectThumb?: string | null,
  detectTime?: string | null,
  detectCode?: string | null,
  details?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  cameraInfoDetectionsId?: string | null,
};

export type DeleteDetectInfoInput = {
  id: string,
};

export type CreateReactionInfoInput = {
  id?: string | null,
  reactionCode: string,
  reactionTime?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  reactionInfoDetectId?: string | null,
  reactionInfoMemberId?: string | null,
};

export type ModelReactionInfoConditionInput = {
  reactionCode?: ModelStringInput | null,
  reactionTime?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelReactionInfoConditionInput | null > | null,
  or?: Array< ModelReactionInfoConditionInput | null > | null,
  not?: ModelReactionInfoConditionInput | null,
  reactionInfoDetectId?: ModelIDInput | null,
  reactionInfoMemberId?: ModelIDInput | null,
};

export type ReactionInfo = {
  __typename: "ReactionInfo",
  id: string,
  reactionCode: string,
  reactionTime?: string | null,
  detect?: DetectInfo | null,
  member?: MemberInfo | null,
  createdAt: string,
  updatedAt: string,
  reactionInfoDetectId?: string | null,
  reactionInfoMemberId?: string | null,
  owner?: string | null,
};

export type UpdateReactionInfoInput = {
  id: string,
  reactionCode?: string | null,
  reactionTime?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  reactionInfoDetectId?: string | null,
  reactionInfoMemberId?: string | null,
};

export type DeleteReactionInfoInput = {
  id: string,
};

export type CreateCameraMembersInput = {
  id?: string | null,
  cameraInfoId: string,
  memberInfoId: string,
};

export type ModelCameraMembersConditionInput = {
  cameraInfoId?: ModelIDInput | null,
  memberInfoId?: ModelIDInput | null,
  and?: Array< ModelCameraMembersConditionInput | null > | null,
  or?: Array< ModelCameraMembersConditionInput | null > | null,
  not?: ModelCameraMembersConditionInput | null,
};

export type UpdateCameraMembersInput = {
  id: string,
  cameraInfoId?: string | null,
  memberInfoId?: string | null,
};

export type DeleteCameraMembersInput = {
  id: string,
};

export type ModelPathFilterInput = {
  path?: ModelStringInput | null,
  sort?: ModelStringInput | null,
  and?: Array< ModelPathFilterInput | null > | null,
  or?: Array< ModelPathFilterInput | null > | null,
  not?: ModelPathFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelPathConnection = {
  __typename: "ModelPathConnection",
  items:  Array<Path | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelTenantInfoFilterInput = {
  id?: ModelIDInput | null,
  tenantName?: ModelStringInput | null,
  telephoneNumber?: ModelStringInput | null,
  postCode?: ModelStringInput | null,
  tenantAdress?: ModelStringInput | null,
  status?: ModelStringInput | null,
  expirationDate?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTenantInfoFilterInput | null > | null,
  or?: Array< ModelTenantInfoFilterInput | null > | null,
  not?: ModelTenantInfoFilterInput | null,
  tenantInfoPathPath?: ModelStringInput | null,
};

export type ModelTenantInfoConnection = {
  __typename: "ModelTenantInfoConnection",
  items:  Array<TenantInfo | null >,
  nextToken?: string | null,
};

export type ModelStoresInfoFilterInput = {
  id?: ModelIDInput | null,
  storeName?: ModelStringInput | null,
  storeTelephoneNumber?: ModelStringInput | null,
  storepostCode?: ModelStringInput | null,
  storeAdress?: ModelStringInput | null,
  status?: ModelStringInput | null,
  botNo?: ModelStringInput | null,
  accountID?: ModelStringInput | null,
  expirationDate?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStoresInfoFilterInput | null > | null,
  or?: Array< ModelStoresInfoFilterInput | null > | null,
  not?: ModelStoresInfoFilterInput | null,
  tenantInfoStoresId?: ModelIDInput | null,
  storesInfoPathPath?: ModelStringInput | null,
};

export type ModelCameraInfoFilterInput = {
  id?: ModelIDInput | null,
  cameraId?: ModelStringInput | null,
  cameraName?: ModelStringInput | null,
  purpose?: ModelStringInput | null,
  registrationStatus?: ModelStringInput | null,
  cameraParamVer?: ModelStringInput | null,
  descripation?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCameraInfoFilterInput | null > | null,
  or?: Array< ModelCameraInfoFilterInput | null > | null,
  not?: ModelCameraInfoFilterInput | null,
  storesInfoCamerasId?: ModelIDInput | null,
  cameraInfoPathPath?: ModelStringInput | null,
};

export type ModelMemberInfoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  telephoneNumber?: ModelStringInput | null,
  email?: ModelStringInput | null,
  role?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMemberInfoFilterInput | null > | null,
  or?: Array< ModelMemberInfoFilterInput | null > | null,
  not?: ModelMemberInfoFilterInput | null,
  tenantInfoMembersId?: ModelIDInput | null,
  storesInfoMembersId?: ModelIDInput | null,
  memberInfoPathPath?: ModelStringInput | null,
};

export type ModelDetectInfoFilterInput = {
  id?: ModelIDInput | null,
  cameraId?: ModelStringInput | null,
  detectThumb?: ModelStringInput | null,
  detectTime?: ModelStringInput | null,
  detectCode?: ModelStringInput | null,
  details?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelDetectInfoFilterInput | null > | null,
  or?: Array< ModelDetectInfoFilterInput | null > | null,
  not?: ModelDetectInfoFilterInput | null,
  cameraInfoDetectionsId?: ModelIDInput | null,
};

export type ModelReactionInfoFilterInput = {
  id?: ModelIDInput | null,
  reactionCode?: ModelStringInput | null,
  reactionTime?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelReactionInfoFilterInput | null > | null,
  or?: Array< ModelReactionInfoFilterInput | null > | null,
  not?: ModelReactionInfoFilterInput | null,
  reactionInfoDetectId?: ModelIDInput | null,
  reactionInfoMemberId?: ModelIDInput | null,
};

export type ModelReactionInfoConnection = {
  __typename: "ModelReactionInfoConnection",
  items:  Array<ReactionInfo | null >,
  nextToken?: string | null,
};

export type ModelCameraMembersFilterInput = {
  id?: ModelIDInput | null,
  cameraInfoId?: ModelIDInput | null,
  memberInfoId?: ModelIDInput | null,
  and?: Array< ModelCameraMembersFilterInput | null > | null,
  or?: Array< ModelCameraMembersFilterInput | null > | null,
  not?: ModelCameraMembersFilterInput | null,
};

export type ModelSubscriptionPathFilterInput = {
  path?: ModelSubscriptionStringInput | null,
  sort?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPathFilterInput | null > | null,
  or?: Array< ModelSubscriptionPathFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionTenantInfoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  tenantName?: ModelSubscriptionStringInput | null,
  telephoneNumber?: ModelSubscriptionStringInput | null,
  postCode?: ModelSubscriptionStringInput | null,
  tenantAdress?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  expirationDate?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTenantInfoFilterInput | null > | null,
  or?: Array< ModelSubscriptionTenantInfoFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStoresInfoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  storeName?: ModelSubscriptionStringInput | null,
  storeTelephoneNumber?: ModelSubscriptionStringInput | null,
  storepostCode?: ModelSubscriptionStringInput | null,
  storeAdress?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  botNo?: ModelSubscriptionStringInput | null,
  accountID?: ModelSubscriptionStringInput | null,
  expirationDate?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStoresInfoFilterInput | null > | null,
  or?: Array< ModelSubscriptionStoresInfoFilterInput | null > | null,
};

export type ModelSubscriptionCameraInfoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  cameraId?: ModelSubscriptionStringInput | null,
  cameraName?: ModelSubscriptionStringInput | null,
  purpose?: ModelSubscriptionStringInput | null,
  registrationStatus?: ModelSubscriptionStringInput | null,
  cameraParamVer?: ModelSubscriptionStringInput | null,
  descripation?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCameraInfoFilterInput | null > | null,
  or?: Array< ModelSubscriptionCameraInfoFilterInput | null > | null,
};

export type ModelSubscriptionMemberInfoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  telephoneNumber?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  role?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMemberInfoFilterInput | null > | null,
  or?: Array< ModelSubscriptionMemberInfoFilterInput | null > | null,
};

export type ModelSubscriptionDetectInfoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  cameraId?: ModelSubscriptionStringInput | null,
  detectThumb?: ModelSubscriptionStringInput | null,
  detectTime?: ModelSubscriptionStringInput | null,
  detectCode?: ModelSubscriptionStringInput | null,
  details?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDetectInfoFilterInput | null > | null,
  or?: Array< ModelSubscriptionDetectInfoFilterInput | null > | null,
};

export type ModelSubscriptionReactionInfoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  reactionCode?: ModelSubscriptionStringInput | null,
  reactionTime?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionReactionInfoFilterInput | null > | null,
  or?: Array< ModelSubscriptionReactionInfoFilterInput | null > | null,
};

export type ModelSubscriptionCameraMembersFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  cameraInfoId?: ModelSubscriptionIDInput | null,
  memberInfoId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCameraMembersFilterInput | null > | null,
  or?: Array< ModelSubscriptionCameraMembersFilterInput | null > | null,
};

export type CreatePathMutationVariables = {
  input: CreatePathInput,
  condition?: ModelPathConditionInput | null,
};

export type CreatePathMutation = {
  createPath?:  {
    __typename: "Path",
    path: string,
    sort: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdatePathMutationVariables = {
  input: UpdatePathInput,
  condition?: ModelPathConditionInput | null,
};

export type UpdatePathMutation = {
  updatePath?:  {
    __typename: "Path",
    path: string,
    sort: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeletePathMutationVariables = {
  input: DeletePathInput,
  condition?: ModelPathConditionInput | null,
};

export type DeletePathMutation = {
  deletePath?:  {
    __typename: "Path",
    path: string,
    sort: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateTenantInfoMutationVariables = {
  input: CreateTenantInfoInput,
  condition?: ModelTenantInfoConditionInput | null,
};

export type CreateTenantInfoMutation = {
  createTenantInfo?:  {
    __typename: "TenantInfo",
    id: string,
    tenantName: string,
    telephoneNumber?: string | null,
    postCode?: string | null,
    tenantAdress?: string | null,
    status: string,
    expirationDate?: string | null,
    stores?:  {
      __typename: "ModelStoresInfoConnection",
      nextToken?: string | null,
    } | null,
    members?:  {
      __typename: "ModelMemberInfoConnection",
      nextToken?: string | null,
    } | null,
    path?:  {
      __typename: "Path",
      path: string,
      sort: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tenantInfoPathPath?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateTenantInfoMutationVariables = {
  input: UpdateTenantInfoInput,
  condition?: ModelTenantInfoConditionInput | null,
};

export type UpdateTenantInfoMutation = {
  updateTenantInfo?:  {
    __typename: "TenantInfo",
    id: string,
    tenantName: string,
    telephoneNumber?: string | null,
    postCode?: string | null,
    tenantAdress?: string | null,
    status: string,
    expirationDate?: string | null,
    stores?:  {
      __typename: "ModelStoresInfoConnection",
      nextToken?: string | null,
    } | null,
    members?:  {
      __typename: "ModelMemberInfoConnection",
      nextToken?: string | null,
    } | null,
    path?:  {
      __typename: "Path",
      path: string,
      sort: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tenantInfoPathPath?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteTenantInfoMutationVariables = {
  input: DeleteTenantInfoInput,
  condition?: ModelTenantInfoConditionInput | null,
};

export type DeleteTenantInfoMutation = {
  deleteTenantInfo?:  {
    __typename: "TenantInfo",
    id: string,
    tenantName: string,
    telephoneNumber?: string | null,
    postCode?: string | null,
    tenantAdress?: string | null,
    status: string,
    expirationDate?: string | null,
    stores?:  {
      __typename: "ModelStoresInfoConnection",
      nextToken?: string | null,
    } | null,
    members?:  {
      __typename: "ModelMemberInfoConnection",
      nextToken?: string | null,
    } | null,
    path?:  {
      __typename: "Path",
      path: string,
      sort: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tenantInfoPathPath?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateStoresInfoMutationVariables = {
  input: CreateStoresInfoInput,
  condition?: ModelStoresInfoConditionInput | null,
};

export type CreateStoresInfoMutation = {
  createStoresInfo?:  {
    __typename: "StoresInfo",
    id: string,
    storeName: string,
    storeTelephoneNumber?: string | null,
    storepostCode?: string | null,
    storeAdress?: string | null,
    status: string,
    botNo?: string | null,
    accountID?: string | null,
    path?:  {
      __typename: "Path",
      path: string,
      sort: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    tenant?:  {
      __typename: "TenantInfo",
      id: string,
      tenantName: string,
      telephoneNumber?: string | null,
      postCode?: string | null,
      tenantAdress?: string | null,
      status: string,
      expirationDate?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    cameras?:  {
      __typename: "ModelCameraInfoConnection",
      nextToken?: string | null,
    } | null,
    members?:  {
      __typename: "ModelMemberInfoConnection",
      nextToken?: string | null,
    } | null,
    expirationDate?: string | null,
    createdAt: string,
    updatedAt: string,
    tenantInfoStoresId?: string | null,
    storesInfoPathPath?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateStoresInfoMutationVariables = {
  input: UpdateStoresInfoInput,
  condition?: ModelStoresInfoConditionInput | null,
};

export type UpdateStoresInfoMutation = {
  updateStoresInfo?:  {
    __typename: "StoresInfo",
    id: string,
    storeName: string,
    storeTelephoneNumber?: string | null,
    storepostCode?: string | null,
    storeAdress?: string | null,
    status: string,
    botNo?: string | null,
    accountID?: string | null,
    path?:  {
      __typename: "Path",
      path: string,
      sort: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    tenant?:  {
      __typename: "TenantInfo",
      id: string,
      tenantName: string,
      telephoneNumber?: string | null,
      postCode?: string | null,
      tenantAdress?: string | null,
      status: string,
      expirationDate?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    cameras?:  {
      __typename: "ModelCameraInfoConnection",
      nextToken?: string | null,
    } | null,
    members?:  {
      __typename: "ModelMemberInfoConnection",
      nextToken?: string | null,
    } | null,
    expirationDate?: string | null,
    createdAt: string,
    updatedAt: string,
    tenantInfoStoresId?: string | null,
    storesInfoPathPath?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteStoresInfoMutationVariables = {
  input: DeleteStoresInfoInput,
  condition?: ModelStoresInfoConditionInput | null,
};

export type DeleteStoresInfoMutation = {
  deleteStoresInfo?:  {
    __typename: "StoresInfo",
    id: string,
    storeName: string,
    storeTelephoneNumber?: string | null,
    storepostCode?: string | null,
    storeAdress?: string | null,
    status: string,
    botNo?: string | null,
    accountID?: string | null,
    path?:  {
      __typename: "Path",
      path: string,
      sort: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    tenant?:  {
      __typename: "TenantInfo",
      id: string,
      tenantName: string,
      telephoneNumber?: string | null,
      postCode?: string | null,
      tenantAdress?: string | null,
      status: string,
      expirationDate?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    cameras?:  {
      __typename: "ModelCameraInfoConnection",
      nextToken?: string | null,
    } | null,
    members?:  {
      __typename: "ModelMemberInfoConnection",
      nextToken?: string | null,
    } | null,
    expirationDate?: string | null,
    createdAt: string,
    updatedAt: string,
    tenantInfoStoresId?: string | null,
    storesInfoPathPath?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateCameraInfoMutationVariables = {
  input: CreateCameraInfoInput,
  condition?: ModelCameraInfoConditionInput | null,
};

export type CreateCameraInfoMutation = {
  createCameraInfo?:  {
    __typename: "CameraInfo",
    id: string,
    cameraId: string,
    cameraName?: string | null,
    purpose?: string | null,
    registrationStatus?: string | null,
    cameraParamVer: string,
    descripation: string,
    path?:  {
      __typename: "Path",
      path: string,
      sort: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    store?:  {
      __typename: "StoresInfo",
      id: string,
      storeName: string,
      storeTelephoneNumber?: string | null,
      storepostCode?: string | null,
      storeAdress?: string | null,
      status: string,
      botNo?: string | null,
      accountID?: string | null,
      expirationDate?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoStoresId?: string | null,
      storesInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    detections?:  {
      __typename: "ModelDetectInfoConnection",
      nextToken?: string | null,
    } | null,
    members?:  {
      __typename: "ModelCameraMembersConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    storesInfoCamerasId?: string | null,
    cameraInfoPathPath?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateCameraInfoMutationVariables = {
  input: UpdateCameraInfoInput,
  condition?: ModelCameraInfoConditionInput | null,
};

export type UpdateCameraInfoMutation = {
  updateCameraInfo?:  {
    __typename: "CameraInfo",
    id: string,
    cameraId: string,
    cameraName?: string | null,
    purpose?: string | null,
    registrationStatus?: string | null,
    cameraParamVer: string,
    descripation: string,
    path?:  {
      __typename: "Path",
      path: string,
      sort: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    store?:  {
      __typename: "StoresInfo",
      id: string,
      storeName: string,
      storeTelephoneNumber?: string | null,
      storepostCode?: string | null,
      storeAdress?: string | null,
      status: string,
      botNo?: string | null,
      accountID?: string | null,
      expirationDate?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoStoresId?: string | null,
      storesInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    detections?:  {
      __typename: "ModelDetectInfoConnection",
      nextToken?: string | null,
    } | null,
    members?:  {
      __typename: "ModelCameraMembersConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    storesInfoCamerasId?: string | null,
    cameraInfoPathPath?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteCameraInfoMutationVariables = {
  input: DeleteCameraInfoInput,
  condition?: ModelCameraInfoConditionInput | null,
};

export type DeleteCameraInfoMutation = {
  deleteCameraInfo?:  {
    __typename: "CameraInfo",
    id: string,
    cameraId: string,
    cameraName?: string | null,
    purpose?: string | null,
    registrationStatus?: string | null,
    cameraParamVer: string,
    descripation: string,
    path?:  {
      __typename: "Path",
      path: string,
      sort: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    store?:  {
      __typename: "StoresInfo",
      id: string,
      storeName: string,
      storeTelephoneNumber?: string | null,
      storepostCode?: string | null,
      storeAdress?: string | null,
      status: string,
      botNo?: string | null,
      accountID?: string | null,
      expirationDate?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoStoresId?: string | null,
      storesInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    detections?:  {
      __typename: "ModelDetectInfoConnection",
      nextToken?: string | null,
    } | null,
    members?:  {
      __typename: "ModelCameraMembersConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    storesInfoCamerasId?: string | null,
    cameraInfoPathPath?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateMemberInfoMutationVariables = {
  input: CreateMemberInfoInput,
  condition?: ModelMemberInfoConditionInput | null,
};

export type CreateMemberInfoMutation = {
  createMemberInfo?:  {
    __typename: "MemberInfo",
    id: string,
    name: string,
    telephoneNumber?: string | null,
    email: string,
    role?: string | null,
    path?:  {
      __typename: "Path",
      path: string,
      sort: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    store?:  {
      __typename: "StoresInfo",
      id: string,
      storeName: string,
      storeTelephoneNumber?: string | null,
      storepostCode?: string | null,
      storeAdress?: string | null,
      status: string,
      botNo?: string | null,
      accountID?: string | null,
      expirationDate?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoStoresId?: string | null,
      storesInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    tenant?:  {
      __typename: "TenantInfo",
      id: string,
      tenantName: string,
      telephoneNumber?: string | null,
      postCode?: string | null,
      tenantAdress?: string | null,
      status: string,
      expirationDate?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    cameras?:  {
      __typename: "ModelCameraMembersConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tenantInfoMembersId?: string | null,
    storesInfoMembersId?: string | null,
    memberInfoPathPath?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateMemberInfoMutationVariables = {
  input: UpdateMemberInfoInput,
  condition?: ModelMemberInfoConditionInput | null,
};

export type UpdateMemberInfoMutation = {
  updateMemberInfo?:  {
    __typename: "MemberInfo",
    id: string,
    name: string,
    telephoneNumber?: string | null,
    email: string,
    role?: string | null,
    path?:  {
      __typename: "Path",
      path: string,
      sort: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    store?:  {
      __typename: "StoresInfo",
      id: string,
      storeName: string,
      storeTelephoneNumber?: string | null,
      storepostCode?: string | null,
      storeAdress?: string | null,
      status: string,
      botNo?: string | null,
      accountID?: string | null,
      expirationDate?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoStoresId?: string | null,
      storesInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    tenant?:  {
      __typename: "TenantInfo",
      id: string,
      tenantName: string,
      telephoneNumber?: string | null,
      postCode?: string | null,
      tenantAdress?: string | null,
      status: string,
      expirationDate?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    cameras?:  {
      __typename: "ModelCameraMembersConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tenantInfoMembersId?: string | null,
    storesInfoMembersId?: string | null,
    memberInfoPathPath?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteMemberInfoMutationVariables = {
  input: DeleteMemberInfoInput,
  condition?: ModelMemberInfoConditionInput | null,
};

export type DeleteMemberInfoMutation = {
  deleteMemberInfo?:  {
    __typename: "MemberInfo",
    id: string,
    name: string,
    telephoneNumber?: string | null,
    email: string,
    role?: string | null,
    path?:  {
      __typename: "Path",
      path: string,
      sort: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    store?:  {
      __typename: "StoresInfo",
      id: string,
      storeName: string,
      storeTelephoneNumber?: string | null,
      storepostCode?: string | null,
      storeAdress?: string | null,
      status: string,
      botNo?: string | null,
      accountID?: string | null,
      expirationDate?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoStoresId?: string | null,
      storesInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    tenant?:  {
      __typename: "TenantInfo",
      id: string,
      tenantName: string,
      telephoneNumber?: string | null,
      postCode?: string | null,
      tenantAdress?: string | null,
      status: string,
      expirationDate?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    cameras?:  {
      __typename: "ModelCameraMembersConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tenantInfoMembersId?: string | null,
    storesInfoMembersId?: string | null,
    memberInfoPathPath?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateDetectInfoMutationVariables = {
  input: CreateDetectInfoInput,
  condition?: ModelDetectInfoConditionInput | null,
};

export type CreateDetectInfoMutation = {
  createDetectInfo?:  {
    __typename: "DetectInfo",
    id: string,
    cameraId: string,
    detectThumb?: string | null,
    detectTime?: string | null,
    detectCode?: string | null,
    details?: string | null,
    camera?:  {
      __typename: "CameraInfo",
      id: string,
      cameraId: string,
      cameraName?: string | null,
      purpose?: string | null,
      registrationStatus?: string | null,
      cameraParamVer: string,
      descripation: string,
      createdAt: string,
      updatedAt: string,
      storesInfoCamerasId?: string | null,
      cameraInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    cameraInfoDetectionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateDetectInfoMutationVariables = {
  input: UpdateDetectInfoInput,
  condition?: ModelDetectInfoConditionInput | null,
};

export type UpdateDetectInfoMutation = {
  updateDetectInfo?:  {
    __typename: "DetectInfo",
    id: string,
    cameraId: string,
    detectThumb?: string | null,
    detectTime?: string | null,
    detectCode?: string | null,
    details?: string | null,
    camera?:  {
      __typename: "CameraInfo",
      id: string,
      cameraId: string,
      cameraName?: string | null,
      purpose?: string | null,
      registrationStatus?: string | null,
      cameraParamVer: string,
      descripation: string,
      createdAt: string,
      updatedAt: string,
      storesInfoCamerasId?: string | null,
      cameraInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    cameraInfoDetectionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteDetectInfoMutationVariables = {
  input: DeleteDetectInfoInput,
  condition?: ModelDetectInfoConditionInput | null,
};

export type DeleteDetectInfoMutation = {
  deleteDetectInfo?:  {
    __typename: "DetectInfo",
    id: string,
    cameraId: string,
    detectThumb?: string | null,
    detectTime?: string | null,
    detectCode?: string | null,
    details?: string | null,
    camera?:  {
      __typename: "CameraInfo",
      id: string,
      cameraId: string,
      cameraName?: string | null,
      purpose?: string | null,
      registrationStatus?: string | null,
      cameraParamVer: string,
      descripation: string,
      createdAt: string,
      updatedAt: string,
      storesInfoCamerasId?: string | null,
      cameraInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    cameraInfoDetectionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateReactionInfoMutationVariables = {
  input: CreateReactionInfoInput,
  condition?: ModelReactionInfoConditionInput | null,
};

export type CreateReactionInfoMutation = {
  createReactionInfo?:  {
    __typename: "ReactionInfo",
    id: string,
    reactionCode: string,
    reactionTime?: string | null,
    detect?:  {
      __typename: "DetectInfo",
      id: string,
      cameraId: string,
      detectThumb?: string | null,
      detectTime?: string | null,
      detectCode?: string | null,
      details?: string | null,
      createdAt: string,
      updatedAt: string,
      cameraInfoDetectionsId?: string | null,
      owner?: string | null,
    } | null,
    member?:  {
      __typename: "MemberInfo",
      id: string,
      name: string,
      telephoneNumber?: string | null,
      email: string,
      role?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoMembersId?: string | null,
      storesInfoMembersId?: string | null,
      memberInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    reactionInfoDetectId?: string | null,
    reactionInfoMemberId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateReactionInfoMutationVariables = {
  input: UpdateReactionInfoInput,
  condition?: ModelReactionInfoConditionInput | null,
};

export type UpdateReactionInfoMutation = {
  updateReactionInfo?:  {
    __typename: "ReactionInfo",
    id: string,
    reactionCode: string,
    reactionTime?: string | null,
    detect?:  {
      __typename: "DetectInfo",
      id: string,
      cameraId: string,
      detectThumb?: string | null,
      detectTime?: string | null,
      detectCode?: string | null,
      details?: string | null,
      createdAt: string,
      updatedAt: string,
      cameraInfoDetectionsId?: string | null,
      owner?: string | null,
    } | null,
    member?:  {
      __typename: "MemberInfo",
      id: string,
      name: string,
      telephoneNumber?: string | null,
      email: string,
      role?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoMembersId?: string | null,
      storesInfoMembersId?: string | null,
      memberInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    reactionInfoDetectId?: string | null,
    reactionInfoMemberId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteReactionInfoMutationVariables = {
  input: DeleteReactionInfoInput,
  condition?: ModelReactionInfoConditionInput | null,
};

export type DeleteReactionInfoMutation = {
  deleteReactionInfo?:  {
    __typename: "ReactionInfo",
    id: string,
    reactionCode: string,
    reactionTime?: string | null,
    detect?:  {
      __typename: "DetectInfo",
      id: string,
      cameraId: string,
      detectThumb?: string | null,
      detectTime?: string | null,
      detectCode?: string | null,
      details?: string | null,
      createdAt: string,
      updatedAt: string,
      cameraInfoDetectionsId?: string | null,
      owner?: string | null,
    } | null,
    member?:  {
      __typename: "MemberInfo",
      id: string,
      name: string,
      telephoneNumber?: string | null,
      email: string,
      role?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoMembersId?: string | null,
      storesInfoMembersId?: string | null,
      memberInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    reactionInfoDetectId?: string | null,
    reactionInfoMemberId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateCameraMembersMutationVariables = {
  input: CreateCameraMembersInput,
  condition?: ModelCameraMembersConditionInput | null,
};

export type CreateCameraMembersMutation = {
  createCameraMembers?:  {
    __typename: "CameraMembers",
    id: string,
    cameraInfoId: string,
    memberInfoId: string,
    cameraInfo:  {
      __typename: "CameraInfo",
      id: string,
      cameraId: string,
      cameraName?: string | null,
      purpose?: string | null,
      registrationStatus?: string | null,
      cameraParamVer: string,
      descripation: string,
      createdAt: string,
      updatedAt: string,
      storesInfoCamerasId?: string | null,
      cameraInfoPathPath?: string | null,
      owner?: string | null,
    },
    memberInfo:  {
      __typename: "MemberInfo",
      id: string,
      name: string,
      telephoneNumber?: string | null,
      email: string,
      role?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoMembersId?: string | null,
      storesInfoMembersId?: string | null,
      memberInfoPathPath?: string | null,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateCameraMembersMutationVariables = {
  input: UpdateCameraMembersInput,
  condition?: ModelCameraMembersConditionInput | null,
};

export type UpdateCameraMembersMutation = {
  updateCameraMembers?:  {
    __typename: "CameraMembers",
    id: string,
    cameraInfoId: string,
    memberInfoId: string,
    cameraInfo:  {
      __typename: "CameraInfo",
      id: string,
      cameraId: string,
      cameraName?: string | null,
      purpose?: string | null,
      registrationStatus?: string | null,
      cameraParamVer: string,
      descripation: string,
      createdAt: string,
      updatedAt: string,
      storesInfoCamerasId?: string | null,
      cameraInfoPathPath?: string | null,
      owner?: string | null,
    },
    memberInfo:  {
      __typename: "MemberInfo",
      id: string,
      name: string,
      telephoneNumber?: string | null,
      email: string,
      role?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoMembersId?: string | null,
      storesInfoMembersId?: string | null,
      memberInfoPathPath?: string | null,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteCameraMembersMutationVariables = {
  input: DeleteCameraMembersInput,
  condition?: ModelCameraMembersConditionInput | null,
};

export type DeleteCameraMembersMutation = {
  deleteCameraMembers?:  {
    __typename: "CameraMembers",
    id: string,
    cameraInfoId: string,
    memberInfoId: string,
    cameraInfo:  {
      __typename: "CameraInfo",
      id: string,
      cameraId: string,
      cameraName?: string | null,
      purpose?: string | null,
      registrationStatus?: string | null,
      cameraParamVer: string,
      descripation: string,
      createdAt: string,
      updatedAt: string,
      storesInfoCamerasId?: string | null,
      cameraInfoPathPath?: string | null,
      owner?: string | null,
    },
    memberInfo:  {
      __typename: "MemberInfo",
      id: string,
      name: string,
      telephoneNumber?: string | null,
      email: string,
      role?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoMembersId?: string | null,
      storesInfoMembersId?: string | null,
      memberInfoPathPath?: string | null,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetPathQueryVariables = {
  path: string,
};

export type GetPathQuery = {
  getPath?:  {
    __typename: "Path",
    path: string,
    sort: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListPathsQueryVariables = {
  path?: string | null,
  filter?: ModelPathFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPathsQuery = {
  listPaths?:  {
    __typename: "ModelPathConnection",
    items:  Array< {
      __typename: "Path",
      path: string,
      sort: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PathBySortQueryVariables = {
  sort: string,
  path?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPathFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PathBySortQuery = {
  pathBySort?:  {
    __typename: "ModelPathConnection",
    items:  Array< {
      __typename: "Path",
      path: string,
      sort: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTenantInfoQueryVariables = {
  id: string,
};

export type GetTenantInfoQuery = {
  getTenantInfo?:  {
    __typename: "TenantInfo",
    id: string,
    tenantName: string,
    telephoneNumber?: string | null,
    postCode?: string | null,
    tenantAdress?: string | null,
    status: string,
    expirationDate?: string | null,
    stores?:  {
      __typename: "ModelStoresInfoConnection",
      nextToken?: string | null,
    } | null,
    members?:  {
      __typename: "ModelMemberInfoConnection",
      nextToken?: string | null,
    } | null,
    path?:  {
      __typename: "Path",
      path: string,
      sort: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tenantInfoPathPath?: string | null,
    owner?: string | null,
  } | null,
};

export type ListTenantInfosQueryVariables = {
  filter?: ModelTenantInfoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTenantInfosQuery = {
  listTenantInfos?:  {
    __typename: "ModelTenantInfoConnection",
    items:  Array< {
      __typename: "TenantInfo",
      id: string,
      tenantName: string,
      telephoneNumber?: string | null,
      postCode?: string | null,
      tenantAdress?: string | null,
      status: string,
      expirationDate?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoPathPath?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStoresInfoQueryVariables = {
  id: string,
};

export type GetStoresInfoQuery = {
  getStoresInfo?:  {
    __typename: "StoresInfo",
    id: string,
    storeName: string,
    storeTelephoneNumber?: string | null,
    storepostCode?: string | null,
    storeAdress?: string | null,
    status: string,
    botNo?: string | null,
    accountID?: string | null,
    path?:  {
      __typename: "Path",
      path: string,
      sort: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    tenant?:  {
      __typename: "TenantInfo",
      id: string,
      tenantName: string,
      telephoneNumber?: string | null,
      postCode?: string | null,
      tenantAdress?: string | null,
      status: string,
      expirationDate?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    cameras?:  {
      __typename: "ModelCameraInfoConnection",
      nextToken?: string | null,
    } | null,
    members?:  {
      __typename: "ModelMemberInfoConnection",
      nextToken?: string | null,
    } | null,
    expirationDate?: string | null,
    createdAt: string,
    updatedAt: string,
    tenantInfoStoresId?: string | null,
    storesInfoPathPath?: string | null,
    owner?: string | null,
  } | null,
};

export type ListStoresInfosQueryVariables = {
  filter?: ModelStoresInfoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStoresInfosQuery = {
  listStoresInfos?:  {
    __typename: "ModelStoresInfoConnection",
    items:  Array< {
      __typename: "StoresInfo",
      id: string,
      storeName: string,
      storeTelephoneNumber?: string | null,
      storepostCode?: string | null,
      storeAdress?: string | null,
      status: string,
      botNo?: string | null,
      accountID?: string | null,
      expirationDate?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoStoresId?: string | null,
      storesInfoPathPath?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCameraInfoQueryVariables = {
  id: string,
};

export type GetCameraInfoQuery = {
  getCameraInfo?:  {
    __typename: "CameraInfo",
    id: string,
    cameraId: string,
    cameraName?: string | null,
    purpose?: string | null,
    registrationStatus?: string | null,
    cameraParamVer: string,
    descripation: string,
    path?:  {
      __typename: "Path",
      path: string,
      sort: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    store?:  {
      __typename: "StoresInfo",
      id: string,
      storeName: string,
      storeTelephoneNumber?: string | null,
      storepostCode?: string | null,
      storeAdress?: string | null,
      status: string,
      botNo?: string | null,
      accountID?: string | null,
      expirationDate?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoStoresId?: string | null,
      storesInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    detections?:  {
      __typename: "ModelDetectInfoConnection",
      nextToken?: string | null,
    } | null,
    members?:  {
      __typename: "ModelCameraMembersConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    storesInfoCamerasId?: string | null,
    cameraInfoPathPath?: string | null,
    owner?: string | null,
  } | null,
};

export type ListCameraInfosQueryVariables = {
  filter?: ModelCameraInfoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCameraInfosQuery = {
  listCameraInfos?:  {
    __typename: "ModelCameraInfoConnection",
    items:  Array< {
      __typename: "CameraInfo",
      id: string,
      cameraId: string,
      cameraName?: string | null,
      purpose?: string | null,
      registrationStatus?: string | null,
      cameraParamVer: string,
      descripation: string,
      createdAt: string,
      updatedAt: string,
      storesInfoCamerasId?: string | null,
      cameraInfoPathPath?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMemberInfoQueryVariables = {
  id: string,
};

export type GetMemberInfoQuery = {
  getMemberInfo?:  {
    __typename: "MemberInfo",
    id: string,
    name: string,
    telephoneNumber?: string | null,
    email: string,
    role?: string | null,
    path?:  {
      __typename: "Path",
      path: string,
      sort: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    store?:  {
      __typename: "StoresInfo",
      id: string,
      storeName: string,
      storeTelephoneNumber?: string | null,
      storepostCode?: string | null,
      storeAdress?: string | null,
      status: string,
      botNo?: string | null,
      accountID?: string | null,
      expirationDate?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoStoresId?: string | null,
      storesInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    tenant?:  {
      __typename: "TenantInfo",
      id: string,
      tenantName: string,
      telephoneNumber?: string | null,
      postCode?: string | null,
      tenantAdress?: string | null,
      status: string,
      expirationDate?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    cameras?:  {
      __typename: "ModelCameraMembersConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tenantInfoMembersId?: string | null,
    storesInfoMembersId?: string | null,
    memberInfoPathPath?: string | null,
    owner?: string | null,
  } | null,
};

export type ListMemberInfosQueryVariables = {
  filter?: ModelMemberInfoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMemberInfosQuery = {
  listMemberInfos?:  {
    __typename: "ModelMemberInfoConnection",
    items:  Array< {
      __typename: "MemberInfo",
      id: string,
      name: string,
      telephoneNumber?: string | null,
      email: string,
      role?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoMembersId?: string | null,
      storesInfoMembersId?: string | null,
      memberInfoPathPath?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDetectInfoQueryVariables = {
  id: string,
};

export type GetDetectInfoQuery = {
  getDetectInfo?:  {
    __typename: "DetectInfo",
    id: string,
    cameraId: string,
    detectThumb?: string | null,
    detectTime?: string | null,
    detectCode?: string | null,
    details?: string | null,
    camera?:  {
      __typename: "CameraInfo",
      id: string,
      cameraId: string,
      cameraName?: string | null,
      purpose?: string | null,
      registrationStatus?: string | null,
      cameraParamVer: string,
      descripation: string,
      createdAt: string,
      updatedAt: string,
      storesInfoCamerasId?: string | null,
      cameraInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    cameraInfoDetectionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListDetectInfosQueryVariables = {
  filter?: ModelDetectInfoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDetectInfosQuery = {
  listDetectInfos?:  {
    __typename: "ModelDetectInfoConnection",
    items:  Array< {
      __typename: "DetectInfo",
      id: string,
      cameraId: string,
      detectThumb?: string | null,
      detectTime?: string | null,
      detectCode?: string | null,
      details?: string | null,
      createdAt: string,
      updatedAt: string,
      cameraInfoDetectionsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetReactionInfoQueryVariables = {
  id: string,
};

export type GetReactionInfoQuery = {
  getReactionInfo?:  {
    __typename: "ReactionInfo",
    id: string,
    reactionCode: string,
    reactionTime?: string | null,
    detect?:  {
      __typename: "DetectInfo",
      id: string,
      cameraId: string,
      detectThumb?: string | null,
      detectTime?: string | null,
      detectCode?: string | null,
      details?: string | null,
      createdAt: string,
      updatedAt: string,
      cameraInfoDetectionsId?: string | null,
      owner?: string | null,
    } | null,
    member?:  {
      __typename: "MemberInfo",
      id: string,
      name: string,
      telephoneNumber?: string | null,
      email: string,
      role?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoMembersId?: string | null,
      storesInfoMembersId?: string | null,
      memberInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    reactionInfoDetectId?: string | null,
    reactionInfoMemberId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListReactionInfosQueryVariables = {
  filter?: ModelReactionInfoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReactionInfosQuery = {
  listReactionInfos?:  {
    __typename: "ModelReactionInfoConnection",
    items:  Array< {
      __typename: "ReactionInfo",
      id: string,
      reactionCode: string,
      reactionTime?: string | null,
      createdAt: string,
      updatedAt: string,
      reactionInfoDetectId?: string | null,
      reactionInfoMemberId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCameraMembersQueryVariables = {
  id: string,
};

export type GetCameraMembersQuery = {
  getCameraMembers?:  {
    __typename: "CameraMembers",
    id: string,
    cameraInfoId: string,
    memberInfoId: string,
    cameraInfo:  {
      __typename: "CameraInfo",
      id: string,
      cameraId: string,
      cameraName?: string | null,
      purpose?: string | null,
      registrationStatus?: string | null,
      cameraParamVer: string,
      descripation: string,
      createdAt: string,
      updatedAt: string,
      storesInfoCamerasId?: string | null,
      cameraInfoPathPath?: string | null,
      owner?: string | null,
    },
    memberInfo:  {
      __typename: "MemberInfo",
      id: string,
      name: string,
      telephoneNumber?: string | null,
      email: string,
      role?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoMembersId?: string | null,
      storesInfoMembersId?: string | null,
      memberInfoPathPath?: string | null,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListCameraMembersQueryVariables = {
  filter?: ModelCameraMembersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCameraMembersQuery = {
  listCameraMembers?:  {
    __typename: "ModelCameraMembersConnection",
    items:  Array< {
      __typename: "CameraMembers",
      id: string,
      cameraInfoId: string,
      memberInfoId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CameraMembersByCameraInfoIdQueryVariables = {
  cameraInfoId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCameraMembersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CameraMembersByCameraInfoIdQuery = {
  cameraMembersByCameraInfoId?:  {
    __typename: "ModelCameraMembersConnection",
    items:  Array< {
      __typename: "CameraMembers",
      id: string,
      cameraInfoId: string,
      memberInfoId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CameraMembersByMemberInfoIdQueryVariables = {
  memberInfoId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCameraMembersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CameraMembersByMemberInfoIdQuery = {
  cameraMembersByMemberInfoId?:  {
    __typename: "ModelCameraMembersConnection",
    items:  Array< {
      __typename: "CameraMembers",
      id: string,
      cameraInfoId: string,
      memberInfoId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreatePathSubscriptionVariables = {
  filter?: ModelSubscriptionPathFilterInput | null,
  owner?: string | null,
};

export type OnCreatePathSubscription = {
  onCreatePath?:  {
    __typename: "Path",
    path: string,
    sort: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdatePathSubscriptionVariables = {
  filter?: ModelSubscriptionPathFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePathSubscription = {
  onUpdatePath?:  {
    __typename: "Path",
    path: string,
    sort: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeletePathSubscriptionVariables = {
  filter?: ModelSubscriptionPathFilterInput | null,
  owner?: string | null,
};

export type OnDeletePathSubscription = {
  onDeletePath?:  {
    __typename: "Path",
    path: string,
    sort: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateTenantInfoSubscriptionVariables = {
  filter?: ModelSubscriptionTenantInfoFilterInput | null,
  owner?: string | null,
};

export type OnCreateTenantInfoSubscription = {
  onCreateTenantInfo?:  {
    __typename: "TenantInfo",
    id: string,
    tenantName: string,
    telephoneNumber?: string | null,
    postCode?: string | null,
    tenantAdress?: string | null,
    status: string,
    expirationDate?: string | null,
    stores?:  {
      __typename: "ModelStoresInfoConnection",
      nextToken?: string | null,
    } | null,
    members?:  {
      __typename: "ModelMemberInfoConnection",
      nextToken?: string | null,
    } | null,
    path?:  {
      __typename: "Path",
      path: string,
      sort: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tenantInfoPathPath?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateTenantInfoSubscriptionVariables = {
  filter?: ModelSubscriptionTenantInfoFilterInput | null,
  owner?: string | null,
};

export type OnUpdateTenantInfoSubscription = {
  onUpdateTenantInfo?:  {
    __typename: "TenantInfo",
    id: string,
    tenantName: string,
    telephoneNumber?: string | null,
    postCode?: string | null,
    tenantAdress?: string | null,
    status: string,
    expirationDate?: string | null,
    stores?:  {
      __typename: "ModelStoresInfoConnection",
      nextToken?: string | null,
    } | null,
    members?:  {
      __typename: "ModelMemberInfoConnection",
      nextToken?: string | null,
    } | null,
    path?:  {
      __typename: "Path",
      path: string,
      sort: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tenantInfoPathPath?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteTenantInfoSubscriptionVariables = {
  filter?: ModelSubscriptionTenantInfoFilterInput | null,
  owner?: string | null,
};

export type OnDeleteTenantInfoSubscription = {
  onDeleteTenantInfo?:  {
    __typename: "TenantInfo",
    id: string,
    tenantName: string,
    telephoneNumber?: string | null,
    postCode?: string | null,
    tenantAdress?: string | null,
    status: string,
    expirationDate?: string | null,
    stores?:  {
      __typename: "ModelStoresInfoConnection",
      nextToken?: string | null,
    } | null,
    members?:  {
      __typename: "ModelMemberInfoConnection",
      nextToken?: string | null,
    } | null,
    path?:  {
      __typename: "Path",
      path: string,
      sort: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tenantInfoPathPath?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateStoresInfoSubscriptionVariables = {
  filter?: ModelSubscriptionStoresInfoFilterInput | null,
  owner?: string | null,
};

export type OnCreateStoresInfoSubscription = {
  onCreateStoresInfo?:  {
    __typename: "StoresInfo",
    id: string,
    storeName: string,
    storeTelephoneNumber?: string | null,
    storepostCode?: string | null,
    storeAdress?: string | null,
    status: string,
    botNo?: string | null,
    accountID?: string | null,
    path?:  {
      __typename: "Path",
      path: string,
      sort: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    tenant?:  {
      __typename: "TenantInfo",
      id: string,
      tenantName: string,
      telephoneNumber?: string | null,
      postCode?: string | null,
      tenantAdress?: string | null,
      status: string,
      expirationDate?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    cameras?:  {
      __typename: "ModelCameraInfoConnection",
      nextToken?: string | null,
    } | null,
    members?:  {
      __typename: "ModelMemberInfoConnection",
      nextToken?: string | null,
    } | null,
    expirationDate?: string | null,
    createdAt: string,
    updatedAt: string,
    tenantInfoStoresId?: string | null,
    storesInfoPathPath?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateStoresInfoSubscriptionVariables = {
  filter?: ModelSubscriptionStoresInfoFilterInput | null,
  owner?: string | null,
};

export type OnUpdateStoresInfoSubscription = {
  onUpdateStoresInfo?:  {
    __typename: "StoresInfo",
    id: string,
    storeName: string,
    storeTelephoneNumber?: string | null,
    storepostCode?: string | null,
    storeAdress?: string | null,
    status: string,
    botNo?: string | null,
    accountID?: string | null,
    path?:  {
      __typename: "Path",
      path: string,
      sort: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    tenant?:  {
      __typename: "TenantInfo",
      id: string,
      tenantName: string,
      telephoneNumber?: string | null,
      postCode?: string | null,
      tenantAdress?: string | null,
      status: string,
      expirationDate?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    cameras?:  {
      __typename: "ModelCameraInfoConnection",
      nextToken?: string | null,
    } | null,
    members?:  {
      __typename: "ModelMemberInfoConnection",
      nextToken?: string | null,
    } | null,
    expirationDate?: string | null,
    createdAt: string,
    updatedAt: string,
    tenantInfoStoresId?: string | null,
    storesInfoPathPath?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteStoresInfoSubscriptionVariables = {
  filter?: ModelSubscriptionStoresInfoFilterInput | null,
  owner?: string | null,
};

export type OnDeleteStoresInfoSubscription = {
  onDeleteStoresInfo?:  {
    __typename: "StoresInfo",
    id: string,
    storeName: string,
    storeTelephoneNumber?: string | null,
    storepostCode?: string | null,
    storeAdress?: string | null,
    status: string,
    botNo?: string | null,
    accountID?: string | null,
    path?:  {
      __typename: "Path",
      path: string,
      sort: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    tenant?:  {
      __typename: "TenantInfo",
      id: string,
      tenantName: string,
      telephoneNumber?: string | null,
      postCode?: string | null,
      tenantAdress?: string | null,
      status: string,
      expirationDate?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    cameras?:  {
      __typename: "ModelCameraInfoConnection",
      nextToken?: string | null,
    } | null,
    members?:  {
      __typename: "ModelMemberInfoConnection",
      nextToken?: string | null,
    } | null,
    expirationDate?: string | null,
    createdAt: string,
    updatedAt: string,
    tenantInfoStoresId?: string | null,
    storesInfoPathPath?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateCameraInfoSubscriptionVariables = {
  filter?: ModelSubscriptionCameraInfoFilterInput | null,
  owner?: string | null,
};

export type OnCreateCameraInfoSubscription = {
  onCreateCameraInfo?:  {
    __typename: "CameraInfo",
    id: string,
    cameraId: string,
    cameraName?: string | null,
    purpose?: string | null,
    registrationStatus?: string | null,
    cameraParamVer: string,
    descripation: string,
    path?:  {
      __typename: "Path",
      path: string,
      sort: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    store?:  {
      __typename: "StoresInfo",
      id: string,
      storeName: string,
      storeTelephoneNumber?: string | null,
      storepostCode?: string | null,
      storeAdress?: string | null,
      status: string,
      botNo?: string | null,
      accountID?: string | null,
      expirationDate?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoStoresId?: string | null,
      storesInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    detections?:  {
      __typename: "ModelDetectInfoConnection",
      nextToken?: string | null,
    } | null,
    members?:  {
      __typename: "ModelCameraMembersConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    storesInfoCamerasId?: string | null,
    cameraInfoPathPath?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateCameraInfoSubscriptionVariables = {
  filter?: ModelSubscriptionCameraInfoFilterInput | null,
  owner?: string | null,
};

export type OnUpdateCameraInfoSubscription = {
  onUpdateCameraInfo?:  {
    __typename: "CameraInfo",
    id: string,
    cameraId: string,
    cameraName?: string | null,
    purpose?: string | null,
    registrationStatus?: string | null,
    cameraParamVer: string,
    descripation: string,
    path?:  {
      __typename: "Path",
      path: string,
      sort: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    store?:  {
      __typename: "StoresInfo",
      id: string,
      storeName: string,
      storeTelephoneNumber?: string | null,
      storepostCode?: string | null,
      storeAdress?: string | null,
      status: string,
      botNo?: string | null,
      accountID?: string | null,
      expirationDate?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoStoresId?: string | null,
      storesInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    detections?:  {
      __typename: "ModelDetectInfoConnection",
      nextToken?: string | null,
    } | null,
    members?:  {
      __typename: "ModelCameraMembersConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    storesInfoCamerasId?: string | null,
    cameraInfoPathPath?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteCameraInfoSubscriptionVariables = {
  filter?: ModelSubscriptionCameraInfoFilterInput | null,
  owner?: string | null,
};

export type OnDeleteCameraInfoSubscription = {
  onDeleteCameraInfo?:  {
    __typename: "CameraInfo",
    id: string,
    cameraId: string,
    cameraName?: string | null,
    purpose?: string | null,
    registrationStatus?: string | null,
    cameraParamVer: string,
    descripation: string,
    path?:  {
      __typename: "Path",
      path: string,
      sort: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    store?:  {
      __typename: "StoresInfo",
      id: string,
      storeName: string,
      storeTelephoneNumber?: string | null,
      storepostCode?: string | null,
      storeAdress?: string | null,
      status: string,
      botNo?: string | null,
      accountID?: string | null,
      expirationDate?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoStoresId?: string | null,
      storesInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    detections?:  {
      __typename: "ModelDetectInfoConnection",
      nextToken?: string | null,
    } | null,
    members?:  {
      __typename: "ModelCameraMembersConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    storesInfoCamerasId?: string | null,
    cameraInfoPathPath?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateMemberInfoSubscriptionVariables = {
  filter?: ModelSubscriptionMemberInfoFilterInput | null,
  owner?: string | null,
};

export type OnCreateMemberInfoSubscription = {
  onCreateMemberInfo?:  {
    __typename: "MemberInfo",
    id: string,
    name: string,
    telephoneNumber?: string | null,
    email: string,
    role?: string | null,
    path?:  {
      __typename: "Path",
      path: string,
      sort: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    store?:  {
      __typename: "StoresInfo",
      id: string,
      storeName: string,
      storeTelephoneNumber?: string | null,
      storepostCode?: string | null,
      storeAdress?: string | null,
      status: string,
      botNo?: string | null,
      accountID?: string | null,
      expirationDate?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoStoresId?: string | null,
      storesInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    tenant?:  {
      __typename: "TenantInfo",
      id: string,
      tenantName: string,
      telephoneNumber?: string | null,
      postCode?: string | null,
      tenantAdress?: string | null,
      status: string,
      expirationDate?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    cameras?:  {
      __typename: "ModelCameraMembersConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tenantInfoMembersId?: string | null,
    storesInfoMembersId?: string | null,
    memberInfoPathPath?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateMemberInfoSubscriptionVariables = {
  filter?: ModelSubscriptionMemberInfoFilterInput | null,
  owner?: string | null,
};

export type OnUpdateMemberInfoSubscription = {
  onUpdateMemberInfo?:  {
    __typename: "MemberInfo",
    id: string,
    name: string,
    telephoneNumber?: string | null,
    email: string,
    role?: string | null,
    path?:  {
      __typename: "Path",
      path: string,
      sort: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    store?:  {
      __typename: "StoresInfo",
      id: string,
      storeName: string,
      storeTelephoneNumber?: string | null,
      storepostCode?: string | null,
      storeAdress?: string | null,
      status: string,
      botNo?: string | null,
      accountID?: string | null,
      expirationDate?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoStoresId?: string | null,
      storesInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    tenant?:  {
      __typename: "TenantInfo",
      id: string,
      tenantName: string,
      telephoneNumber?: string | null,
      postCode?: string | null,
      tenantAdress?: string | null,
      status: string,
      expirationDate?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    cameras?:  {
      __typename: "ModelCameraMembersConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tenantInfoMembersId?: string | null,
    storesInfoMembersId?: string | null,
    memberInfoPathPath?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteMemberInfoSubscriptionVariables = {
  filter?: ModelSubscriptionMemberInfoFilterInput | null,
  owner?: string | null,
};

export type OnDeleteMemberInfoSubscription = {
  onDeleteMemberInfo?:  {
    __typename: "MemberInfo",
    id: string,
    name: string,
    telephoneNumber?: string | null,
    email: string,
    role?: string | null,
    path?:  {
      __typename: "Path",
      path: string,
      sort: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    store?:  {
      __typename: "StoresInfo",
      id: string,
      storeName: string,
      storeTelephoneNumber?: string | null,
      storepostCode?: string | null,
      storeAdress?: string | null,
      status: string,
      botNo?: string | null,
      accountID?: string | null,
      expirationDate?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoStoresId?: string | null,
      storesInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    tenant?:  {
      __typename: "TenantInfo",
      id: string,
      tenantName: string,
      telephoneNumber?: string | null,
      postCode?: string | null,
      tenantAdress?: string | null,
      status: string,
      expirationDate?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    cameras?:  {
      __typename: "ModelCameraMembersConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    tenantInfoMembersId?: string | null,
    storesInfoMembersId?: string | null,
    memberInfoPathPath?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateDetectInfoSubscriptionVariables = {
  filter?: ModelSubscriptionDetectInfoFilterInput | null,
  owner?: string | null,
};

export type OnCreateDetectInfoSubscription = {
  onCreateDetectInfo?:  {
    __typename: "DetectInfo",
    id: string,
    cameraId: string,
    detectThumb?: string | null,
    detectTime?: string | null,
    detectCode?: string | null,
    details?: string | null,
    camera?:  {
      __typename: "CameraInfo",
      id: string,
      cameraId: string,
      cameraName?: string | null,
      purpose?: string | null,
      registrationStatus?: string | null,
      cameraParamVer: string,
      descripation: string,
      createdAt: string,
      updatedAt: string,
      storesInfoCamerasId?: string | null,
      cameraInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    cameraInfoDetectionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateDetectInfoSubscriptionVariables = {
  filter?: ModelSubscriptionDetectInfoFilterInput | null,
  owner?: string | null,
};

export type OnUpdateDetectInfoSubscription = {
  onUpdateDetectInfo?:  {
    __typename: "DetectInfo",
    id: string,
    cameraId: string,
    detectThumb?: string | null,
    detectTime?: string | null,
    detectCode?: string | null,
    details?: string | null,
    camera?:  {
      __typename: "CameraInfo",
      id: string,
      cameraId: string,
      cameraName?: string | null,
      purpose?: string | null,
      registrationStatus?: string | null,
      cameraParamVer: string,
      descripation: string,
      createdAt: string,
      updatedAt: string,
      storesInfoCamerasId?: string | null,
      cameraInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    cameraInfoDetectionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteDetectInfoSubscriptionVariables = {
  filter?: ModelSubscriptionDetectInfoFilterInput | null,
  owner?: string | null,
};

export type OnDeleteDetectInfoSubscription = {
  onDeleteDetectInfo?:  {
    __typename: "DetectInfo",
    id: string,
    cameraId: string,
    detectThumb?: string | null,
    detectTime?: string | null,
    detectCode?: string | null,
    details?: string | null,
    camera?:  {
      __typename: "CameraInfo",
      id: string,
      cameraId: string,
      cameraName?: string | null,
      purpose?: string | null,
      registrationStatus?: string | null,
      cameraParamVer: string,
      descripation: string,
      createdAt: string,
      updatedAt: string,
      storesInfoCamerasId?: string | null,
      cameraInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    cameraInfoDetectionsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateReactionInfoSubscriptionVariables = {
  filter?: ModelSubscriptionReactionInfoFilterInput | null,
  owner?: string | null,
};

export type OnCreateReactionInfoSubscription = {
  onCreateReactionInfo?:  {
    __typename: "ReactionInfo",
    id: string,
    reactionCode: string,
    reactionTime?: string | null,
    detect?:  {
      __typename: "DetectInfo",
      id: string,
      cameraId: string,
      detectThumb?: string | null,
      detectTime?: string | null,
      detectCode?: string | null,
      details?: string | null,
      createdAt: string,
      updatedAt: string,
      cameraInfoDetectionsId?: string | null,
      owner?: string | null,
    } | null,
    member?:  {
      __typename: "MemberInfo",
      id: string,
      name: string,
      telephoneNumber?: string | null,
      email: string,
      role?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoMembersId?: string | null,
      storesInfoMembersId?: string | null,
      memberInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    reactionInfoDetectId?: string | null,
    reactionInfoMemberId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateReactionInfoSubscriptionVariables = {
  filter?: ModelSubscriptionReactionInfoFilterInput | null,
  owner?: string | null,
};

export type OnUpdateReactionInfoSubscription = {
  onUpdateReactionInfo?:  {
    __typename: "ReactionInfo",
    id: string,
    reactionCode: string,
    reactionTime?: string | null,
    detect?:  {
      __typename: "DetectInfo",
      id: string,
      cameraId: string,
      detectThumb?: string | null,
      detectTime?: string | null,
      detectCode?: string | null,
      details?: string | null,
      createdAt: string,
      updatedAt: string,
      cameraInfoDetectionsId?: string | null,
      owner?: string | null,
    } | null,
    member?:  {
      __typename: "MemberInfo",
      id: string,
      name: string,
      telephoneNumber?: string | null,
      email: string,
      role?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoMembersId?: string | null,
      storesInfoMembersId?: string | null,
      memberInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    reactionInfoDetectId?: string | null,
    reactionInfoMemberId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteReactionInfoSubscriptionVariables = {
  filter?: ModelSubscriptionReactionInfoFilterInput | null,
  owner?: string | null,
};

export type OnDeleteReactionInfoSubscription = {
  onDeleteReactionInfo?:  {
    __typename: "ReactionInfo",
    id: string,
    reactionCode: string,
    reactionTime?: string | null,
    detect?:  {
      __typename: "DetectInfo",
      id: string,
      cameraId: string,
      detectThumb?: string | null,
      detectTime?: string | null,
      detectCode?: string | null,
      details?: string | null,
      createdAt: string,
      updatedAt: string,
      cameraInfoDetectionsId?: string | null,
      owner?: string | null,
    } | null,
    member?:  {
      __typename: "MemberInfo",
      id: string,
      name: string,
      telephoneNumber?: string | null,
      email: string,
      role?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoMembersId?: string | null,
      storesInfoMembersId?: string | null,
      memberInfoPathPath?: string | null,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    reactionInfoDetectId?: string | null,
    reactionInfoMemberId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateCameraMembersSubscriptionVariables = {
  filter?: ModelSubscriptionCameraMembersFilterInput | null,
  owner?: string | null,
};

export type OnCreateCameraMembersSubscription = {
  onCreateCameraMembers?:  {
    __typename: "CameraMembers",
    id: string,
    cameraInfoId: string,
    memberInfoId: string,
    cameraInfo:  {
      __typename: "CameraInfo",
      id: string,
      cameraId: string,
      cameraName?: string | null,
      purpose?: string | null,
      registrationStatus?: string | null,
      cameraParamVer: string,
      descripation: string,
      createdAt: string,
      updatedAt: string,
      storesInfoCamerasId?: string | null,
      cameraInfoPathPath?: string | null,
      owner?: string | null,
    },
    memberInfo:  {
      __typename: "MemberInfo",
      id: string,
      name: string,
      telephoneNumber?: string | null,
      email: string,
      role?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoMembersId?: string | null,
      storesInfoMembersId?: string | null,
      memberInfoPathPath?: string | null,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateCameraMembersSubscriptionVariables = {
  filter?: ModelSubscriptionCameraMembersFilterInput | null,
  owner?: string | null,
};

export type OnUpdateCameraMembersSubscription = {
  onUpdateCameraMembers?:  {
    __typename: "CameraMembers",
    id: string,
    cameraInfoId: string,
    memberInfoId: string,
    cameraInfo:  {
      __typename: "CameraInfo",
      id: string,
      cameraId: string,
      cameraName?: string | null,
      purpose?: string | null,
      registrationStatus?: string | null,
      cameraParamVer: string,
      descripation: string,
      createdAt: string,
      updatedAt: string,
      storesInfoCamerasId?: string | null,
      cameraInfoPathPath?: string | null,
      owner?: string | null,
    },
    memberInfo:  {
      __typename: "MemberInfo",
      id: string,
      name: string,
      telephoneNumber?: string | null,
      email: string,
      role?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoMembersId?: string | null,
      storesInfoMembersId?: string | null,
      memberInfoPathPath?: string | null,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteCameraMembersSubscriptionVariables = {
  filter?: ModelSubscriptionCameraMembersFilterInput | null,
  owner?: string | null,
};

export type OnDeleteCameraMembersSubscription = {
  onDeleteCameraMembers?:  {
    __typename: "CameraMembers",
    id: string,
    cameraInfoId: string,
    memberInfoId: string,
    cameraInfo:  {
      __typename: "CameraInfo",
      id: string,
      cameraId: string,
      cameraName?: string | null,
      purpose?: string | null,
      registrationStatus?: string | null,
      cameraParamVer: string,
      descripation: string,
      createdAt: string,
      updatedAt: string,
      storesInfoCamerasId?: string | null,
      cameraInfoPathPath?: string | null,
      owner?: string | null,
    },
    memberInfo:  {
      __typename: "MemberInfo",
      id: string,
      name: string,
      telephoneNumber?: string | null,
      email: string,
      role?: string | null,
      createdAt: string,
      updatedAt: string,
      tenantInfoMembersId?: string | null,
      storesInfoMembersId?: string | null,
      memberInfoPathPath?: string | null,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
