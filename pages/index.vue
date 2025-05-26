<template>
  <div class="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
      <!-- Church Image -->
      <!-- Please place your church image as 'church_building.png' in the 'agapekirche/public/images/' directory -->
      <img src="/images/church_building.png" alt="柏林爱加华人基督教会 外观" class="w-full rounded-t-lg">

      <div class="p-6 md:p-8">
        <!-- Church Name -->
        <h1 class="text-3xl md:text-4xl font-bold text-center text-primary-dark mb-4">
          柏林爱加华人基督教会
        </h1>
        <p class="text-center text-gray-600 mb-10 text-lg">
          Berlin Agape Chinese Christian Church
        </p>

        <!-- Worship Information -->
        <div class="mb-8 p-6 bg-blue-50 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold text-primary-dark mb-4 flex items-center">
            <font-awesome-icon :icon="['fas', 'calendar-alt']" class="mr-3 text-primary fa-fw" />
            主日敬拜 (Sunday Worship)
          </h2>
          <div class="text-gray-700 text-lg space-y-2">
            <p class="flex items-center">
              <font-awesome-icon :icon="['fas', 'clock']" class="mr-2 text-primary w-5 h-5 fa-fw" />
              <span class="ml-1">时间：每周日 15:00 - 17:00</span>
            </p>
            <p class="text-sm text-gray-500 ml-8"> <!-- Indented English translation -->
              (Time: Every Sunday 3:00 PM - 5:00 PM)
            </p>
          </div>
        </div>

        <!-- Location Information -->
        <div class="mb-8 p-6 bg-green-50 rounded-lg shadow-md">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <font-awesome-icon :icon="['fas', 'map-marked-alt']" class="mr-3 text-green-600 fa-fw" />
            聚会地点 (Location)
          </h2>
          <div class="text-gray-700 text-lg space-y-3">
            <p class="flex items-start">
              <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="mr-2 mt-1 text-green-600 w-5 h-5 fa-fw flex-shrink-0" />
              <span class="ml-1">地址：Müllerstraße 14A, 13353 Berlin</span>
            </p>
            <p class="flex items-start">
              <font-awesome-icon :icon="['fas', 'train']" class="mr-2 mt-1 text-green-600 w-5 h-5 fa-fw flex-shrink-0" />
              <span class="ml-1">交通：U6 / S41 / S42 Wedding站斜对面</span>
            </p>
            <p class="text-sm text-gray-500 ml-8"> <!-- Indented English translation -->
              (Transport: Diagonally opposite Wedding U-Bahn/S-Bahn station)
            </p>
          </div>
        </div>

        <!-- Welcome Message -->
        <div class="mt-10 pt-6 border-t border-gray-200 text-center text-gray-500">
          <p class="text-lg">欢迎您的到来！</p>
          <p>We welcome you to join us!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Nuxt 3 auto-imports useHead, so explicit import is usually not needed.
// import { useHead } from '#imports'; 

useHead({
  title: '柏林爱加华人基督教会 - Berlin Agape Chinese Christian Church',
  meta: [
    { name: 'description', content: '柏林爱加华人基督教会主页，包含聚会时间与地点信息。Welcome to the Berlin Agape Chinese Christian Church homepage with information on worship times and location.' }
  ]
});

// Note for Font Awesome icons:
// This page uses the following Font Awesome icons:
// - ['fas', 'calendar-alt']
// - ['fas', 'clock']
// - ['fas', 'map-marked-alt']
// - ['fas', 'map-marker-alt']
// - ['fas', 'train']
// Please ensure these icons (or the entire 'fas' pack) are imported and registered
// in your 'agapekirche/plugins/fontawesome.js' file for them to display correctly.
// Example for fontawesome.js:
// import { library, config } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { faCalendarAlt, faClock, faMapMarkedAlt, faMapMarkerAlt, faTrain } from '@fortawesome/free-solid-svg-icons'
//
// config.autoAddCss = false // Disable automatic CSS addition by Font Awesome
// library.add(faCalendarAlt, faClock, faMapMarkedAlt, faMapMarkerAlt, faTrain)
//
// export default defineNuxtPlugin((nuxtApp) => {
//   nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
// })
</script>

<style scoped>
/* Tailwind utility classes are used primarily. Added fa-fw for fixed-width icons for better alignment. */
/* Custom colors defined in tailwind.config.js are used directly via Tailwind classes like text-primary */

/* Tailwind standard colors used: */
/* bg-gray-100 */
/* bg-white */
/* text-gray-600, text-gray-700, text-gray-500, text-gray-800 */
/* border-gray-200 */
/* bg-blue-50 (tailwind standard color e.g. #eff6ff) */
/* bg-green-50 (tailwind standard color e.g. #f0fdf4) */
/* text-green-600 (tailwind standard color e.g. #16a34a) */

/* Ensure icons are aligned well */
.fa-fw {
  text-align: center; /* Ensures icons are centered if using fa-fw concept */
}

.flex-shrink-0 {
  flex-shrink: 0; /* Prevents icons from shrinking on smaller screens or with long text */
}
</style>
