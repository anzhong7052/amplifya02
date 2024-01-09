<template>
    <div class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            :default-active="onRoutes"
            :collapse="sidebar.collapse"
            background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#20a0ff"
            unique-opened
            router
        >
            <template v-for="item in items">
                <template v-if="'subs' in item">
                   <el-sub-menu :index="item.index" :key="item.index" v-permiss="item.permiss">
                       <template #title>
                           <el-icon>
                               <component :is="item.icon"></component>
                           </el-icon>
                           <span>{{ item.title }}</span>
                       </template>
                       <template v-for="subItem in item.subs">
                          <el-sub-menu
                               v-if="'subs' in subItem"
                               :index="subItem.index"
                               :key="subItem.index"
                               v-permiss="item.permiss"
                           >
                               <template #title>{{ subItem.title }}</template>
                               <!-- <el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i" :index="threeItem.index">
                                   {{ threeItem.title }}
                               </el-menu-item> -->
                           </el-sub-menu>
                          <el-menu-item v-else :index="subItem.index" :key="subItem.index" v-permiss="item.permiss">
                            <el-icon>
                              <component :is="subItem.icon"></component>
                            </el-icon>   
                            {{ subItem.title }}
                          </el-menu-item>
                       </template>
                   </el-sub-menu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index" v-permiss="item.permiss">
                        <el-icon>
                            <component :is="item.icon"></component>
                        </el-icon>
                        <template #title>{{ item.title }}</template>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useSidebarStore } from '../store/sidebar';
import { useRoute } from 'vue-router';

const items = [
    {
      icon: 'aim',
      index: '/corporationInfo',
      title: '法人管理（契約者）',
      permiss: '1',
    },
  {
    icon: 'basketball',
    index: '/shop',
    title: '店舗管理',
    permiss: '1',
  },
  {
    icon: 'avatar',
    index: '/user',
    title: 'ユーザー管理',
    permiss: '1',
  },
  {
    icon: 'list',
    index: '/camera',
    title: 'カメラ管理',
    permiss: '1',
  },
  {
    icon: 'message',
    index: '/message',
    title: '検知管理',
    permiss: '1',
  },
  // {
  //   icon: 'Edit',
  //   index: '/test',
  //   title: 'test',
  //   permiss: '1',
  // },

  {
    icon: 'setting',
    index: '/set',
    title: '設定',
    permiss: '1',
    subs :[
     
      {
        icon: 'document',
        index: '/set/terms_of_service',
        title: '利用規約設定',
        permiss: '1',
      },
    ]
  },
];

const route = useRoute();
const onRoutes = computed(() => {
    return route.path;
});

const sidebar = useSidebarStore();
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 180px;
}
.sidebar > ul {
    height: 100%;
}
</style>
