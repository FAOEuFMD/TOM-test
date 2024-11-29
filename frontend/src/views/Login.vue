<template>
  <div class="universal-container">
    <div class="w-full max-w-xl p-8 bg-white rounded-lg shadow-md">
      <form @submit.prevent="performLogin" class="space-y-4">
        <input
          v-model="email"
          type="email"
          :placeholder="$t('account.email')"
          required
          class="w-full px-3 py-2 bg-primary-50 border border-primary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 text-secondary-700"
        />
        <div class="relative">
          <input
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            :placeholder="$t('account.password')"
            required
            class="w-full px-3 py-2 bg-primary-50 border border-primary-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 text-secondary-700"
          />
          <button
            type="button"
            @click="togglePasswordVisibility"
            class="absolute inset-y-0 right-0 pr-3 flex items-center text-primary-500"
          >
            <EyeSlashIcon v-if="showPassword" class="h-5 w-5" />
            <EyeIcon v-else class="h-5 w-5" />
          </button>
        </div>
        <button
          type="submit"
          class="w-full py-2 px-4 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          {{ $t("account.login") }}
        </button>
      </form>
      <div class="mt-4 text-center space-y-2">
        <a href="/forgot-password" class="text-primary-600 hover:underline">{{
          $t("account.forgot_password")
        }}</a>
        <div>
          <a href="#" class="text-red-600 hover:underline">{{
            $t("account.create_account")
          }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useMainStore } from "../stores/main";
import { EyeIcon, EyeSlashIcon } from "@heroicons/vue/24/outline";
import { login } from "../services/authService";

const email = ref("");
const password = ref("");
const showPassword = ref(false);
const router = useRouter();
const store = useMainStore();

const performLogin = async () => {
  try {
    const response = await login(email.value, password.value);
    store.login(response.role);
    if (response.role === "admin") {
      router.push("/admin");
    } else if (response.role === "learner") {
      router.push("/learner");
    }
  } catch (error: any) {
    alert(error.message);
  }
};

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};
</script>
<style scoped></style>
