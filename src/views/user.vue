<template>
  <div>
    <div class="container">
      <div class="handle-box">
        <el-button type="primary" @click="handleAdd()" :icon="Plus">追加</el-button>
      </div>
      <el-table
          :data="tableData"
          :key="key"
          ref="multipleTable"
          row-key="id"
          header-cell-class-name="table-header"
      >
<!--        <el-table-column prop="id" label="ID" width="55" align="center"></el-table-column>-->
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="email" label="メールアドレス"></el-table-column>
        <el-table-column prop="telephoneNumber" label="電話" align="center"></el-table-column>
        <el-table-column prop="role" label="権限" align="center"></el-table-column>
        <el-table-column prop="memberInfoPathPath" label="ストア" align="center"></el-table-column>
        <el-table-column label="操作" width="220" align="center">
          <template #default="scope">
            <el-button text :icon="Edit" @click="handleEdit(scope.row)" v-permiss="15">
              編集
            </el-button>
            <el-button v-if="scope.row.top" text :icon="Edit" @click="handleAdd(scope.row)" v-permiss="15">
              追加
            </el-button>
            <el-button text :icon="Delete" class="red" @click="handleDelete(scope.row)" v-permiss="16">
              削除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 编辑弹出框 -->
    <el-dialog 
    :title="title" 
    v-model="editVisible" 
    width="600px"     
    destroy-on-close
    lock-scroll
    draggable
    :fullscreen =false
    :close-on-click-modal="false"
    :show-close="false"
    top="0">
      <el-form label-width="140px" ref="formRef" style="max-width: 460px" :model="form" :rules="rules">
          <el-form-item v-if="form.id" label="ID" prop="id">
            <el-input disabled v-model="form.id"></el-input>
          </el-form-item>
   
          <el-form-item label="姓名" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
      
            <el-form-item label="メールアドレス" prop="email">
              <el-input v-model="form.email" placeholder="email" />
            </el-form-item>
      
            <el-form-item label="電話番号" prop="telephoneNumber">
              <el-input v-model="form.telephoneNumber" placeholder="telephoneNumber" />
            </el-form-item>
        
            <el-form-item label="契約者" prop="tenant">
              <el-select v-model="form.tenant" clearable filterable placeholder="Select" @change="tenantChanged">
                <el-option
                  v-for="item in tenantData"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
          </el-form-item>
     
            <el-form-item label="店舗" prop="store">
              <el-select v-model="form.store" clearable placeholder="Select">
                <el-option
                  v-for="item in storeData"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
      
            <el-form-item label="権限" prop="role">
              <el-select v-model="form.role" placeholder="Select">
                <el-option v-if="groups.findIndex(i => i=='Admins') >=0" key="Admins" label="スーパー管理者" value="Admins" />
                <el-option key="Managers" label="管理者" value="Managers" />
                <el-option key="Users" label="ユーザー" value="Users" />
              </el-select>
            </el-form-item>
      
      </el-form>
      <template #footer>
				<span class="dialog-footer">
					<el-button @click=" resetForm, clearForm(formRef), editVisible = false">キャンセル</el-button>
					<el-button type="primary" @click="submitForm(formRef)">確　認</el-button>
				</span>
      </template>
    </el-dialog>
  </div>
</template>


<script setup lang="ts" name="category">
import {ref, reactive, computed, defineComponent} from 'vue';
import {ElMessage, ElMessageBox, FormInstance, FormRules} from 'element-plus';
import { Delete, Edit, Search, Plus, Download, ZoomIn} from '@element-plus/icons-vue';
import {
  listMemberInfo, 
  getAllTenants, 
  getAllStores, 
  addUserToDb, 
  deleteUser,
  deleteUserFromCamera,
  getManagedCamera,
  queryUserInfo} from '/@/api/user';
import { post } from 'aws-amplify/api'
import { fetchAuthSession } from 'aws-amplify/auth';

const title = ref("");
const dialogVisible = ref(false)
const formRef = ref()


const validateEmail = (rule: any, value: any, callback: any) =>{
  console.log("validateEmail:", value)
  const regex = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/i; // 使用单词边界和负向零宽断言
  if (!regex.test(value)) {
    callback(new Error('メールアドレスを入力してください。'))
  } 

  checkUser(value)
  .then(res => {
    if(res) {
      callback(new Error("メールアドレスは既に登録されました!"))
    } else {
      callback()
    }
  }).catch(()=>{
    callback()
  }) 
}

const rules: FormRules = {
  name: [{required: true, message: '', trigger: 'blur'}],
  email: [{required: true, message: '', trigger: 'blur'},
      { validator: validateEmail, trigger: 'blur', } ],
  tenant: [{required: true, message: '', trigger: 'blur'}],
  role: [{required: true, message: '', trigger: 'blur'}],
};

