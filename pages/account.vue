<template>
  <section class="container mx-auto p-5 md:w-screen">
    <h1 class="text-3xl">Welcome back, {{$auth.user.login}}</h1>
    <div class="flex flex-col items-center lg:items-start space-y-10 lg:space-y-0 lg:flex-row lg:space-x-10 mt-5">
      <AccountSidebar class="w-full lg:w-1/5" @logout="$auth.logout()"/>
      <NuxtChild class="w-full lg:w-4/5" />
    </div>
  </section>
</template>

<script>
export default {
  name: "Account",
  middleware: 'auth',
}
</script>

<style scoped>

</style>
