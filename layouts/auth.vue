<script lang="ts" setup></script>

<template>
  <q-layout class="page-login">
    <q-card class="container">
      <q-card-section class="center relative-position">
        <q-avatar
          class="absolute-top avatar"
          size="120px"
          color="primary"
          text-color="white"
        >
          <q-icon name="account_circle" size="2em" />
        </q-avatar>
      </q-card-section>
      <q-card-section class="q-mt-lg">
        <div class="q-mt-sm">
          <slot></slot>
        </div>
      </q-card-section>
    </q-card>
  </q-layout>
</template>

<style scoped>

.page-login {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url("/img/reloj.jfif");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.container {
  width: 100%;
  margin:20px;
  max-width: 400px;
  background-color: #203978ee;
}
.avatar {
  left: 50%;
  transform: translateX(-50%);
  margin-top: -60px;
}
</style>