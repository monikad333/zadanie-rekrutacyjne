<script setup lang="ts">
import ProjectButton from '@/components/ProjectButton.vue'
import DefaultCard from '@/components/DefaultCard.vue'
import SmallButton from '@/components/SmallButton.vue'
import { onMounted, ref } from 'vue'

const permissions = ref()

onMounted(() => {
  permissions.value = [
    {
      name: 'Script'
    },
    {
      name: 'Props'
    },
    {
      name: 'Screens'
    },
    {
      name: 'Money'
    },
    {
      name: 'Stunt'
    }
  ]
})
</script>

<template>
  <div class="view">
    <div class="row">
      <div class="user">
        <p class="user-edit">User / User Edit</p>
        <h1 class="username text-3xl">Hugh Jackman</h1>
      </div>
      <div class="btns">
        <ProjectButton btn-color="rgb(197, 64, 64)" btn-content="delete"></ProjectButton>
        <ProjectButton btn-color="rgb(199, 156, 38)" btn-content="block"></ProjectButton>
        <ProjectButton btn-color="rgb(58, 75, 94)" btn-content="set password"></ProjectButton>
        <ProjectButton btn-color="rgb(39, 96, 160)" btn-content="save"></ProjectButton>
      </div>
    </div>
    <div class="row">
      <DefaultCard left-content="Logs" right-content="Permissions" class="card">
        <template #top>
          <h1 class="text-2xl px-10 py-10">Role: <span class="text-lg">Performer</span></h1>
        </template>
        <template #bottom
          ><div class="table-section bg-white border-t border-gray-300">
            <div class="relative overflow-x-auto px-2">
              <table class="w-full text-sm text-left text-gray-500 text-gray-400">
                <thead
                  class="text-xs border-b text-gray-700 bg-gray-50 bg-white-700 border-gray-700"
                >
                  <tr>
                    <th scope="col" class="px-6 py-3 w-1/2">Object</th>
                    <th scope="col" class="px-6 py-3 w-1/2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b bg-white-800">
                    <th
                      scope="row"
                      class="px-6 uppercase py-4 font-semibold text-gray-700 whitespace-nowrap text-gray"
                    >
                      movies
                    </th>
                    <!-- <td class="px-6 py-4">Silver</td> -->
                  </tr>
                  <tr v-for="permission of permissions" class="bg-white border-b bg-white-800">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-xs text-gray-900 whitespace-nowrap text-gray"
                    >
                      {{ permission.name }}
                    </th>
                    <td class="px-6 py-4 row space-x-1">
                      <SmallButton btn-color="#d7d7d7" btn-content="create"></SmallButton>
                      <SmallButton btn-color="#75a9c8" btn-content="read"></SmallButton>
                      <SmallButton btn-color="#1b8e88" btn-content="update"></SmallButton>
                      <SmallButton btn-color="#ce1d1d" btn-content="delete"></SmallButton>
                    </td>
                  </tr>
                  
                </tbody>
              </table>
            </div></div
        ></template>
      </DefaultCard>
      <DefaultCard left-content="Załączniki" right-content="Historia" class="card-right">
        vsadvcsdvsd
      </DefaultCard>
    </div>
  </div>
</template>

<style scoped>
.view {
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  padding-right: 15px;
  gap: 10px;
}
.row {
  display: flex;
}
.btns {
  display: flex;
  justify-content: flex-end;
  right: 0%;
  gap: 10px;
  width: 50%;
}
.user {
  padding-left: 20px;
  width: 50%;
  justify-content: flex-start;
}

.user-edit {
  font-size: 10px;
  color: rgb(68, 68, 68);
}

.username {
  color: royalblue;
}
.card {
  margin-right: 5px;
  width: 60%;
}

.card-right {
  margin-right: 5px;
  width: 40%;
}

span {
  color: rgb(57, 57, 168);
}
</style>
