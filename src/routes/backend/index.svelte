<script context="module">
  export async function load({ session }) {
    const { user } = session;

    if (!user) {
      return {
        status: 302,
        redirect: "/backend/login",
      };
    }
  }
</script>

Welcome to hidden page: Backend Page !
