<template>
  <div class="flex flex-col space-y-4">
    <div class="flex flex-col space-y-1">
      <label for="firstName" class="text-gray-600">First name</label>
      <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4  outline-none" id="firstName" />
    </div>
    <div class="flex flex-col space-y-1">
      <label for="lastName" class="text-gray-600">Last name</label>
      <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4  outline-none"  id="lastName" />
    </div>
    <div class="flex flex-col space-y-1">
      <label for="login" class="text-gray-600">Login</label>
      <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4  outline-none" v-model="$auth.user.login" id="login" />
    </div>
    <div class="flex flex-col space-y-1">
     <label for="phone" class="text-gray-600">Phone number</label>
     <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4  outline-none" id="phone" />
   </div>
    <div class="flex flex-col space-y-1">
     <label for="address" class="text-gray-600">Address</label>
     <div id="address" class="flex w-full space-y-5 md:space-y-0 md:space-x-5 flex-col md:flex-row">
       <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none w-full md:w-7/12" v-model="street" placeholder="Street"/>
       <div class="flex w-full md:w-5/12 space-x-5">
         <input type="number" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none w-1/3" v-model="zip" placeholder="Zip code"/>
         <input type="text" class="bg-gray-50 rounded-md border-gray-100 ring-2 ring-gray-100 focus:ring-indigo-500 py-2 px-4 outline-none w-2/3" v-model="city" placeholder="City"/>
       </div>
     </div>
   </div>
    <button class="bg-indigo-500 hover:bg-indigo-600 p-3 text-white rounded-md w-full lg:w-1/4">Update</button>
  </div>
</template>

<script>
export default {
  name: "Information",
  data() {
    return {
      street: "",
      zip: "",
      city: "",
    }
  },
}
</script>

<style scoped>

</style>
