<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import { GradientButton, Input, Label } from 'flowbite-svelte';

	const handeLogin = () => {
		console.log('login');
	};
</script>

<div class="bg-gray-900 w-full h-screen py-10">
	<div class="flex items-center h-fit flex-col justify-around md:border px-4 md:mx-28 md:p-16 rounded-md 
	shadow-xl border-gray-700">
		<div class="flex items-center justify-center flex-row space-x-8">
			<img src="heart.png" alt="logo" class="w-14" />

			<div class="font-georgia py-8 md:text-4xl text-xl text-purple-600 text-center font-bold">
				Admin dashboard login
			</div>
		</div>
		<div class="w-full md:px-28">
			<form
				class="flex flex-col  justify-center space-y-8"
				on:submit|preventDefault={handeLogin}
			>
				<div>
					<Label for="email" class="text-white dark:focus:border-purple-500 mb-2
					dark:focus:ring-purple-500 focus:border-purple-500
					">Email</Label>
					<Input id="email" name="email" size="lg" placeholder="Email" />
				</div>

				<div>
					<Label for="password" class="text-white mb-2">Password</Label>
					<Input id="password" name="password" size="lg" placeholder="Password" />
				</div>

				<GradientButton type="submit" shadow color="purple">Login</GradientButton>
			</form>
		</div>
		<div style="height: 37px;" />
	</div>
</div>
