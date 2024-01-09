import { generateClient } from 'aws-amplify/api';
import { 
  listMemberInfos, 
  listTenantInfos, 
  listStoresInfos, 
  listCameraMembers,
  getMemberInfo } from '/@/graphql/queries';
import { createMemberInfo, deleteMemberInfo, deleteCameraMembers } from '/@/graphql/mutations';


const client = generateClient();
export const listMemberInfo = (path : string) => {

   let query = {filter:{memberInfoPathPath: {beginsWith: path}}}

    const result = client.graphql({
        query: listMemberInfos,
        variables: query
      });
    return result;
};

export const getAllTenants = async(path : string) => {
  var query = {}
  if(path) {
    query = {filter:{tenantInfoPathPath: {beginsWith: path}}}
  }
  // filter: {tenantInfoPathPath: {beginsWith: "/"}}
  const result = await client.graphql({
      query: listTenantInfos,
      variables: query
    });
  return result;
};

export const getAllStores = async(tenantId:string) => {
  var query = {}
  if(tenantId) {
    query = {filter:{tenantInfoStoresId: {eq: tenantId}}}
  }
  console.log("query:", query)
  const result = await client.graphql({
      query: listStoresInfos,
      variables: query
    });
    console.log("getAllStores result:", result)
  return result;
};

export const addUserToDb = async(userDetails:any) => {
  console.log("input:", userDetails)
  const result = await client.graphql({
      query: createMemberInfo,
      variables: { input: userDetails }
    });
    console.log("addUserToDb result:", result)
  return result;
};
export const deleteUser= async(id: string) => {
  console.log("input:", id)
  const result = await client.graphql({
      query: deleteMemberInfo,
      variables: { input: {id: id} }
    });
    console.log("deleteUser result:", result)
  return result;
};
export const deleteUserFromCamera = async(id: string) => {
  console.log("input:", id)
  const result = await client.graphql({
      query: deleteCameraMembers,
      variables: { input: {id: id} }
    });
    console.log("deleteUserFromCamera result:", result)
  return result;
};
export const queryUserInfo = async(email: string) => {
  console.log("input:", email)
  let query = {filter:{email: {eq: email}}}
  const result = await client.graphql({
      query: listMemberInfos,
      variables: query
    });
    console.log("deleteUser result:", result)
  return result;
};

export const getManagedCamera = async(memberId: string) => {
  console.log("input:", memberId)
  let query = {filter:{memberInfoId: {eq: memberId}}}
  const result = await client.graphql({
      query: listCameraMembers,
      variables: query
    });
    console.log("deleteUser result:", result)
  return result;
};

export const getUserInfo = async(id: string) => {
  console.log("input:", id)
  let query = {id:  id}
  const result = await client.graphql({
      query: getMemberInfo,
      variables: query
    });
    console.log("deleteUser result:", result)
  return result.data;
};