let groups = reactive<string[]>([])
let path = ref("")
const initGroup = () => {
  // let token = (await fetchAuthSession()).tokens;
  // let grps = token?.accessToken.payload['cognito:groups']?.toString().split(',');
  // if(grps){
  //   groups = grps;
  // }
  let grp = localStorage.getItem("userGroup");
  console.log('initGroup grp:', grp);
  if(grp) {
    // groups = grp.split(',');
    // console.log('initGroup groups:', groups);
    // super user
    if(grp.indexOf("/") >=0){
      path.value = "/";
    
    } 
  }
  console.log('initGroup p:', path.value);
  let user = localStorage.getItem("userInfo");
  console.log('initGroup user:', user);
  if(user && !path.value) {
        let userInfo =JSON.parse(user)
        console.log('initGroup userInfo:', userInfo);
        path.value = userInfo.memberInfoPathPath as string;
      }
  console.log('initGroup path:', path.value);
}
const initPageData =  async() => {
  const tenants = (await getAllTenants(path.value)).data.listTenantInfos;
      tenantData = [];
      tenants.items.forEach(item =>{
        tenantData.push({value: item.id, label: item.tenantName, path: item.tenantInfoPathPath})
      })
}
const checkUser =  async(email: string) => {
  const users = (await queryUserInfo(email)).data.listMemberInfos.items;
  if(users.length > 0) {
    return true;
  }
  return false
}
// const getAllApi = async () => {
//   // await Promise.all([getCount(), getProject(), getDynamic(), getTeam(), getRadar()])
//   // loading.value = false
// }

initGroup()

const tableData = ref([]);
let key = 0;
interface option {
  value: string;
  label: string;
  path: string|null|undefined;
}
let tenantData: option[] = [];
let storeData: option[] = [];
// 获取表格数据
const getData = async() => {
  let token = (await fetchAuthSession()).tokens;
 console.log('token:', token);
 console.log('accessToken:', token?.accessToken);
 console.log('payload:', token?.accessToken.payload);
 console.log('path:', path);
 console.log('path:', path.value);
//  const tenants = (await getAllTenants()).data.listTenantInfos;
//   console.log("tenants", tenants);
//   tenantData = [];
//   tenants.items.forEach(item =>{
//     tenantData.push({value: item.id, label: item.tenantName})
//   })
  await initPageData();
  // consts = getAllStores().data;
  listMemberInfo(path.value).then(res => {
    const data = res.data.listMemberInfos;
    console.log(data);
    data.items.forEach((e: any) =>{
      console.log('items',e);
      // e.children.forEach((e1: { parentID: any; }) =>{
      //   e1.parentID = e.id;
      // })
    })
    tableData.value =  data.items;
    console.log(tableData.value)
    key = Math.random();
  });

};
getData();

const tenantChanged = async() => {
  const tenant = form.tenant;
  console.log("tenantChanged", tenant);
  storeData = [];
  form.store="";
  if(!tenant){
    return;
  }
  const stores = (await getAllStores(tenant)).data.listStoresInfos;
  console.log("stores", stores);

  stores.items.forEach(item => {
    storeData.push({value:item.id, label: item.storeName, path: item.storesInfoPathPath});
  })
}
// 删除操作
const handleDelete = (row : any) => {
  // 二次确认删除
  ElMessageBox.confirm('削除してもよろしいですか', '', {
    type: 'warning'
  }).then(async() => {
      // Cognitoユーザーを削除
      deleteUserToCogito(row.id);
      // カメラと関連のユーザーデーターを削除
      let cameras = await getManagedCamera(row.id);
      console.log("delete cameras:", cameras);
      cameras.data.listCameraMembers.items.forEach(async (c) => {
        console.log("delete camera:", c);
        await　deleteUserFromCamera(c.id)
      })
      // ユーザーを削除
      deleteUser(row.id).then(data => {
          console.log(data)
          console.log('削除しました')
          ElMessage.success('削除が完了しました');
          getData();
        }).catch(response => {
          console.log('削除失敗',response)
        })
      }).catch(() => {});
};

// 表格编辑时弹窗和保存
const editVisible = ref(false);
let isAdd = false;
let isTop = false;
let form = reactive({
  id:'',
  name: '',
  email: '',
  telephoneNumber: '',
  memberInfoPathPath: '',
  tenant: '',
  store: '',
  role: ''
});
const resetForm = () => {
  form.id = "";
  form.name = "";
  form.email = "";
  form.telephoneNumber = "";;
  form.memberInfoPathPath = "";
  form.role = "";
}
const handleAdd = (row?: any) => {
  title.value = (row ? row.localName : "ユーザー") + "追加"
  resetForm();
  editVisible.value = true;
  isAdd = true;
  isTop = row ? false : true;
};

const handleEdit = (row: any) => {
  console.log(row)
  title.value = "ユーザー編集"
  form.id = row.id;
  form.name = row.name;
  form.email = row.email ? row.email:"";
  form.telephoneNumber = row.telephoneNumber;
  form.memberInfoPathPath = row.memberInfoPathPath;
  form.role = row.role;
  isAdd = false;
  editVisible.value = true;
};
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      save();
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}
const clearForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

