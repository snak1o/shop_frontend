<template>
  <div class="container mx-auto p-5">
    <h2 class="text-3xl text-gray-900">
      New products
    </h2>

    <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <ProductCard
        class="group relative"
        v-for="product in products"
        :key="product.name"
        :product="product"
      />
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      products: [
        {
          "id": 1,
          "name": "Buster S 2022 boat cover",
          "description": "описание для новой лодочки",
          "categoryId": 1,
          "tags": [
            {
              "name": "tag1"
            },
            {
              "name": "tag2"
            }
          ],
          "photos": ["https://i.yapx.cc/S9FfL.png",
            "https://sun9-87.userapi.com/impg/njbUTyspmS4uw6tYZ2_8apIq4q5UpRe1orW5tQ/grVbY0xoK8E.jpg?size=640x640&quality=95&sign=8742a78348a45f2117e938c8261924fd&type=album",],
          "colors": [
            {
              "name": "Dark Gray",
              "hex": "#4a4848",
              "id": 1
            },
            {
              "name": "Red",
              "hex": "#ff0000",
              "id": 3
            }
          ],
          "price": 32.26,
          "pricealv": 250,
          "sku": "F23"
        },
        {
          "id": 1,
          "name": "Buster XS Pro boat cover",
          "description": "описание для новой лодочки",
          "categoryId": 1,
          "tags": [
            {
              "name": "tag1"
            },
            {
              "name": "tag2"
            }
          ],
          "photos": ["https://i.yapx.ru/S9F2Y.png",
            "https://sun9-87.userapi.com/impg/njbUTyspmS4uw6tYZ2_8apIq4q5UpRe1orW5tQ/grVbY0xoK8E.jpg?size=640x640&quality=95&sign=8742a78348a45f2117e938c8261924fd&type=album",],
          "colors": [
            {
              "name": "Dark Gray",
              "hex": "#4a4848",
              "id": 1
            },
            {
              "name": "Red",
              "hex": "#ff0000",
              "id": 3
            }
          ],
          "price": 32.26,
          "pricealv": 320,
          "sku": "F23"
        },
        {"id": 1,
          "name": "новая лодочка",
          "description": "описание для новой лодочки",
          "categoryId": 1,
          "tags": [
            {
              "name": "tag1"
            },
            {
              "name": "tag2"
            }
          ],
          "photos": ["https://i.yapx.ru/S9F4N.png",
            "https://sun9-87.userapi.com/impg/njbUTyspmS4uw6tYZ2_8apIq4q5UpRe1orW5tQ/grVbY0xoK8E.jpg?size=640x640&quality=95&sign=8742a78348a45f2117e938c8261924fd&type=album",],
          "colors": [
            {
              "name": "Dark Gray",
              "hex": "#4a4848",
              "id": 1
            },
            {
              "name": "Red",
              "hex": "#ff0000",
              "id": 3
            }
          ],
          "price": 32.26,
          "pricealv": 40,
          "sku": "F23"
        },
      ]
    }
  },
}
</script>

<style scoped>

</style>
