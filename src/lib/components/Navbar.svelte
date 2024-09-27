<script lang="ts">
	import { AppBar, AppShell, LightSwitch } from '@skeletonlabs/skeleton';
	import { Menu, X } from 'lucide-svelte';
	import { slide } from 'svelte/transition';

	let isOpen = false;

	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/about', label: 'About' },
		{ href: '/sandbox', label: 'Sandbox' },
		{ href: '/test', label: 'TestArea' },
		{ href: 'https://github.com/jeeradate/jeeradate', label: 'SourceCode', target: '_blank' }
	];

	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl ">JK-Sandbox</strong>
			</svelte:fragment>
			<LightSwitch  />
			<svelte:fragment slot="trail">
				<div class="hidden md:flex space-x-4">
					{#each navItems as item}
						<a
							href={item.href}
							class="btn btn-sm variant-ghost-surface hover:bg-blue-300 hover:text-black"
							target={item.target}>{item.label}</a
						>
					{/each}
				</div>
				<button class="btn btn-sm md:hidden" on:click={toggleMenu}>
					{#if isOpen}
						<X size={24} />
					{:else}
						<Menu size={24} />
					{/if}
				</button>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	{#if isOpen}
		<div class="md:hidden" transition:slide={{ duration: 300 }}>
			<nav class="list-nav p-4">
				{#each navItems as item}
					<a
						href={item.href}
						class="btn btn-lg variant-ghost-surface w-full justify-start"
						on:click={toggleMenu}
					>
						{item.label}
					</a>
				{/each}
			</nav>
		</div>
	{/if}

	<!-- Your page content goes here -->
	<slot />
</AppShell>

<style lang="postcss">
	/* Add any custom styles here */
</style>
