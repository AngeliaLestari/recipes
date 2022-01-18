<template>
  <div>
    <div class="card hover:shadow-xl">
      <img
        :src='require(`@/assets/${cardPicture}`)'
        alt="stew"
        class="w-full h-32 sm:h-48 object-cover"
      />
      <!-- object cover- not distorted-->
      <div class="m-4">
        <span class="font-bold" :mainTitle="mainTitle">{{mainTitle}}</span>
        <span class="block tex-gray-500 text-sm" :description="description">{{description}}</span
        ><!--block push down to another level-->
      </div>
      <div class="badge">
        <span :badgeTitle='badgeTitle'
          ><img
            class="inline-block"
            :src='require(`@/assets/${cardBadge}`)'
            width="20px"
            height="20px"
          />{{badgeTitle}}</span
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'card',
  props: {
    mainTitle: {
      type: String
    },
    description: {
      type: String
    },
    cardPicture: {
      type: String
    },
    cardBadge: {
      type: String
    },
    badgeTitle: {
      type: String
    }
  }
}
</script>
<style></style>
