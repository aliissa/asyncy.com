<template>
  <div class='container level-item'>
    <div>
      <img :src="image" :style="{ width: '142px', marginBottom: 0, objectFit: 'cover' }" :alt="null"/>
      <div :style="{
        marginTop: '1em',
        marginBottom: '1em',
      }">
        <div class="name">{{name}}</div>
        <p :style="{
          marginBottom: '0.6em',
          marginTop: '0.2em',
        }">{{role}}</p>
        <url-link v-if="twitterHandle" :to="`https://twitter.com/${twitterHandle}`">
          <div class="twitter-logo" :style="{
            width: '14px',
            height: '14px',
            fill: '#AFAFAF',
          }" v-html="twitterLogo"/>
        </url-link>
      </div>
    </div>
  </div>
</template>

<script>
import twitterLogo from '../assets/images/twitter_logo.svg'

export default {
  props: ['name', 'role', 'twitterHandle', 'image'],
  data() {
    return {
      twitterLogo,
    }
  },
}
</script>

<style scoped lang="styl">
.name
  font-size 1.2em

.container
  @media (max-width: 768px)
    text-align center

    .twitter-logo
      margin 0 auto
</style>
