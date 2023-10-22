<script lang="ts">
  export let icon: string;
  export let skill: string;
  export let color: string;
</script>

<div
  class={`rounded flex flex-row justify-between space-x-2 p-1 items-center ${color} text-white text-xs`}
>
  <iconify-icon {icon} />

  <p>{skill}</p>
</div>
