
module.exports.createDetectsMutation = /* GraphQL */ `
  mutation CreateDetects($input: CreateDetectInfoInput!) {
    createDetectInfo(input: $input) {
      id
    }
  }
`;

module.exports.getCameraInfo = /* GraphQL */ `
  query GetCamera($id: ID!) {
    getCameraInfo(id: $id) {
      cameraId
      cameraInfoPathPath
      cameraName
      cameraParamVer
      purpose
      registrationStatus
      storesInfoCamerasId
      members {
        items {
          memberInfo {
            name
            email
            id
            memberInfoPathPath
          }
        }
      }
      store {
        botNo
        accountID
        createdAt
        expirationDate
        id
        status
        storeAdress
        storeName
        storeTelephoneNumber
        storepostCode
        storesInfoPathPath
        tenantInfoStoresId
      }
    }
  }
`;
