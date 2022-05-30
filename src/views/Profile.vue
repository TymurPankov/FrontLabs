<template>
  <div>
    <div>
      <img :src="$auth.user.value.picture">
    </div>
    <h1></h1>
    <h2>Info:</h2>
    <table align="center">
      <tbody>
        <tr>
          <td>Username:</td>
          <td>{{ $auth.user.value.nickname }}</td>
        </tr>
        <tr>
          <td>Email:</td>
          <td>{{ $auth.user.value.email }}</td>
        </tr>
        <tr>
          <td>Verified:</td>
          <td v-if="$auth.user.value.email_verified"> Yes</td>
          <td v-else>No</td>
        </tr>
        <tr>
          <td>Last enter: </td>
          <td>{{ $auth.user.value.updated_at }}</td>
        </tr>
        <!--<pre>{{ JSON.stringify($auth.user.value, null, 2) }}</pre>-->
      </tbody>
    </table>
  </div>
</template>