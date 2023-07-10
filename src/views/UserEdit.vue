<script setup lang="ts">
import ProjectButton from '@/components/ProjectButton.vue'
import DefaultCard from '@/components/DefaultCard.vue'
import SmallButton from '@/components/SmallButton.vue'
import { onMounted, ref } from 'vue'
import DefaultInput from '@/components/DefaultInput.vue'
import DropComponent from '@/components/DropComponent.vue'
import BaseModal from '@/components/BaseModal.vue'


const userForm = ref({
  permissions: [
    {
      name: ''
    }
  ],
  attachments: {
    name: '',
    last_name: '',
    birth_date: '',
    files: ''
  },
  contact_information: {
    instagram: '',
    email: '',
    twitter: '',
    facebook: ''
  }
})

onMounted(() => {
  userForm.value.permissions = [
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


const saveProfile = () => {
  alert(JSON.stringify(userForm.value))
  }

const modalActive = ref(false)
const toggleModal = () => {
  modalActive.value = !modalActive.value
}

const blockedAlert = () => {
  alert('Profile is blocked')
  toggleModal()
}
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
        <ProjectButton
          @click="toggleModal"
          btn-color="rgb(199, 156, 38)"
          btn-content="block"
        ></ProjectButton>
        <ProjectButton btn-color="rgb(58, 75, 94)" btn-content="set password"></ProjectButton>
        <ProjectButton
          @click="saveProfile"
          btn-color="rgb(39, 96, 160)"
          btn-content="save"
        ></ProjectButton>
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
                  <tr
                    v-for="permission of userForm.permissions"
                    class="bg-white border-b bg-white-800"
                  >
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

        <template #top class="bg-white">
          <h1 class="attachment px-5 py-7 border-b text-xl bg-white">Załączniki</h1>
        </template>
        <template #bottom>
          <div class="contact flex">
            <div class="column">
              <DefaultInput
                v-model="userForm.attachments.name"
                input-type="text"
                label="Name"
              ></DefaultInput>
              <DefaultInput
                v-model="userForm.attachments.last_name"
                input-type="text"
                label="Last name"
              ></DefaultInput>
              <DefaultInput
                v-model="userForm.attachments.birth_date"
                input-type="date"
                label="Birth date"
              ></DefaultInput>
            </div>
            <DropComponent v-model="userForm.attachments.files" class="mx-10 w-1/2"></DropComponent>
          </div>

          <h1 class="attachment px-5 py-7 border-b text-xl bg-white">Contact information</h1>
          <div class="flex">
            <DefaultInput
              v-model="userForm.contact_information.instagram"
              class="w-1/2"
              input-type="text"
              label="Instagram"
            ></DefaultInput>
            <DefaultInput
              v-model="userForm.contact_information.twitter"
              class="w-1/2"
              input-type="text"
              label="Twitter"
            ></DefaultInput>
          </div>
          <div class="flex">
            <DefaultInput
              v-model="userForm.contact_information.email"
              class="w-1/2"
              input-type="text"
              label="Email"
            ></DefaultInput>
            <DefaultInput
              v-model="userForm.contact_information.facebook"
              class="w-1/2"
              input-type="text"
              label="Facebook"
            ></DefaultInput>
          </div>
        </template>

      </DefaultCard>
    </div>
    <BaseModal @close="toggleModal" :modalActive="modalActive">
      <template #header>Are you sure you want to block the account?</template>
      <template #default>
        <SmallButton @click="blockedAlert" btn-content="yes" btn-color="red" />
        <SmallButton @click="toggleModal" btn-content="no" btn-color="blue" />
      </template>
    </BaseModal>
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

.attachment {
  color: blue;
}
</style>
