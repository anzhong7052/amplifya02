<template>
  <div>
    <div class="container">
      <div class="handle-box">
        <el-button type="primary" :icon="Plus">追加</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="Notification">
import {ref, reactive, toRefs} from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import { Delete, Edit, Search, Plus, Download, ZoomIn} from '@element-plus/icons-vue';
import type { FormInstance } from 'element-plus'

const loading = ref(true);
const title = ref("");
const editVisible = ref(false);
const isEdit = ref(false);

</script>

<style scoped>
.handle-box {
  margin-bottom: 20px;
}
.red {
  color: #F56C6C;
}
</style>