async function addToGroup(userName: string, groupName: string) { 
  let apiName = 'AdminQueries';
  let path = '/addUserToGroup';
  let options = {
      body: {
        "username" : userName,
        "groupname": groupName
      }, 
      headers: {
        'Content-Type' : 'application/json',
        Authorization: `${(await fetchAuthSession()).tokens?.accessToken.toString()}`
      } 
  }
  return await post({apiName, path, options}).response;
}
async function addUserToCogito(email: string,  attributes:any) { 
  let apiName = 'AdminQueries';
  let path = '/createUser';
  let options = {
      body: {
        "email" : email,
        "password": randomStr(10),
        "attributes": attributes
      }, 
      headers: {
        'Content-Type' : 'application/json',
        Authorization: `${(await fetchAuthSession()).tokens?.accessToken.toString()}`
      } 
  }
  return await post({apiName, path, options}).response;
}

async function deleteUserToCogito(userName: string) { 
  let apiName = 'AdminQueries';
  let path = '/deleteUser';
  let options = {
      body: {
        "userId" : userName
   
      }, 
      headers: {
        'Content-Type' : 'application/json',
        Authorization: `${(await fetchAuthSession()).tokens?.accessToken.toString()}`
      } 
  }
  return await post({apiName, path, options}).response;
}
async function getUser(email: string) {
    const apiName = 'AdminQueries';
    const path = '/getUser';
    let options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${(await fetchAuthSession()).tokens?.accessToken.toString()}`
      },
      body: {
        username: email,
      },
    }
    return await post({apiName, path, options}).response;
  }

const save = async() => {
  let that = this;
  // const formData = new FormData();
  // const url = '/api/v1/category' + (isAdd ? '': '/' + form.id);
  console.log('--save--isAdd:',isAdd);
  // console.log(url);
  console.log('--save--form:',form);
  if(isAdd){
    const attributes = [
      {email: form.email},
      {email_verified: false},
      {name: form.name},
      {telephone: form.telephoneNumber}
    ]
    console.log('attributes', attributes);
    let res = await addUserToCogito(form.email, attributes);
    // let response = await res.;
    console.log('addUserToCogito',res.statusCode);
    // console.log('addUserToCogito response',response);
    // console.log('addUserToCogito response',response.statusCode);
    // response.body.json.
    // console.log('addUserToCogito response',response.body.json.toString());
    if(res.statusCode == 200) {
      const data = await res.body.json();
      console.log('addUserToCogito response',data);
      console.log('addUserToCogito response user',data?.User); 
      console.log('addUserToCogito response Username',data?.User.Username); 
        // const resp = await getUser(form.email);
        // let userResp = await res.response;
        // console.log('userResp',userResp);
        // console.log('userResp',userResp.body);
        // add the user to group
        res = await addToGroup(data?.User.Username, form.role);
        console.log('addUserToGroup',res);
        let memberPath = '';
        if(form.store) {
         const index = storeData.findIndex(t => t.value ==form.store );
         memberPath = storeData[index].path!;
        } else {
          const index = tenantData.findIndex(t => t.value ==form.store );
         memberPath = tenantData[index].path!;
        }
        const userDetail = {
          id: data?.User.Username,
          name: form.name,
          telephoneNumber: form.telephoneNumber,
          email: form.email,
          storesInfoMembersId: form.store,
          tenantInfoMembersId: form.tenant,
          memberInfoPathPath: memberPath,
          role: form.role
        }
      addUserToDb(userDetail).then(data => {
        console.log(data)
        ElMessage.success('登録が完了しました');
        getData();
        // location.reload()
      }).catch(response => {
        console.log(response)
        console.log('登録が失败')
      })
    } else {
      const data = await res.body.json();
      console.log('addUserToCogito fail:',data);
      ElMessage.error('登録が失败しました');
    }
  }else{ //Edit
    // editCategory(form, form.id).then(data => {
    //   console.log(data)
    //   console.log('上传成功')
    //   ElMessage.success('登録が完了しました');
    //   getData();
    //   // location.reload()
    // }).catch(response => {
    //   console.log('上传失败')
    // })
  }
  editVisible.value = false;
};
function randomStr(n: number): string {
  const randomSource: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  // Select 1 lowercase
  let password: string = getRandomChar('abcdefghijklmnopqrstuvwxyz');
  // Select 1 uppercase
  password += getRandomChar('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  // Select 1 digit
  password += getRandomChar('0123456789');
  // Select 1 special symbol
  password += getRandomChar('!@#$%^&*()-_=+[]{}|;:\'",.<>?/`~');

  // Generate other characters
  for (let i: number = 0; i < n - 4; i++) {
    password += getRandomChar(randomSource);
  }

  // Shuffle all characters
  password = shuffleString(password);
  return password;
}

function getRandomChar(source: string): string {
  const index: number = Math.floor(Math.random() * source.length);
  return source.charAt(index);
}

function shuffleString(str: string): string {
  const array: string[] = str.split('');
  for (let i: number = array.length - 1; i > 0; i--) {
    const j: number = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.join('');
}



</script>

<style scoped>
.handle-box {
  margin-bottom: 20px;
}
.red {
  color: #F56C6C;
}
.table-td-thumb {
  display: block;
  margin: auto;
  width: 80px;
  height: 80px;
}
</style>

<style>
/*编译后，要保证该样式在全局有效 */
.disabled .el-upload--picture-card {
  display: none;
}
</style>

../api/index